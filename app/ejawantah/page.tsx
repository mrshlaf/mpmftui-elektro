import GovernanceSection from "@/components/sections/GovernanceSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default function EjawantahPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <GovernanceSection />
      </main>
      <Footer />
    </>
  );
}
