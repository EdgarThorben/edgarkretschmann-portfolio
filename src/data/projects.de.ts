/**
 * German translations of the translatable fields on `projects` (src/data/projects.ts).
 * Keyed by slug. Non-text fields (images, tech, skill values, url, bioPeriod, status,
 * hidden, followUpSlug) are shared across locales — see src/lib/i18n.ts for the merge.
 */

export interface ProjectTranslation {
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  achievements: string[];
  bioRole: string;
  bioDescription: string;
}

/** English skill label -> German. Applied generically so each project doesn't repeat it. */
export const skillLabelsDe: Record<string, string> = {
  "Landing Pages": "Landingpages",
  Automation: "Automatisierung",
  "Project Mgmt": "Projektmanagement",
  Building: "Aufbauarbeit",
  Campaigning: "Kampagnen",
  Hosting: "Gastgeberrolle",
  Selling: "Verkauf",
};

export const projectTranslations: Record<string, ProjectTranslation> = {
  innate: {
    title: "Co-Living neu gedacht",
    summary:
      "Ortsunabhängiges Arbeiten wird für immer mehr Menschen zum Normalfall. Bei Innate habe ich unvergessliche Momente in Communities geschaffen.",
    challenge:
      "Ein Coliving-Haus kann komplett ausgebucht sein und trotzdem leblos wirken. Buchungen allein schaffen noch keine Community, die Gäste zur Rückkehr oder Weiterempfehlung bewegt. Innate brauchte einen Weg, aus Remote-Workern, die sich vorher nie begegnet waren, eine Gruppe zu machen, die wirklich füreinander da ist, nicht nur ein geteiltes Zimmer.",
    approach: [
      "Community-Kalender und Kontaktpunkte mit den Mitgliedern an jedem Standort betreut, nicht nur den Buchungsfunnel",
      "Standortspezifische Unbounce-Landingpages gebaut, die über Typeform qualifizierte Leads in ActiveCampaign-Nurture-Sequenzen einspeisten",
      "Meta Ads gesteuert, die digitale Nomaden nach Reise-/Arbeitsabsicht statt nach generischen Coliving-Keywords ansprachen",
    ],
    achievements: ["Immer ausgebucht", "Exzellente Bewertungen", "Hohe Kundenbindung"],
    bioRole: "Marketing- & Community-Manager",
    bioDescription:
      "Als Community-Manager & Digital-Marketing-Experte bei Innate habe ich digitale Nomaden mit Coliving-Spaces weltweit vernetzt, eine lebendige Community aufgebaut und Wachstum durch gezielte digitale Strategien vorangetrieben.",
  },
  pflegeplace: {
    title: "Lead-Funnels für Pflegekräfte",
    summary:
      "Gefragte Fachkräfte online zu finden ist in einem umkämpften Markt keine leichte Aufgabe. Mit Pflegeplace habe ich einen Funnel aufgebaut, um Pflegekräfte für Deutschland zu rekrutieren.",
    challenge:
      "Qualifizierte Pflegekräfte sind überall knapp, und wer offen für einen Umzug ist, bekommt längst Angebote von Agenturen mit größeren Budgets. Generische Stellenanzeigen erreichen diese Zielgruppe nicht. Pflegeplace musste international ausgebildete Pflegekräfte finden und überzeugen, bevor es die Konkurrenz tat, ganz ohne eigenes Recruiting-Team.",
    approach: [
      "Einen selbst gebauten Automatisierungs-Stack (Zapier, HubSpot, Mailchimp) aufgesetzt, der Leads ohne manuelle Nachverfolgung qualifizierte und weiterleitete",
      "LinkedIn-Ads-Kampagnen gezielt auf Pflegekräfte ausgerichtet, die einen Umzug nach Deutschland in Erwägung zogen",
      "Den gesamten Funnel verantwortet: Landingpages, Lead-Scoring und Nurture-Sequenzen",
    ],
    achievements: [
      "Automatisierten Lead-Funnel vollständig aufgebaut",
      "Pflegekräfte erfolgreich für Deutschland rekrutiert",
      "Cost-per-Lead durch gezieltes Targeting gesenkt",
    ],
    bioRole: "Marketing & Projektmanagement",
    bioDescription:
      "Bei Pflegeplace habe ich mit selbst gebauten Automatisierungstools und Social-Media-Marketing einen Lead-Funnel aufgebaut, um ausländische Pflegekräfte für Stellen in Deutschland zu rekrutieren.",
  },
  "pflegeplace-hub": {
    title: "Vom Funnel zum Kenntnisprüfung-Hub",
    summary:
      "Pflegekräfte nach Deutschland zu holen, war immer nur die halbe Miete. Pflegeplace.com positioniert sich neu: vom Recruiting-Funnel zu einem Self-Service-Hub, der bereits hier lebenden Pflegekräften hilft, die Kenntnisprüfung zu bestehen und die Anerkennung zu bekommen.",
    challenge:
      "Eine Pflegekraft nach Deutschland zu holen, macht sie noch nicht zur anerkannten Pflegefachkraft. Vorher muss sie die Kenntnisprüfung bestehen, die Anerkennungsprüfung, bevor sie überhaupt arbeiten darf. Das ist eine härtere und längere Hürde als das Recruiting selbst, doch der Markt ist fast ausschließlich darauf ausgerichtet, Pflegekräfte ins Land zu holen, nicht darauf, sie hier anerkennen zu lassen. Es ist dieselbe Zielgruppe, die Pflegeplace bereits kennt, nur am nächsten Punkt, an dem sie feststeckt.",
    approach: [
      "Pflegeplace.com vom Recruiting-Funnel zu einem Self-Service-Hub für die Kenntnisprüfungsvorbereitung neu positioniert",
      "Selbst mit KI-Coding-Tools gebaut, statt ein Dev-Team zu briefen, derselbe Ansatz wie bei dieser Seite hier",
      "Nutzt, was der ursprüngliche Funnel bereits bewiesen hat: Die Zielgruppe ist erreichbar und vertraut dem Namen Pflegeplace bereits",
    ],
    achievements: [
      "Zielt auf die Prüfungsvorbereitungs-Lücke, die die meisten Wettbewerber ignorieren, statt auf einen weiteren Recruiting-Funnel",
      "Richtet sich an eine loyalere Zielgruppe mit höherer Kaufabsicht: Pflegekräfte, die den Umzug bereits entschieden haben, statt Kaltakquise",
      "Im Aufbau auf der bestehenden Domain und Zielgruppe von pflegeplace.com",
    ],
    bioRole: "Gründer",
    bioDescription:
      "Positioniert pflegeplace.com vom Recruiting-Funnel zu einem Self-Service-Hub für die Kenntnisprüfungsvorbereitung für Pflegekräfte, die bereits in Deutschland sind, neu.",
  },
  icanspeak: {
    title: "Aufbau einer Online-Sprachschule",
    summary:
      "Bei IcanSpeak habe ich eine Online-Sprachschule für Deutschunterricht aufgebaut, Kampagnen gesteuert und Kunden über LinkedIn gewonnen.",
    challenge:
      "Deutschkurse sind austauschbar: jeder kann einen Kurs anbieten. IcanSpeak musste sich als glaubwürdige Wahl für Studierende positionieren, die die Marke noch nie gehört hatten, ganz ohne bestehende Marke oder Kundenstamm.",
    approach: [
      "Die Schule auf Teachable aufgebaut und gestartet: von der Kursstruktur bis zum Checkout",
      "LinkedIn-Outreach und Google Ads eingesetzt, um erste Studierende ganz ohne Empfehlungsbasis zu finden",
      "Anmeldekampagnen end-to-end gesteuert: von der Anzeige bis zur zahlenden Kundschaft",
    ],
    achievements: ["Online-Schule gestartet und skaliert", "Hunderte Studierende eingeschrieben", "LinkedIn-Lead-Pipeline aufgebaut"],
    bioRole: "Marketing & Projektmanagement",
    bioDescription:
      "Bei IcanSpeak habe ich eine Online-Sprachschule für Deutschunterricht aufgebaut, Kampagnen gesteuert und Kunden über LinkedIn gewonnen.",
  },
  deutschacademy: {
    title: "Deutschschule vor Ort",
    summary:
      "Bei DeutschAcademy habe ich beim Aufbau einer Sprachschule vor Ort in Manila mitgewirkt, um philippinische Pflegekräfte zu gewinnen, inklusive WordPress-Seite, Investorensuche und Kundengewinnung.",
    challenge:
      "Der Weg von Pflegekräften von den Philippinen nach Deutschland führt zuerst über den Sprachnachweis, doch in Manila gab es keine Schule, die speziell auf diesen Weg zugeschnitten war. Studierende landeten in generischen Deutschkursen, die nicht zu den tatsächlichen Anforderungen deutscher Krankenhäuser passten.",
    approach: [
      "Eine Präsenzschule in Manila mitgegründet, ausgerichtet auf den Weg von Pflegekräften von den Philippinen nach Deutschland",
      "WordPress-Seite und Anmelde-Funnel von Grund auf aufgebaut",
      "Investoren gewonnen und deutsche Gesundheitseinrichtungen als Vermittlungspartner akquiriert",
    ],
    achievements: ["Schule in Manila gegründet", "Investoren gewonnen", "Deutsche Gesundheitseinrichtungen als Kunden gewonnen"],
    bioRole: "Gründer & Projektmanagement",
    bioDescription:
      "Bei DeutschAcademy habe ich eine Präsenz-Sprachschule in Manila aufgebaut, um philippinische Pflegekräfte zu gewinnen, inklusive WordPress-Seite, Investorensuche und Kundengewinnung.",
  },
  nomavillage: {
    title: "Zuhause finden in Lagos",
    summary:
      "Nomavillage wuchs von einem einzelnen Coliving-Haus zu einer vollwertigen Coworking- und Coliving-Basis in Lagos, Portugal. Ich habe die Marketing-Systeme aufgebaut, die es vom Start zu einer internationalen Community mit 172 Gästen und 4,8-Sterne-Bewertung brachten.",
    challenge:
      "Nomavillage konkurriert um eine kleine, anspruchsvolle Zielgruppe: Remote-Worker, die sich genauso gut selbst ein Airbnb, einen Coworking-Schreibtisch und eine Yoga-Klasse zusammenstellen könnten. Generisches SEM und Social-Media-Posts überzeugen niemanden, der das mit einer echten All-inclusive-Alternative vergleicht. Nomavillage musste beweisen, günstiger und einfacher zu sein als die Selbstorganisation in Lissabon, nicht nur hübscher.",
    approach: [
      "Automatisierten Lead-Funnel gebaut, der Google Ads und Instagram über Zapier mit ActiveCampaign verband",
      "SEM-Kampagnen gezielt für digitale Nomaden gesteuert und optimiert, die Lagos gegen Lissabon und andere Nomaden-Hubs abwägen",
      "Paid Search mit Social-Content verzahnt, damit sich die Kanäle gegenseitig verstärken statt nebeneinander zu laufen",
    ],
    achievements: [
      "Auf 172 Gäste aus 27 Ländern gewachsen, mit 4,8-Sterne-Bewertung bei Google",
      "All-inclusive-Angebot für 990 €/Monat, über 700 € günstiger als die Selbstorganisation in Lissabon",
      "Aktuell im Ausbau: wegen Bauarbeiten geschlossen, Wiedereröffnung zur Saison 2026/27",
    ],
    bioRole: "Marketing-Manager",
    bioDescription:
      "Bei Nomavillage habe ich die Marketing-Systeme aufgebaut, die aus einem einzelnen Coliving-Haus in Lagos eine internationale Community mit 172 Gästen und 4,8-Sterne-Bewertung machten, aktuell im Ausbau für die Saison 2026/27.",
  },
  ironandzen: {
    title: "Ein Männer-Retreat gegründet",
    summary:
      "Iron & Zen ist ein einwöchiges Off-Grid-Retreat, das ich für Männer gegründet habe, die Krafttraining, Meditation und echte Brüderlichkeit suchen. Ich habe die Marke, die Website und den Instagram-Funnel gebaut, der jede Kohorte füllt.",
    challenge:
      "Männer auf der Suche nach echter Transformation müssen sich meist zwischen einem Fitness-Bootcamp und einem Meditations-Retreat entscheiden. Niemand verband hartes körperliches Training mit echter Stille und ungeskripteter Brüderlichkeit in einer Woche. Iron & Zen musste dieser Ort werden, komplett bei null beginnend, ohne bestehende Marke, Zielgruppe oder Erfolgsnachweis.",
    approach: [
      "Die Marke Iron & Zen von Grund auf gegründet und aufgebaut: Name, Identität und die Struktur aus Iron, Zen und Brotherhood",
      "Instagram-geführten Bewerbungs-Funnel gesteuert, der Interessenten zu einem von Hand geprüften Bewerbungsformular führt statt zum Sofort-Checkout",
      "Die Website selbst gebaut und gelauncht: vom Storytelling des Tagesablaufs bis zum Bewerbungsprozess",
    ],
    achievements: [
      "120+ Männer über mehrere Kohorten hinweg begleitet, mit 5/5-Durchschnittsbewertung",
      "Jede Bewerbung wird Kohorte für Kohorte von Hand gelesen und geprüft",
      "Nächste Kohorte startet im April",
    ],
    bioRole: "Gründer & Facilitator",
    bioDescription:
      "Ich habe Iron & Zen gegründet, ein einwöchiges Off-Grid-Retreat für Männer, das Krafttraining, Meditation und Brüderlichkeit verbindet, inklusive Marke, Website und dem Funnel, der bisher 120+ Männer begleitet hat.",
  },
  narangyoga: {
    title: "Yoga neu gedacht",
    summary:
      "Bei Narangyoga habe ich Marketingkampagnen und automatisierte Lead-Funnels betreut sowie SEM und Social Media gesteuert. Zusätzlich habe ich als Brand Creator und Marketingstratege die Markenidentität mitgestaltet.",
    challenge:
      "Narangyoga hatte noch keine Markenidentität, die man vermarkten konnte. Bevor irgendeine Kampagne funktionieren konnte, brauchte das Studio ein visuelles und sprachliches Profil, das den Menschen einen Grund gab, es jeder anderen Yoga-Marke auf Instagram vorzuziehen.",
    approach: [
      "Die Markenidentität von Grund auf entwickelt: Name, visuelle Richtung und Tonalität",
      "Lead-Funnel von Google Ads und Instagram nach Mailchimp aufgebaut und automatisiert",
      "SEM- und Social-Kampagnen gesteuert, um die Zielgruppe rund um die neue Identität auszubauen",
    ],
    achievements: ["Markenidentität von Grund auf entwickelt", "Social-Media-Reichweite ausgebaut", "Lead-Funnel automatisiert"],
    bioRole: "Marketing-Manager",
    bioDescription:
      "Bei Narangyoga habe ich Marketingkampagnen und automatisierte Lead-Funnels betreut sowie SEM und Social Media gesteuert. Zusätzlich habe ich als Brand Creator und Marketingstratege die Markenidentität mitgestaltet.",
  },
  colevitate: {
    title: "Vier Persönlichkeitsmodelle vereint",
    summary:
      "Colevitate kombiniert MBTI, Big Five, Human Design und die 4 Farbtypen zu einem einzigen Persönlichkeitsprofil, bewertet über vier Achsen, statt sich auf ein einzelnes Modell zu verlassen.",
    challenge:
      "Jedes Persönlichkeitsmodell hat seine Anhänger und seine Skeptiker, und jedes erzählt nur einen Teil der Geschichte. Niemand kombinierte MBTI, Big Five, Human Design und die 4 Farbtypen zu einem einzigen Profil – wer sich selbst besser verstehen wollte, musste sich für ein Modell entscheiden und die anderen ignorieren, oder vier getrennte Tests machen, ohne eine Möglichkeit, einen selbstbewussten Fühler im einen Test mit einem kühleren Denker im anderen in Einklang zu bringen.",
    approach: [
      "Das komplette Produkt selbst in Next.js gebaut: vier unabhängige Assessments, eine gewichtete Scoring-Matrix über vier kombinierte Achsen (Energie, Struktur, Menschen, Neuheit) und eine teilbare Export-Karte",
      "Google- und E-Mail-Magic-Link-Login sowie ein Postgres-Backend über Supabase eingerichtet, wobei Ergebnisse standardmäßig clientseitig gespeichert werden, damit niemand sich anmelden muss, nur um sich selbst zu sehen",
      "Auch die Geschäftsanalyse selbst durchgeführt: die Wettbewerbslandschaft kartiert und bestätigt, dass kein direkter Konkurrent so viele Modelle in einem Profil vereint",
    ],
    achievements: [
      "Live auf colevitate.com, alle vier Assessments funktionieren durchgängig",
      "Vollständige Auth- und Datenbankschicht ausgeliefert, bereit für gespeicherte Profile und Verlauf",
      "Team-/Workplace-Funktion und Kompatibilitäts-Matching als nächster Ausbauschritt geplant",
    ],
    bioRole: "Gründer & Entwickler",
    bioDescription:
      "Ich habe Colevitate selbst gebaut: ein Persönlichkeits-Studio, das MBTI, Big Five, Human Design und die 4 Farbtypen zu einem bewerteten Profil vereint, live auf colevitate.com mit einer echten Auth- und Datenbankschicht dahinter.",
  },
  nimbusvault: {
    title: "Eine echte CMDB gebaut",
    summary:
      "NimbusVault ist ein Single-Tenant-Tool für IT-Dokumentation und CMDB, das ich für die IT-Abteilung eines Kunden gebaut habe: typisierte Infrastrukturdatensätze, Versionsverlauf, ein Beziehungsgraph und verschlüsselte Zugangsdaten, anstelle der vorherigen Excel-Tabellen.",
    challenge:
      "Die IT-Abteilung des Kunden verfolgte Server, Storage und Kundenumgebungen in Excel-Tabellen und verstreuten Dokumenten: kein Versionsverlauf, keine Möglichkeit zu sehen, was von was abhängt, und Zugangsdaten im Klartext, wo auch immer sie zuletzt eingefügt wurden. Fertige CMDB-Tools wie Docusnap oder i-doit sind für Teams gebaut, die Hunderte Assets über viele Kunden hinweg verwalten, nicht für eine einzelne interne Abteilung, die eher ein strukturiertes Wiki brauchte.",
    approach: [
      "Eine Single-Tenant-Astro-App von Grund auf gebaut: typisierte Datensätze (Server, Datenbanken, Anwendungen und Freitext-Dokumente) mit strukturierten Feldern, vollständigem, diffbasiertem Versionsverlauf und einem gerichteten Beziehungsgraphen mit Zyklen-Erkennung",
      "Eine verschlüsselte Zugangsdaten-Ebene ergänzt (AES-256-GCM, standardmäßig maskiert, jede Freigabe protokolliert), damit Lizenzschlüssel und Passwörter nicht mehr im Klartext herumliegen",
      "Nach echten Kundenanforderungen weiterentwickelt: ein frühes Wiki-Modell und eine nachträglich angeflanschte Asset-Tabelle zu einer einheitlichen Collections-und-Items-Struktur zusammengeführt, nachdem sich in der echten Nutzung zeigte, dass die Trennung eher verwirrte als half",
    ],
    achievements: [
      "Im aktiven Einsatz bei der IT-Abteilung des Kunden, verfolgt echte Server und Infrastruktur",
      "Jede Freigabe von Zugangsdaten protokolliert; jede Änderung an einem Datensatz diffbasiert im Versionsverlauf festgehalten",
      "Deployed auf Vercel + Neon Postgres, mit einem live umschaltbaren Englisch/Deutsch-UI",
    ],
    bioRole: "Entwickler",
    bioDescription:
      "Ich habe NimbusVault für die IT-Abteilung eines Kunden gebaut: ein CMDB-Tool mit typisierten Datensätzen, Versionsverlauf, Beziehungsgraph und verschlüsselten Zugangsdaten, anstelle der Excel-Tabellen, die sie vorher genutzt haben.",
  },
};

export const bonusExperienceDe = {
  period: "Durchgehend",
  role: "Sprachlehrer",
  company: "Weltweite Erfahrung",
  description:
    "Währenddessen habe ich Hunderte Studierende auf der ganzen Welt unterrichtet. Ich war in China, Korea, auf den Philippinen und natürlich in Deutschland, um Geflüchtete und einwandernde Fachkräfte zu unterrichten.",
};
