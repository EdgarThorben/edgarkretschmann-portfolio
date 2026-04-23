import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "DeutschAcademy — Edgar Kretschmann",
  description: "Brick and mortar German school in Manila: Founder at DeutschAcademy.",
};

export default function Project4Page() {
  return (
    <ProjectDetail
      name="DeutschAcademy"
      url="deutschacademy.com"
      headerImage="/images/projects/container26.jpg"
      headerImagePosition="right center"
      contentTitle="Brick and Mortar German School (abroad)"
      contentBody={[
        "At DeutschAcademy, I helped developing a brick-and-mortar language school in Manila to recruit Filipino nurses, building the WordPress site, securing investors, and finding clients.",
      ]}
      contentImage="/images/projects/container28.jpg"
      contentImagePosition="right top"
      prevHref="/project3"
      nextHref="/project5"
      achievements={[
        "School founded in Manila",
        "Investors secured",
        "German healthcare clients acquired",
      ]}
      tech={["WordPress", "Google Workspace", "Facebook Ads", "Canva"]}
      skills={[
        { label: "Landing Page Building", value: 70 },
        { label: "Automation", value: 62 },
        { label: "Project Management", value: 92 },
        { label: "Builder", value: 88 },
        { label: "Campaigning", value: 80 },
      ]}
    />
  );
}
