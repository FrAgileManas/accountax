// src/components/why-choose-us/comparison-section.tsx
import { Check, X } from "lucide-react";
import { comparisonData } from "@/data/comparison-data";

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Accountax vs Traditional Accounting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why modern businesses are switching to Accountax for their financial needs.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headers */}
            <div className="hidden md:block"></div>
            <div className="text-center">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
                Accountax
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold text-lg">
                Traditional Firms
              </div>
            </div>
            
            {/* Comparison Items */}
            {comparisonData.map((item) => (
              <div key={item.id} className="contents">
                <div className="font-medium text-gray-900 flex items-center">
                  {item.feature}
                </div>
                <div className="flex justify-center">
                  {item.accountax ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}