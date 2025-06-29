import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import InvoicingHero from "@/components/services/invoicing/invoicing-hero";
import InvoicingFeatures from "@/components/services/invoicing/invoicing-features";
import InvoicingBenefits from "@/components/services/invoicing/invoicing-benefits";
import InvoicingTemplates from "@/components/services/invoicing/invoicing-templates";
import InvoicingPricing from "@/components/services/invoicing/invoicing-pricing";
import { CTASection } from "@/components/common/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoicing Solutions | AccountAX - Professional Invoice Management",
  description: "Streamline your billing process with AccountAX's comprehensive invoicing platform. Create professional invoices, automate payments, and get paid faster.",
  keywords: ["invoicing software", "invoice management", "billing automation", "payment processing", "invoice templates"],
};

export default function InvoicingPage() {
  return (
    <div>
      
      <main>
        <InvoicingHero />
        <InvoicingFeatures />
        <InvoicingBenefits />
        <InvoicingTemplates />
        <InvoicingPricing />
        <CTASection />
      </main>
      

    </div>
  );
}