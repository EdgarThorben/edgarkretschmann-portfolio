/**
 * The freelance profile: the "at a glance" facts, headline results and
 * capability blocks that live on /profile. Transcribed from
 * Edgar-Kretschmann-Profil_5.pdf, the current one-pager sent to prospective
 * clients — this file is the web version of that document, so the two stay in
 * sync. German copy lives in profile.de.ts.
 */

export interface ProfileFact {
  label: string;
  value: string;
}

export interface ProfileResult {
  project: string;
  slug?: string; // links to /projects/[slug] when there's a case study
  metric: string;
  metricSuffix?: string; // rendered smaller after the number, e.g. "of 5"
  context: string;
}

export interface Capability {
  title: string;
  body: string;
}

export const TAGLINE = "I find the audience nobody is bidding on, and build the funnel that reaches them.";

export const CONTACT = {
  email: "hello@edgarkretschmann.com",
  site: "edgarkretschmann.com",
  linkedin: "linkedin.com/in/edgarkretschmann",
  linkedinUrl: "https://linkedin.com/in/edgarkretschmann",
  base: "Munich & Berlin · CET",
};

export const AT_A_GLANCE: ProfileFact[] = [
  { label: "Availability", value: "Immediately" },
  { label: "Day rate", value: "On request" },
  { label: "Start date", value: "No notice period — immediate start" },
  { label: "Engagement", value: "Freelance — project or retainer" },
  { label: "Location", value: "Munich & Berlin · CET" },
  { label: "Working model", value: "Remote-first, on-site in Munich, Berlin and Augsburg possible" },
  { label: "Languages", value: "German (native), English (fluent)" },
  { label: "Industries", value: "Cloud & IT services, hospitality & coliving, healthcare recruiting, education, wellness" },
];

export const RESULTS: ProfileResult[] = [
  {
    project: "NomaVillage",
    slug: "nomavillage",
    metric: "4.8",
    metricSuffix: "of 5",
    context: "Over 172 guests. From a single coliving house to a coworking and coliving base in Lagos, Portugal.",
  },
  {
    project: "Innate Experiences",
    slug: "innate",
    metric: "100%",
    context: "Occupancy of every available coliving place — marketing, qualification and closing in one hand.",
  },
  {
    project: "IcanSpeak",
    slug: "icanspeak",
    metric: "120",
    context: "New participants in a single half-year, with B2B clients opened up through a LinkedIn drip campaign.",
  },
  {
    project: "DeutschAcademy",
    slug: "deutschacademy",
    metric: "412+",
    context: "Learners on the platform, A1 to C1, built out of real classroom material.",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Paid acquisition",
    body: "Meta Ads, Google Ads, LinkedIn — campaign build, targeting, budget and reporting.",
  },
  {
    title: "Funnel & conversion",
    body: "Funnel diagnosis, landing pages, CRO, A/B tests and conversion copy.",
  },
  {
    title: "Lifecycle automation",
    body: "Drip and nurture tracks, email automation, CRM integration — follow-up that runs on its own.",
  },
  {
    title: "Audience research",
    body: "Market and segment research, to find the underserved audience before budget goes into the obvious one.",
  },
  {
    title: "Implementation",
    body: "Hand-built funnel pages instead of page-builder templates — they load faster and carry more per page. Plus WordPress, integrations and internal tools.",
  },
  {
    title: "Measurement",
    body: "PostHog for A/B tests and retargeting. Without third-party cookies the tracking runs server-side: Conversions API from first-party data, contextual targeting instead of behavioural profiles.",
  },
  {
    title: "Brand & content",
    body: "Positioning, brand building, copy and content production — AI-assisted where it speeds up delivery.",
  },
  {
    title: "Build vs. buy",
    body: "Replace or automate away expensive SaaS where a self-built tool does the same job. Lower running costs, and the data stays first-party.",
  },
];

/** Projects with no case study of their own, listed as a short "also built" row. */
export const ALSO_BUILT_SLUGS = ["colevitate", "narangyoga"];
