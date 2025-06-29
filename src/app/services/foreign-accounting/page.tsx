// src/app/services/foreign-accounting/page.tsx
import { ForeignAccountingHero } from '@/components/services/foreign-accounting/foreign-accounting-hero';
import { ForeignAccountingServices } from '@/components/services/foreign-accounting/foreign-accounting-services';
import { ForeignAccountingBenefits } from '@/components/services/foreign-accounting/foreign-accounting-benefits';
import { ForeignAccountingProcess } from '@/components/services/foreign-accounting/foreign-accounting-process';
import { CTASection } from '@/components/common/cta';

export default function ForeignAccountingPage() {
  return (
    <div className="min-h-screen">
      <ForeignAccountingHero />
      <ForeignAccountingServices />
      <ForeignAccountingBenefits />
      <ForeignAccountingProcess />
      <CTASection />
    </div>
  );
}