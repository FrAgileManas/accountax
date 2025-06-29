import { invoicingData } from "@/data/invoicing-data";

export default function InvoicingHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {invoicingData.hero.title}
          </h1>
          <p className="mt-4 text-xl text-blue-600 font-semibold">
            {invoicingData.hero.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            {invoicingData.hero.description}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
              Watch Demo <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {invoicingData.stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-medium text-gray-900 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <p className="text-gray-600 font-medium">Invoice Preview Demo</p>
                <p className="text-sm text-gray-500 mt-1">Interactive demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}