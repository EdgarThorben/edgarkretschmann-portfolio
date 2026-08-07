export interface SkillPoint {
  label: string;
  value: number; // 0–100
}

export interface Project {
  slug: string;
  company: string;
  url: string;
  linkUrl?: string; // full https URL to link `url` to, when the live site should be clickable
  title: string; // canonical project headline, e.g. "Redefining Co-living"
  summary: string; // short description used on /portfolio cards
  challenge: string; // the problem/context, used on /projects and /projects/[slug]
  approach: string[]; // what was actually done, rendered as a bulleted list
  achievements: string[]; // outcomes/results, or forward-looking milestones when status is "next"
  status?: "next"; // marks an in-progress/upcoming project — swaps "Outcome" for "What's next" in the UI
  hidden?: boolean; // excluded from all listing pages (home/portfolio/projects/bio); still reachable directly at /projects/[slug]
  followUpSlug?: string; // slug of a hidden project this one leads into — renders a discovery teaser on the project detail page
  tech: string[];
  skills: SkillPoint[];
  portfolioImage: string;
  projectsHeroImage: string;
  galleryImages: string[];
  bioPeriod: string;
  bioRole: string;
  bioDescription: string;
  bioImage: string;
}
