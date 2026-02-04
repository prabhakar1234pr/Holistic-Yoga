import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Offerings from "@/components/Offerings";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Philosophy />
      <Offerings />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
