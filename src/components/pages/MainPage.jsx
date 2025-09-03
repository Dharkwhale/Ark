// src/components/pages/MainPage.jsx
import UserSidebar from "../user/UserSidebar";
import UserTopbar from "../user/UserTopbar";
import UserDashboard from "../user/UserDashboard";

export default function MainPage() {
  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex flex-col flex-1">
        <UserTopbar />
        <div className="flex-1 p-6 bg-[#f9f9f9]">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
}
