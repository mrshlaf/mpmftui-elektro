import TransparencyDashboard from "@/components/sections/TransparencyDashboard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default function TransparansiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <TransparencyDashboard />
      </main>
      <Footer />
    </>
  );
}
