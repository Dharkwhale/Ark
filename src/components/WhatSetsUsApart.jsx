// src/components/WhyDifferent.jsx
import React from "react";
import PNL from "../assets/PNL.jpeg"

const features = [
  {
    title: "Portfolio Building",
    description:
      "You have exclusive real-time access to our private portfolio—see exactly how and where we allocate resources.",
  },
  {
    title: "Protect & Money Management",
    description:
      "Capital protection is our top priority: proper exposure and safety measures keep your investments secure.",
  },
  {
    title: "Strategy & Education",
    description:
      "We share our strategies to fill your mind with knowledge—educating you effortlessly along the way.",
  },
  {
    title: "The 7 Golden Rules",
    description:
      "We’ve simplified our entire approach into seven basic rules to keep trading simple and effective.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="bg-[#0a0a2e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center items-center mt-20">
            <div className="p-[4px] rounded-lg bg-gradient-to-r from-white to-gray-400 ">
                <div className="bg-[#0a0a2e] rounded-lg p-6">
                    <img
                        src={PNL}
                        alt="Ark Analytics PnL"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
            It’s not just about <br />crypto trading signals
          </h2>
          <p className="text-xl text-white/90">
            If we want to be more profitable than others, we need to be more innovative.
          </p>

          {/* Cards stacked vertically */}
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition w-full shadow"
            >
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-white/90">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
