import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Narangyoga — Edgar Kretschmann",
  description: "New Yoga: Brand Creator & Marketing Manager at Narangyoga.",
};

export default function Project6Page() {
  return (
    <ProjectDetail
      name="Narangyoga"
      url="narangyoga.com"
      headerImage="/images/portfolio/container10.jpg"
      headerImagePosition="center center"
      contentTitle="New Yoga"
      contentBody={[
        "At Narangyoga, I handled marketing campaigns, automated lead funnels, and managed SEM and social media efforts. I also worked as a brand creator and marketing strategist to shape the company's identity.",
      ]}
      contentImage="/images/projects/container22.jpg"
      contentImagePosition="right top"
      prevHref="/project5"
      nextHref={undefined}
      achievements={[
        "Brand identity created from scratch",
        "Social media audience grown",
        "Lead funnel automated",
      ]}
      tech={["Instagram", "Canva", "Google Ads", "Mailchimp"]}
      skills={[
        { label: "Landing Page Building", value: 84 },
        { label: "Automation", value: 76 },
        { label: "Project Management", value: 74 },
        { label: "Builder", value: 82 },
        { label: "Campaigning", value: 90 },
      ]}
    />
  );
}
