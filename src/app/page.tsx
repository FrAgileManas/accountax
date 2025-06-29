import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import AboutSection from "@/components/home/about-section";
import BenefitsSection from "@/components/home/benefits-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import PricingSection from "@/components/home/pricing-section";
import { CTASection } from "@/components/common/cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BenefitsSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
    </div>
  );
}