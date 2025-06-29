'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const servicesDropdown = [
  { name: 'Bookkeeping Services', href: '/services/bookkeeping' },
  { name: 'Invoicing Solutions', href: '/services/invoicing' },
  { name: 'Payroll Management', href: '/services/payroll' },
  { name: 'Accounting', href: '/services/accounting' },
  { name: 'Tax Consulting', href: '/services/tax-consulting' },
  { name: 'MCA Work', href: '/services/mca-work' },
  { name: 'Foreign Accounting', href: '/services/foreign-accounting' },
]


const resourcesDropdown = [
  { name: 'About us', href: '/resources/about' },
  { name: 'Blog', href: '/resources/blog' },
  { name: 'Contact us', href: '/contact' },
]

interface DropdownProps {
  title: string
  items: { name: string; href: string }[]
  className?: string
}

const Dropdown = ({ title, items, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false)
    }, 150) // Small delay to allow moving to dropdown
    setTimeoutId(id)
  }

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative flex items-center gap-1 text-medium hover:text-primary transition-colors duration-200 group">
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
        {/* Center-out underline animation */}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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

// Animated Link Component for nav items
const AnimatedNavLink = ({ href, children, className, onClick }: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <Link 
      href={href} 
      className={cn("relative text-medium hover:text-primary transition-colors duration-200 group", className)}
      onClick={onClick}
    >
      {children}
      {/* Center-out underline animation */}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
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
            <span className="text-2xl font-bold text-primary">
              Accountax
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Dropdown title="Services" items={servicesDropdown} />
            <AnimatedNavLink href="/why-choose-us">
              Why Choose Us
            </AnimatedNavLink>
            <AnimatedNavLink href="/pricing">
              Pricing
            </AnimatedNavLink>
            <Dropdown title="Resources" items={resourcesDropdown} />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium hover:shadow-lg hover:scale-105 transform"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {/* Services Mobile */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-high">Services</div>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-medium hover:text-primary hover:bg-blue-light-2 transition-all duration-150 rounded-md relative group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-6 right-6 bottom-1 h-px bg-primary scale-x-0 origin-center transition-transform duration-200 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>

              <AnimatedNavLink
                href="/why-choose-us"
                className="block px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Choose Us
              </AnimatedNavLink>

              <AnimatedNavLink
                href="/pricing"
                className="block px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </AnimatedNavLink>

              {/* Resources Mobile */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-high">Resources</div>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-medium hover:text-primary hover:bg-blue-light-2 transition-all duration-150 rounded-md relative group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-6 right-6 bottom-1 h-px bg-primary scale-x-0 origin-center transition-transform duration-200 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium hover:shadow-lg hover:scale-105 transform"
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