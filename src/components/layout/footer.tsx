import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Shipping & Delivery", href: "/shipping-delivery" },
    { name: "Cancellation & Refund", href: "/refund-cancellation" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/" },
    { name: "Pricing", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-2">
                <MessageSquare className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Opti Ecom AI</span>
            </div>
            <p className="text-sm text-muted-foreground w-full lg:w-3/4">
              Boost your e-commerce sales with AI-generated product
              descriptions, pricing insights, and customer sentiment analysis.
              Optimize listings, track competitors, and enhance SEO with
              OptiEcomAi.
            </p>
            <Button asChild>
              <Link href="/">Get Started</Link>
            </Button>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
          <Link
            href="https://lumovateintelligence.com"
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Opti Ecom AI. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
}
