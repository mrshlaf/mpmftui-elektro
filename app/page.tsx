import { getActivities } from "@/lib/actions/activities";
import HeroSection from "@/components/sections/HeroSection";
import ActivityGallery from "@/components/sections/ActivityGallery";
import TriasSection from "@/components/sections/TriasSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const activities = (await getActivities()) || [];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ActivityGallery activities={activities} />
        <TriasSection />
      </main>
      <Footer />
    </>
  );
}
