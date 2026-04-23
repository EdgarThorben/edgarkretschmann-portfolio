import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "IcanSpeak — Edgar Kretschmann",
  description: "Building an online school: Marketing Manager at IcanSpeak.",
};

export default function Project3Page() {
  return (
    <ProjectDetail
      name="IcanSpeak"
      url="icanspeak.de"
      headerImage="/images/projects/container20.jpg"
      headerImagePosition="right center"
      contentTitle="Building an Online School"
      contentBody={[
        "At IcanSpeak, I built an online language school to teach students German, managing campaigns and finding clients through LinkedIn.",
      ]}
      contentImage="/images/projects/container16.jpg"
      contentImagePosition="right top"
      prevHref="/project2"
      nextHref="/project4"
      achievements={[
        "Online school launched and scaled",
        "Hundreds of students enrolled",
        "LinkedIn lead generation pipeline built",
      ]}
      tech={["Teachable", "LinkedIn", "Google Ads"]}
      skills={[
        { label: "Landing Page Building", value: 78 },
        { label: "Automation", value: 82 },
        { label: "Project Management", value: 72 },
        { label: "Builder", value: 68 },
        { label: "Campaigning", value: 86 },
      ]}
    />
  );
}
