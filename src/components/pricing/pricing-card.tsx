// src/components/pricing/pricing-card.tsx
import { Check } from "lucide-react";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
}

export default function PricingCard({ plan, isPopular = false }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-lg ${
        isPopular
          ? "bg-blue-600 text-white ring-2 ring-blue-600 scale-105"
          : "bg-white text-gray-900 ring-1 ring-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className={`text-sm mb-8 ${isPopular ? "text-blue-100" : "text-gray-600"}`}>
          {plan.description}
        </p>

        <div className="mb-8">
          <span className="text-4xl font-bold">₹{plan.price}</span>
          <span className={`text-sm ${isPopular ? "text-blue-100" : "text-gray-600"}`}>
            /{plan.billing}
          </span>
        </div>

        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            isPopular
              ? "bg-white text-blue-600 hover:bg-gray-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>

      <div className="mt-8">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={`h-5 w-5 ${
                  isPopular ? "text-blue-200" : "text-green-500"
                } mr-3 mt-0.5 flex-shrink-0`}
              />
              <span className={`text-sm ${isPopular ? "text-blue-100" : "text-gray-600"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {plan.additionalInfo && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className={`text-sm ${isPopular ? "text-blue-100" : "text-gray-600"}`}>
            {plan.additionalInfo}
          </p>
        </div>
      )}
    </div>
  );
}