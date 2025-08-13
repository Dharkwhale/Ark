import { Outlet } from "react-router-dom";
import AdminSidebar from "./admin/AdminSidebar";
import AdminTopbar from "./admin/AdminTopbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-[#f0f2f5] text-white">
      {/* Sidebar */}
        
        <AdminSidebar />
      

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminTopbar />
      
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
      </div>
    </div>
  );
}
