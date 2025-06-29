// src/components/accounting/accounting-benefits.tsx
import { Award, DollarSign, CheckCircle, ArrowUp } from 'lucide-react';
import { accountingBenefits } from '@/data/accounting';

const iconMap = {
  Award,
  DollarSign,
  CheckCircle,
  ArrowUp
};

export function AccountingBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Accounting Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with us for professional accounting services that deliver value, 
            accuracy, and strategic insights for your business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accountingBenefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <div key={benefit.id} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}