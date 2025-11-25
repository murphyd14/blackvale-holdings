import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import MetricsBand from "@/components/marketing/MetricsBand";
import FirmSection from "@/components/marketing/FirmSection";
import StrategiesSection from "@/components/marketing/StrategiesSection";
import SectorsSection from "@/components/marketing/SectorsSection";
import CriteriaSection from "@/components/marketing/CriteriaSection";
import PlatformSection from "@/components/marketing/PlatformSection";
import StewardshipSection from "@/components/marketing/StewardshipSection";
import PartnersSection from "@/components/marketing/PartnersSection";
import LeadershipSection from "@/components/marketing/LeadershipSection";
import InsightsSection from "@/components/marketing/InsightsSection";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Blackvale Holdings",
    description:
      "A tech-driven holding company building an ecosystem of businesses that reinforce each other through strategic expansion, shared capabilities, and long-term value creation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://blackvaleholdings.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://blackvaleholdings.com"}/assets/Blackvale_No_Background.png`,
    sameAs: [
      // Add social media URLs here when available
      // "https://linkedin.com/company/blackvale-holdings",
      // "https://twitter.com/blackvaleholdings",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Inquiries",
      // Add email when available
      // email: "info@blackvaleholdings.com",
    },
    areaServed: "United States",
    knowsAbout: [
      "Private Equity",
      "Holding Company",
      "Business Acquisition",
      "Long-term Investment",
      "Value Creation",
      "Portfolio Management",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen overflow-x-hidden bg-[#050509]">
        <Nav />
        <Hero />
        <MetricsBand />
        <FirmSection />
        <StrategiesSection />
        <SectorsSection />
        <CriteriaSection />
        <PlatformSection />
        <StewardshipSection />
        <PartnersSection />
        <LeadershipSection />
        <InsightsSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
