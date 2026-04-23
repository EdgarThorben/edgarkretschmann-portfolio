import type { Metadata } from "next";
import Link from "next/link";
import { PolygonBackground } from "@/components/PolygonBackground";

export const metadata: Metadata = {
  title: "Portfolio — Edgar Kretschmann",
  description:
    "Projects by Edgar Kretschmann — from coliving communities to nurse recruitment funnels and online language schools.",
};

const projects = [
  {
    slug: "project1",
    title: "Innate",
    category: "Redefining Co-lives",
    description:
      "In our time and age working remotely is becoming the new norm for many people. With innate I created unforgettable moments in communities.",
    image: "/images/portfolio/container02.jpg",
  },
  {
    slug: "project2",
    title: "Pflegeplace",
    category: "Creating Nurse Lead Funnels",
    description:
      "Finding sough after professionals online isn't easy when the market is so competetive. With Pflegeplace I build a funnel to recruit Nurses in Germany",
    image: "/images/portfolio/container04.jpg",
  },
  {
    slug: "project3",
    title: "IcanSpeak",
    category: "Building an Online School",
    description:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    image: "/images/portfolio/container13.jpg",
  },
  {
    slug: "project4",
    title: "DeutschAcademy",
    category: "Brick and Mortar German School",
    description:
      "At DeutschAcademy, I helped developing a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    image: "/images/portfolio/container16.jpg",
  },
  {
    slug: "project5",
    title: "Nomavillage",
    category: "High Class Colive",
    description:
      "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    image: "/images/portfolio/container07.jpg",
  },
  {
    slug: "project6",
    title: "Narangyoga",
    category: "New Yoga",
    description:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    image: "/images/portfolio/container10.jpg",
  },
];

const BTN_STYLE: React.CSSProperties = {
  backgroundColor: "rgba(226,232,240,0.92)",
  color: "#111111",
  borderRadius: "50px",
  padding: "0 22px",
  lineHeight: "48px",
  fontSize: "15px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
};

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <PolygonBackground />

      <div
        className="relative z-10 flex flex-col items-center py-10 px-4 pb-10"
        style={{ minHeight: "100vh" }}
      >
        {/* Back link */}
        <div className="w-full max-w-5xl mb-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#596269" }}
          >
            ← Home
          </Link>
        </div>

        {/* Project cards */}
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className="w-full flex flex-col items-center animate-blur-in opacity-0"
            style={{ 
              marginBottom: "48px",
              animationDelay: `${index * 150}ms`
            }}
          >
            <div
              className="relative overflow-hidden w-full aspect-[16/9] md:aspect-auto md:h-[clamp(480px,55vw,650px)]"
              style={{
                borderRadius: "24px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              {/* Background photo — full bleed */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.category}
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />

              {/* Gradient overlay — heavier at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.60) 100%)",
                }}
              />

              {/* Content overlaid on top of image */}
              <div className="absolute inset-0 flex flex-col p-6 md:p-10">
                {/* Text + buttons — Bottom aligned */}
                <div className="flex flex-col h-full justify-end">
                  <p
                    className="mb-1 uppercase tracking-widest font-semibold"
                    style={{
                      fontSize: "clamp(0.65rem, 1vw, 12px)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {project.category}
                  </p>
                  <h2
                    className="mb-2 leading-tight font-bold"
                    style={{
                      fontSize: "clamp(1.4rem, 4vw, 36px)",
                      color: "#ffffff",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="mb-4 leading-snug"
                    style={{
                      fontSize: "clamp(0.8rem, 1.1vw, 15px)",
                      color: "rgba(255,255,255,0.85)",
                      maxWidth: "560px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Buttons — side by side */}
                  <div className="flex flex-row gap-3 justify-between">
                    {index < projects.length - 1 && (
                      <a
                        href={`#project-${index + 2}`}
                        style={BTN_STYLE}
                      >
                        ↓ Next Project
                      </a>
                    )}
                    <Link
                      href={`/${project.slug}`}
                      style={BTN_STYLE}
                    >
                      Check this out in Detail →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {index < projects.length - 1 && (
              <div id={`project-${index + 2}`} />
            )}
          </div>
        ))}

        {/* Get in touch section */}
        <div className="flex flex-col items-center py-20">
          <Link
            href="/projects#touch"
            className="inline-flex items-center gap-2 px-10 py-5 font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg bg-[#BFF2DA] text-[#596269]"
            style={{ borderRadius: "50px", fontSize: "18px" }}
          >
            Get in touch!
          </Link>
        </div>
      </div>
    </div>
  );
}
