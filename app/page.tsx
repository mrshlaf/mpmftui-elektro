import { getActivities } from "@/lib/actions/activities";
import HeroSection from "@/components/sections/HeroSection";
import ActivityGallery from "@/components/sections/ActivityGallery";
import TriasSection from "@/components/sections/TriasSection";
import VisionMission from "@/components/sections/VisionMission";
import TeamSection from "@/components/sections/TeamSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const activities = (await getActivities()) || [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <VisionMission />
        <TriasSection />
        <TeamSection />
        <ActivityGallery activities={activities} />
      </main>
      <Footer />
    </>
  );
}
