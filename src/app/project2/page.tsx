import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Pflegeplace — Edgar Kretschmann",
  description: "Creating nurse lead funnels: Marketing Manager at Pflegeplace.",
};

export default function Project2Page() {
  return (
    <ProjectDetail
      name="Pflegeplace"
      url="pflegeplace.com"
      headerImage="/images/portfolio/container04.jpg"
      headerImagePosition="center center"
      contentTitle="Finding Nurses"
      contentBody={[
        "Finding sough after professionals online isn't easy when the market is so competetive. With Pflegeplace I build a funnel to recruit Nurses in Germany",
        "At Pflegeplace, I built a lead funnel using self-made automation tools and social media marketing to recruit foreign nurses for healthcare positions across Germany.",
      ]}
      contentImage="/images/projects/container12.jpg"
      contentImagePosition="right top"
      prevHref="/project1"
      nextHref="/project3"
      achievements={[
        "Automated lead funnel built end-to-end",
        "Nurses successfully recruited for Germany",
        "Cost-per-lead reduced through targeting",
      ]}
      tech={["HubSpot", "LinkedIn Ads", "Zapier", "Mailchimp"]}
      skills={[
        { label: "Landing Page Building", value: 85 },
        { label: "Automation", value: 92 },
        { label: "Project Management", value: 80 },
        { label: "Builder", value: 76 },
        { label: "Campaigning", value: 88 },
      ]}
    />
  );
}
