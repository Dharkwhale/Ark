import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0a0a2e] border-b border-[#0bb5e0] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Name (Always Visible) */}
        <div className="flex items-center gap-2 z-50">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-white">Ark Analytics</span>
        </div>

        {/* Desktop Center: Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#0bb5e0] text-white">Home</Link></li>
          <li><Link to="/proofs" className="hover:text-[#0bb5e0] text-white">Proofs</Link></li>
          <li><Link to="/about" className="hover:text-[#0bb5e0] text-white">About</Link></li>
          <li>
            <ScrollLink to="faq-section" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-[#0bb5e0] text-white">
              FAQ
            </ScrollLink>
          </li>
          <li><Link to="/subscribe" className="hover:text-[#0bb5e0] text-white">Pricing</Link></li>
        </ul>

        {/* Desktop Right: Sign Up */}
        <div className="hidden md:block">
          <Link to="/user-register" className="bg-[#0bb5e0] hover:bg-[#0999c0] px-4 py-2 rounded text-sm font-semibold text-white">
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-50 text-2xl text-white cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a0a2e] flex flex-col items-center justify-center gap-8 text-lg z-40 md:hidden">
          <Link to="/" onClick={toggleMenu} className="text-white">Home</Link>
          <Link to="/proofs" onClick={toggleMenu} className="text-white">Proofs</Link>
          <Link to="/about" onClick={toggleMenu} className="text-white">About</Link>
          <ScrollLink to="faq-section" smooth={true} onClick={toggleMenu} className="text-white">FAQ</ScrollLink>
          <Link to="/subscribe" onClick={toggleMenu} className="text-white">Pricing</Link>
          
          {/* Sign Up inside Mobile Menu */}
          <Link
            to="/user-register"
            onClick={toggleMenu}
            className="bg-[#0bb5e0] px-8 py-3 rounded-full font-bold text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}