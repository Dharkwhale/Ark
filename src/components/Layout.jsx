// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
