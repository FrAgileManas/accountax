// src/app/services/bookkeeping/page.tsx
import { BookkeepingHero } from '@/components/services/bookkeeping/bookkeeping-hero';
import { BookkeepingServices } from '@/components/services/bookkeeping/bookkeeping-services';
import { BookkeepingBenefits } from '@/components/services/bookkeeping/bookkeeping-benefits';
import { BookkeepingProcess } from '@/components/services/bookkeeping/bookkeeping-process';
import { CTASection } from '@/components/common/cta';

export default function BookkeepingPage() {
  return (
    <div className="min-h-screen">
      <BookkeepingHero />
      <BookkeepingServices />
      <BookkeepingBenefits />
      <BookkeepingProcess />
      <CTASection />
    </div>
  );
}