import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <div className="bg-[#5e8eff] w-full max-w-6xl rounded-xl border border-white/20 p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 text-white shadow-lg min-h-[320px]">
        
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/2">
          <div className="bg-white/20 p-3 rounded-full">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-base text-white/90">
              Subscribe to our newsletter for the latest crypto insights and updates.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-md bg-[#5e8eff] border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto flex-grow"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#347af8] hover:bg-[#2d6ee0] text-white font-semibold rounded-md transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
