import Hero from "@/components/Hero";
import EarlyBirdPromo from "@/components/EarlyBirdPromo";
import Advantages from "@/components/Advantages";
import PricingTable from "@/components/PricingTable";
import SizeContents from "@/components/SizeContents";
import Installations from "@/components/Installations";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EarlyBirdPromo />
      <Advantages />
      <PricingTable />
      <SizeContents />
      <Installations />
      <HowItWorks />
      <Security />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

