import { Element } from "react-scroll"; // ✅ still needed for FAQ scroll
import Hero from "../Hero";
import Service from "../Service";
import InteractiveStats from "../InteractiveStats";
import WhatSetsUsApart from "../WhatSetsUsApart";
import FAQ from "../FAQ";
import Footer from "../Footer";
import Navbar from "../Navbar"; // ✅ import reusable navbar

export default function LandingPage() {
  return (
    <div className="bg-[#0a0a2e] text-white min-h-screen">
      {/* ✅ Reusable Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 bg-[#0a0a2e]">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="bg-gray-200 py-16 px-4">
          <Service />
        </section>

        {/* About */}
        <section id="about" className="bg-[#0a0a2e] py-16 px-4">
          <WhatSetsUsApart />
        </section>

        {/* Interactive Stats */}
        <section id="contact" className="bg-gray-200 py-12 px-4">
          <InteractiveStats />
        </section>

        {/* ✅ FAQ Section with Element */}
        <Element name="faq-section">
          <section className="bg-[#0a0a2e] py-16 px-4">
            <FAQ />
          </section>
        </Element>
      </main>

      {/* ✅ Footer */}
      {/* <Footer /> */}
    </div>
  );
}
