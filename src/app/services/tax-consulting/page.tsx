// src/app/services/tax-consulting/page.tsx
import { TaxConsultingHero } from '@/components/services/tax-consulting/tax-consulting-hero';
import { TaxConsultingServices } from '@/components/services/tax-consulting/tax-consulting-services';
import { TaxConsultingBenefits } from '@/components/services/tax-consulting/tax-consulting-benefits';
import { TaxConsultingProcess } from '@/components/services/tax-consulting/tax-consulting-process';
import { CTASection } from '@/components/common/cta';

export default function TaxConsultingPage() {
  return (
    <div className="min-h-screen">
      <TaxConsultingHero />
      <TaxConsultingServices />
      <TaxConsultingBenefits />
      <TaxConsultingProcess />
      <CTASection />
    </div>
  );
}