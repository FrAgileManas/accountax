import PricingCard from "./pricing-card";
import { pricingPlans } from "@/data/pricing-data";

export default function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}