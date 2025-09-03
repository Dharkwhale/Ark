import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // ✅ for smooth scrolling

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0a0a2e] border-b border-[#0bb5e0] px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <span className="text-xl font-bold text-white">Ark Analytics</span>
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li>
        <Link to="/" className="hover:text-[#0bb5e0] text-white">Home</Link>
        </li>
        <li>
          <Link to="/proofs" className="hover:text-[#0bb5e0] text-white">Proofs</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#0bb5e0] text-white">About</Link>
        </li>
        <li>
          {/* ✅ Smooth scroll to FAQ */}
          <ScrollLink
            to="faq-section"
            smooth={true}
            duration={500}
            offset={-80} // Adjust for fixed navbar
            className="cursor-pointer hover:text-[#0bb5e0] text-white"
          >
            FAQ
          </ScrollLink>
        </li>
        <li>
          <Link to="/subscribe" className="hover:text-[#0bb5e0] text-white">Pricing</Link>
        </li>
      </ul>

      {/* Right: Sign Up */}
      <div>
        <Link
          to="/user-register"
          className="bg-[#0bb5e0] hover:bg-[#0999c0] px-4 py-2 rounded text-sm font-semibold text-white"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
