import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const CONTACT_EMAIL = "edgar.kretschmann@hotmail.com";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const siteUrl = String(data.get("siteUrl") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const wantsJson = request.headers.get("accept")?.includes("application/json");

  if (!name || !email || !message || !isValidEmail(email)) {
    const body = { ok: false, error: "Please fill in your name, a valid email, and a message." };
    return wantsJson
      ? new Response(JSON.stringify(body), { status: 400, headers: { "Content-Type": "application/json" } })
      : new Response(body.error, { status: 400 });
  }

  const smtpUser = import.meta.env.BREVO_SMTP_USER;
  const smtpPass = import.meta.env.BREVO_SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    const body = { ok: false, error: "Contact form isn't configured yet — email me directly instead." };
    return wantsJson
      ? new Response(JSON.stringify(body), { status: 503, headers: { "Content-Type": "application/json" } })
      : new Response(body.error, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"Edgar Kretschmann site" <${smtpUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, siteUrl && `Site Url: ${siteUrl}`, "", message].filter(Boolean).join("\n"),
    });
  } catch (error) {
    console.error("Contact form send failed", error);
    const body = { ok: false, error: "Message could not be sent — email me directly instead." };
    return wantsJson
      ? new Response(JSON.stringify(body), { status: 502, headers: { "Content-Type": "application/json" } })
      : new Response(body.error, { status: 502 });
  }

  if (wantsJson) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  }
  return new Response(null, { status: 303, headers: { Location: "/projects#touch" } });
};
