import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Award,
  Users,
  Shield
} from 'lucide-react'

const footerLinks = {
  services: [
  { name: 'Bookkeeping Services', href: '/services/bookkeeping' },
  { name: 'Invoicing Solutions', href: '/services/invoicing' },
  { name: 'Payroll Management', href: '/services/payroll' },
  { name: 'Accounting', href: '/services/accounting' },
  { name: 'Tax Consulting', href: '/services/tax-consulting' },
  { name: 'MCA Work', href: '/services/mca-work' },
  { name: 'Foreign Accounting', href: '/services/foreign-accounting' },
],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-us' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  
  support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ]
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
]

const certifications = [
  { name: 'CPA Certified', icon: Award },
  { name: 'ISO 27001', icon: Shield },
  { name: '500+ Clients', icon: Users },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest accounting tips, tax updates, and business insights delivered to your inbox.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-primary hover:bg-blue-600 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">Accountax</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              Professional accounting and bookkeeping services to help your business grow. 
              Expert financial solutions tailored to your needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>info@accountax.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                <span>123 Business Ave,<br />Suite 100, New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <h4 className="font-semibold text-white mb-4 lg:mb-0">Trusted & Certified</h4>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {certifications.map((cert) => {
                const Icon = cert.icon
                return (
                  <div key={cert.name} className="flex items-center text-gray-300">
                    <Icon className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm">{cert.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Emergency Support</h4>
              <p className="text-gray-300 text-sm mb-2">
                Need urgent accounting assistance?
              </p>
              <p className="text-primary font-medium">+1 (555) 999-0000</p>
              <p className="text-gray-400 text-sm">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Accountax. All rights reserved. | Professional accounting services you can trust.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}