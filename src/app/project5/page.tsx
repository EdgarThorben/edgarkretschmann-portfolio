import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Nomavillage — Edgar Kretschmann",
  description: "High class colive: Marketing Manager at Nomavillage.",
};

export default function Project5Page() {
  return (
    <ProjectDetail
      name="Nomavillage"
      url="nomavillage.com"
      headerImage="/images/portfolio/container07.jpg"
      headerImagePosition="center center"
      contentTitle="High Class Colive"
      contentBody={[
        "At Nomavillage, I manage marketing campaigns, automated lead funnels, and integrated SEM with social media strategies to drive growth and engagement.",
      ]}
      contentImage="/images/projects/container32.jpg"
      contentImagePosition="right top"
      prevHref="/project4"
      nextHref="/project6"
      achievements={[
        "Lead automation system deployed",
        "SEM campaigns launched and optimised",
        "Social media growth across channels",
      ]}
      tech={["Google Ads", "Zapier", "ActiveCampaign", "Instagram"]}
      skills={[
        { label: "Landing Page Building", value: 82 },
        { label: "Automation", value: 90 },
        { label: "Project Management", value: 85 },
        { label: "Builder", value: 72 },
        { label: "Campaigning", value: 90 },
      ]}
    />
  );
}
