'use client'

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'CEO, TechVision Solutions',
    content: 'Accountax transformed our financial management completely. Their expertise in tax planning saved us over ₹2 lakhs last year. Highly professional team!',
    rating: 5,
    company: 'Technology Startup'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Founder, Green Earth Enterprises',
    content: 'Been working with Accountax for 3 years now. Their compliance management is exceptional - never missed a deadline. Great ROI on their services.',
    rating: 5,
    company: 'Sustainable Business'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'CFO, Modern Retail Ltd',
    content: 'The real-time reporting and financial insights from Accountax helped us make better business decisions. Their technology integration is impressive.',
    rating: 5,
    company: 'Retail Chain'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Auto-swipe every 5 seconds, but pause when hovered
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from businesses who chose Accountax
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-gray-50 rounded-2xl p-8 md:p-12 relative transition-all duration-500 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-600 opacity-50" />
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 min-h-[120px] flex items-center justify-center">
                <span className="transition-opacity duration-300">
                  "{testimonials[activeIndex].content}"
                </span>
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-blue-600 text-sm">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-100 ease-linear"
                  style={{ 
                    width: isHovered ? '100%' : '0%',
                    animation: isHovered ? 'none' : 'progress 3s linear infinite'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}