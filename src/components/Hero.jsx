import { useEffect, useState } from "react";

export default function CryptoHero() {
  const [prices, setPrices] = useState({});

  const coins = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "solana", symbol: "SOL", name: "Solana" },
    { id: "ripple", symbol: "XRP", name: "Ripple" },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
    { id: "tether", symbol: "USDT", name: "Tether" },
    { id: "binancecoin", symbol: "BNB", name: "Binance Coin" },
    { id: "usd-coin", symbol: "USDC", name: "USD Coin" }
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = coins.map((c) => c.id).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        const data = await res.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching prices", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-[#0a0a2e] text-white">
      <h1 className="max-w-5xl mx-auto text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Track. Analyze. Conquer{" "}
        <span className="text-[#4a4aff]">Crypto Markets</span>
      </h1>

      <p className="max-w-xl mx-auto mt-4 text-lg text-white">
        All your on-chain insights in one powerful tool.
      </p>

      <button className="px-6 py-3 cursor-pointer mt-8 text-base font-medium text-white transition-all rounded-full bg-[#4a4aff] hover:bg-[#0bb5e0] hover:shadow-lg w-40">
        Get Started
      </button>

      {/* Scrolling ticker */}
      <div className="w-full overflow-hidden mt-10 border-t border-b border-gray-700 py-3">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...coins, ...coins].map((coin, index) => (
            <div key={coin.id + index} className="flex items-center gap-2">
              <span className="font-bold">
                {coin.name} ({coin.symbol})
              </span>
              <span>
                ${prices[coin.id]?.usd
                  ? prices[coin.id].usd.toLocaleString()
                  : "--"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .animate-marquee {
            display: inline-flex;
            min-width: 200%;
            animation: marquee 25s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
