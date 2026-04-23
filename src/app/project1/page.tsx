import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Innate — Edgar Kretschmann",
  description: "Redefining co-living: Community Manager & Digital Marketing at Innate.",
};

export default function Project1Page() {
  return (
    <ProjectDetail
      name="Innate"
      url="innate.global"
      headerImage="/images/projects/container03.jpg"
      headerImagePosition="right center"
      contentTitle="Redefining Co-living"
      contentBody={[
        "In our time and age working remotely is becoming the new norm for many people. With innate I created unforgettable moments in communities.",
        "As a Community Manager & Digital Marketing Expert at Innate, I connected digital nomads to global coliving spaces, fostering a vibrant community and driving growth through targeted digital strategies.",
      ]}
      contentImage="/images/projects/container08.jpg"
      contentImagePosition="right top"
      prevHref={undefined}
      nextHref="/project2"
      achievements={[
        "Always sold out",
        "Excellent Reviews",
        "High Customer Retention",
      ]}
      tech={["Unbounce", "Active Campaign", "Typeform", "Meta"]}
      skills={[
        { label: "Landing Page Building", value: 72 },
        { label: "Automation", value: 76 },
        { label: "Hosting", value: 82 },
        { label: "Selling", value: 68 },
        { label: "Campaigning", value: 92 },
      ]}
    />
  );
}
