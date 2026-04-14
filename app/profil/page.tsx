import VisionMission from "@/components/sections/VisionMission";
import TeamSection from "@/components/sections/TeamSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default function ProfilPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <VisionMission />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
