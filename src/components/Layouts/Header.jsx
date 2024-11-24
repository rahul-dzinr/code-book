
const Header = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto">
      <div className="text-2xl font-medium tracking-tight flex items-center">
        <span className="font-serif">B</span>
        <span className="inline-block -mt-1">OO</span>
        <span className="font-serif">K</span>
        <span>S</span>
      </div>
      
      <div className="flex gap-4">
        <button className="bg-[#E5B06E] px-8 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          Books
        </button>
        <button className="flex items-center gap-2 px-4 text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          AudioBooks
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
        </button>
        <div className="relative">
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E5B06E] rounded-full text-[10px] flex items-center justify-center">1</span>
        </div>
        <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-white" />
        <button>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Header