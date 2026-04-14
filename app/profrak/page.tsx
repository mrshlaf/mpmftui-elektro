import ProductShowcase from "@/components/sections/ProductShowcase";
import LegislationSection from "@/components/sections/LegislationSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default function ProfrakPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProductShowcase />
        <LegislationSection />
      </main>
      <Footer />
    </>
  );
}
