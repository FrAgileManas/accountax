// src/components/accounting/accounting-process.tsx
import { MessageCircle, BarChart, Settings, Monitor } from 'lucide-react';
import { accountingProcess } from '@/data/accounting';

const iconMap = {
  MessageCircle,
  BarChart,
  Settings,
  Monitor
};

export function AccountingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our systematic approach to accounting services that ensures 
            quality, compliance, and strategic value for your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accountingProcess.map((process, index) => {
              const IconComponent = iconMap[process.icon as keyof typeof iconMap];
              
              return (
                <div key={process.id} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 z-20">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {process.description}
                    </p>
                  </div>
                  
                  {index < accountingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0">
                      <div className="w-1/2 h-full bg-blue-600"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}