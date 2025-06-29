// src/app/services/accounting/page.tsx
import { AccountingHero } from '@/components/services/accounting/accounting-hero';
import { AccountingServices } from '@/components/services/accounting/accounting-services';
import { AccountingBenefits } from '@/components/services/accounting/accounting-benefits';
import { AccountingProcess } from '@/components/services/accounting/accounting-process';
import { CTASection } from '@/components/common/cta';

export default function AccountingPage() {
  return (
    <div className="min-h-screen">
      <AccountingHero />
      <AccountingServices />
      <AccountingBenefits />
      <AccountingProcess />
      <CTASection />
    </div>
  );
}