import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../services/authSlice"; // ✅ make sure the path is correct
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen p-6 bg-[#ffffff] text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-[#0a0a2e] font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-[#0bb5e0] hover:bg-[#0999c0] text-white font-semibold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <p className="text-[#0a0a2e]">Welcome to the admin panel. Use the sidebar to navigate.</p>
    </div>
  );
}
