import type { Lang } from "../lib/i18n";

/**
 * Content for /bio/teacher and /de/bio/teacher.
 * Facts come from deutschacademy.com/ueber-mich (Edgar's own teacher page);
 * photos under /images/bio/teacher/da/ were taken from there too.
 */

const IMG = "/images/bio/teacher/da";

export interface TeacherStation {
  period: string;
  place: string;
  title: string;
  body: string;
  image?: { src: string; alt: string };
}

export interface TeacherStoryContent {
  meta: { title: string; description: string };
  back: { href: string; label: string };
  eyebrow: string;
  heading: string;
  lede: string;
  portraitAlt: string;
  stats: { value: string; label: string }[];
  storyHeading: string;
  story: string[];
  quote: string;
  stationsHeading: string;
  stations: TeacherStation[];
  bridgeHeading: string;
  bridge: string[];
  bridgeLinks: { href: string; label: string; note: string }[];
  trainingHeading: string;
  training: string[];
  languagesHeading: string;
  languages: string[];
  languagesNote: string;
  galleryHeading: string;
  openPhoto: string;
  close: string;
  prev: string;
  next: string;
}

const en: TeacherStoryContent = {
  meta: {
    title: "Language Teacher · Edgar Kretschmann",
    description:
      "Teaching German and English since 2015: China, South Korea, the Philippines, Berlin, and online integration courses. The classroom story behind DeutschAcademy and IcanSpeak.",
  },
  back: { href: "/bio", label: "← Bio" },
  eyebrow: "Bonus · Language teacher",
  heading: "Before the funnels, there was a classroom.",
  lede:
    "I have taught German since 2015: in China, South Korea, the Philippines and Germany. Children, students, nurses, doctors, refugees. Today I still teach integration courses and prepare people for the DTZ exam. Most of what I know about explaining things to people, I learned here.",
  portraitAlt: "Edgar Kretschmann",
  stats: [
    { value: "since 2015", label: "teaching German" },
    { value: "4 countries", label: "China, Korea, Philippines, Germany" },
    { value: "A1–C1", label: "every level, children to doctors" },
    { value: "up to 40", label: "learners in one class" },
  ],
  storyHeading: "How it started",
  story: [
    "My first classes were in Qingdao in 2015: rooms of 15 to 20 kids, school pupils and university students, in German and English. You learn fast in a room like that. If the explanation doesn't land, you see it on twenty faces at once.",
    "From there it went to Seoul, where I built the lessons at a language school around telc standards and advised the management on teaching quality. Then three years at language schools in Berlin, from A2 up to C1 and TestDaF prep.",
    "The years in the Philippines changed the most. In Iloilo, Manila and Subic Bay I prepared nurses for telc B2 Pflege and doctors for the medical language exam. These were people about to move their whole lives to Germany, and the exam was the gate. From 2020 that moved online, with classes of 20 to 40.",
    "Back in Germany I taught vocational language courses in Berlin, many learners from Ukraine, and since 2024 BAMF integration courses online. Same pattern in every course: the article, the verb position, the formal letter, the announcement you only hear once. I made worksheets for those spots for years.",
  ],
  quote: "I know what it's like to learn a new language. I've done it many times.",
  stationsHeading: "Where I taught",
  stations: [
    {
      period: "2015",
      place: "Qingdao, China",
      title: "The first classes",
      body:
        "German and English at XDF and Wales Language School, for children, pupils and students of Qingdao University, in groups of 15 to 20. Plus placement tests from B1.",
      image: { src: `${IMG}/qingdao-2.webp`, alt: "Edgar at the board in front of a children's class in Qingdao" },
    },
    {
      period: "2015–2016",
      place: "Seoul, South Korea",
      title: "Teaching to telc standard",
      body:
        "Groups from A1 to B2 at Times Academy. I rebuilt the lessons around telc standards and advised the school's management on teaching quality.",
    },
    {
      period: "2016–2019",
      place: "Berlin",
      title: "Language schools in Berlin",
      body: "Alpadia, Startcon and the Eurasia Institute: groups from A2 to C1 and preparation for telc and TestDaF.",
      image: { src: `${IMG}/berlin-1.webp`, alt: "Group photo of a class at the Eurasia Institute in Berlin" },
    },
    {
      period: "2018–2021",
      place: "Philippines",
      title: "Nurses on their way to Germany",
      body:
        "In Iloilo, Manila and Subic Bay I prepared nurses for telc B2 Pflege and doctors for the Fachsprachprüfung. Online from 2020, in classes of 20 to 40.",
      image: { src: `${IMG}/philippinen-2.webp`, alt: "Class of nurses in a course room in the Philippines" },
    },
    {
      period: "since 2022",
      place: "Online",
      title: "My own online school, IcanSpeak",
      body: "I select the teachers, plan lessons and curriculum, and teach myself.",
      image: { src: `${IMG}/online-6.webp`, alt: "Online class with learners in the Philippines: Edgar waves, everyone laughs" },
    },
    {
      period: "2022–2024",
      place: "Berlin",
      title: "Vocational courses and the DTZ",
      body:
        "At FONS Akademie and inlingua: classroom courses of about 20 people, many from Ukraine. DTZ preparation, including museum visits with big groups.",
      image: { src: `${IMG}/berlin-4.webp`, alt: "Course group in front of a picture of the Brandenburg Gate" },
    },
    {
      period: "since 2024",
      place: "Online",
      title: "Integration courses",
      body:
        "BAMF integration courses for Frohsinn Augsburg and VHS Biberach: mixed groups of about 20, DTZ preparation, my own worksheets and digital exercises.",
      image: { src: `${IMG}/online-5.webp`, alt: "Integration course over Zoom: many smiling learners" },
    },
    {
      period: "2026",
      place: "deutschacademy.com",
      title: "DeutschAcademy",
      body: "Those worksheets and exercises became a site. I use it in my own lessons.",
    },
  ],
  bridgeHeading: "Why it belongs in this portfolio",
  bridge: [
    "The marketing and product work on this site grew out of the classroom. Every course showed me where people get stuck, and every worksheet was a small product with one job: get someone past that spot. DeutschAcademy puts those exercises on a phone, with explanations, instant feedback and help in many languages.",
    "The nurses in the Philippines are also why Pflegeplace exists. I watched the path to Germany up close, with all the places it breaks.",
  ],
  bridgeLinks: [
    { href: "/projects/deutschacademy", label: "DeutschAcademy", note: "The worksheets, turned into a learning platform" },
    { href: "/projects/icanspeak", label: "IcanSpeak", note: "My online language school" },
    { href: "/projects/pflegeplace", label: "Pflegeplace", note: "German for internationally trained nurses" },
  ],
  trainingHeading: "Training",
  training: [
    "Cambridge CELTA (teaching adults)",
    "Goethe-Institut: Deutsch Lehren Lernen",
    "VHS teacher qualification",
    "BAMF approval for integration courses",
    "B.A. Economics and Politics, University of Jena",
  ],
  languagesHeading: "Languages",
  languages: ["German", "English", "Spanish", "Italian", "French", "Portuguese", "Russian"],
  languagesNote: "I've been the learner too, many times over.",
  galleryHeading: "More from the classroom",
  openPhoto: "Open photo",
  close: "Close",
  prev: "Previous photo",
  next: "Next photo",
};

