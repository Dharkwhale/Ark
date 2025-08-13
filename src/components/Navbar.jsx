import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top-0 px-4 py-12 flex items-center  bg-[rgba(0,0,10,0.2)] backdrop-blur-3xl border-b-2 border-[#0bb5e0]">
      <div className="container flex items-center  justify-between px-4 py-4 mx-auto">
        <div className="flex items-center 2">
          <img src={logo} alt="" />
          <span className="text-xl font-bold text-white">The Ark Analytics</span>
        </div>

        <ul className="flex items-center space-x-8">
          <li><Link to="/" className="text-white border-b-2 border-[#0bb5e0] pb-1">
            Home
          </Link>
          </li>
          <li>
          <Link to="/top-holds" className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all">
            Top Holds
          </Link>
          </li>
          <li>
          <Link to="/addresses" className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all">
            Addresses
          </Link>
          </li>
          <li>
          <Link to="/recent-trades" className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all">
            Recent Trades
          </Link>
          </li>
        </ul>
      </div>
    // </nav>
    
  )
}
