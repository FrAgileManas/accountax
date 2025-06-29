import { Calculator, FileText, TrendingUp, Shield, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Bookkeeping & Accounting',
    description: 'Complete financial record management with accurate bookkeeping and accounting services.'
  },
  {
    icon: FileText,
    title: 'Tax Preparation & Filing',
    description: 'Expert tax preparation and filing services to ensure compliance and maximize savings.'
  },
  {
    icon: TrendingUp,
    title: 'Financial Consulting',
    description: 'Strategic financial advice to help your business grow and make informed decisions.'
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Stay compliant with all regulations and avoid penalties with our expert guidance.'
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Efficient payroll management including salary processing and statutory compliance.'
  },
  {
    icon: Clock,
    title: 'Real-time Reporting',
    description: 'Get instant access to your financial data with automated reporting and dashboards.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic bookkeeping to strategic financial consulting, we offer complete solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}