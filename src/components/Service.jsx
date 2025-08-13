import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import icon1 from "../assets/icon1.gif";
import icon2 from "../assets/icon2.gif";
import icon3 from "../assets/icon3.gif";
import icon4 from "../assets/icon4.gif";

const features = [
  {
    icon: icon1,
    title: "Real-Time Dex Insights",
    description:
      "Visualize token flows, smart money moves, and detailed charts—all in real time.",
    hoverBg: "hover:bg-blue-500",
  },
  {
    icon: icon2,
    title: "Deep Token Analytics",
    description:
      "Dive into token stats, smart money movements, and in-depth data at your fingertips.",
    hoverBg: "hover:bg-blue-500",
  },
  {
    icon: icon3,
    title: "DeFi Portfolio Tracker",
    description:
      "Monitor your portfolio’s performance, yields, and trends on one clean dashboard.",
    hoverBg: "hover:bg-blue-500",
  },
  {
    icon: icon4,
    title: "On-Chain Alerts",
    description:
      "Stay updated with on-chain actions such as whale activity and large transfers.",
    hoverBg: "hover:bg-blue-500",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#0a0a2e] px-4"> {/* doubled height & white bg */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#0bb5e0]">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`group bg-white 
      ${idx % 2 === 0 
        ? "rounded-tl-[50px] rounded-br-[50px] rounded-tr-lg rounded-bl-lg" 
        : "rounded-tr-[50px] rounded-bl-[50px] rounded-tl-lg rounded-br-lg"
      }
      px-6 pt-12 py-20 flex flex-col items-center text-center 
      border border-blue-100 shadow-md transition-all duration-300 
      ${feature.hoverBg} hover:scale-105 justify-start`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl group-hover:text-white font-semibold mb-2 text-[#0bb5e0]">
                {feature.title}
              </h3>
              <p className="text-blue-700 group-hover:text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




