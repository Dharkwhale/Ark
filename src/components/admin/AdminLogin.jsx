import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../services/authSlice";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with real authentication logic if needed
    if (email === "admin@example.com" && password === "admin123") {
      dispatch(loginAdmin()); // ✅ Use Redux Toolkit
      navigate("/admin/dashboard"); // 🔁 Redirect
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a2e] text-white">
      <form onSubmit={handleSubmit} className="bg-[#111827] p-8 rounded-lg w-full max-w-sm shadow-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-[#1f2937] text-white border border-[#0bb5e0]"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-[#1f2937] text-white border border-[#0bb5e0]"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#0bb5e0] hover:bg-[#0999c0] p-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
