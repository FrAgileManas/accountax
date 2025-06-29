import { benefits } from '@/data/benefits-data';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Accountax Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why businesses trust us with their financial management and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}