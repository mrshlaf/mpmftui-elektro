import { getActivities } from "@/lib/actions/activities";
import HeroSection from "@/components/sections/HeroSection";
import PortalCards from "@/components/sections/PortalCards";
import ActivityGallery from "@/components/sections/ActivityGallery";
import VisionMission from "@/components/sections/VisionMission";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TransparencyDashboard from "@/components/sections/TransparencyDashboard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const activities = (await getActivities()) || [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <PortalCards />
        <VisionMission isTeaser={true} />
        <TransparencyDashboard isTeaser={true} />
        <ProductShowcase isTeaser={true} />
        <ActivityGallery activities={activities} />
      </main>
      <Footer />
    </>
  );
}
