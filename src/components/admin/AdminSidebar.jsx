// src/components/admin/AdminSidebar.jsx
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaWallet, FaTrashAlt, FaUserPlus } from "react-icons/fa";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { to: "/admin/create-wallet", label: "Create Wallet", icon: <FaWallet /> },
  { to: "/admin/delete-wallet", label: "Delete Wallet", icon: <FaTrashAlt /> },
  { to: "/admin/register", label: "Register", icon: <FaUserPlus /> },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-[#0a0a2e] h-screen p-4 border-r border-[#0bb5e0]/30">
      <h2 className="text-2xl font-bold text-white mb-6">Admin Dashboard</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-4 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-[#0bb5e0]/10 text-[#0bb5e0] font-semibold"
                  : "text-white hover:bg-[#0bb5e0]/10 hover:text-[#0bb5e0]"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
