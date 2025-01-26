import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Features = dynamic(() => import("@/components/Features"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="cta">
            <CTA />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
