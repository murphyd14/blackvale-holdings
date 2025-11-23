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
  return (
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
  );
}
