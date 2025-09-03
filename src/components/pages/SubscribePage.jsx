import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function SubscribePage() {
  const user = useSelector((state) => state.auth.userInfo);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(
          "https://ark-analytical.onrender.com/v1/subscription/plans"
        );
        console.log("Plans API response:", res.data);

        if (!Array.isArray(res.data)) {
          throw new Error("Invalid API response format");
        }

        // keep only the fields you want
        const filteredPlans = res.data.map((plan) => ({
          _id: plan._id,
          name: plan.name,
          duration: plan.duration,
          price: plan.price,
          discount: plan.discount,
        }));

        setPlans(filteredPlans);
      } catch (err) {
        console.error("❌ Network error:", err.message);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a2e] text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mt-10 space-y-8">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.first_name || "User"} 👋
        </h1>
        <p className="text-lg text-gray-300">
          Choose a subscription plan that works best for you.
        </p>

        {loading && <p className="text-gray-400">Loading plans...</p>}
        {error && <p className="text-red-500">❌ {error}</p>}

        <div className="grid gap-8 justify-center items-center sm:grid-cols-1 md:grid-cols-3">
          {!loading &&
            !error &&
            plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-[#0bb5e0]/10 border border-[#0bb5e0] rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-3xl font-bold mb-2">${plan.price}</p>
                <p className="text-sm text-gray-400 mb-1">
                  Duration: {plan.duration} month(s)
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  Discount: {plan.discount}%
                </p>
                <button className="px-6 py-3 rounded-xl bg-[#0bb5e0] text-[#0a0a2e] font-semibold hover:bg-cyan-400 transition">
                  Select Plan
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
