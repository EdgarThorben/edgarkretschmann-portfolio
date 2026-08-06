import type { Project } from "../types";

/**
 * Single source of truth for all 7 projects, consumed by /portfolio, /projects,
 * /projects/[slug], and /bio. Resolves wording divergences found across the
 * original Carrd mirrors' mobile/desktop duplicate DOM (e.g. "Redefining
 * Co-living" over "Co-lives", "Creating Nurse Lead Funnels" over "Finding
 * Nurses") and fixes typos ("sough after" -> "sought-after", "competetive" ->
 * "competitive"). Gallery images use the exact container groupings confirmed
 * against the projects.edgarkretschmann.com mirror's six gallery sections.
 */
export const projects: Project[] = [
  {
    slug: "innate",
    company: "Innate",
    url: "innate.global",
    title: "Redefining Co-living",
    summary:
      "In our time and age working remotely is becoming the new norm for many people. With Innate I created unforgettable moments in communities.",
    challenge:
      "A coliving house can be fully booked and still feel dead — bookings alone don't create the community that makes guests rebook and refer friends. Innate needed a way to turn remote workers who'd never met into a group that actually showed up for each other, not just a room.",
    approach: [
      "Ran the community calendar and member touchpoints across every location, not just the booking funnel",
      "Built location-specific Unbounce landing pages feeding Typeform-qualified leads into ActiveCampaign nurture sequences",
      "Managed Meta Ads targeting digital nomads by travel/work intent rather than generic coliving keywords",
    ],
    achievements: ["Always sold out", "Excellent reviews", "High customer retention"],
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
    bioRole: "Marketing + Community Manager",
    bioDescription:
      "As a Community Manager & Digital Marketing Expert at Innate, I connected digital nomads to global coliving spaces, fostering a vibrant community and driving growth through targeted digital strategies.",
    bioImage: "/images/bio/image03.jpg",
  },
  {
    slug: "pflegeplace",
    company: "Pflegeplace",
    url: "pflegeplace.com",
    title: "Creating Nurse Lead Funnels",
    summary:
      "Finding sought-after professionals online isn't easy when the market is competitive. With Pflegeplace I built a funnel to recruit nurses in Germany.",
    challenge:
      "Qualified nurses are in short supply everywhere, and the ones actively open to relocating are already fielding offers from agencies with bigger budgets. Generic job ads don't reach them — Pflegeplace needed to find and win over internationally trained nurses before the competition did, without an in-house recruiting team.",
    approach: [
      "Built a self-made automation stack (Zapier, HubSpot, Mailchimp) so leads were qualified and routed without manual follow-up",
      "Ran LinkedIn Ads campaigns targeted specifically at nurses considering relocation to Germany",
      "Owned the funnel end-to-end — landing pages, lead scoring, and nurture sequences",
    ],
    achievements: [
      "Automated lead funnel built end-to-end",
      "Nurses successfully recruited for Germany",
      "Cost-per-lead reduced through targeting",
    ],
    tech: ["HubSpot", "LinkedIn Ads", "Zapier", "Mailchimp"],
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
    bioPeriod: "2020–23",
    bioRole: "Marketing + Project Management",
    bioDescription:
      "At Pflegeplace, I built a lead funnel using self-made automation tools and social media marketing to recruit foreign nurses for healthcare positions across Germany.",
    bioImage: "/images/bio/image04.jpg",
  },
  {
    slug: "pflegeplace-hub",
    company: "Pflegeplace",
    url: "pflegeplace.com",
    title: "Becoming a Kenntnisprüfung Hub",
    summary:
      "Getting nurses into Germany was only ever half the problem. Pflegeplace.com is repositioning from a recruitment funnel into a self-serve hub that helps nurses already here pass the Kenntnisprüfung and get licensed.",
    challenge:
      "Recruiting a nurse into Germany doesn't make her a licensed nurse — she still has to pass the Kenntnisprüfung, the professional recognition exam, before she's allowed to actually work. That's a harder, longer barrier than recruitment ever was, and most of the market is built around getting nurses into the country, not around getting them licensed once they're here. It's the same audience Pflegeplace already knows, at the next step they're stuck on.",
    approach: [
      "Repositioning pflegeplace.com from a recruitment funnel into a self-serve Kenntnisprüfung exam-prep hub",
      "Building it myself with AI coding tools rather than briefing a dev team — the same approach used to build this site",
      "Reusing what the original funnel already proved: the audience is reachable and already trusts the Pflegeplace name",
    ],
    achievements: [
      "Targets the exam-prep gap most competitors ignore, instead of another recruitment funnel",
      "Aims at a stickier, higher-intent audience — nurses already committed to relocating, not cold outreach",
      "In build on the existing pflegeplace.com domain and audience",
    ],
    status: "next",
    tech: ["Astro", "Claude Code", "Vercel"],
    skills: [
      { label: "Landing Pages", value: 70 },
      { label: "Automation", value: 68 },
      { label: "Project Mgmt", value: 78 },
      { label: "Building", value: 85 },
      { label: "Campaigning", value: 55 },
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
    bioPeriod: "2026–",
    bioRole: "Founder",
    bioDescription:
      "Repositioning pflegeplace.com from a nurse-recruitment funnel into a self-serve Kenntnisprüfung exam-prep hub for nurses already in Germany.",
    bioImage: "/images/bio/image04.jpg",
  },
  {
    slug: "icanspeak",
    company: "IcanSpeak",
    url: "icanspeak.de",
    title: "Building an Online School",
    summary:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    challenge:
      "German classes are a commodity — anyone can list a course. IcanSpeak needed to look like the credible choice to students who'd never heard of it, with no existing brand or student base to point to.",
    approach: [
      "Built and launched the school on Teachable, from course structure to checkout",
      "Ran LinkedIn outreach and Google Ads to find first students without a referral base",
      "Managed enrollment campaigns end-to-end, from ad to paying student",
    ],
    achievements: [
      "Online school launched and scaled",
      "Hundreds of students enrolled",
      "LinkedIn lead-generation pipeline built",
    ],
    tech: ["Teachable", "LinkedIn", "Google Ads"],
    skills: [
      { label: "Landing Pages", value: 78 },
      { label: "Automation", value: 82 },
      { label: "Project Mgmt", value: 72 },
      { label: "Building", value: 68 },
      { label: "Campaigning", value: 86 },
    ],
    portfolioImage: "/images/portfolio/container13.jpg",
    projectsHeroImage: "/images/projects/container20.jpg",
    galleryImages: [
      "/images/projects/container15.jpg",
      "/images/projects/container16.jpg",
      "/images/projects/container24.jpg",
      "/images/projects/container23.jpg",
      "/images/projects/container25.jpg",
    ],
    bioPeriod: "2021–22",
    bioRole: "Marketing + Project Management",
    bioDescription:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    bioImage: "/images/bio/image05.jpg",
  },
  {
    slug: "deutschacademy",
    company: "DeutschAcademy",
    url: "deutschacademy.com",
    title: "Brick and Mortar German School",
    summary:
      "At DeutschAcademy, I helped develop a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    challenge:
      "The Philippines-to-Germany nurse pipeline runs through language certification first — but Manila had no school built specifically around that path, so students defaulted to generic German courses that didn't map to what German hospitals actually required.",
    approach: [
      "Co-founded a brick-and-mortar school in Manila built around the Philippines-to-Germany nurse pipeline",
      "Built the WordPress site and enrollment funnel from scratch",
      "Secured investors and acquired German healthcare clients as placement partners",
    ],
    achievements: ["School founded in Manila", "Investors secured", "German healthcare clients acquired"],
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
    bioPeriod: "2018–19",
    bioRole: "Founder + Project Management",
    bioDescription:
      "At DeutschAcademy, I developed a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    bioImage: "/images/bio/image06.jpg",
  },
  {
    slug: "nomavillage",
    company: "Nomavillage",
    url: "nomavillage.com",
    title: "High Class Colive",
    summary:
      "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    challenge:
      "Nomavillage sits at the premium end of coliving, which means it's competing for a smaller, pickier audience than budget coliving brands — generic SEM and social posting wasn't going to convert people used to a higher bar.",
    approach: [
      "Built an automated lead funnel connecting Google Ads and Instagram to ActiveCampaign via Zapier",
      "Ran and optimised SEM campaigns targeted at the premium coliving audience specifically",
      "Integrated paid search with social content so channels reinforced each other instead of running in parallel",
    ],
    achievements: ["Lead automation system deployed", "SEM campaigns launched and optimised", "Social growth across channels"],
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
    bioPeriod: "2024",
    bioRole: "Marketing Manager",
    bioDescription:
      "At Nomavillage, I managed marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    bioImage: "/images/bio/image07.jpg",
  },
  {
    slug: "narangyoga",
    company: "Narangyoga",
    url: "narangyoga.com",
    title: "New Yoga",
    summary:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    challenge:
      "Narangyoga had no brand identity to market yet — before any campaign could work, the studio needed a visual and verbal identity that gave people a reason to choose it over every other yoga brand on Instagram.",
    approach: [
      "Created the brand identity from scratch — name, visual direction, and voice",
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
];

export const bonusExperience = {
  period: "Throughout",
  role: "Language Teacher",
  company: "Global Experience",
  description:
    "All the while I was teaching hundreds of students around the world. I have been to China, Korea, the Philippines, and of course Germany, to teach refugees and immigrating professionals.",
  image: "/images/bio/image02.jpg",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
