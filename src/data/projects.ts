import type { Project, CareerEntry } from "../types";

/**
 * Single source of truth for every project, consumed by /profile, /projects,
 * /projects/[slug], and /bio. Resolves wording divergences found across the
 * original Carrd mirrors' mobile/desktop duplicate DOM (e.g. "Redefining
 * Co-living" over "Co-lives", "Creating Nurse Lead Funnels" over "Finding
 * Nurses") and fixes typos ("sough after" -> "sought-after", "competetive" ->
 * "competitive"). Gallery images use the exact container groupings confirmed
 * against the projects.edgarkretschmann.com mirror's six gallery sections.
 *
 * Periods, roles, locations, engagement forms and headline outcomes were
 * reconciled against Edgar-Kretschmann-Profil_5.pdf (the current freelance
 * profile), which supersedes the earlier mirror-derived copy wherever the two
 * disagreed.
 */
export const projects: Project[] = [
  {
    slug: "unitcloud",
    company: "unit.cloud",
    url: "unit.cloud",
    linkUrl: "https://unit.cloud",
    title: "B2B Lead Gen for a Cloud Consultancy",
    summary:
      "unit.cloud is a boutique B2B cloud, infrastructure and network consultancy for the German Mittelstand. I run their LinkedIn lead generation and built the content pipeline behind it, plus the new website and NimbusVault.",
    challenge:
      "unit.cloud sells migrations, custom infrastructure, automation and AI agents, GPU compute and managed services: considered purchases with long cycles and a small, specific buying committee. Broad paid reach burns budget on an audience that size. The obvious shortcut is to automate the content, but automated writing is exactly what makes a technical buyer close the tab. The pipeline had to be automated without automating the writing.",
    approach: [
      "Ran B2B lead generation through LinkedIn campaigns aimed at German Mittelstand IT decision-makers rather than broad paid reach",
      "Built a content pipeline that automates distribution but not authorship: blog posts stay human-written and ship to LinkedIn in one click, through purpose-built interfaces that take the friction out",
      "Built the new website, and NimbusVault, the CMDB and IT-documentation tool that replaced the team's spreadsheets",
    ],
    achievements: [
      "B2B lead pipeline running on targeted LinkedIn campaigns instead of broad paid spend",
      "Content shipping as a system: human-written, one-click distribution, no SaaS stack bought for it",
      "New website and NimbusVault both live and in active use",
    ],
    tech: ["LinkedIn Ads", "Astro", "PostHog", "Vercel"],
    skills: [
      { label: "Building", value: 88 },
      { label: "Automation", value: 90 },
      { label: "Campaigning", value: 84 },
      { label: "Project Mgmt", value: 76 },
      { label: "Landing Pages", value: 72 },
    ],
    portfolioImage: "/images/nimbusvault/bio-server-room.jpg",
    projectsHeroImage: "/images/nimbusvault/hero-collection.jpg",
    galleryImages: [
      "/images/nimbusvault/gallery-relationships.jpg",
      "/images/nimbusvault/gallery-login.jpg",
      "/images/nimbusvault/gallery-item-fields.jpg",
    ],
    bioPeriod: "2026–",
    bioRole: "B2B Lead Generation & Marketing Automation",
    bioDescription:
      "At unit.cloud I run B2B lead generation over LinkedIn for a boutique cloud and infrastructure consultancy, and built the content pipeline, the new website and NimbusVault behind it.",
    bioImage: "/images/nimbusvault/hero-collection.jpg",
    location: "Augsburg",
    engagement: "Retainer",
  },
  {
    slug: "innate",
    company: "Innate Experiences",
    url: "innate.global",
    linkUrl: "https://innate.global",
    title: "Redefining Co-living",
    summary:
      "Innate Experiences ran cohort-based coliving for entrepreneurs, freelancers and digital nomads. I built the brand and the storytelling from scratch, then filled every cohort to 100% occupancy.",
    challenge:
      "A coliving house can be fully booked and still feel dead, so filling beds was never the whole job. Innate had no brand yet and no story anyone had heard, and the cohorts still had to fill with the right entrepreneurs, freelancers and digital nomads, from a standing start.",
    approach: [
      "Established the brand from the ground up and developed the storytelling behind it",
      "Filled the cohorts through Meta cross-marketing run against LinkedIn audiences rather than generic coliving keywords",
      "Owned partnerships, locations, group composition and logistics alongside the marketing",
    ],
    achievements: [
      "100% occupancy of every available coliving place",
      "Marketing, qualification and closing all handled in one hand",
      "Brand and storytelling built from scratch",
    ],
    tech: ["Unbounce", "ActiveCampaign", "Typeform", "Meta Ads"],
    skills: [
      { label: "Landing Pages", value: 72 },
      { label: "Automation", value: 76 },
      { label: "Hosting", value: 82 },
      { label: "Selling", value: 68 },
      { label: "Campaigning", value: 92 },
    ],
    portfolioImage: "/images/portfolio/container02.jpg",
    projectsHeroImage: "/images/projects/container03.jpg",
    galleryImages: [
      "/images/projects/container14.jpg",
      "/images/projects/container08.jpg",
      "/images/projects/container09.jpg",
      "/images/projects/container07.jpg",
      "/images/projects/container02.jpg",
    ],
    bioPeriod: "2023–24",
    bioRole: "Marketing & Sales Lead",
    bioDescription:
      "At Innate Experiences I established the brand and the storytelling behind it, then filled the coliving cohorts through Meta cross-marketing against LinkedIn audiences, reaching 100% occupancy of every available place.",
    bioImage: "/images/bio/image03.jpg",
    location: "Portugal · hybrid",
  },
  {
    slug: "ironandzen",
    company: "Iron & Zen",
    url: "ironandzen.com",
    linkUrl: "https://ironandzen.com",
    title: "Marketing a Men's Retreat",
    summary:
      "Iron & Zen is a seven-day men's retreat in Portugal, built on a thesis about an underserved audience. I run the brand, the storytelling and the acquisition, and co-host the cohorts on site.",
    challenge:
      "Iron & Zen was built on a thesis about an audience nobody markets to directly: men who are successful on paper and have quietly lost their connection underneath it. That thesis only pays off if the marketing reaches them without naming the thing they won't say out loud. And the content had to keep coming, week after week, without turning into a weekly scramble or a stack of SaaS subscriptions.",
    approach: [
      "Built the brand and the storytelling around the underserved-audience thesis, rather than positioning it as another bootcamp or meditation retreat",
      "Ran acquisition and community building around the cohorts, and co-hosted them on site",
      "Built an automation pipeline that streamlines the content: production and publishing run as a system instead of a weekly scramble, and without the SaaS stack normally bought for it",
    ],
    achievements: [
      "Content production and publishing running as a system, not a weekly scramble",
      "Cohorts filled around a positioning thesis instead of generic retreat marketing",
      "No SaaS stack bought for the content pipeline",
    ],
    tech: ["Instagram", "Astro", "Vercel", "Content automation"],
    skills: [
      { label: "Building", value: 88 },
      { label: "Campaigning", value: 80 },
      { label: "Landing Pages", value: 78 },
      { label: "Project Mgmt", value: 82 },
      { label: "Automation", value: 84 },
    ],
    portfolioImage: "/images/ironandzen/card-dawn-stillness.jpg",
    projectsHeroImage: "/images/ironandzen/hero-details.jpg",
    galleryImages: [
      "/images/ironandzen/hero-fire.jpg",
      "/images/ironandzen/card-iron-work.jpg",
      "/images/ironandzen/gallery-retreat-1.jpg",
      "/images/ironandzen/gallery-retreat-4.jpg",
      "/images/ironandzen/facilitator-edgar.jpg",
    ],
    bioPeriod: "2024–",
    bioRole: "Growth Marketer & Co-Host",
    bioDescription:
      "For Iron & Zen, a seven-day men's retreat in Portugal, I run the brand, storytelling, acquisition and community building, plus the automation pipeline behind the content, and co-host the cohorts on site.",
    bioImage: "/images/ironandzen/facilitator-edgar.jpg",
    location: "Porto, Portugal",
    engagement: "Retainer",
  },
  {
    slug: "pflegeplace",
    company: "Pflegeplace",
    url: "pflegeplace.com",
    linkUrl: "https://pflegeplace.com",
    title: "Creating Nurse Lead Funnels",
    summary:
      "Finding sought-after professionals online isn't easy when the market is competitive. With Pflegeplace I built a funnel to recruit nurses in Germany.",
    challenge:
      "Qualified nurses are in short supply everywhere, and the ones actively open to relocating are already fielding offers from agencies with bigger budgets. Generic job ads don't reach them. Pflegeplace needed to find and win over internationally trained nurses before the competition did, without an in-house recruiting team.",
    approach: [
      "Built the candidate funnel A to Z, from first contact through to handover to the employer",
      "Owned paid acquisition across Meta and Google Ads, targeted at nurses considering relocation to Germany",
      "Ran a self-made automation stack (Zapier, HubSpot, Mailchimp) so leads were qualified and routed without manual follow-up",
      "Carried the commercial side in parallel: controlling and project profitability, investor conversations and financing, talent sourcing and Scrum delivery",
    ],
    achievements: [
      "Candidate funnel built end-to-end, first contact to employer handover",
      "Nurses successfully placed with German employers",
      "Cost-per-lead reduced through targeting on Meta and Google",
    ],
    followUpSlug: "pflegeplace-hub",
    tech: ["HubSpot", "Meta Ads", "Google Ads", "Zapier", "Mailchimp"],
    skills: [
      { label: "Landing Pages", value: 85 },
      { label: "Automation", value: 92 },
      { label: "Project Mgmt", value: 80 },
      { label: "Building", value: 76 },
      { label: "Campaigning", value: 88 },
    ],
    portfolioImage: "/images/portfolio/container04.jpg",
    projectsHeroImage: "/images/projects/container10.jpg",
    galleryImages: [
      "/images/projects/container04.jpg",
      "/images/projects/container12.jpg",
      "/images/projects/container17.jpg",
      "/images/projects/container01.jpg",
      "/images/projects/container41.jpg",
    ],
    bioPeriod: "2021–23",
    bioRole: "Growth & Acquisition Lead",
    bioDescription:
      "At Pflegeplace I built the candidate funnel from first contact to employer handover and owned paid acquisition on Meta and Google, alongside controlling, financing conversations and talent sourcing.",
    bioImage: "/images/bio/image04.jpg",
    location: "Remote",
  },
  {
    slug: "pflegeplace-hub",
    company: "Pflegeplace",
    url: "pflegeplace.com",
    linkUrl: "https://pflegeplace.com",
    title: "Becoming a Kenntnisprüfung Hub",
    summary:
      "Getting nurses into Germany was only ever half the problem. Pflegeplace.com is repositioning from a recruitment funnel into a self-serve hub that helps nurses already here pass the Kenntnisprüfung and get licensed.",
    challenge:
      "Recruiting a nurse into Germany doesn't make her a licensed nurse. She still has to pass the Kenntnisprüfung, the professional recognition exam, before she's allowed to actually work. That's a harder, longer barrier than recruitment ever was, and most of the market is built around getting nurses into the country, not around getting them licensed once they're here. It's the same audience Pflegeplace already knows, at the next step they're stuck on.",
    approach: [
      "Repositioning pflegeplace.com from a recruitment funnel into a self-serve Kenntnisprüfung exam-prep hub",
      "Building it myself with AI coding tools rather than briefing a dev team, the same approach used to build this site",
      "Reusing what the original funnel already proved: the audience is reachable and already trusts the Pflegeplace name",
    ],
    achievements: [
      "Targets the exam-prep gap most competitors ignore, instead of another recruitment funnel",
      "Aims at a stickier, higher-intent audience: nurses already committed to relocating, not cold outreach",
      "In build on the existing pflegeplace.com domain and audience",
    ],
    status: "next",
    hidden: true,
    tech: ["Astro", "Claude Code", "Vercel"],
    skills: [
      { label: "Landing Pages", value: 70 },
      { label: "Automation", value: 68 },
      { label: "Project Mgmt", value: 78 },
      { label: "Building", value: 85 },
      { label: "Campaigning", value: 55 },
    ],
    portfolioImage: "/images/projects/container10.jpg",
    projectsHeroImage: "/images/projects/pflegeplace-hub-details.jpg",
    galleryImages: [
      "/images/projects/container10.jpg",
      "/images/portfolio/container04.jpg",
      "/images/projects/container12.jpg",
      "/images/projects/container01.jpg",
      "/images/projects/container41.jpg",
    ],
    bioPeriod: "2026–",
    bioRole: "Founder",
    bioDescription:
      "Repositioning pflegeplace.com from a nurse-recruitment funnel into a self-serve Kenntnisprüfung exam-prep hub for nurses already in Germany.",
    bioImage: "/images/bio/image04.jpg",
  },
  {
    slug: "icanspeak",
    company: "IcanSpeak",
    url: "icanspeak.it",
    linkUrl: "https://www.icanspeak.it/former-site",
    title: "Growing a School Without Paid Ads",
    summary:
      "IcanSpeak is an online German school that grew without any paid acquisition. B2B clients came in through a LinkedIn drip campaign that carried enquiries all the way to enrolment with no manual follow-up.",
    challenge:
      "German classes are a commodity: anyone can list a course. IcanSpeak needed to look like the credible choice to students who'd never heard of it, with no existing brand or student base to point to, and no ad budget to buy its way in front of them.",
    approach: [
      "Opened up B2B clients through a LinkedIn drip campaign instead of buying reach",
      "Built the drip so enquiries ran through to enrolment without manual follow-up",
      "Built and launched the school on Teachable, from course structure to checkout",
    ],
    achievements: [
      "120 new participants in a single half-year",
      "Grown with no paid acquisition at all",
      "Later grew into an online platform for language learning",
    ],
    tech: ["Teachable", "LinkedIn", "Email automation"],
    skills: [
      { label: "Landing Pages", value: 78 },
      { label: "Automation", value: 82 },
      { label: "Project Mgmt", value: 72 },
      { label: "Building", value: 68 },
      { label: "Campaigning", value: 86 },
    ],
    portfolioImage: "/images/portfolio/container13.jpg",
    projectsHeroImage: "/images/projects/icanspeak/hero-details.jpg",
    galleryImages: [
      "/images/projects/icanspeak/gallery-quality.jpg",
      "/images/projects/icanspeak/gallery-cards.jpg",
      "/images/projects/icanspeak/gallery-testimonials.jpg",
    ],
    bioPeriod: "2021–23",
    bioRole: "Growth Marketing Consultant",
    bioDescription:
      "At IcanSpeak I grew an online German school with no paid acquisition, opening up B2B clients through a LinkedIn drip campaign that carried enquiries to enrolment on its own: 120 new participants in a single half-year.",
    bioImage: "/images/bio/image05.jpg",
    location: "Remote",
  },
  {
    slug: "deutschacademy",
    company: "DeutschAcademy",
    url: "deutschacademy.com",
    linkUrl: "https://deutschacademy.com/former-site",
    title: "From Nurse School to Learning Platform",
    summary:
      "DeutschAcademy started as a German school for trained nurses heading to German employers. Today it's an open platform for general German from A1 to C1, with 412+ learners, built out of real teaching material.",
    challenge:
      "The nurse pipeline into Germany runs through language certification first, and there was no school built specifically around that path, so students defaulted to generic German courses that didn't map to what German employers actually required. The harder problem came later: a school built for one narrow audience had to become a platform anyone learning German could use, without throwing away what made it work for nurses.",
    approach: [
      "Won the first customers and investors, and built the WordPress site and the acquisition funnel",
      "Grew it out from a nurse-focused school into an open platform for general German, A1 to C1, built from real classroom material rather than generic course content",
      "Wired exam prep for telc, Goethe-Zertifikat, TestDaF and DTZ to run in symbiosis with Pflegeplace, so the recruitment side and the learning side feed each other",
    ],
    achievements: [
      "412+ learners on the platform, from A1 to C1",
      "60+ grammar topics and 664 exercises built out",
      "Exam prep for telc, Goethe-Zertifikat, TestDaF and DTZ running alongside Pflegeplace",
    ],
    tech: ["WordPress", "Google Workspace", "Meta Ads", "Canva"],
    skills: [
      { label: "Landing Pages", value: 70 },
      { label: "Automation", value: 62 },
      { label: "Project Mgmt", value: 92 },
      { label: "Building", value: 88 },
      { label: "Campaigning", value: 80 },
    ],
    portfolioImage: "/images/portfolio/container16.jpg",
    projectsHeroImage: "/images/projects/container26.jpg",
    galleryImages: [
      "/images/projects/container27.jpg",
      "/images/projects/container28.jpg",
      "/images/projects/container29.jpg",
      "/images/projects/container30.jpg",
      "/images/projects/container31.jpg",
    ],
    bioPeriod: "2021–",
    bioRole: "Marketing & Growth Lead",
    bioDescription:
      "DeutschAcademy started as a German school for nurses heading to German employers, where I won the first customers and investors and built the site and funnel. It's now an open A1–C1 platform with 412+ learners.",
    bioImage: "/images/bio/image06.jpg",
    location: "Remote",
    engagement: "Retainer",
  },
  {
    slug: "nomavillage",
    company: "NomaVillage",
    url: "nomavillage.com",
    linkUrl: "https://nomavillage.com",
    title: "Finding Home in Lagos",
    summary:
      "NomaVillage grew from a single coliving house into a full coworking-and-coliving base in Lagos, Portugal. I built the marketing systems that took it from launch to a 4.8-star, 172-guest international community.",
    challenge:
      "NomaVillage competes for a small, picky audience: remote workers who could just as easily piece together an Airbnb, a coworking desk, and a yoga class themselves. Generic SEM and social posts don't convert someone comparing that against a real all-inclusive alternative. NomaVillage needed to prove it was cheaper and easier than doing it yourself in Lisbon, not just prettier.",
    approach: [
      "Spent the first year on site as a coliving host, living day to day with exactly the audience the marketing now addresses",
      "Came back on an advisory retainer and took the funnel end to end: paid social, landing pages, copy and conversion, email automation, integrations and the content behind it",
      "Built an automated lead funnel connecting Google Ads and Instagram to ActiveCampaign via Zapier",
      "Integrated paid search with social content so channels reinforced each other instead of running in parallel",
    ],
    achievements: [
      "Grew to 172 guests from 27 countries with a 4.8-star Google rating",
      "All-inclusive €990/month offer that undercuts a DIY Lisbon setup by €700+",
      "Now expanding the space: closed for construction, reopening for the 2026/27 season",
    ],
    tech: ["Google Ads", "Zapier", "ActiveCampaign", "Instagram"],
    skills: [
      { label: "Landing Pages", value: 82 },
      { label: "Automation", value: 90 },
      { label: "Project Mgmt", value: 85 },
      { label: "Building", value: 72 },
      { label: "Campaigning", value: 90 },
    ],
    portfolioImage: "/images/portfolio/container07.jpg",
    projectsHeroImage: "/images/projects/container32.jpg",
    galleryImages: [
      "/images/projects/container33.jpg",
      "/images/projects/container34.jpg",
      "/images/projects/container35.jpg",
      "/images/projects/container36.jpg",
      "/images/projects/container37.jpg",
    ],
    bioPeriod: "2021 · 2025–",
    bioRole: "Coliving Host, then Marketing Manager",
    bioDescription:
      "I spent a year on site as NomaVillage's coliving host, then returned on an advisory retainer to run the marketing: the systems that grew a single Lagos house into a 4.8-star, 172-guest international community.",
    bioImage: "/images/bio/image07.jpg",
    location: "Lagos, Portugal · remote",
    engagement: "Advisory retainer",
  },
  {
    slug: "narangyoga",
    company: "Narangyoga",
    url: "narangyoga.com",
    title: "New Yoga",
    summary:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    challenge:
      "Narangyoga had no brand identity to market yet. Before any campaign could work, the studio needed a visual and verbal identity that gave people a reason to choose it over every other yoga brand on Instagram.",
    approach: [
      "Created the brand identity from scratch: name, visual direction, and voice",
      "Built and automated the lead funnel from Google Ads and Instagram into Mailchimp",
      "Ran SEM and social campaigns to grow the audience around the new identity",
    ],
    achievements: ["Brand identity created from scratch", "Social media audience grown", "Lead funnel automated"],
    tech: ["Instagram", "Canva", "Google Ads", "Mailchimp"],
    skills: [
      { label: "Landing Pages", value: 84 },
      { label: "Automation", value: 76 },
      { label: "Project Mgmt", value: 74 },
      { label: "Building", value: 82 },
      { label: "Campaigning", value: 90 },
    ],
    portfolioImage: "/images/portfolio/container10.jpg",
    projectsHeroImage: "/images/projects/container11.jpg",
    galleryImages: [
      "/images/projects/container21.jpg",
      "/images/projects/container22.jpg",
      "/images/projects/container13.jpg",
      "/images/projects/container38.jpg",
      "/images/projects/container06.jpg",
    ],
    bioPeriod: "2024",
    bioRole: "Marketing Manager",
    bioDescription:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    bioImage: "/images/bio/image08.jpg",
  },
  {
    slug: "colevitate",
    company: "Colevitate",
    url: "colevitate.com",
    linkUrl: "https://colevitate.com",
    title: "Merging Four Personality Frameworks",
    summary:
      "Colevitate takes MBTI, Big Five, Human Design, and 4 Color Types and weaves the results into one combined personality profile, scored across four axes instead of picking a single framework to trust.",
    challenge:
      "Every personality framework has its true believers and its skeptics, and each one only tells part of the story. Nobody was combining MBTI, Big Five, Human Design, and 4 Color Types into a single profile, so anyone curious about themselves had to pick one lens and ignore the others, or run four separate quizzes with no way to reconcile a self-aware Feeler on one test against a colder Thinker on another.",
    approach: [
      "Built the full product myself in Next.js: four independent assessments, a weighted scoring matrix across four combined axes (Energy, Structure, People, Novelty), and a shareable export card",
      "Wired up Google and email-magic-link auth on a Postgres backend via Supabase, with results saved client-side by default so nobody has to sign up just to see themselves",
      "Ran the business analysis myself too: mapped the competitive landscape and confirmed no direct consumer competitor combines this many frameworks into one profile",
    ],
    achievements: [
      "Live at colevitate.com with all four assessments working end-to-end",
      "Full auth and database layer shipped, ready for saved profiles and retake history",
      "Team/workplace and compatibility-matching features mapped as the next build",
    ],
    tech: ["Next.js", "Supabase", "Stripe", "Vercel"],
    skills: [
      { label: "Building", value: 90 },
      { label: "Automation", value: 65 },
      { label: "Project Mgmt", value: 75 },
      { label: "Landing Pages", value: 55 },
      { label: "Campaigning", value: 35 },
    ],
    portfolioImage: "/images/colevitate/gallery-frameworks.jpg",
    projectsHeroImage: "/images/colevitate/hero-details.jpg",
    galleryImages: [
      "/images/colevitate/hero-landing.jpg",
      "/images/colevitate/gallery-frameworks.jpg",
      "/images/colevitate/gallery-combined-profile.jpg",
      "/images/colevitate/gallery-archetype.jpg",
      "/images/colevitate/gallery-connections-graph.jpg",
    ],
    bioPeriod: "2026–",
    bioRole: "Founder & Builder",
    bioDescription:
      "I built Colevitate myself: a personality-assessment studio that combines MBTI, Big Five, Human Design, and 4 Color Types into one scored profile, live at colevitate.com with a real auth and database layer behind it.",
    bioImage: "/images/colevitate/bio-mirror-reflection.jpg",
  },
  {
    slug: "nimbusvault",
    company: "NimbusVault",
    url: "Built for unit.cloud",
    linkUrl: "https://vlogato.com",
    title: "Building a Real CMDB",
    summary:
      "NimbusVault is a single-tenant IT-documentation and CMDB tool I built for unit.cloud's IT department: typed infrastructure records, revision history, a relationship graph, and encrypted credentials, replacing the spreadsheets they were using before.",
    challenge:
      "unit.cloud's IT department was tracking servers, storage, and client environments in spreadsheets and scattered docs: no revision history, no way to see what depended on what, and credentials sitting in plain text wherever someone last pasted them. Off-the-shelf CMDB tools like Docusnap or i-doit are built for teams managing hundreds of assets across many customers, not a single in-house department that needed something closer to a structured wiki.",
    approach: [
      "Built a single-tenant Astro app from scratch: typed records (servers, databases, applications, and free-text docs) with structured fields, full diffed revision history, and a directed relationship graph with cycle detection",
      "Added an encrypted credentials layer (AES-256-GCM, masked by default, every reveal audit-logged) so license keys and passwords stop living in plain text",
      "Iterated against real client requirements: consolidated an early wiki-shaped model and a bolted-on asset table into one unified Collections + Items structure once real usage showed the split was more confusing than useful",
    ],
    achievements: [
      "In active use by unit.cloud's IT department, tracking real servers and infrastructure",
      "Every credential reveal audit-logged; every record change diffed and kept in revision history",
      "Deployed on Vercel + Neon Postgres, with a live English/German UI toggle",
    ],
    tech: ["Astro", "Postgres", "Drizzle", "Vercel"],
    skills: [
      { label: "Building", value: 92 },
      { label: "Automation", value: 58 },
      { label: "Project Mgmt", value: 72 },
      { label: "Landing Pages", value: 20 },
      { label: "Campaigning", value: 10 },
    ],
    portfolioImage: "/images/nimbusvault/gallery-item-fields.jpg",
    projectsHeroImage: "/images/nimbusvault/hero-details.jpg",
    galleryImages: [
      "/images/nimbusvault/hero-collection.jpg",
      "/images/nimbusvault/gallery-item-fields.jpg",
      "/images/nimbusvault/gallery-login.jpg",
      "/images/nimbusvault/gallery-relationships.jpg",
    ],
    bioPeriod: "2026–",
    bioRole: "Builder",
    bioDescription:
      "I built NimbusVault for unit.cloud's IT department: a CMDB tool with typed records, revision history, a relationship graph, and encrypted credentials, replacing the spreadsheets they used before.",
    bioImage: "/images/nimbusvault/bio-server-room.jpg",
    location: "Augsburg · remote",
  },
];

export const bonusExperience = {
  period: "2015–2020",
  role: "Language Teacher",
  company: "Fons, inlingua, Start LF, Alpadia, Eurasia",
  description:
    "Before the marketing work I taught language for five years, in Germany and abroad, for Fons, inlingua, Start LF, Alpadia and Eurasia. China, Korea, the Philippines, and of course Germany, teaching refugees and immigrating professionals.",
  image: "/images/bio/image02.jpg",
};

/**
 * Career entries from the profile that have no project case study of their own:
 * employment and study. Rendered on /profile alongside the project timeline.
 */
export const careerEntries: CareerEntry[] = [
  {
    period: "2021–2022",
    title: "TÜV Rheinland Group — International Recruitment Consultant",
    detail: "International partner acquisition",
  },
  {
    period: "2015–2020",
    title: "Language teaching — Fons, inlingua, Start LF, Alpadia, Eurasia",
    detail: "Germany and abroad",
  },
  {
    period: "Studies",
    title: "Friedrich Schiller University Jena",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
