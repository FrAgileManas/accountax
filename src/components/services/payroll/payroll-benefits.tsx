// src/components/payroll/payroll-benefits.tsx
import { DollarSign, CheckCircle, Shield, Lock } from 'lucide-react';
import { payrollBenefits } from '@/data/payroll';

const iconMap = {
  DollarSign,
  CheckCircle,
  Shield,
  Lock
};

export function PayrollBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Payroll Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of professional payroll management that saves time, 
            reduces costs, and ensures complete compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {payrollBenefits.map((benefit) => {
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