// src/components/bookkeeping/bookkeeping-hero.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export function BookkeepingHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Professional Bookkeeping Services
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Keep Your Books Perfect with 
            <span className="text-blue-600 block">Expert Bookkeeping</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Focus on your business growth while our certified accountants handle your 
            bookkeeping with precision, compliance, and real-time financial insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Start Your Books Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Get Free Assessment
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Books Maintained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.8%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}