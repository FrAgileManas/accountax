// src/components/why-choose-us/benefit-card.tsx
import { LucideIcon } from "lucide-react";
import { Benefit } from "@/types/benefits";

interface BenefitCardProps {
  benefit: Benefit;
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
  const IconComponent = benefit.icon;
  
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg mr-4">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {benefit.description}
      </p>
      
      <div className="space-y-3">
        {benefit.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}