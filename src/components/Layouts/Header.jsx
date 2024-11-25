import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Main header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        {/* Logo - always visible */}
        <div className="text-xl md:text-2xl font-medium tracking-tight flex items-center">
          <span className="font-serif">B</span>
          <span className="inline-block -mt-1">OO</span>
          <span className="font-serif">K</span>
          <span>S</span>
        </div>
        
        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#E5B06E] px-6 md:px-8 py-2 md:py-2.5 rounded-full flex items-center gap-2 text-sm font-medium">
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

        {/* Desktop Actions - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:opacity-75 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>
          <div className="relative">
            <button className="hover:opacity-75 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E5B06E] rounded-full text-[10px] flex items-center justify-center">1</span>
          </div>
          <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-white" />
        </div>

        {/* Mobile Menu Button - only visible on mobile */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - slides in from the right */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="p-4 space-y-6">
          <div className="flex justify-end">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-[#E5B06E] px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              Books
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium justify-center hover:bg-gray-100 rounded-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              AudioBooks
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 border-t">
            <button className="hover:opacity-75 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
            </button>
            <div className="relative">
              <button className="hover:opacity-75 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E5B06E] rounded-full text-[10px] flex items-center justify-center">1</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;