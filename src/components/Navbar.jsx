import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film, Calendar, Users, Mail, Compass } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenWaitlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Film },
    { id: 'about', label: 'ABOUT', icon: Compass },
    { id: 'screening', label: 'SCREENING', badge: '100 Screenings', icon: Calendar },
    { id: 'cast-crew', label: 'CAST AND CREW', icon: Users },
    { id: 'collaborate', label: 'COLLABORATE', icon: Mail },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center gap-3 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#ff4a1c] flex items-center justify-center font-anton text-white text-lg transition-transform duration-300 group-hover:scale-105">
              B
            </div>
            <div>
              <span className="font-anton text-2xl sm:text-3xl tracking-wider text-[#efebe3] transition-colors group-hover:text-[#ff4a1c] block leading-none">
                USTAD BANTOO
              </span>
              <span className="text-[10px] tracking-widest text-[#9d9590] uppercase font-mono block mt-0.5">
                A Film by Arsh Jain
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#170b06]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-semibold tracking-wider transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0d0401] bg-[#efebe3] shadow-md'
                      : 'text-[#efebe3]/80 hover:text-[#efebe3] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.badge && !isActive && (
                    <span className="hidden lg:inline-block text-[9px] bg-[#ff4a1c] text-white px-1.5 py-0.5 rounded-full font-mono uppercase tracking-normal">
                      Tour
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action / Waitlist Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="group relative inline-flex items-center gap-2 bg-[#ff4a1c] hover:bg-[#e0390f] text-white text-xs uppercase tracking-wider font-bold py-2.5 px-5 rounded-full transition-all duration-200 shadow-lg shadow-[#ff4a1c]/20 hover:shadow-[#ff4a1c]/40"
            >
              <span>Host in your city</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 bg-[#efebe3] text-[#0d0401] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-white transition-colors"
              aria-label="Toggle Navigation"
            >
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0401]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono text-[#ff4a1c] tracking-widest px-2">Navigation</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#ff4a1c] text-white font-bold'
                      : 'bg-[#1b0e09] text-[#efebe3] hover:bg-[#25150e]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 opacity-80" />
                    <span className="font-anton text-xl tracking-wide">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full bg-[#efebe3] text-[#0d0401] hover:bg-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 tracking-wider uppercase text-sm shadow-xl"
              >
                <span>Host Screening in Your City</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-center">
            <p className="text-xs text-[#9d9590] font-mono">
              © 2026 Ustad Bantoo · The Yellow Orange
            </p>
          </div>
        </div>
      )}
    </>
  );
}
