import WhyChooseHero from "@/components/why-choose-us/why-choose-hero";
import BenefitsSection from "@/components/why-choose-us/benefits-section";
import StatsSection from "@/components/why-choose-us/stats-section";
import ComparisonSection from "@/components/why-choose-us/comparison-section";
import { CTASection } from "@/components/common/cta";

export default function WhyChooseUsPage() {
  return (
    <div>

      
      <main>
        <WhyChooseHero />
        <BenefitsSection />
        <StatsSection />
        <ComparisonSection />
        <CTASection />
      </main>


    </div>
  );
}