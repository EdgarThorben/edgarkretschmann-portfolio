/**
 * German translations for the /bio "Workbench" toolkit (src/data/toolkit.ts).
 * Tool names and company names stay untranslated (brand names); bin labels,
 * blurbs, and usage notes are translated. Keyed to line up 1:1 with the
 * English source — see src/lib/i18n.ts for how it's merged in.
 */

export const binLabelsDe: Record<string, { label: string; blurb: string }> = {
  webcode: {
    label: "Web & Code",
    blurb: "Über ein Jahrzehnt freiberuflicher Arbeit: Seiten, Funnels und Web-Integrationen von Grund auf gebaut.",
  },
  design: {
    label: "Design & Visuelles",
    blurb: "Branding, Layout und Bildbearbeitung für jede Kampagne, jeden Coliving-Space und jeden Kurs-Launch.",
  },
  growth: {
    label: "Growth & Paid Media",
    blurb: "SEO- und Paid-Kampagnen mit echten Zahlen — CTR 1%→3%, Retention 15%→35%.",
  },
  crm: {
    label: "CRM & Marketing-SaaS",
    blurb: "Der Stack hinter jedem Lead-Funnel: erfassen, automatisieren, pflegen, abschließen.",
  },
  pm: {
    label: "Projekt- & Agile-Systeme",
    blurb: "Scrum seit 2021 — von einem philippinischen Lead-Gen-Startup bis zum Enterprise-Rollout für 4.000 Mitarbeitende.",
  },
  ai: {
    label: "KI & E-Learning-Plattformen",
    blurb: "Ein Jahrzehnt Remote-Klassenzimmer auf vier Kontinenten, heute kombiniert mit KI-Tools.",
  },
};

