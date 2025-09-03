import React from "react";
import AdminSidebar from "./admin/AdminSidebar";
import AdminTopbar from "./admin/AdminTopbar"; 
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar (fixed left) */}
      <div className="fixed top-0 left-0 h-screen w-64 z-20 bg-[#0a0a2e]">
        <AdminSidebar />
      </div>

      {/* Main content wrapper */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Topbar (fixed top) */}
        <div className="fixed top-0 left-64 right-0 h-16 z-10 bg-white shadow">
          <AdminTopbar />
        </div>

        {/* Scrollable content area */}
        <main className="flex-1 mt-16 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
