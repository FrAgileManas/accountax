// src/components/services/foreign-accounting/foreign-accounting-benefits.tsx
import { foreignAccountingBenefits } from '@/data/foreign-accounting';

export function ForeignAccountingBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Foreign Accounting Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert international accounting solutions that help your business thrive globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foreignAccountingBenefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}