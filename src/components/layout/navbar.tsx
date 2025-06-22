'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const servicesDropdown = [
  { name: 'Bookkeeping Services', href: '/services/bookkeeping' },
  { name: 'Tax Preparation', href: '/services/tax-preparation' },
  { name: 'Financial Consulting', href: '/services/financial-consulting' },
  { name: 'Payroll Management', href: '/services/payroll' },
  { name: 'Business Registration', href: '/services/business-registration' },
  { name: 'Compliance Services', href: '/services/compliance' },
]

const resourcesDropdown = [
  { name: 'Blog', href: '/resources/blog' },
  { name: 'Case Studies', href: '/resources/case-studies' },
  { name: 'White Papers', href: '/resources/white-papers' },
  { name: 'Tax Calculator', href: '/resources/tax-calculator' },
  { name: 'Templates', href: '/resources/templates' },
  { name: 'FAQ', href: '/resources/faq' },
]

interface DropdownProps {
  title: string
  items: { name: string; href: string }[]
  className?: string
}

const Dropdown = ({ title, items, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-medium hover:text-primary transition-colors duration-200">
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-medium hover:text-primary hover:bg-blue-light-2 transition-colors duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Accountax</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Dropdown title="Services" items={servicesDropdown} />
            <Link href="/why-choose-us" className="text-medium hover:text-primary transition-colors duration-200">
              Why Choose Us
            </Link>
            <Link href="/pricing" className="text-medium hover:text-primary transition-colors duration-200">
              Pricing
            </Link>
            <Dropdown title="Resources" items={resourcesDropdown} />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-medium" />
            ) : (
              <Menu className="h-6 w-6 text-medium" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {/* Services Mobile */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-high">Services</div>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-medium hover:text-primary hover:bg-blue-light-2 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/why-choose-us"
                className="block px-3 py-2 text-medium hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Choose Us
              </Link>

              <Link
                href="/pricing"
                className="block px-3 py-2 text-medium hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Resources Mobile */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-high">Resources</div>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-medium hover:text-primary hover:bg-blue-light-2 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}