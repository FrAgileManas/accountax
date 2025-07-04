import { invoicingData } from "@/data/invoicing-data";

export default function InvoicingBenefits() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Invoicing Solution?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transform your billing process and accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invoicingData.benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

              </div>
    </section>
  );
}