// src/components/services/tax-consulting/tax-consulting-process.tsx
import { taxConsultingProcess } from '@/data/tax-consulting';

export function TaxConsultingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Consulting Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to optimize your tax strategy and ensure compliance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {taxConsultingProcess.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}