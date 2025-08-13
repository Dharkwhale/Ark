// src/components/admin/AdminTopbar.jsx
import { FaBell, FaEnvelope, FaSearch, FaChevronDown } from "react-icons/fa";

export default function AdminTopbar() {
  return (
    <div className="flex items-center justify-between w-full bg-[#ffffff] px-6 py-4 border-b border-[#0bb5e0]/30">
      <div className="relative w-[250px]">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-[#f0f2f5] text-white placeholder-gray-400 focus:outline-none"
        />
        <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
      </div>

      {/* Right: Icons & Profile */}
      <div className="flex items-center gap-6">
        <FaEnvelope className="text-[#0a0a2e] text-lg cursor-pointer" />
        <div className="relative">
          <FaBell className="text-[#0a0a2e] text-lg cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5">
            3
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-[#0a0a2e] font-medium">Admin</span>
          <FaChevronDown className="text-[#0a0a2e] text-sm" />
        </div>
      </div>
    </div>
  );
}
