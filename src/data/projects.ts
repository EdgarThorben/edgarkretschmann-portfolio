import type { Project } from "../types";

/**
 * Single source of truth for all 6 projects, consumed by /portfolio, /projects,
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
    detail: [
      "In our time and age working remotely is becoming the new norm for many people. With Innate I created unforgettable moments in communities.",
      "As a Community Manager & Digital Marketing Expert at Innate, I connected digital nomads to global coliving spaces, fostering a vibrant community and driving growth through targeted digital strategies.",
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
    bioImage: "/images/bio/image05.jpg",
  },
  {
    slug: "pflegeplace",
    company: "Pflegeplace",
    url: "pflegeplace.com",
    title: "Creating Nurse Lead Funnels",
    summary:
      "Finding sought-after professionals online isn't easy when the market is competitive. With Pflegeplace I built a funnel to recruit nurses in Germany.",
    detail: [
      "Finding sought-after professionals online isn't easy when the market is competitive. With Pflegeplace I built a funnel to recruit nurses in Germany.",
      "At Pflegeplace, I built a lead funnel using self-made automation tools and social media marketing to recruit foreign nurses for healthcare positions across Germany.",
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
    bioImage: "/images/bio/image03.jpg",
  },
  {
    slug: "icanspeak",
    company: "IcanSpeak",
    url: "icanspeak.de",
    title: "Building an Online School",
    summary:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    detail: [
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
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
    bioImage: "/images/bio/image04.jpg",
  },
  {
    slug: "deutschacademy",
    company: "DeutschAcademy",
    url: "deutschacademy.com",
    title: "Brick and Mortar German School",
    summary:
      "At DeutschAcademy, I helped develop a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    detail: [
      "At DeutschAcademy, I helped develop a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
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
    bioImage: "/images/bio/image02.jpg",
  },
  {
    slug: "nomavillage",
    company: "Nomavillage",
    url: "nomavillage.com",
    title: "High Class Colive",
    summary:
      "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    detail: [
      "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
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
    bioImage: "/images/bio/image06.jpg",
  },
  {
    slug: "narangyoga",
    company: "Narangyoga",
    url: "narangyoga.com",
    title: "New Yoga",
    summary:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    detail: [
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
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
    bioImage: "/images/bio/image07.jpg",
  },
];

export const bonusExperience = {
  period: "Throughout",
  role: "Language Teacher",
  company: "Global Experience",
  description:
    "All the while I was teaching hundreds of students around the world. I have been to China, Korea, the Philippines, and of course Germany, to teach refugees and immigrating professionals.",
  image: "/images/bio/image08.jpg",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
