import type { Metadata } from "next";
import Link from "next/link";
import { PolygonBackground } from "@/components/PolygonBackground";

export const metadata: Metadata = {
  title: "My Bio — Edgar Kretschmann",
  description:
    "Chronological journey of Edgar Kretschmann — from founding a German school in Manila to digital marketing across Europe and Asia.",
};

const experiences = [
  {
    period: "2018/19",
    role: "Founder + Project Management",
    company: "DeutschAcademy",
    description:
      "At DeutschAcademy, I developed a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
    image: "/images/bio/image02.jpg",
  },
  {
    period: "2020–23",
    role: "Marketing + Project Management",
    company: "Pflegeplace",
    description:
      "At Pflegeplace, I built a lead funnel using self-made automation tools and social media marketing to recruit foreign nurses for healthcare positions across Germany.",
    image: "/images/bio/image03.jpg",
  },
  {
    period: "2021/22",
    role: "Marketing + Project Management",
    company: "IcanSpeak",
    description:
      "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
    image: "/images/bio/image04.jpg",
  },
  {
    period: "2023/24",
    role: "Marketing + Community Manager",
    company: "Innate",
    description:
      "As a Community Manager & Digital Marketing Expert at Innate, I connected digital nomads to global coliving spaces, fostering a vibrant community and driving growth through targeted digital strategies.",
    image: "/images/bio/image05.jpg",
  },
  {
    period: "2024",
    role: "Marketing Manager",
    company: "Nomavillage",
    description:
      "At Nomavillage, I managed marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
    image: "/images/bio/image06.jpg",
  },
  {
    period: "2024",
    role: "Marketing Manager",
    company: "Narangyoga",
    description:
      "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
    image: "/images/bio/image07.jpg",
  },
  {
    period: "Throughout",
    role: "Language Teacher",
    company: "Global Experience",
    description:
      "All the while I was teaching hundreds of students around the world. I have been to China, Korea, Philippines and obviously Germany to teach refugees and immigrating professionals.",
    image: "/images/bio/image08.jpg",
  },
];

export default function BioPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{ fontFamily: "var(--font-inter-var)" }}
    >
      <PolygonBackground />

      {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--brand-accent)" }}
        >
          ← Home
        </Link>
      </div>

      <div className="relative z-10 pt-20 flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-8 mb-16">
          {/* Avatar */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
            <img
              src="/images/bio/image01.jpg"
              alt="Edgar Kretschmann"
              className="w-full h-full object-cover"
            />
          </div>

          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-lexend-deca-var)",
              fontSize: "clamp(3rem, 10vw, 84px)",
              color: "#000000",
            }}
          >
            My Bio
          </h1>
          <p
            className="font-medium"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 36px)",
              color: "#666666",
            }}
          >
            Chronologically
          </p>
        </section>

        {/* Arrow Down & Line */}
        <div className="flex flex-col items-center mb-12">
          <div
            className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-lg mb-0 transition-transform hover:scale-110 cursor-pointer z-20"
            style={{ backgroundColor: "var(--brand-accent)" }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l7-7m-7 7l-7-7" />
            </svg>
          </div>
          <div className="w-1 h-32 bg-white opacity-40 -mt-1" id="start"></div>
        </div>

        {/* Experience Sections */}
        <div className="max-w-4xl w-full px-4 mb-20">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="flex flex-col items-center mb-0">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-2xl transform transition-transform hover:scale-[1.02]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 text-center">
                  <p
                    className="font-bold mb-2 uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-lexend-deca-var)",
                      fontSize: "14px",
                      color: "var(--brand-accent)",
                    }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="mb-4 font-medium uppercase tracking-wider opacity-50"
                    style={{ fontSize: "12px" }}
                  >
                    {exp.role}
                  </p>
                  <h2
                    className="font-bold mb-6"
                    style={{
                      fontFamily: "var(--font-lexend-deca-var)",
                      fontSize: "clamp(2rem, 5vw, 48px)",
                      color: "#000000",
                    }}
                  >
                    {exp.company}
                  </h2>
                  <p
                    className="leading-relaxed text-gray-600"
                    style={{ fontSize: "18px" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-20 bg-white opacity-50 my-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Footer / Contact */}
        <section className="w-full py-20 px-8 text-center flex flex-col items-center gap-8 bg-transparent">
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-lexend-deca-var)",
              fontSize: "clamp(2rem, 5vw, 60px)",
              color: "#000000",
            }}
          >
            Get in touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:edgar@edgarkretschmann.com"
              className="inline-flex items-center justify-center px-10 py-5 font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg"
              style={{
                backgroundColor: "var(--brand-accent)",
                color: "#ffffff",
                borderRadius: "12px",
                fontSize: "18px",
              }}
            >
              Email me
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-10 py-5 font-bold border-2 transition-all hover:bg-black hover:text-white active:scale-95"
              style={{
                backgroundColor: "transparent",
                color: "#000000",
                borderColor: "#000000",
                borderRadius: "12px",
                fontSize: "18px",
              }}
            >
              More Details
            </Link>
          </div>
          <Link
            href="/"
            className="mt-12 flex flex-col items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70 group"
            style={{ color: "var(--brand-accent)" }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
            </div>
            Back to top
          </Link>
        </section>
      </div>
    </div>
  );
}
