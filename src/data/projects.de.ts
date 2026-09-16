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
  unitcloud: {
    title: "B2B-Leadgenerierung für eine Cloud-Beratung",
    summary:
      "unit.cloud ist eine Boutique-Beratung für B2B-Cloud, Infrastruktur und Netzwerk im deutschen Mittelstand. Ich verantworte die LinkedIn-Leadgenerierung und habe die Content-Pipeline dahinter gebaut, dazu die neue Website und NimbusVault.",
    challenge:
      "unit.cloud verkauft Migrationen, individuelle Infrastruktur, Automatisierung und KI-Agenten, GPU-Compute und Managed Services: erklärungsbedürftige Investitionen mit langen Zyklen und einem kleinen, sehr spezifischen Entscheiderkreis. Breite Paid-Reichweite verbrennt bei dieser Zielgruppengröße Budget. Die naheliegende Abkürzung wäre, den Content zu automatisieren, aber automatisch geschriebene Texte sind genau das, was einen technischen Einkäufer den Tab schließen lässt. Die Pipeline musste automatisiert werden, ohne das Schreiben zu automatisieren.",
    approach: [
      "B2B-Leadgenerierung über LinkedIn-Kampagnen gesteuert, ausgerichtet auf IT-Entscheider im deutschen Mittelstand statt auf breite Paid-Reichweite",
      "Eine Content-Pipeline gebaut, die die Verbreitung automatisiert, nicht das Schreiben: Blogbeiträge bleiben von Menschen gemacht und wandern per Klick nach LinkedIn, über eigens gebaute Oberflächen, die die Reibung herausnehmen",
      "Die neue Website gebaut und NimbusVault, das CMDB- und IT-Dokumentationstool, das die vorherigen Tabellen abgelöst hat",
    ],
    achievements: [
      "B2B-Lead-Pipeline läuft über gezielte LinkedIn-Kampagnen statt über breites Paid-Budget",
      "Content erscheint als System: von Menschen geschrieben, Verbreitung per Klick, ohne dafür eingekauften SaaS-Stack",
      "Neue Website und NimbusVault beide live und im aktiven Einsatz",
    ],
    bioRole: "B2B-Leadgenerierung & Marketing-Automatisierung",
    bioDescription:
      "Bei unit.cloud verantworte ich die B2B-Leadgenerierung über LinkedIn für eine Boutique-Beratung für Cloud und Infrastruktur und habe die Content-Pipeline, die neue Website und NimbusVault dahinter gebaut.",
  },
  innate: {
    title: "Co-Living neu gedacht",
    summary:
      "Innate Experiences betrieb Coliving in Kohorten für Unternehmerinnen und Unternehmer, Freelancer und digitale Nomaden. Ich habe Marke und Storytelling von Grund auf aufgebaut und anschließend jede Kohorte zu 100 % gefüllt.",
    challenge:
      "Ein Coliving-Haus kann komplett ausgebucht sein und trotzdem leblos wirken, Betten zu füllen war also nie die ganze Aufgabe. Innate hatte noch keine Marke und keine Geschichte, die jemand kannte, und trotzdem mussten sich die Kohorten mit den richtigen Unternehmerinnen, Freelancern und digitalen Nomaden füllen, komplett bei null beginnend.",
    approach: [
      "Die Marke von Grund auf etabliert und das Storytelling dahinter entwickelt",
      "Die Kohorten über Meta-Cross-Marketing gegen LinkedIn-Audiences gefüllt statt über generische Coliving-Keywords",
      "Partnerschaften, Locations, Gruppenzusammensetzung und Logistik neben dem Marketing verantwortet",
    ],
    achievements: [
      "100 % Auslastung aller verfügbaren Coliving-Plätze",
      "Marketing, Qualifizierung und Abschluss in einer Hand",
      "Marke und Storytelling von Grund auf aufgebaut",
    ],
    bioRole: "Marketing & Sales Lead",
    bioDescription:
      "Bei Innate Experiences habe ich die Marke und das Storytelling dahinter etabliert und anschließend die Coliving-Kohorten über Meta-Cross-Marketing gegen LinkedIn-Audiences gefüllt, bis zu 100 % Auslastung aller verfügbaren Plätze.",
  },
  pflegeplace: {
    title: "Lead-Funnels für Pflegekräfte",
    summary:
      "Gefragte Fachkräfte online zu finden ist in einem umkämpften Markt keine leichte Aufgabe. Mit Pflegeplace habe ich einen Funnel aufgebaut, um Pflegekräfte für Deutschland zu rekrutieren.",
    challenge:
      "Qualifizierte Pflegekräfte sind überall knapp, und wer offen für einen Umzug ist, bekommt längst Angebote von Agenturen mit größeren Budgets. Generische Stellenanzeigen erreichen diese Zielgruppe nicht. Pflegeplace musste international ausgebildete Pflegekräfte finden und überzeugen, bevor es die Konkurrenz tat, ganz ohne eigenes Recruiting-Team.",
    approach: [
      "Den Kandidaten-Funnel von A bis Z aufgebaut, vom ersten Kontakt bis zur Übergabe an den Arbeitgeber",
      "Paid Acquisition über Meta und Google Ads verantwortet, ausgerichtet auf Pflegekräfte, die einen Umzug nach Deutschland in Erwägung zogen",
      "Einen selbst gebauten Automatisierungs-Stack (Zapier, HubSpot, Mailchimp) aufgesetzt, der Leads ohne manuelle Nachverfolgung qualifizierte und weiterleitete",
      "Parallel die kaufmännische Seite getragen: Controlling und Projektrentabilität, Investorengespräche und Finanzierung, Talent Sourcing und Scrum-Umsetzung",
    ],
    achievements: [
      "Kandidaten-Funnel vollständig aufgebaut, vom ersten Kontakt bis zur Übergabe",
      "Pflegekräfte erfolgreich an deutsche Arbeitgeber vermittelt",
      "Cost-per-Lead durch gezieltes Targeting auf Meta und Google gesenkt",
    ],
    bioRole: "Growth & Acquisition Lead",
    bioDescription:
      "Bei Pflegeplace habe ich den Kandidaten-Funnel vom ersten Kontakt bis zur Übergabe an den Arbeitgeber aufgebaut und Paid Acquisition über Meta und Google verantwortet, dazu Controlling, Finanzierungsgespräche und Talent Sourcing.",
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
    title: "Wachstum ohne Paid Acquisition",
    summary:
      "IcanSpeak ist eine Online-Deutschschule, die ganz ohne Paid Acquisition gewachsen ist. B2B-Kunden kamen über eine LinkedIn-Drip-Kampagne, die Anfragen ohne manuelles Nachfassen bis zur Anmeldung trug.",
    challenge:
      "Deutschkurse sind austauschbar: jeder kann einen Kurs anbieten. IcanSpeak musste sich als glaubwürdige Wahl für Studierende positionieren, die die Marke noch nie gehört hatten, ganz ohne bestehende Marke, ohne Kundenstamm und ohne Werbebudget, um sich Sichtbarkeit zu kaufen.",
    approach: [
      "B2B-Kunden über eine LinkedIn-Drip-Kampagne erschlossen, statt Reichweite einzukaufen",
      "Die Drip-Strecke so gebaut, dass Anfragen ohne manuelles Nachfassen bis zur Anmeldung durchliefen",
      "Die Schule auf Teachable aufgebaut und gestartet: von der Kursstruktur bis zum Checkout",
    ],
    achievements: [
      "120 neue Teilnehmende in einem einzigen Halbjahr",
      "Gewachsen komplett ohne Paid Acquisition",
      "Entwickelte sich später zu einer Online-Plattform für Spracherwerb",
    ],
    bioRole: "Growth Marketing Consultant",
    bioDescription:
      "Bei IcanSpeak habe ich eine Online-Deutschschule ohne Paid Acquisition wachsen lassen und B2B-Kunden über eine LinkedIn-Drip-Kampagne erschlossen, die Anfragen von allein bis zur Anmeldung trug: 120 neue Teilnehmende in einem einzigen Halbjahr.",
  },
  deutschacademy: {
    title: "Von der Pflegeschule zur Lernplattform",
    summary:
      "DeutschAcademy startete als Deutschsprachschule für ausgebildete Pflegekräfte auf dem Weg zu deutschen Arbeitgebern. Heute ist es eine offene Plattform für allgemeines Deutsch von A1 bis C1, mit 412+ Lernenden, aufgebaut aus echtem Unterrichtsmaterial.",
    challenge:
      "Der Weg von Pflegekräften nach Deutschland führt zuerst über den Sprachnachweis, doch es gab keine Schule, die speziell auf diesen Weg zugeschnitten war. Studierende landeten in generischen Deutschkursen, die nicht zu den tatsächlichen Anforderungen deutscher Arbeitgeber passten. Die schwierigere Aufgabe kam später: Aus einer Schule für eine einzige enge Zielgruppe musste eine Plattform werden, die alle Deutschlernenden nutzen können, ohne das aufzugeben, was sie für Pflegekräfte funktionieren ließ.",
    approach: [
      "Erste Kunden und Investoren gewonnen sowie die WordPress-Website und den Akquise-Funnel gebaut",
      "Aus der auf Pflegekräfte ausgerichteten Schule eine offene Plattform für allgemeines Deutsch von A1 bis C1 entwickelt, aufgebaut aus echtem Unterrichtsmaterial statt aus generischem Kursinhalt",
      "Die Prüfungsvorbereitung für telc, Goethe-Zertifikat, TestDaF und DTZ in Symbiose mit Pflegeplace aufgesetzt, sodass Recruiting- und Lernseite sich gegenseitig speisen",
    ],
    achievements: [
      "412+ Lernende auf der Plattform, von A1 bis C1",
      "60+ Grammatikthemen und 664 Übungen aufgebaut",
      "Prüfungsvorbereitung für telc, Goethe-Zertifikat, TestDaF und DTZ, in Symbiose mit Pflegeplace",
    ],
    bioRole: "Marketing & Growth Lead",
    bioDescription:
      "DeutschAcademy startete als Deutschschule für Pflegekräfte auf dem Weg zu deutschen Arbeitgebern, wo ich erste Kunden und Investoren gewonnen und Website und Funnel gebaut habe. Heute ist es eine offene A1–C1-Plattform mit 412+ Lernenden.",
  },
  nomavillage: {
    title: "Zuhause finden in Lagos",
    summary:
      "NomaVillage wuchs von einem einzelnen Coliving-Haus zu einer vollwertigen Coworking- und Coliving-Basis in Lagos, Portugal. Ich habe die Marketing-Systeme aufgebaut, die es vom Start zu einer internationalen Community mit 172 Gästen und 4,8-Sterne-Bewertung brachten.",
    challenge:
      "NomaVillage konkurriert um eine kleine, anspruchsvolle Zielgruppe: Remote-Worker, die sich genauso gut selbst ein Airbnb, einen Coworking-Schreibtisch und eine Yoga-Klasse zusammenstellen könnten. Generisches SEM und Social-Media-Posts überzeugen niemanden, der das mit einer echten All-inclusive-Alternative vergleicht. NomaVillage musste beweisen, günstiger und einfacher zu sein als die Selbstorganisation in Lissabon, nicht nur hübscher.",
    approach: [
      "Das erste Jahr vor Ort als Coliving-Host verbracht, im Alltag mit genau der Zielgruppe, die das Marketing heute adressiert",
      "Im Berater-Retainer zurückgekehrt und den Funnel von Ende zu Ende verantwortet: Paid Social, Landingpages, Text und Conversion, E-Mail-Automation, Integrationen und den Content dahinter",
      "Automatisierten Lead-Funnel gebaut, der Google Ads und Instagram über Zapier mit ActiveCampaign verband",
      "Paid Search mit Social-Content verzahnt, damit sich die Kanäle gegenseitig verstärken statt nebeneinander zu laufen",
    ],
    achievements: [
      "Auf 172 Gäste aus 27 Ländern gewachsen, mit 4,8-Sterne-Bewertung bei Google",
      "All-inclusive-Angebot für 990 €/Monat, über 700 € günstiger als die Selbstorganisation in Lissabon",
      "Aktuell im Ausbau: wegen Bauarbeiten geschlossen, Wiedereröffnung zur Saison 2026/27",
    ],
    bioRole: "Coliving-Host, danach Marketing-Manager",
    bioDescription:
      "Ich war ein Jahr vor Ort als Coliving-Host bei NomaVillage und bin dann im Berater-Retainer für das Marketing zurückgekehrt: die Systeme, die aus einem einzelnen Haus in Lagos eine internationale Community mit 172 Gästen und 4,8 Sternen machten.",
  },
  ironandzen: {
    title: "Marketing für ein Männer-Retreat",
    summary:
      "Iron & Zen ist ein siebentägiges Männer-Retreat in Portugal, aufgebaut auf einer These über eine unterversorgte Zielgruppe. Ich verantworte Marke, Storytelling und Akquise und bin als Co-Host vor Ort bei den Kohorten.",
    challenge:
      "Iron & Zen ist auf einer These über eine Zielgruppe aufgebaut, die niemand direkt anspricht: Männer, die auf dem Papier erfolgreich sind und darunter den Anschluss verloren haben. Diese These zahlt sich nur aus, wenn das Marketing sie erreicht, ohne genau das zu benennen, was sie selbst nicht aussprechen. Und der Content musste Woche für Woche weiterlaufen, ohne zur wöchentlichen Hetzjagd oder zu einem Stapel SaaS-Abos zu werden.",
    approach: [
      "Marke und Storytelling rund um die These der unterversorgten Zielgruppe aufgebaut, statt das Retreat als weiteres Bootcamp oder Meditations-Retreat zu positionieren",
      "Akquise und Community-Aufbau rund um die Kohorten verantwortet und sie als Co-Host vor Ort begleitet",
      "Eine Automatisierungs-Pipeline gebaut, die den Content strafft: Produktion und Veröffentlichung laufen als System statt als wöchentliche Hetzjagd, und ohne den SaaS-Stack, den man dafür üblicherweise einkauft",
    ],
    achievements: [
      "Content-Produktion und -Veröffentlichung laufen als System, nicht als wöchentliche Hetzjagd",
      "Kohorten über eine Positionierungs-These gefüllt statt über generisches Retreat-Marketing",
      "Kein SaaS-Stack für die Content-Pipeline eingekauft",
    ],
    bioRole: "Growth Marketer & Co-Host",
    bioDescription:
      "Für Iron & Zen, ein siebentägiges Männer-Retreat in Portugal, verantworte ich Marke, Storytelling, Akquise und Community-Aufbau sowie die Automatisierungs-Pipeline hinter dem Content, und begleite die Kohorten als Co-Host vor Ort.",
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
      "NimbusVault ist ein Single-Tenant-Tool für IT-Dokumentation und CMDB, das ich für die IT-Abteilung von unit.cloud gebaut habe: typisierte Infrastrukturdatensätze, Versionsverlauf, ein Beziehungsgraph und verschlüsselte Zugangsdaten, anstelle der vorherigen Excel-Tabellen.",
    challenge:
      "Die IT-Abteilung von unit.cloud verfolgte Server, Storage und Kundenumgebungen in Excel-Tabellen und verstreuten Dokumenten: kein Versionsverlauf, keine Möglichkeit zu sehen, was von was abhängt, und Zugangsdaten im Klartext, wo auch immer sie zuletzt eingefügt wurden. Fertige CMDB-Tools wie Docusnap oder i-doit sind für Teams gebaut, die Hunderte Assets über viele Kunden hinweg verwalten, nicht für eine einzelne interne Abteilung, die eher ein strukturiertes Wiki brauchte.",
    approach: [
      "Eine Single-Tenant-Astro-App von Grund auf gebaut: typisierte Datensätze (Server, Datenbanken, Anwendungen und Freitext-Dokumente) mit strukturierten Feldern, vollständigem, diffbasiertem Versionsverlauf und einem gerichteten Beziehungsgraphen mit Zyklen-Erkennung",
      "Eine verschlüsselte Zugangsdaten-Ebene ergänzt (AES-256-GCM, standardmäßig maskiert, jede Freigabe protokolliert), damit Lizenzschlüssel und Passwörter nicht mehr im Klartext herumliegen",
      "Nach echten Kundenanforderungen weiterentwickelt: ein frühes Wiki-Modell und eine nachträglich angeflanschte Asset-Tabelle zu einer einheitlichen Collections-und-Items-Struktur zusammengeführt, nachdem sich in der echten Nutzung zeigte, dass die Trennung eher verwirrte als half",
    ],
    achievements: [
      "Im aktiven Einsatz bei der IT-Abteilung von unit.cloud, verfolgt echte Server und Infrastruktur",
      "Jede Freigabe von Zugangsdaten protokolliert; jede Änderung an einem Datensatz diffbasiert im Versionsverlauf festgehalten",
      "Deployed auf Vercel + Neon Postgres, mit einem live umschaltbaren Englisch/Deutsch-UI",
    ],
    bioRole: "Entwickler",
    bioDescription:
      "Ich habe NimbusVault für die IT-Abteilung von unit.cloud gebaut: ein CMDB-Tool mit typisierten Datensätzen, Versionsverlauf, Beziehungsgraph und verschlüsselten Zugangsdaten, anstelle der Excel-Tabellen, die sie vorher genutzt haben.",
  },
};

export const bonusExperienceDe = {
  period: "2015–2020",
  role: "Sprachlehrer",
  company: "Fons, inlingua, Start LF, Alpadia, Eurasia",
  description:
    "Vor der Marketingarbeit habe ich fünf Jahre lang Sprachen unterrichtet, in Deutschland und im Ausland, für Fons, inlingua, Start LF, Alpadia und Eurasia. China, Korea, die Philippinen und natürlich Deutschland, wo ich Geflüchtete und einwandernde Fachkräfte unterrichtet habe.",
};

/** German copy for `careerEntries` (src/data/projects.ts), same order. */
export const careerEntriesDe = [
  {
    period: "2021–2022",
    title: "TÜV Rheinland Group — International Recruitment Consultant",
    detail: "Internationale Partnerakquise",
  },
  {
    period: "2015–2020",
    title: "Sprachunterricht — Fons, inlingua, Start LF, Alpadia, Eurasia",
    detail: "Deutschland und Ausland",
  },
  {
    period: "Studium",
    title: "Friedrich-Schiller-Universität Jena",
  },
];