const de: TeacherStoryContent = {
  meta: {
    title: "Sprachlehrer · Edgar Kretschmann",
    description:
      "Deutschunterricht seit 2015: China, Südkorea, die Philippinen, Berlin und Integrationskurse online. Die Geschichte aus dem Kursraum hinter DeutschAcademy und IcanSpeak.",
  },
  back: { href: "/de/bio", label: "← Bio" },
  eyebrow: "Bonus · Sprachlehrer",
  heading: "Vor den Funnels kam der Kursraum.",
  lede:
    "Ich unterrichte seit 2015 Deutsch: in China, Südkorea, auf den Philippinen und in Deutschland. Kinder, Studierende, Pflegekräfte, Ärzte, Geflüchtete. Heute unterrichte ich in Integrationskursen und bereite auf den DTZ vor. Das meiste, was ich darüber weiß, wie man Menschen etwas erklärt, habe ich hier gelernt.",
  portraitAlt: "Edgar Kretschmann",
  stats: [
    { value: "seit 2015", label: "unterrichte ich Deutsch" },
    { value: "4 Länder", label: "China, Korea, Philippinen, Deutschland" },
    { value: "A1–C1", label: "alle Niveaus, Kinder bis Ärzte" },
    { value: "bis 40", label: "Teilnehmende in einer Klasse" },
  ],
  storyHeading: "Wie es anfing",
  story: [
    "Meine ersten Klassen hatte ich 2015 in Qingdao: Gruppen mit 15 bis 20 Kindern, Schülern und Studierenden, auf Deutsch und Englisch. In so einem Raum lernt man schnell. Wenn eine Erklärung nicht ankommt, sieht man es auf zwanzig Gesichtern gleichzeitig.",
    "Danach ging es nach Seoul, wo ich den Unterricht einer Sprachschule nach telc-Standards aufgebaut und die Schulleitung zur Unterrichtsqualität beraten habe. Dann drei Jahre an Sprachschulen in Berlin, von A2 bis C1 und TestDaF-Vorbereitung.",
    "Am meisten verändert haben mich die Jahre auf den Philippinen. In Iloilo, Manila und Subic Bay habe ich Pflegekräfte auf telc B2 Pflege und Ärztinnen und Ärzte auf die Fachsprachprüfung vorbereitet. Menschen, die kurz davor waren, ihr ganzes Leben nach Deutschland zu verlegen, und die Prüfung war das Tor. Ab 2020 lief das online, in Klassen mit 20 bis 40 Personen.",
    "Zurück in Deutschland kamen Berufssprachkurse in Berlin, viele Teilnehmende aus der Ukraine, und seit 2024 BAMF-Integrationskurse online. In jedem Kurs dieselben Stellen: der Artikel, die Verbposition, der formelle Brief, die Durchsage, die man nur einmal hört. Für genau diese Stellen habe ich jahrelang Arbeitsblätter gemacht.",
  ],
  quote: "Ich weiß, wie es ist, eine neue Sprache zu lernen. Ich habe es oft gemacht.",
  stationsHeading: "Wo ich unterrichtet habe",
  stations: [
    {
      period: "2015",
      place: "Qingdao, China",
      title: "Die ersten Klassen",
      body:
        "Deutsch und Englisch an der XDF und der Wales Language School: für Kinder, Schüler und Studierende der Universität Qingdao, in Gruppen mit 15 bis 20 Personen. Dazu Einstufungstests ab B1.",
      image: { src: `${IMG}/qingdao-2.webp`, alt: "Edgar an der Tafel vor einer Kinderklasse in Qingdao" },
    },
    {
      period: "2015–2016",
      place: "Seoul, Südkorea",
      title: "Unterricht nach telc-Standard",
      body:
        "An der Times Academy Gruppen von A1 bis B2. Ich habe den Unterricht dort nach telc-Standards aufgebaut und die Schulleitung zur Unterrichtsqualität beraten.",
    },
    {
      period: "2016–2019",
      place: "Berlin",
      title: "Sprachschulen in Berlin",
      body: "Bei Alpadia, Startcon und dem Eurasia Institute: Gruppen von A2 bis C1 und Vorbereitung auf telc und TestDaF.",
      image: { src: `${IMG}/berlin-1.webp`, alt: "Gruppenfoto einer Klasse am Eurasia Institute in Berlin" },
    },
    {
      period: "2018–2021",
      place: "Philippinen",
      title: "Pflegekräfte auf dem Weg nach Deutschland",
      body:
        "In Iloilo, Manila und Subic Bay habe ich Pflegekräfte auf telc B2 Pflege und Ärztinnen und Ärzte auf die Fachsprachprüfung vorbereitet. Seit 2020 auch online, in Klassen mit 20 bis 40 Personen.",
      image: { src: `${IMG}/philippinen-2.webp`, alt: "Klasse von Pflegekräften im Kursraum auf den Philippinen" },
    },
    {
      period: "seit 2022",
      place: "Online",
      title: "Eigene Online-Schule IcanSpeak",
      body: "Ich wähle Lehrkräfte aus, plane Unterricht und Curriculum und unterrichte selbst.",
      image: {
        src: `${IMG}/online-6.webp`,
        alt: "Online-Unterricht mit einer Klasse auf den Philippinen: Edgar winkt, alle lachen",
      },
    },
    {
      period: "2022–2024",
      place: "Berlin",
      title: "Berufssprachkurse und DTZ",
      body:
        "Bei FONS Akademie und inlingua: Präsenzkurse mit etwa 20 Personen, viele aus der Ukraine. Vorbereitung auf den DTZ, auch mit Museumsbesuchen in großen Gruppen.",
      image: { src: `${IMG}/berlin-4.webp`, alt: "Kursgruppe vor einem Bild des Brandenburger Tors" },
    },
    {
      period: "seit 2024",
      place: "Online",
      title: "Integrationskurse",
      body:
        "BAMF-Integrationskurse für Frohsinn Augsburg und die VHS Biberach: gemischte Gruppen mit etwa 20 Personen, Vorbereitung auf den DTZ, eigene Arbeitsblätter und digitale Übungen.",
      image: { src: `${IMG}/online-5.webp`, alt: "Integrationskurs online über Zoom: viele Teilnehmende lächeln" },
    },
    {
      period: "2026",
      place: "deutschacademy.com",
      title: "DeutschAcademy",
      body: "Aus diesen Arbeitsblättern und Übungen ist eine eigene Seite geworden. Ich setze sie in meinem Unterricht ein.",
    },
  ],
  bridgeHeading: "Warum das ins Portfolio gehört",
  bridge: [
    "Die Marketing- und Produktarbeit auf dieser Seite ist aus dem Kursraum gewachsen. Jeder Kurs hat mir gezeigt, wo Menschen hängen bleiben, und jedes Arbeitsblatt war ein kleines Produkt mit einer Aufgabe: jemanden über genau diese Stelle bringen. DeutschAcademy bringt diese Übungen aufs Handy, mit Erklärung, sofortiger Rückmeldung und Hilfe in vielen Sprachen.",
    "Die Pflegekräfte auf den Philippinen sind auch der Grund, warum es Pflegeplace gibt. Ich habe den Weg nach Deutschland aus der Nähe gesehen, mit allen Stellen, an denen er bricht.",
  ],
  bridgeLinks: [
    { href: "/de/projects/deutschacademy", label: "DeutschAcademy", note: "Die Arbeitsblätter als Lernplattform" },
    { href: "/de/projects/icanspeak", label: "IcanSpeak", note: "Meine Online-Sprachschule" },
    { href: "/de/projects/pflegeplace", label: "Pflegeplace", note: "Deutsch für international ausgebildete Pflegekräfte" },
  ],
  trainingHeading: "Ausbildung",
  training: [
    "Cambridge CELTA (Unterricht für Erwachsene)",
    "Goethe-Institut: Deutsch Lehren Lernen",
    "VHS-Lehrkräftequalifizierung",
    "BAMF-Zulassung für Integrationskurse",
    "B.A. Wirtschaft und Politik, Universität Jena",
  ],
  languagesHeading: "Sprachen",
  languages: ["Deutsch", "Englisch", "Spanisch", "Italienisch", "Französisch", "Portugiesisch", "Russisch"],
  languagesNote: "Ich war selbst oft genug der Lernende.",
  galleryHeading: "Mehr aus dem Kursraum",
  openPhoto: "Foto öffnen",
  close: "Schließen",
  prev: "Vorheriges Foto",
  next: "Nächstes Foto",
};

export const teacherStory: Record<Lang, TeacherStoryContent> = { en, de };
export const teacherPortrait = `${IMG}/edgar.webp`;
