'use client'

import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  'Expert Bookkeeping & Accounting',
  'Tax Preparation & Filing',
  'Financial Consulting',
  'Business Compliance'
]

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '10K+', label: 'Invoices Processed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Accountax transformed our financial management. Their expertise saved us thousands in taxes.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Small Business Owner',
    content: 'Professional, reliable, and incredibly knowledgeable. Highly recommend their services.',
    rating: 5
  }
]

export default function Hero() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-light-2 via-white to-blue-light-4">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-light-1 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-light-3 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-light-4 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              {/* Trust badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-blue-light-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-2 text-sm text-medium">Trusted by 500+ businesses</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-high leading-tight">
                  Professional
                  <span className="text-primary block">Accounting</span>
                  <span className="text-blue-light-3">Made Simple</span>
                </h1>
                <p className="text-lg sm:text-xl text-medium max-w-2xl">
                  Transform your business finances with expert bookkeeping, tax preparation, 
                  and financial consulting services. Focus on growth while we handle the numbers.
                </p>
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-light-2 transition-colors duration-200 font-medium">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                {/* Mock dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-high">Financial Overview</h3>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      ↑ 12% Growth
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-40 bg-gradient-to-r from-blue-light-2 to-blue-light-1 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-around p-4">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-primary rounded-t"
                          style={{ height: `${height}%`, width: '10px' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-light-2 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">$124K</div>
                      <div className="text-sm text-medium">Revenue</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">$18K</div>
                      <div className="text-sm text-medium">Savings</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-medium italic mb-3">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-light-1 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-high">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-xs text-medium">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-light-3 rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-8 w-8 text-white fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}