import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SubscribePage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userInfo);

  const handleSubscribe = () => {
    // TODO: Send subscription to backend or initiate payment
    console.log('User subscribed to: $100/month plan');

    // Simulate success and redirect
    navigate('/app/home');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.first_name || 'User'} 👋</h1>
        <p className="text-lg text-gray-300 mb-8">Subscribe monthly to access all features.</p>

        <div className="bg-[#0bb5e0]/10 border border-[#0bb5e0] rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Monthly Plan</h2>
          <p className="text-3xl font-bold mb-2">$100<span className="text-base font-medium text-gray-400"> /month</span></p>
          <p className="text-sm text-gray-400 mb-4">Get full access to premium features, tools, and support. Billed monthly.</p>
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 rounded-xl bg-[#0bb5e0] text-black font-semibold hover:bg-cyan-400 transition cursor-pointer"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
