import type { DiagnosticRequest, DiagnosticResult } from "./diagnostic";

type Scores = DiagnosticResult["scores"];
type ScoreKey = keyof Scores;
type Lang = DiagnosticRequest["lang"];
type Industry = DiagnosticRequest["industry"];
type LeadSource = DiagnosticRequest["leadSource"];
type Bottleneck = DiagnosticRequest["bottleneck"];

const SCORE_KEYS: ScoreKey[] = ["trafficCapture", "leadCapture", "followUp"];

// The bottleneck a visitor names is the strongest signal: its own axis scores
// lowest, the other two stay mid-range since a self-reported bottleneck implies
// they're comparatively less broken.
const BOTTLENECK_BASE_SCORES: Record<Bottleneck, Scores> = {
  not_enough_leads: { trafficCapture: 25, leadCapture: 55, followUp: 55 },
  leads_go_cold: { trafficCapture: 60, leadCapture: 40, followUp: 35 },
  no_followup: { trafficCapture: 55, leadCapture: 50, followUp: 15 },
  site_doesnt_convert: { trafficCapture: 55, leadCapture: 20, followUp: 45 },
  manual_admin: { trafficCapture: 60, leadCapture: 55, followUp: 30 },
};

// Lead source is a proxy for how scalable/reliable traffic capture already is.
const LEAD_SOURCE_SCORE_MODIFIER: Record<LeadSource, Partial<Scores>> = {
  referrals: { trafficCapture: -10 },
  organic_social: { trafficCapture: -5 },
  paid_ads: { trafficCapture: 15 },
  cold_outreach: {},
  none: { trafficCapture: -25, leadCapture: -15, followUp: -10 },
};

// Small industry-specific friction adjustments — flavor more than signal.
const INDUSTRY_SCORE_MODIFIER: Record<Industry, Partial<Scores>> = {
  coliving_hospitality: {},
  healthcare_recruitment: { followUp: -5 }, // licensing/compliance paperwork slows nurture
  wellness_coaching: {},
  professional_services: { trafficCapture: -5 }, // typically referral/relationship-driven
  other: {},
};

function clampScore(value: number): number {
  return Math.max(8, Math.min(92, Math.round(value)));
}

function computeScores(answers: DiagnosticRequest): Scores {
  const base = BOTTLENECK_BASE_SCORES[answers.bottleneck];
  const leadMod = LEAD_SOURCE_SCORE_MODIFIER[answers.leadSource];
  const industryMod = INDUSTRY_SCORE_MODIFIER[answers.industry];
  const scores = {} as Scores;
  for (const key of SCORE_KEYS) {
    scores[key] = clampScore(base[key] + (leadMod[key] ?? 0) + (industryMod[key] ?? 0));
  }
  return scores;
}

const INDUSTRY_NOUN: Record<Lang, Record<Industry, string>> = {
  en: {
    coliving_hospitality: "coliving",
    healthcare_recruitment: "healthcare recruitment",
    wellness_coaching: "wellness",
    professional_services: "professional services",
    other: "business",
  },
  de: {
    coliving_hospitality: "Coliving",
    healthcare_recruitment: "Pflege-Recruiting",
    wellness_coaching: "Wellness",
    professional_services: "Dienstleistungs",
    other: "Business",
  },
};

const LEAD_SOURCE_GAP: Record<Lang, Record<LeadSource, string>> = {
  en: {
    referrals:
      "Referrals are working, but that's a ceiling, not a system — growth depends on other people remembering to mention you.",
    organic_social:
      "Organic social is bringing some attention, but it's inconsistent by nature — one algorithm change away from drying up.",
    paid_ads:
      "Paid ads are actively running, so a traffic engine already exists — the question is what happens to a lead the second it lands.",
    cold_outreach:
      "Cold outreach is generating leads, but it's the most labor-intensive channel there is — every lead costs direct time, not just budget.",
    none: "There's no real lead channel running yet — nothing else here matters until traffic exists to feed it.",
  },
  de: {
    referrals:
      "Empfehlungen funktionieren, aber das ist eine Obergrenze, kein System — dein Wachstum hängt davon ab, ob andere dich zufällig erwähnen.",
    organic_social:
      "Organische Social Media bringt etwas Aufmerksamkeit, ist aber von Natur aus unbeständig — ein Algorithmus-Update, und der Kanal versiegt.",
    paid_ads:
      "Bezahlte Anzeigen laufen aktiv, ein Traffic-Motor existiert also bereits — die Frage ist, was mit einem Lead passiert, sobald er landet.",
    cold_outreach:
      "Kaltakquise bringt Leads, ist aber der arbeitsintensivste Kanal überhaupt — jeder Lead kostet direkte Zeit, nicht nur Budget.",
    none: "Es läuft noch kein echter Lead-Kanal — nichts hier zählt, solange kein Traffic da ist, der ihn füttert.",
  },
};

interface BottleneckCopy {
  verdict: string;
  gapA: (industryNoun: string) => string;
  gapB: (industryNoun: string) => string;
  recommendation: (industryNoun: string) => string;
}

