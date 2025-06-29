// src/components/accounting/accounting-hero.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';

export function AccountingHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            Professional Accounting Services
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with 
            <span className="text-blue-600 block">Expert Accounting</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From financial accounting to strategic advisory, our certified accountants 
            provide comprehensive solutions to drive your business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Expert Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2000+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">CA Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-600">Years Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}