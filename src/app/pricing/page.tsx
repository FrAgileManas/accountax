// src/app/pricing/page.tsx
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PricingSection from "@/components/pricing/pricing-section";
import PricingHero from "@/components/pricing/pricing-hero";
import { CTASection } from "@/components/common/cta";

export default function PricingPage() {
  return (
    <div>      
      <main>
        <PricingHero />
        <PricingSection />
        <CTASection />
      </main>
    </div>
  );
}