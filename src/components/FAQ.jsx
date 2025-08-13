// src/components/FAQ.jsx
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Ark Analytics and how can it help me?",
    answer:
      "Ark Analytics is a crypto insights and analytics platform that provides trading signals, portfolio tracking, and market analysis to help you make informed investment decisions.",
  },
  {
    question: "Do I need prior crypto trading experience to use Ark Analytics?",
    answer:
      "No. Ark Analytics is built for both beginners and advanced traders. We provide simple explanations for strategies, as well as deep analytics for experienced users.",
  },
  {
    question: "How accurate are the trading signals?",
    answer:
      "Our signals are generated using a combination of technical analysis, AI-powered models, and market sentiment data. While no system can guarantee 100% accuracy, we aim for high consistency and risk management.",
  },
  {
    question: "Can I track my portfolio on Ark Analytics?",
    answer:
      "Yes. You can connect your wallets and exchanges to track your holdings in real time, see your profit/loss, and monitor market changes.",
  },
  {
    question: "Is Ark Analytics secure?",
    answer:
      "Absolutely. We use industry-standard encryption, secure APIs, and never store your private keys. Your data and privacy are our priority.",
  },
  {
    question: "Will Ark Analytics work on mobile devices?",
    answer:
      "Yes, Ark Analytics is fully responsive and optimized for both desktop and mobile browsers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0a2e] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg p-4 cursor-pointer hover:border-[#0bb5e0] transition"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question row */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus size={20} className="text-[#0bb5e0]" />
                ) : (
                  <Plus size={20} className="text-[#0bb5e0]" />
                )}
              </div>

              {/* Answer dropdown */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2 text-white/80"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
