

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-[#0a0a2e] border-b border-[#0bb5e0]">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center space-x-2">
          
          <span className="text-xl font-bold text-white">The Ark Analytics</span>
        </div>

        <div className="flex items-center space-x-8">
          <a href="/" className="text-white border-b-2 border-[#0bb5e0] pb-1">
            Home
          </a>
          <a
            href="/top-holds"
            className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all"
          >
            Top Holds
          </a>
          <a
            href="/addresses"
            className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all"
          >
            Addresses
          </a>
          <a
            href="/recent-trades"
            className="text-white pb-1 border-b-2 border-transparent hover:border-[#0bb5e0] transition-all"
          >
            Recent Trades
          </a>
        </div>
      </div>
    </nav>
  )
}
