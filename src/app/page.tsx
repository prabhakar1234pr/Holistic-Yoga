import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Offerings from "@/components/Offerings";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CorporateWellness from "@/components/CorporateWellness";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";
import InstagramCTA from "@/components/InstagramCTA";

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL && /^https?:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL)
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tejasree",
    url: siteUrl,
    description:
      "International certified yoga trainer offering personalized online yoga sessions (1:1 and small groups).",
    sameAs: ["https://instagram.com/holisticyoga.with.tejasree"],
  };

  return (
    <main className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactWidget />
      <Hero />
      <Philosophy />
      <Offerings />
      <Benefits />
      <Testimonials />
      <InstagramCTA />
      <CorporateWellness />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
