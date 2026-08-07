import type { APIRoute } from "astro";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { google } from "@ai-sdk/google";
import { diagnosticRequestSchema, diagnosticResultSchema, describeAnswers } from "../../lib/diagnostic";

export const prerender = false;

const MODEL_ID = import.meta.env.GEMINI_MODEL || "gemini-3-flash-preview";

// Best-effort per-instance limiter (Fluid Compute reuses instances across requests,
// but not across cold starts or multiple instances) — good enough to blunt casual abuse
// of the shared Gemini free-tier quota on a public, unauthenticated route.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || clientAddress || "unknown";

  if (isRateLimited(ip)) {
    return jsonError("Too many requests — try again in a few minutes.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const parsed = diagnosticRequestSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid request.", 400);
  }
  const answers = parsed.data;

  if (answers.website) {
    // honeypot tripped — pretend nothing happened
    return jsonError("Invalid request.", 400);
  }

  const languageName = answers.lang === "de" ? "German" : "English";

  try {
    const { output } = await generateText({
      model: google(MODEL_ID),
      output: Output.object({ schema: diagnosticResultSchema }),
      system: `You are the marketing diagnostic engine embedded on Edgar Kretschmann's website. Edgar builds AI-augmented marketing systems for small businesses and scores every client's funnel across three stages: Traffic Capture (are the right people finding them), Lead Capture (does their site or funnel turn visits into contactable leads), and Follow-Up Automation (do they have a system that nurtures and follows up automatically instead of manual chasing by hand).

A website visitor just answered three multiple-choice questions about their own business. Based only on those answers:
- Score them 0-100 on each of the three stages, using the bottleneck they named as the strongest signal.
- Name their single biggest gap as a punchy 6-10 word headline.
- List 2-3 concrete gaps that reference their actual industry and bottleneck — never generic marketing advice.
- Give one sentence naming the single highest-leverage next step.

Be direct, specific, and a little blunt, like a consultant giving a free 30-second read — not a chatbot. Write every output field in ${languageName}.`,
      prompt: describeAnswers(answers.lang, answers),
    });

    const overall = Math.round(
      (output.scores.trafficCapture + output.scores.leadCapture + output.scores.followUp) / 3,
    );

    return new Response(JSON.stringify({ ok: true, result: output, overall }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (NoObjectGeneratedError.isInstance(error)) {
      console.error("Diagnostic: model failed to produce valid output", error.cause);
    } else {
      console.error("Diagnostic generation failed", error);
    }
    return jsonError("The diagnostic couldn't run — email me directly instead.", 502);
  }
};
