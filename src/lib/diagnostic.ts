import { z } from "zod";

export const INDUSTRY_VALUES = [
  "coliving_hospitality",
  "healthcare_recruitment",
  "wellness_coaching",
  "professional_services",
  "other",
] as const;

export const LEAD_SOURCE_VALUES = [
  "referrals",
  "organic_social",
  "paid_ads",
  "cold_outreach",
  "none",
] as const;

export const BOTTLENECK_VALUES = [
  "not_enough_leads",
  "leads_go_cold",
  "no_followup",
  "site_doesnt_convert",
  "manual_admin",
] as const;

export const diagnosticRequestSchema = z.object({
  industry: z.enum(INDUSTRY_VALUES),
  leadSource: z.enum(LEAD_SOURCE_VALUES),
  bottleneck: z.enum(BOTTLENECK_VALUES),
  lang: z.enum(["en", "de"]),
  // honeypot — real visitors never fill this, bots filling every field usually do
  website: z.string().max(0).optional().default(""),
});

export type DiagnosticRequest = z.infer<typeof diagnosticRequestSchema>;

export const diagnosticResultSchema = z.object({
  verdict: z.string().describe("A punchy 6-10 word headline naming their single biggest gap."),
  gaps: z
    .array(z.string())
    .min(2)
    .max(3)
    .describe("2-3 concrete, specific gaps tied directly to the answers given — no generic advice."),
  recommendation: z.string().describe("One sentence: the single highest-leverage next step."),
  scores: z.object({
    trafficCapture: z.number().min(0).max(100).describe("How well the right people can currently find them."),
    leadCapture: z.number().min(0).max(100).describe("How well visits currently convert into contactable leads."),
    followUp: z.number().min(0).max(100).describe("How automated their nurture/follow-up currently is."),
  }),
});

export type DiagnosticResult = z.infer<typeof diagnosticResultSchema>;

interface CopyEntry {
  eyebrow: string;
  heading: string;
  sub: string;
  questions: {
    industry: { label: string; options: Record<(typeof INDUSTRY_VALUES)[number], string> };
    leadSource: { label: string; options: Record<(typeof LEAD_SOURCE_VALUES)[number], string> };
    bottleneck: { label: string; options: Record<(typeof BOTTLENECK_VALUES)[number], string> };
  };
  submit: string;
  loading: string;
  error: string;
  scoreLabels: { trafficCapture: string; leadCapture: string; followUp: string };
  gapsHeading: string;
  recommendationHeading: string;
  cta: string;
  disclaimer: string;
}

export const diagnosticCopy: Record<"en" | "de", CopyEntry> = {
  en: {
    eyebrow: "Free 30-second tool",
    heading: "Where is your funnel actually leaking?",
    sub: "Answer three questions and get a live read on your traffic capture, lead capture, and follow-up automation — the same framework I use with every client.",
    questions: {
      industry: {
        label: "What do you run?",
        options: {
          coliving_hospitality: "Coliving / hospitality",
          healthcare_recruitment: "Healthcare / recruitment",
          wellness_coaching: "Wellness / coaching",
          professional_services: "Professional services",
          other: "Other",
        },
      },
      leadSource: {
        label: "Where do most leads come from today?",
        options: {
          referrals: "Referrals / word of mouth",
          organic_social: "Organic social media",
          paid_ads: "Paid ads",
          cold_outreach: "Cold outreach",
          none: "None yet — just starting",
        },
      },
      bottleneck: {
        label: "What's the biggest bottleneck right now?",
        options: {
          not_enough_leads: "Not enough leads coming in",
          leads_go_cold: "Leads go cold before they book",
          no_followup: "No automatic follow-up system",
          site_doesnt_convert: "Website doesn't convert visitors",
          manual_admin: "Too much manual admin",
        },
      },
    },
    submit: "Run diagnostic",
    loading: "Reading your answers…",
    error: "The diagnostic couldn't run — email me directly instead.",
    scoreLabels: {
      trafficCapture: "Traffic capture",
      leadCapture: "Lead capture",
      followUp: "Follow-up automation",
    },
    gapsHeading: "What's leaking",
    recommendationHeading: "Highest-leverage next step",
    cta: "Book a call about this →",
    disclaimer: "Generated live by AI from your answers — no site data is collected or stored.",
  },
  de: {
    eyebrow: "Kostenloses 30-Sekunden-Tool",
    heading: "Wo verliert dein Funnel wirklich Leads?",
    sub: "Drei Fragen, dann bekommst du eine Live-Einschätzung zu Reichweite, Lead-Erfassung und automatisierter Nachfassung — das Framework, das ich bei jedem Kunden anwende.",
    questions: {
      industry: {
        label: "Was betreibst du?",
        options: {
          coliving_hospitality: "Coliving / Hospitality",
          healthcare_recruitment: "Pflege / Recruiting",
          wellness_coaching: "Wellness / Coaching",
          professional_services: "Dienstleistungen",
          other: "Sonstiges",
        },
      },
      leadSource: {
        label: "Woher kommen die meisten Leads heute?",
        options: {
          referrals: "Empfehlungen / Mundpropaganda",
          organic_social: "Organische Social Media",
          paid_ads: "Bezahlte Anzeigen",
          cold_outreach: "Kaltakquise",
          none: "Noch keine — gerade erst gestartet",
        },
      },
      bottleneck: {
        label: "Was ist gerade der größte Engpass?",
        options: {
          not_enough_leads: "Zu wenig Leads kommen rein",
          leads_go_cold: "Leads werden kalt, bevor sie buchen",
          no_followup: "Kein automatisches Follow-up-System",
          site_doesnt_convert: "Website konvertiert Besucher nicht",
          manual_admin: "Zu viel manueller Aufwand",
        },
      },
    },
    submit: "Diagnose starten",
    loading: "Antworten werden ausgewertet…",
    error: "Die Diagnose konnte nicht laufen — schreib mir stattdessen direkt eine E-Mail.",
    scoreLabels: {
      trafficCapture: "Reichweite",
      leadCapture: "Lead-Erfassung",
      followUp: "Automatisierte Nachfassung",
    },
    gapsHeading: "Wo es leckt",
    recommendationHeading: "Wirksamster nächster Schritt",
    cta: "Anruf dazu buchen →",
    disclaimer: "Live von KI aus deinen Antworten generiert — es werden keine Website-Daten erfasst oder gespeichert.",
  },
};

export function describeAnswers(lang: "en" | "de", answers: DiagnosticRequest) {
  const c = diagnosticCopy[lang];
  return [
    `${c.questions.industry.label} ${c.questions.industry.options[answers.industry]}`,
    `${c.questions.leadSource.label} ${c.questions.leadSource.options[answers.leadSource]}`,
    `${c.questions.bottleneck.label} ${c.questions.bottleneck.options[answers.bottleneck]}`,
  ].join("\n");
}
