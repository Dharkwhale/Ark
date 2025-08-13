import { Link } from "react-router-dom";
import Hero from "../Hero";
import Service from "../Service";
import InteractiveStats from "../InteractiveStats";
import WhatSetsUsApart from "../WhatSetsUsApart";
import FAQ from "../FAQ"; 
import Footer from "../Footer";
// import logo from "../../assets/logo.svg";

export default function LandingPage() {
  return (
    <div className="bg-[#0a0a2e] text-white min-h-screen">
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 bg-[#0a0a2e] border-b border-[#0bb5e0] px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img src="../../assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">Ark Analytics</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-[#0bb5e0]">Home</a></li>
          <li><a href="#services" className="hover:text-[#0bb5e0]">Services</a></li>
          <li><a href="#about" className="hover:text-[#0bb5e0]">About Us</a></li>
          <li><a href="#contact" className="hover:text-[#0bb5e0]">Contact</a></li>
        </ul>

        {/* Right: Sign Up */}
        <div>
          <Link
            to="/user-register"
            className="bg-[#0bb5e0] hover:bg-[#0999c0] px-4 py-2 rounded text-sm font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>

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

        {/* FAQ Section */}
        <section className="bg-[#0a0a2e] py-16 px-4">
          <FAQ />
        </section>
      </main>

      {/* ✅ Custom Footer */}
      <Footer />
    </div>
  );
}
