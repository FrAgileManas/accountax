// src/components/pricing/pricing-hero.tsx
export default function PricingHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your business needs. No hidden fees, no surprises.
        </p>

        {/* Trust Signals */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-m text-gray-600">
          <span className="flex items-center gap-1">✅ No hidden fees</span>
          <span className="flex items-center gap-1">✅ Cancel anytime</span>
          <span className="flex items-center gap-1">✅ 24/7 customer support</span>
        </div>
      </div>
    </section>
  );
}
