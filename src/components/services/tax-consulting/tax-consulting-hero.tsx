// src/components/services/tax-consulting/tax-consulting-hero.tsx
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function TaxConsultingHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Tax Consulting Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Maximize your savings and minimize your tax liability with our comprehensive tax consulting solutions. 
            Our certified professionals ensure compliance while optimizing your financial position.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Tax Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Certified Tax Experts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Maximum Deductions</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Year-Round Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}