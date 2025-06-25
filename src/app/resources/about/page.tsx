import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AboutHero from "@/components/about-us/about-hero";
import AboutContent from "@/components/about-us/about-content";
import ValuesSection from "@/components/about-us/values-section";
import TeamSection from "@/components/about-us/team-section";
import { CTASection } from "@/components/common/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AccountAX - Leading Accounting Software Solutions",
  description: "Learn about AccountAX's mission to revolutionize financial management for businesses with innovative, user-friendly accounting solutions.",
  keywords: ["about accountax", "accounting software company", "financial management", "business solutions"],
};

export default function AboutUsPage() {
  return (
    <div>
      
      <main>
        <AboutHero />
        <AboutContent />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      
    </div>
  );
}