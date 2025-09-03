import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import AdminLayout from '../components/AdminLayout';
import ProtectedRoute from '../components/ProtectedRoute';

import Addresses from '../components/pages/Addresses';
import AddressInfo from '../components/pages/AddressesInfo';
import RecentTrades from '../components/pages/RecentTrades';
import TopHolds from '../components/pages/TopHolds';
import LandingPage from '../components/pages/LandingPage';
import LandingLayout from '../components/LandingLayout';

import Proofs from '../components/Proofs';
import About from '../components/About';

import CreateWallet from '../components/admin/CreateWallet';
import DeleteWallet from '../components/admin/DeleteWallet';
import Register from '../components/admin/Register';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminLogin from '../components/admin/AdminLogin';

import UserRegister from '../components/pages/UserRegister';
import UserLogin from '../components/pages/UserLogin';
import SubscribePage from '../components/pages/SubscribePage';
import VerifyOtp from '../components/pages/VerifyOtp';

// ✅ User dashboard imports
import UserLayout from '../components/user/UserLayout';
import UserDashboard from '../components/user/UserDashboard';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 👋 Landing Pages (with Navbar + Footer) */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="proofs" element={<Proofs />} />
          <Route path="about" element={<About />} />
          <Route
            path="subscribe"
            element={
              <ProtectedRoute>
                <SubscribePage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 🧠 OLD Layout routes (can be removed later if not needed) */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="addresses" element={<Addresses />} />
          <Route path="recent-trades" element={<RecentTrades />} />
          <Route path="top-holds" element={<TopHolds />} />
        </Route>

        {/* 🆕 User Dashboard with nested routes */}
        <Route
          path="/app/home"
          element={
            <ProtectedRoute>
              <UserLayout>
                <Outlet /> {/* 👈 Renders the nested page */}
              </UserLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="top-holds" element={<TopHolds />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="addresses/info" element={<AddressInfo />} />
          <Route path="recent-trades" element={<RecentTrades />} />
        </Route>

        {/* 🛠 Admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="create-wallet" element={<CreateWallet />} />
          <Route path="delete-wallet" element={<DeleteWallet />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 👥 Auth Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* Fallback */}
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </BrowserRouter>
  );
};
