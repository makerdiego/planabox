import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingTable from "@/components/PricingTable";
import SizeContents from "@/components/SizeContents";
import Security from "@/components/Security";
import Installations from "@/components/Installations";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FAQSchema />
      <Header />
      <Hero />
      <PricingTable />
      <SizeContents />
      <Security />
      <Installations />
      <FAQ />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}
