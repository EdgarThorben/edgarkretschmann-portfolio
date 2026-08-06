export interface SkillPoint {
  label: string;
  value: number; // 0–100
}

export interface Project {
  slug: string;
  company: string;
  url: string;
  title: string; // canonical project headline, e.g. "Redefining Co-living"
  summary: string; // short description used on /portfolio cards
  challenge: string; // the problem/context, used on /projects and /projects/[slug]
  approach: string[]; // what was actually done, rendered as a bulleted list
  achievements: string[]; // outcomes/results, or forward-looking milestones when status is "next"
  status?: "next"; // marks an in-progress/upcoming project — swaps "Outcome" for "What's next" in the UI
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