const BOTTLENECK_COPY: Record<Lang, Record<Bottleneck, BottleneckCopy>> = {
  en: {
    not_enough_leads: {
      verdict: "Your funnel isn't leaking — it's not filling.",
      gapA: () =>
        "Traffic capture is the actual constraint: every later stage is starved of volume it can't make up for.",
      gapB: (i) =>
        `Fixing lead capture or follow-up first won't matter much while too few ${i} visitors reach them in the first place.`,
      recommendation: (i) =>
        `Before touching lead capture or follow-up, build one reliable, repeatable channel bringing new ${i} traffic in every week.`,
    },
    leads_go_cold: {
      verdict: "You're capturing interest, then losing it in the gap.",
      gapA: (i) =>
        `There's a delay between someone showing interest and someone actually reaching out — that delay is where ${i} leads go cold.`,
      gapB: () => `Without a same-day touch, even warm leads default to "I'll get to it later" — and never do.`,
      recommendation: () =>
        "Build one automated first-touch (email or text) that fires within minutes of a lead coming in, before anything else.",
    },
    no_followup: {
      verdict: "Nothing is chasing leads after the first touch.",
      gapA: () => "Every lead that doesn't convert immediately is left to remember you entirely on their own.",
      gapB: (i) =>
        `${i} decisions rarely happen on the first visit — without follow-up, you're relying completely on memory.`,
      recommendation: () =>
        "Set up one automated follow-up sequence (3–5 touches over two weeks) before spending another dollar on traffic.",
    },
    site_doesnt_convert: {
      verdict: "People show up and leave without a trace.",
      gapA: () => "There's no clear, low-friction way for a visitor to actually become a contactable lead.",
      gapB: (i) => `If it takes more than one click to leave contact info, most ${i} visitors simply won't.`,
      recommendation: () =>
        "Fix the page before the funnel: one clear offer, one form, one call to action — then re-measure.",
    },
    manual_admin: {
      verdict: "You're running the follow-up system by hand.",
      gapA: () =>
        "Traffic and lead capture are both healthier than this stage — the bottleneck is your own time, not your marketing.",
      gapB: () => "Every manual step — tagging, routing, reminders — is a place a lead can quietly fall through.",
      recommendation: () =>
        "Automate the repetitive 80%: tagging, routing, reminders — so your time goes only to leads that actually need a human.",
    },
  },
  de: {
    not_enough_leads: {
      verdict: "Dein Funnel leckt nicht — er füllt sich nicht.",
      gapA: () => "Reichweite ist der eigentliche Engpass: Jede spätere Stufe bekommt zu wenig Volumen, um das auszugleichen.",
      gapB: (i) =>
        `Lead-Erfassung oder Follow-up zuerst zu reparieren bringt wenig, solange zu wenige ${i}-Besucher überhaupt dort ankommen.`,
      recommendation: (i) =>
        `Bevor du Lead-Erfassung oder Follow-up anfasst: Baue einen verlässlichen, wiederholbaren Kanal, der jede Woche neuen ${i}-Traffic bringt.`,
    },
    leads_go_cold: {
      verdict: "Du weckst Interesse — und verlierst es dann in der Lücke.",
      gapA: (i) =>
        `Zwischen Interesse zeigen und tatsächlich kontaktiert werden liegt eine Verzögerung — genau da werden ${i}-Leads kalt.`,
      gapB: () => `Ohne Kontakt am selben Tag denken selbst warme Leads „mach ich später" — und tun es nie.`,
      recommendation: () =>
        "Baue einen automatisierten Erstkontakt (E-Mail oder SMS), der innerhalb von Minuten nach Eingang eines Leads auslöst — bevor du irgendetwas anderes anfasst.",
    },
    no_followup: {
      verdict: "Nichts läuft Leads nach dem ersten Kontakt hinterher.",
      gapA: () => "Jeder Lead, der nicht sofort konvertiert, muss sich komplett allein an dich erinnern.",
      gapB: (i) =>
        `${i}-Entscheidungen fallen selten beim ersten Besuch — ohne Follow-up verlässt du dich vollständig auf Erinnerung.`,
      recommendation: () =>
        "Richte eine einfache automatisierte Follow-up-Sequenz ein (3–5 Kontakte über zwei Wochen), bevor du noch einen Euro in Traffic steckst.",
    },
    site_doesnt_convert: {
      verdict: "Besucher kommen — und gehen spurlos wieder.",
      gapA: () => "Es gibt keinen klaren, reibungsarmen Weg für Besucher, tatsächlich zu einem kontaktierbaren Lead zu werden.",
      gapB: (i) => `Wenn es mehr als einen Klick braucht, um Kontaktdaten zu hinterlassen, tun die meisten ${i}-Besucher es einfach nicht.`,
      recommendation: () =>
        "Repariere die Seite vor dem Funnel: ein klares Angebot, ein Formular, ein Call-to-Action — dann neu messen.",
    },
    manual_admin: {
      verdict: "Du fährst das Follow-up-System von Hand.",
      gapA: () =>
        "Traffic und Lead-Erfassung sind hier beide gesünder als diese Stufe — der Engpass ist deine eigene Zeit, nicht dein Marketing.",
      gapB: () => "Jeder manuelle Schritt — Taggen, Verteilen, Erinnern — ist eine Stelle, an der ein Lead unbemerkt durchrutschen kann.",
      recommendation: () =>
        "Automatisiere die sich wiederholenden 80 %: Taggen, Verteilen, Erinnern — damit deine Zeit nur noch den Leads gilt, die wirklich einen Menschen brauchen.",
    },
  },
};

/** Deterministic rules-engine replacement for the old LLM call — same output shape, computed instantly and locally. */
export function runDiagnostic(answers: DiagnosticRequest): DiagnosticResult {
  const industryNoun = INDUSTRY_NOUN[answers.lang][answers.industry];
  const bc = BOTTLENECK_COPY[answers.lang][answers.bottleneck];

  return {
    verdict: bc.verdict,
    gaps: [LEAD_SOURCE_GAP[answers.lang][answers.leadSource], bc.gapA(industryNoun), bc.gapB(industryNoun)],
    recommendation: bc.recommendation(industryNoun),
    scores: computeScores(answers),
  };
}

export function overallScore(scores: Scores): number {
  return Math.round((scores.trafficCapture + scores.leadCapture + scores.followUp) / 3);
}
