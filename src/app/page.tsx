import { HomeSection } from "@/components/HomeSection";
import { PolygonBackground } from "@/components/PolygonBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <PolygonBackground />
      <div className="relative z-10">
        <HomeSection />
      </div>
    </main>
  );
}