/** Item usage notes, keyed by the English tool name, in the same order as `usedIn` in toolkit.ts. */
export const itemNotesDe: Record<string, { contextLabel?: string; notes: string[] }[]> = {
  HTML: [{ notes: ["Das Markup für die Anmeldeseite und Kursseiten von Hand gebaut."] }],
  CSS: [{ notes: ["Die Kurs- und Preisseiten der Anmeldeseite gestaltet."] }],
  JavaScript: [
    { notes: ["Die Scoring-Engine für die vier Assessments und das Profil-UI in Next.js gebaut."] },
    { notes: ["Die typisierten Datensätze und die Versionsverlauf-UI der CMDB in Astro gebaut."] },
  ],
  PHP: [{ notes: ["Das WordPress-Backend für die Website der Manila-Schule templated."] }],
  WordPress: [{ notes: ["Die Anmeldeseite und den Funnel von Grund auf gebaut."] }],
  Elementor: [{ notes: ["Kurs- und Preisseiten auf dem WordPress-Aufbau layoutet."] }],
  "D3.js": [{ notes: ["Den interaktiven Graphen gebaut, der die Ergebnisse der Persönlichkeitsmodelle verknüpft."] }],
  "DOM scripting": [
    { notes: ["Den Tagesablauf und den Bewerbungsflow der Seite von Hand gebaut."] },
    { notes: ["Den Beziehungsgraphen inklusive Zyklenerkennung und Versionsvergleich gebaut."] },
  ],

  "Adobe Photoshop": [
    { notes: ["Retreat-Fotos für Seite und Kampagnen-Creatives retuschiert."] },
    { notes: ["Kampagnen-Creatives für Google Ads und Instagram vorbereitet."] },
  ],
  "Adobe Lightroom": [
    { notes: ["Retreat-Fotografie für jeden Galerie-Batch farblich abgestimmt."] },
    { notes: ["Gäste- und Property-Fotos für den Kampagneneinsatz bearbeitet."] },
  ],
  "Adobe Illustrator": [
    { notes: ["Das Iron-/Zen-/Brotherhood-Markenzeichen und Visual System gebaut."] },
    { notes: ["Die Markenidentität von Grund auf entwickelt: Name, Zeichen, visuelle Richtung."] },
  ],
  Canva: [
    { notes: ["Kampagnen-Creatives für die Anmeldung der Manila-Schule produziert."] },
    { notes: ["Social- und Kampagnen-Creatives rund um die neue Markenidentität produziert."] },
  ],
  Figma: [
    { notes: ["Den Assessment-Flow und die Profil-Screens designt."] },
    { notes: ["Die Ansichten für Collections, Items und Beziehungsgraph designt."] },
  ],
  Miro: [
    {
      contextLabel: "Freiberufliche Projektplanung",
      notes: ["Funnel-Abläufe und Build-Roadmaps geplant, bevor eine Zeile Code geschrieben wurde — bei jedem Projekt an dieser Wand."],
    },
  ],

  "SEO / SEM": [{ notes: ["SEM-Kampagnen für Nomaden gesteuert, die Lagos gegen Lissabon abwägten."] }],
  "Google Ads": [
    { notes: ["Google Ads gesteuert, um IcanSpeaks erste Studierenden ohne Empfehlungsbasis zu finden."] },
    { notes: ["Suchverkehr mit Nomaden-Intent in den Nomavillage-Funnel geleitet."] },
    { notes: ["Die Reichweite der neuen Narangyoga-Identität über die Suche ausgebaut."] },
  ],
  "Meta Ads": [
    { notes: ["Digitale Nomaden nach Reise-/Arbeitsabsicht statt nach generischen Coliving-Keywords angesprochen."] },
    { notes: ["Deutsche Gesundheitseinrichtungen als Vermittlungspartner gewonnen."] },
  ],
  "Social Media Marketing": [
    { notes: ["Die Community aufgebaut, die Innate durchgehend ausgebucht hielt."] },
    { notes: ["Instagram mit Paid Search verzahnt, sodass sich die Kanäle gegenseitig verstärkten."] },
    { notes: ["Die Reichweite rund um die neue Narangyoga-Identität ausgebaut."] },
  ],
  "Story Branding": [{ notes: ["Die Iron-/Zen-/Brotherhood-Erzählung entwickelt, auf der die ganze Marke aufbaut."] }],
  "Funnel Building": [
    { notes: ["Den Funnel end-to-end verantwortet: Landingpages, Lead-Scoring, Nurture-Sequenzen."] },
    { notes: ["Einen automatisierten Lead-Funnel gebaut, der Google Ads und Instagram mit ActiveCampaign verband."] },
  ],
  "Persona Research": [
    { notes: ["Digitale Nomaden nach Reise-/Arbeitsabsicht statt nach generischen Keywords profiliert."] },
    { notes: ["Nomavillage gegen einen DIY-Aufbau in Lissabon für dieselbe Zielgruppe positioniert."] },
  ],

  ActiveCampaign: [
    { notes: ["Nurture-Sequenzen für über Typeform qualifizierte Leads gesteuert."] },
    { notes: ["Leads aus Google Ads und Instagram über Zapier gepflegt."] },
  ],
  HubSpot: [{ notes: ["Pflegekraft-Leads ohne manuelles Nachfassen qualifiziert und weitergeleitet."] }],
  Brevo: [
    {
      contextLabel: "Freiberufliche CRM- & E-Mail-Arbeit",
      notes: ["E-Mail-Nurture-Sequenzen für freiberufliche Marketing-Kunden außerhalb der Portfolio-Case-Studies gesteuert."],
    },
  ],
  Zapier: [
    { notes: ["Den selbstgebauten Automatisierungs-Stack gebaut, der Leads qualifizierte und weiterleitete."] },
    { notes: ["Google Ads und Instagram automatisch mit ActiveCampaign verbunden."] },
  ],
  Typeform: [{ notes: ["Leads qualifiziert, bevor sie die ActiveCampaign-Nurture-Sequenz erreichten."] }],
  "LinkedIn Sales Navigator": [{ notes: ["IcanSpeaks erste zahlende Studierende über direkte Ansprache gefunden."] }],
  LinkedHelper: [{ notes: ["LinkedIn-Ansprache automatisiert, um die Neukundengewinnung zu skalieren."] }],
  Clearbyte: [
    {
      contextLabel: "Freiberufliche Lead-Gen-Arbeit",
      notes: ["Outbound-Prospecting-Listen für freiberufliche Marketing-Kunden angereichert."],
    },
  ],

  ClickUp: [
    { notes: ["Den Funnel-Aufbau und das Lead-Scoring als getrackte Sprints geführt."] },
    { notes: ["Die Kampagnen- und Automatisierungs-Roadmap end-to-end getrackt."] },
  ],
  Jira: [
    { contextLabel: "Unternehmens-IT-Auftrag", notes: ["Das Migrations-Backlog für einen Enterprise-Rollout mit 4.000 Mitarbeitenden getrackt."] },
  ],
  Roadmunk: [{ contextLabel: "Unternehmens-IT-Auftrag", notes: ["Die Roadmap für die Migration von 700 Fileservern in die Cloud sequenziert."] }],
  Scrum: [
    {
      contextLabel: "Seit 2021 im Einsatz",
      notes: ["Von einem philippinischen Lead-Gen-Startup bis zum Unternehmens-IT-Rollout."],
    },
  ],
  Kanban: [
    { notes: ["Leads sichtbar durch die Qualifizierungsstufen bewegt, end-to-end."] },
    { notes: ["Laufende Kampagnenarbeit über alle Kanäle hinweg getrackt."] },
  ],
  "MoSCoW Method": [{ contextLabel: "Unternehmens-IT-Auftrag", notes: ["Den Scope der Cloud-Migration von 700 Servern priorisiert."] }],
  "User Stories": [{ contextLabel: "Unternehmens-IT-Auftrag", notes: ["Migrationsanforderungen aus Sicht der betroffenen Teams formuliert."] }],
  "Release Burn-up Charts": [{ contextLabel: "Unternehmens-IT-Auftrag", notes: ["Den Fortschritt über den Rollout mit 4.000 Mitarbeitenden getrackt."] }],

  ChatGPT: [
    { notes: ["KI-Coding-Tools genutzt, um den Prüfungsvorbereitungs-Hub allein statt mit einem Dev-Team zu bauen."] },
    { notes: ["Das komplette Assessment-Produkt allein mit KI-gestütztem Coding gebaut."] },
    { notes: ["Die CMDB von Grund auf mit KI-gestütztem Coding gebaut, iteriert nach echten Kundenanforderungen."] },
  ],
  Midjourney: [
    {
      contextLabel: "Freiberufliche Kreativarbeit",
      notes: ["Kampagnen-Konzeptbilder für freiberufliche Marketing-Kunden erstellt."],
    },
  ],
  Zoom: [
    {
      contextLabel: "Selbstständiger Deutschlehrer, 2016–17",
      notes: ["Deutsch und Wirtschaftssprache remote für Kunden von Umzugsagenturen unterrichtet (Eurasia Institute, Alpadia, Startcon)."],
    },
  ],
  Moodle: [{ notes: ["Kursinhalte für die Online-Deutschschule bereitgestellt."] }],
  "Dropbox Paper": [
    {
      contextLabel: "Freiberufliche Kurs- & Projektarbeit",
      notes: ["Kursmaterialien und Projektunterlagen mit Kunden und Studierenden geteilt."],
    },
  ],
  "Google Docs": [
    {
      contextLabel: "Freiberufliche Kurs- & Projektarbeit",
      notes: ["Kursinhalte, Briefings und Kampagnentexte für jedes Projekt an dieser Wand entworfen."],
    },
  ],
  "Blink Learning": [
    {
      contextLabel: "Unterricht an Privatschulen im Ausland",
      notes: ["Aufgaben für Englisch- und Deutschkurse in China und Korea gestellt und bewertet."],
    },
  ],
  "Fidelio LMS": [
    {
      contextLabel: "Unterricht an Privatschulen im Ausland",
      notes: ["Kursinhalte für erwachsene Englisch- und Deutschlernende im Ausland verwaltet."],
    },
  ],
  "Smartboard Systems": [
    {
      contextLabel: "Walles Language School, Qingdao & Times Academy, Seoul",
      notes: ["Erwachsene und Kinder mit interaktiven Smartboards unterrichtet, 2015–16."],
    },
  ],
};
