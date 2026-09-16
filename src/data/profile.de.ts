/**
 * German copy for the /profile page. Mirrors the structure of profile.ts and
 * follows the original German wording of Edgar-Kretschmann-Profil_5.pdf, which
 * is the source document — the English side of profile.ts is the translation,
 * not the other way round.
 */
import type { Capability, ProfileFact, ProfileResult } from "./profile";

export const TAGLINE_DE = "Ich finde die Zielgruppe, auf die niemand bietet, und baue den Funnel, der sie erreicht.";

export const CONTACT_DE = {
  base: "München & Berlin · MEZ",
};

export const AT_A_GLANCE_DE: ProfileFact[] = [
  { label: "Verfügbarkeit", value: "Ab sofort" },
  { label: "Tagessatz", value: "Auf Anfrage" },
  { label: "Startzeitpunkt", value: "Keine Frist — sofortiger Einstieg" },
  { label: "Einsatzform", value: "Freelance — Projekt oder Retainer" },
  { label: "Standort", value: "München & Berlin · MEZ" },
  { label: "Arbeitsmodell", value: "Remote-first, Vor-Ort-Einsätze in München, Berlin und Augsburg möglich" },
  { label: "Sprachen", value: "Deutsch (Muttersprache), Englisch (verhandlungssicher)" },
  { label: "Branchen", value: "Cloud & IT-Services, Hospitality & Coliving, Healthcare-Recruiting, Bildung, Wellness" },
];

export const RESULTS_DE: ProfileResult[] = [
  {
    project: "NomaVillage",
    slug: "nomavillage",
    metric: "4,8",
    metricSuffix: "von 5",
    context: "Über 172 Gäste. Vom einzelnen Coliving-Haus zum Coworking- und Coliving-Standort in Lagos, Portugal.",
  },
  {
    project: "Innate Experiences",
    slug: "innate",
    metric: "100 %",
    context: "Auslastung aller verfügbaren Coliving-Plätze — Marketing, Qualifizierung und Abschluss in einer Hand.",
  },
  {
    project: "IcanSpeak",
    slug: "icanspeak",
    metric: "120",
    context: "Neue Teilnehmende in einem einzigen Halbjahr, B2B-Kunden über eine LinkedIn-Drip-Kampagne erschlossen.",
  },
  {
    project: "DeutschAcademy",
    slug: "deutschacademy",
    metric: "412+",
    context: "Lernende auf der Plattform, A1 bis C1, aufgebaut aus echtem Unterrichtsmaterial.",
  },
];

export const CAPABILITIES_DE: Capability[] = [
  {
    title: "Paid Acquisition",
    body: "Meta Ads, Google Ads, LinkedIn — Kampagnenaufbau, Targeting, Budget und Reporting.",
  },
  {
    title: "Funnel & Conversion",
    body: "Funnel-Diagnose, Landingpages, CRO, A/B-Tests und Conversion-Texte.",
  },
  {
    title: "Lifecycle-Automatisierung",
    body: "Drip- und Nurture-Strecken, E-Mail-Automation, CRM-Anbindung — Nachfassen, das von allein läuft.",
  },
  {
    title: "Zielgruppenrecherche",
    body: "Markt- und Segmentrecherche, um die unterversorgte Zielgruppe zu finden, bevor Budget in die naheliegende fließt.",
  },
  {
    title: "Umsetzung",
    body: "Handgebaute Funnel-Seiten statt Baukasten-Templates — sie laden schneller und transportieren mehr pro Seite. Dazu WordPress, Integrationen und interne Tools.",
  },
  {
    title: "Messung",
    body: "PostHog für A/B-Tests und Retargeting. Ohne Third-Party-Cookies läuft das Tracking serverseitig: Conversions-API aus First-Party-Daten, kontextuelles Targeting statt Verhaltensprofilen.",
  },
  {
    title: "Marke & Content",
    body: "Positionierung, Markenaufbau, Text und Content-Produktion — KI-gestützt, wo es die Umsetzung beschleunigt.",
  },
  {
    title: "Build vs. Buy",
    body: "Teure SaaS ersetzen oder wegautomatisieren, wo ein selbst gebautes Tool dieselbe Arbeit macht. Niedrigere laufende Kosten, Daten bleiben First-Party.",
  },
];
