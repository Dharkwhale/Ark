import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a2e]">
      <Navbar />
      
      {/* Added padding-top to account for fixed navbar */}
      <div className="pt-16">
        <Hero />
        <Service />
        <Newsletter />

        {/* Additional content can go here */}
        <div className="h-screen bg-[#0a0a2e]"></div> {/* Demonstrates scrolling */}
      </div>
    </div>
  );
}
