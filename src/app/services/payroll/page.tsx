// src/app/services/payroll/page.tsx
import { PayrollHero } from '@/components/services/payroll/payroll-hero';
import { PayrollServices } from '@/components/services/payroll/payroll-services';
import { PayrollBenefits } from '@/components/services/payroll/payroll-benefits';
import { PayrollProcess } from '@/components/services/payroll/payroll-process';
import { CTASection } from '@/components/common/cta';

export default function PayrollPage() {
  return (
    <div className="min-h-screen">
      <PayrollHero />
      <PayrollServices />
      <PayrollBenefits />
      <PayrollProcess />
      <CTASection />
    </div>
  );
}