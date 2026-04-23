import type { Metadata } from "next";
import Link from "next/link";
import { PolygonBackground } from "@/components/PolygonBackground";

export const metadata: Metadata = {
  title: "Projects — Edgar Kretschmann",
  description:
    "A detailed showcase of Edgar Kretschmann's projects — from co-living communities to nurse recruitment funnels and online language schools.",
};

const DARK: React.CSSProperties = { backgroundColor: "#302D36" };

const PILL_BTN: React.CSSProperties = {
  backgroundColor: "rgba(222,241,255,0.92)",
  color: "#000",
  borderRadius: "50px",
  padding: "0 20px",
  lineHeight: "44px",
  fontSize: "14px",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  textDecoration: "none",
};

const CIRCLE_BTN: React.CSSProperties = {
  ...PILL_BTN,
  width: "44px",
  padding: "0",
  justifyContent: "center",
  borderRadius: "50%",
  flexShrink: 0,
};

const projects = [
  {
    slug: "project1",
    title: "Innate",
    subtitle: "Redefining Co-living",
    url: "innate.global",
    description:
      "In our time and age working remotely is becoming the new norm for many people. With innate I created unforgettable moments in communities.",
    achievements: ["Always sold out", "Excellent Reviews", "High Customer Retention"],
    tech: ["Unbounce", "Active Campaign", "Typeform", "Webflow"],
    skills: ["Community Management", "Content Strategy", "Paid Social", "Email Marketing"],
    heroImage: "/images/projects/container03.jpg",
    galleryImages: ["/images/projects/container14.jpg", "/images/projects/container08.jpg", "/images/projects/container09.jpg"],
  },
  {
    slug: "project2",
    title: "Pflegeplace",
    subtitle: "Creating Nurse Lead Funnels",
    url: "pflegeplace.com",
    description:
      "Finding sough after professionals online isn't easy when the market is so competetive. With Pflegeplace I build a funnel to recruit Nurses in Germany",
    achievements: ["Automated lead funnel built end-to-end", "Nurses successfully recruited for Germany", "Cost-per-lead reduced through targeting"],
    tech: ["HubSpot", "LinkedIn Ads", "Zapier"],
    skills: ["Lead Generation", "Marketing Automation", "LinkedIn Ads", "CRM"],
    heroImage: "/images/projects/container10.jpg",
    galleryImages: ["/images/projects/container12.jpg"],
  },
  {
    slug: "project3",
    title: "IcanSpeak",
    subtitle: "Building an Online School",
    url: "icanspeak.de",
    description:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    achievements: ["Online school launched and scaled", "Hundreds of students enrolled", "LinkedIn lead generation pipeline built"],
    tech: ["Teachable", "LinkedIn", "Google Ads"],
    skills: ["Digital Marketing", "Sales Funnels", "Content Creation", "SEO"],
    heroImage: "/images/projects/container20.jpg",
    galleryImages: ["/images/projects/container16.jpg"],
  },
  {
    slug: "project4",
    title: "DeutschAcademy",
    subtitle: "Brick and Mortar German School",
    url: "deutschacademy.com",
    description:
      "At DeutschAcademy, I helped developing a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    achievements: ["School opened in Manila", "Investors secured", "First cohort of nurses enrolled"],
    tech: ["WordPress", "Meta Ads", "Google Analytics"],
    skills: ["Project Management", "Business Development", "WordPress", "Social Media"],
    heroImage: "/images/projects/container26.jpg",
    galleryImages: ["/images/projects/container28.jpg"],
  },
  {
    slug: "project5",
    title: "Nomavillage",
    subtitle: "High Class Colive",
    url: "nomavillage.com",
    description:
      "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    achievements: ["Lead funnel automated end-to-end", "SEM + social integration achieved", "Guest satisfaction rates high"],
    tech: ["ActiveCampaign", "Google Ads", "Meta Ads"],
    skills: ["Marketing Management", "SEM", "Automation", "Brand Strategy"],
    heroImage: "/images/projects/container32.jpg",
    galleryImages: ["/images/projects/container22.jpg"],
  },
  {
    slug: "project6",
    title: "Narangyoga",
    subtitle: "New Yoga",
    url: "narangyoga.com",
    description:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    achievements: ["Brand identity created from scratch", "Lead funnel deployed", "Social media growth achieved"],
    tech: ["Canva", "Meta Ads", "Mailchimp"],
    skills: ["Brand Creation", "Marketing Strategy", "Social Media", "Email Marketing"],
    heroImage: "/images/projects/container11.jpg",
    galleryImages: [],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "var(--font-inter)" }}>
      <PolygonBackground />

      <div className="relative z-10 flex flex-col items-center py-10 px-4 gap-0">
        {/* Back link */}
        <div className="w-full max-w-4xl mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#596269" }}
          >
            ← Home
          </Link>
        </div>

        {/* Page header */}
        <div className="w-full max-w-4xl mb-10 rounded-3xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <div className="px-8 py-8" style={DARK}>
            <p className="text-white font-bold uppercase tracking-widest mb-2" style={{ fontSize: "12px", opacity: 0.6 }}>
              Portfolio Details
            </p>
            <h1 className="text-white font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              All Projects
            </h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", marginTop: "6px" }}>
              A deep dive into each engagement
            </p>
          </div>
          <div className="px-8 py-4 flex items-center gap-3" style={DARK}>
            <Link href="/portfolio" style={PILL_BTN}>← Back to Portfolio</Link>
          </div>
        </div>

        {/* Project sections */}
        {projects.map((project, index) => (
          <section
            key={project.slug}
            id={project.slug}
            className="w-full max-w-4xl mb-12"
          >
            {/* Hero image */}
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ height: "clamp(300px, 45vw, 520px)", boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(48,45,54,0.92) 100%)" }}
              />
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                <p
                  className="font-bold uppercase tracking-widest mb-1"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <h2 className="text-white font-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  {project.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", marginTop: "2px" }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Dark nav strip */}
            <div
              className="px-6 py-3 flex items-center gap-3 rounded-b-xl -mt-1"
              style={{ ...DARK, borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {index > 0 && (
                <a href={`#${projects[index - 1].slug}`} style={CIRCLE_BTN} aria-label="Previous project">←</a>
              )}
              {index < projects.length - 1 && (
                <a href={`#${projects[index + 1].slug}`} style={PILL_BTN}>
                  ↓ Next: {projects[index + 1].title}
                </a>
              )}
              <Link href={`/${project.slug}`} style={{ ...PILL_BTN, marginLeft: "auto" }}>
                View Details →
              </Link>
            </div>

            {/* Content card */}
            <div
              className="bg-white rounded-3xl overflow-hidden mt-4"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Text */}
                <div className="flex-1 p-7">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#999" }}>
                    {project.url}
                  </p>
                  <h3 className="font-bold mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "#1a1a1a" }}>
                    {project.subtitle}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#4a5568", fontSize: "15px" }}>
                    {project.description}
                  </p>
                </div>

                {/* Gallery */}
                {project.galleryImages.length > 0 && (
                  <div className="flex flex-row md:flex-col gap-1 p-2 md:w-40 flex-shrink-0">
                    {project.galleryImages.slice(0, 2).map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-xl flex-1" style={{ minHeight: "80px" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={`${project.title} ${i + 2}`}
                          className="w-full h-full object-cover"
                          style={{ minHeight: "80px" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Skills + achievements */}
              <div className="px-7 pb-7 flex flex-col gap-5 border-t" style={{ borderColor: "#f0f0f0", paddingTop: "20px" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a", fontSize: "14px" }}>Achievements</h4>
                    <ul className="space-y-1" style={{ color: "#4a5568", fontSize: "13px" }}>
                      {project.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-1">
                          <span style={{ color: "var(--brand-accent)", marginTop: "1px" }}>▸</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a", fontSize: "14px" }}>Tech Stack</h4>
                    <ul className="space-y-1" style={{ color: "#4a5568", fontSize: "13px" }}>
                      {project.tech.map((t) => (
                        <li key={t} className="flex items-start gap-1">
                          <span style={{ color: "var(--brand-accent)", marginTop: "1px" }}>▸</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a", fontSize: "14px" }}>Skill Set</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map((s) => (
                        <span
                          key={s}
                          style={{
                            backgroundColor: "#EDF2F7",
                            color: "#4a5568",
                            borderRadius: "50px",
                            padding: "3px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom nav strip */}
              <div className="px-7 py-4 flex items-center gap-3" style={DARK}>
                {index > 0 ? (
                  <a href={`#${projects[index - 1].slug}`} style={CIRCLE_BTN} aria-label="Previous">←</a>
                ) : (
                  <Link href="/portfolio" style={CIRCLE_BTN}>←</Link>
                )}
                <Link href="/portfolio" style={PILL_BTN}>← Back to Portfolio</Link>
                {index < projects.length - 1 && (
                  <a href={`#${projects[index + 1].slug}`} style={{ ...CIRCLE_BTN, marginLeft: "auto" }}>↓</a>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Contact section */}
        <div
          id="touch"
          className="w-full max-w-4xl rounded-3xl overflow-hidden mb-8"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
        >
          <div className="px-8 py-10 text-center" style={DARK}>
            <p className="font-bold uppercase tracking-widest mb-4" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
              Ready to work together?
            </p>
            <h2 className="text-white font-bold mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Get in Touch
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:edgar@edgarkretschmann.com"
                style={{
                  ...PILL_BTN,
                  backgroundColor: "var(--brand-accent)",
                  color: "#fff",
                  fontSize: "15px",
                  lineHeight: "48px",
                  padding: "0 28px",
                }}
              >
                ✉ Email me
              </a>
              <Link href="/portfolio" style={{ ...PILL_BTN, fontSize: "15px", lineHeight: "48px", padding: "0 28px" }}>
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
