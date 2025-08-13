import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import AdminLayout from '../components/AdminLayout';
import ProtectedRoute from '../components/ProtectedRoute';

import Addresses from '../components/pages/Addresses';
import RecentTrades from '../components/pages/RecentTrades';
import TopHolds from '../components/pages/TopHolds';
import MainPage from '../components/pages/MainPage';
import LandingPage from '../components/pages/LandingPage';
import LandingLayout from '../components/LandingLayout';

import CreateWallet from '../components/admin/CreateWallet';
import DeleteWallet from '../components/admin/DeleteWallet';
import Register from '../components/admin/Register';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminLogin from '../components/admin/AdminLogin';

import UserRegister from '../components/pages/UserRegister';
import UserLogin from '../components/pages/UserLogin';
import SubscribePage from '../components/pages/SubscribePage';
import VerifyOtp from '../components/pages/VerifyOtp'; // ✅ Import added

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 👋 Landing Page with its own layout */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* 🧠 Main app routes (protected for logged-in users) */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<MainPage />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="recent-trades" element={<RecentTrades />} />
          <Route path="top-holds" element={<TopHolds />} />
        </Route>

        {/* 💳 Subscription route (protected) */}
        <Route
          path="/subscribe"
          element={
            <ProtectedRoute>
              <SubscribePage />
            </ProtectedRoute>
          }
        />

        {/* 🛠 Admin routes (protected and role-checked) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
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
        <Route path="/verify-otp" element={<VerifyOtp />} /> {/* ✅ Added */}

        {/* Optional: Unauthorized access fallback */}
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </BrowserRouter>
  );
};
