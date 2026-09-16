/**
 * Skill inventory for the /bio "Workbench" section — every tool from a decade
 * of freelance work, grouped into bins, with each tool linked back to where it
 * was actually used. Sourced from `projects.ts` (tech stacks, approach copy),
 * the bio chronology, and Edgar's early-career CV (teaching contracts in
 * China/Korea, translation work, WordPress/PHP basics) for tools that predate
 * or sit outside the portfolio case studies.
 */

/** A tool was used on a specific portfolio project — links to /projects/[slug]. */
export interface ProjectUsage {
  type: "project";
  slug: string;
  note: string;
}

/** A tool came from general/employment experience with no single portfolio case study. */
export interface ContextUsage {
  type: "context";
  label: string;
  note: string;
}

export type ToolUsage = ProjectUsage | ContextUsage;

export interface ToolItem {
  name: string;
  usedIn: ToolUsage[];
}

export interface ToolBin {
  id: string;
  label: string;
  blurb: string;
  items: ToolItem[];
}

export const TOOL_BINS: ToolBin[] = [
  {
    id: "webcode",
    label: "Web & Code",
    blurb: "Built pages, funnels and web integrations from scratch across a decade of freelance work.",
    items: [
      {
        name: "HTML",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Hand-built the markup for the enrollment site and course pages." },
        ],
      },
      {
        name: "CSS",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Styled the enrollment site's course and pricing pages." },
        ],
      },
      {
        name: "JavaScript",
        usedIn: [
          { type: "project", slug: "colevitate", note: "Built the four-assessment scoring engine and profile UI in Next.js." },
          { type: "project", slug: "nimbusvault", note: "Built the CMDB's typed records and revision-history UI in Astro." },
        ],
      },
      {
        name: "PHP",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Templated the WordPress backend for the DeutschAcademy site." },
        ],
      },
      {
        name: "WordPress",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Built the enrollment site and funnel from scratch." },
        ],
      },
      {
        name: "Elementor",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Laid out the course and pricing pages on top of the WordPress build." },
        ],
      },
      {
        name: "D3.js",
        usedIn: [
          { type: "project", slug: "colevitate", note: "Rendered the interactive graph linking personality-framework results." },
        ],
      },
      {
        name: "DOM scripting",
        usedIn: [
          { type: "project", slug: "ironandzen", note: "Hand-built the daily-schedule storytelling and application flow." },
          { type: "project", slug: "nimbusvault", note: "Built the relationship graph's cycle detection and revision diffing." },
        ],
      },
    ],
  },
  {
    id: "design",
    label: "Design & Visual",
    blurb: "Branding, layout and photo editing for every campaign, coliving space and course launch.",
    items: [
      {
        name: "Adobe Photoshop",
        usedIn: [
          { type: "project", slug: "ironandzen", note: "Retouched retreat photography for the site and campaign creative." },
          { type: "project", slug: "nomavillage", note: "Prepared coliving campaign creative for Google Ads and Instagram." },
        ],
      },
      {
        name: "Adobe Lightroom",
        usedIn: [
          { type: "project", slug: "ironandzen", note: "Color-graded retreat photography across every gallery batch." },
          { type: "project", slug: "nomavillage", note: "Edited guest and property photography for campaign use." },
        ],
      },
      {
        name: "Adobe Illustrator",
        usedIn: [
          { type: "project", slug: "ironandzen", note: "Built the Iron / Zen / Brotherhood brand mark and visual system." },
          { type: "project", slug: "narangyoga", note: "Created the brand identity from scratch: name, mark, visual direction." },
        ],
      },
      {
        name: "Canva",
        usedIn: [
          { type: "project", slug: "deutschacademy", note: "Produced enrollment campaign creative for DeutschAcademy." },
          { type: "project", slug: "narangyoga", note: "Produced social and campaign creative around the new brand identity." },
        ],
      },
      {
        name: "Figma",
        usedIn: [
          { type: "project", slug: "colevitate", note: "Designed the four-assessment flow and combined-profile screens." },
          { type: "project", slug: "nimbusvault", note: "Designed the collections, item and relationship-graph views." },
        ],
      },
      {
        name: "Miro",
        usedIn: [
          {
            type: "context",
            label: "Freelance project planning",
            note: "Mapped funnel flows and build roadmaps before writing a line of code, across every project on this wall.",
          },
        ],
      },
    ],
  },
  {
    id: "growth",
    label: "Growth & Paid Media",
    blurb: "SEO and paid campaigns that moved real numbers — CTR 1%→3%, retention 15%→35%.",
    items: [
      {
        name: "SEO / SEM",
        usedIn: [
          { type: "project", slug: "nomavillage", note: "Ran and optimised SEM campaigns targeting nomads weighing Lagos against Lisbon." },
        ],
      },
      {
        name: "Google Ads",
        usedIn: [
          { type: "project", slug: "icanspeak", note: "Ran Google Ads to find IcanSpeak's first students without a referral base." },
          { type: "project", slug: "nomavillage", note: "Drove nomad-intent search traffic into the NomaVillage lead funnel." },
          { type: "project", slug: "narangyoga", note: "Grew the new Narangyoga identity's audience through search." },
        ],
      },
      {
        name: "Meta Ads",
        usedIn: [
          { type: "project", slug: "innate", note: "Targeted digital nomads by travel/work intent instead of generic coliving keywords." },
          { type: "project", slug: "deutschacademy", note: "Acquired German healthcare clients as placement partners." },
        ],
      },
      {
        name: "Social Media Marketing",
        usedIn: [
          { type: "project", slug: "innate", note: "Fostered the community that kept Innate always sold out." },
          { type: "project", slug: "nomavillage", note: "Integrated Instagram with paid search so channels reinforced each other." },
          { type: "project", slug: "narangyoga", note: "Grew the audience around the new Narangyoga identity." },
        ],
      },
      {
        name: "Story Branding",
        usedIn: [
          { type: "project", slug: "ironandzen", note: "Shaped the Iron/Zen/Brotherhood narrative the whole brand is built on." },
        ],
      },
      {
        name: "Funnel Building",
        usedIn: [
          { type: "project", slug: "pflegeplace", note: "Owned the funnel end-to-end: landing pages, lead scoring, nurture sequences." },
          { type: "project", slug: "nomavillage", note: "Built an automated lead funnel connecting Google Ads and Instagram to ActiveCampaign." },
        ],
      },
      {
        name: "Persona Research",
        usedIn: [
          { type: "project", slug: "innate", note: "Profiled digital nomads by travel/work intent rather than generic keywords." },
          { type: "project", slug: "nomavillage", note: "Positioned NomaVillage against a DIY Lisbon setup for the same audience." },
        ],
      },
    ],
  },
  {
    id: "crm",
    label: "CRM & Marketing SaaS",
    blurb: "The stack behind every lead-gen funnel: capture, automate, nurture, close.",
    items: [
      {
        name: "ActiveCampaign",
        usedIn: [
          { type: "project", slug: "innate", note: "Ran nurture sequences fed by Typeform-qualified leads." },
          { type: "project", slug: "nomavillage", note: "Nurtured leads captured from Google Ads and Instagram via Zapier." },
        ],
      },
      {
        name: "HubSpot",
        usedIn: [
          { type: "project", slug: "pflegeplace", note: "Qualified and routed nurse leads without manual follow-up." },
        ],
      },
      {
        name: "Brevo",
        usedIn: [
          {
            type: "context",
            label: "Freelance CRM & email work",
            note: "Ran email nurture sequences for freelance marketing clients outside the portfolio case studies.",
          },
        ],
      },
      {
        name: "Zapier",
        usedIn: [
          { type: "project", slug: "pflegeplace", note: "Built the self-made automation stack that qualified and routed leads." },
          { type: "project", slug: "nomavillage", note: "Connected Google Ads and Instagram into ActiveCampaign automatically." },
        ],
      },
      {
        name: "Typeform",
        usedIn: [
          { type: "project", slug: "innate", note: "Qualified leads before they reached the ActiveCampaign nurture sequence." },
        ],
      },
      {
        name: "LinkedIn Sales Navigator",
        usedIn: [
          { type: "project", slug: "icanspeak", note: "Found IcanSpeak's first paying students through direct outreach." },
        ],
      },
      {
        name: "LinkedHelper",
        usedIn: [
          { type: "project", slug: "icanspeak", note: "Automated LinkedIn outreach to scale student acquisition." },
        ],
      },
      {
        name: "Clearbyte",
        usedIn: [
          {
            type: "context",
            label: "Freelance lead-gen work",
            note: "Enriched outbound prospecting lists for freelance marketing clients.",
          },
        ],
      },
    ],
  },
  {
    id: "pm",
    label: "Project & Agile Systems",
    blurb: "Scrum since 2021 — from a Philippine lead-gen startup to a 4,000-seat enterprise rollout.",
    items: [
      {
        name: "ClickUp",
        usedIn: [
          { type: "project", slug: "pflegeplace", note: "Ran the funnel build and lead-scoring work as tracked sprints." },
          { type: "project", slug: "nomavillage", note: "Tracked the campaign and automation roadmap end-to-end." },
        ],
      },
      {
        name: "Jira",
        usedIn: [
          {
            type: "context",
            label: "Enterprise IT contract",
            note: "Tracked the migration backlog for a 4,000-seat enterprise IT rollout.",
          },
        ],
      },
      {
        name: "Roadmunk",
        usedIn: [
          {
            type: "context",
            label: "Enterprise IT contract",
            note: "Sequenced the 700-file-server-to-cloud migration roadmap.",
          },
        ],
      },
      {
        name: "Scrum",
        usedIn: [
          {
            type: "context",
            label: "Running since 2021",
            note: "From a Philippine lead-gen startup through to the enterprise IT rollout.",
          },
        ],
      },
      {
        name: "Kanban",
        usedIn: [
          { type: "project", slug: "pflegeplace", note: "Moved leads through qualification stages visibly, end-to-end." },
          { type: "project", slug: "nomavillage", note: "Tracked campaign work in progress across channels." },
        ],
      },
      {
        name: "MoSCoW Method",
        usedIn: [
          {
            type: "context",
            label: "Enterprise IT contract",
            note: "Prioritised the scope of the 700-server cloud migration.",
          },
        ],
      },
      {
        name: "User Stories",
        usedIn: [
          {
            type: "context",
            label: "Enterprise IT contract",
            note: "Wrote migration requirements from the affected teams' point of view.",
          },
        ],
      },
      {
        name: "Release Burn-up Charts",
        usedIn: [
          {
            type: "context",
            label: "Enterprise IT contract",
            note: "Tracked migration progress across the 4,000-seat rollout.",
          },
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "AI & E-Learning Platforms",
    blurb: "A decade of remote classrooms across four continents, now paired with AI tooling.",
    items: [
      {
        name: "ChatGPT",
        usedIn: [
          { type: "project", slug: "pflegeplace-hub", note: "Used AI coding tools to build the exam-prep hub solo instead of briefing a dev team." },
          { type: "project", slug: "colevitate", note: "Built the full assessment product solo with AI-assisted coding." },
          { type: "project", slug: "nimbusvault", note: "Built the CMDB from scratch with AI-assisted coding, iterated against real client requirements." },
        ],
      },
      {
        name: "Midjourney",
        usedIn: [
          {
            type: "context",
            label: "Freelance creative work",
            note: "Generated campaign concept art for freelance marketing clients.",
          },
        ],
      },
      {
        name: "Zoom",
        usedIn: [
          {
            type: "context",
            label: "Self-employed German teacher, 2016–17",
            note: "Taught German and Business Language remotely for relocation-agency clients (Eurasia Institute, Alpadia, Startcon).",
          },
        ],
      },
      {
        name: "Moodle",
        usedIn: [
          { type: "project", slug: "icanspeak", note: "Delivered course content for the online German school." },
        ],
      },
      {
        name: "Dropbox Paper",
        usedIn: [
          {
            type: "context",
            label: "Freelance course & project work",
            note: "Shared course materials and project docs with clients and students.",
          },
        ],
      },
      {
        name: "Google Docs",
        usedIn: [
          {
            type: "context",
            label: "Freelance course & project work",
            note: "Drafted course content, briefs and campaign copy across every project on this wall.",
          },
        ],
      },
      {
        name: "Blink Learning",
        usedIn: [
          {
            type: "context",
            label: "Private-school teaching abroad",
            note: "Assigned and graded coursework for English and German classes in China and Korea.",
          },
        ],
      },
      {
        name: "Fidelio LMS",
        usedIn: [
          {
            type: "context",
            label: "Private-school teaching abroad",
            note: "Managed classroom content for adult English and German learners abroad.",
          },
        ],
      },
      {
        name: "Smartboard Systems",
        usedIn: [
          {
            type: "context",
            label: "Walles Language School, Qingdao & Times Academy, Seoul",
            note: "Taught adults and children with interactive smartboards, 2015–16.",
          },
        ],
      },
    ],
  },
];

export const toolkitTotals = {
  toolCount: TOOL_BINS.reduce((sum, bin) => sum + bin.items.length, 0),
  binCount: TOOL_BINS.length,
};
