import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, BarChart2, List, TrendingUp, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/authSlice"; // ✅ adjust path if needed

export default function UserSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    // dispatch(logoutUser());   // clear auth state
    navigate("/");            // redirect to landing page
  };

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/app/home" },
    { name: "Top Holds", icon: TrendingUp, path: "/app/home/top-holds" },
    { name: "Addresses", icon: List, path: "/app/home/addresses" },
    { name: "Recent Trades", icon: BarChart2, path: "/app/home/recent-trades" },
  ];

  return (
    <aside className="w-64 bg-[#0a0a2e] shadow-lg flex flex-col border-r border-[#0bb5e0]/30">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b font-bold text-xl text-white">
        User Dashboard
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg transition-colors ${
                isActive ? "bg-[#0bb5e0]/10 text-[#0bb5e0] font-semibold"
                  : "text-white hover:bg-[#0bb5e0]/10 hover:text-[#0bb5e0]"
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-[#0bb5e0]/30">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
