// src/components/InteractiveStats.jsx
import { useEffect, useState } from "react";

export default function InteractiveStats() {
  const stats = [
    { label: "Active Users", value: 1280 },
    { label: "Transactions Analyzed / min", value: 4520 },
    { label: "Alerts Triggered", value: 982 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // ms
      const incrementTime = 20; // ms
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, incrementTime);
    });
  }, []);

  return (
    <section className="bg-[#0bb5e0] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-4xl font-bold">{counts[index].toLocaleString()}</p>
            <p className="mt-2 text-lg opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
