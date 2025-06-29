import { CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Accountax for Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we've helped thousands of businesses streamline their finances and achieve sustainable growth. Our expert team combines traditional accounting excellence with modern technology.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Certified professionals with industry expertise',
                'Technology-driven solutions for efficiency',
                '99.9% compliance rate with zero penalties',
                'Dedicated support and consultation'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Compliance Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}