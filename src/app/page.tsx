import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/layout/footer";
import { CTASection } from "@/components/common/cta";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <HeroSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
