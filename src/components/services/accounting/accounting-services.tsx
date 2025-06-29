// src/components/accounting/accounting-services.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, PieChart, FileText, Search, TrendingUp, Shield } from 'lucide-react';
import { accountingServices } from '@/data/accounting';

const iconMap = {
  Calculator,
  PieChart,
  FileText,
  Search,
  TrendingUp,
  Shield
};

export function AccountingServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Accounting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From basic bookkeeping to strategic financial advisory, we offer complete 
            accounting solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountingServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}