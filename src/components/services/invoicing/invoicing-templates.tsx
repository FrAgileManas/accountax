import { invoicingData } from "@/data/invoicing-data";

export default function InvoicingTemplates() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Invoice Templates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our collection of beautifully designed templates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invoicingData.templates.map((template) => (
            <div key={template.id} className="group cursor-pointer">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
                {/* Template Preview */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded shadow-sm p-3">
                    <div className="h-2 bg-blue-200 rounded mb-2"></div>
                    <div className="h-1 bg-gray-200 rounded mb-1"></div>
                    <div className="h-1 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="space-y-1">
                      <div className="h-1 bg-gray-100 rounded"></div>
                      <div className="h-1 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-1 bg-gray-100 rounded w-4/6"></div>
                    </div>
                    <div className="absolute bottom-3 right-3 w-8 h-1 bg-blue-300 rounded"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {template.category}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {template.description}
                </p>

                <button className="w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium group-hover:bg-blue-50 group-hover:text-blue-600">
                  Preview Template
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom template design for your business?
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Request Custom Template
          </button>
        </div>
      </div>
    </section>
  );
}