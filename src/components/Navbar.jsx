import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film, Calendar, Users, Mail, Compass, Play, Sparkles } from 'lucide-react';
import { TrumpetIcon } from './Icons';

export default function Navbar({ currentPage, setCurrentPage, onOpenWaitlist, onOpenTrailer }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Film },
    { id: 'about', label: 'ABOUT', icon: Compass },
    { id: 'screening', label: 'SCREENING', badge: '100 TOUR', icon: Calendar },
    { id: 'cast-crew', label: 'CAST & CREW', icon: Users },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Film Identifier */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6c45] via-[#ff4a1c] to-[#a33a2b] flex items-center justify-center font-anton text-white text-xl shadow-lg shadow-[#ff4a1c]/30 group-hover:scale-105 transition-transform duration-300">
                B
              </div>
              <div className="absolute -inset-1 rounded-full bg-[#ff4a1c]/20 blur-sm group-hover:bg-[#ff4a1c]/40 transition-colors" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-anton text-2xl sm:text-3xl tracking-wider text-[#efebe3] transition-colors group-hover:text-[#ff4a1c] block leading-none">
                  USTAD BANTOO
                </span>
                <span className="hidden xl:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono tracking-normal uppercase bg-[#ff4a1c]/20 text-[#ff4a1c] border border-[#ff4a1c]/30">
                  Rotterdam 2026
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#9d9590] uppercase font-mono block mt-0.5">
                A Film by Arsh Jain
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#170b06]/80 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/10 shadow-xl shadow-black/40">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-semibold tracking-wider transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0d0401] bg-[#efebe3] shadow-lg shadow-white/10'
                      : 'text-[#efebe3]/80 hover:text-[#efebe3] hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="text-[9px] bg-[#ff4a1c] text-white px-1.5 py-0.5 rounded-full font-mono uppercase tracking-normal font-bold">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4a1c] shrink-0 ml-0.5" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Tour CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenTrailer && (
              <button
                onClick={onOpenTrailer}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold tracking-wider text-[#efebe3] hover:text-white transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 text-[#ff4a1c] fill-[#ff4a1c]" />
                <span>Trailer</span>
              </button>
            )}

            <button
              onClick={onOpenWaitlist}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#ff4a1c] to-[#e0390f] hover:from-[#ff6c45] hover:to-[#ff4a1c] text-white text-xs uppercase tracking-wider font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-lg shadow-[#ff4a1c]/25 hover:shadow-[#ff4a1c]/50 hover:-translate-y-0.5"
            >
              <TrumpetIcon className="w-4 h-4" />
              <span>Host in your city</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 bg-[#efebe3] text-[#0d0401] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-white transition-colors"
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
        <div className="fixed inset-0 z-40 bg-[#0d0401]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10">
              <span className="text-[11px] uppercase font-mono text-[#ff4a1c] tracking-widest font-bold">
                Film Navigation
              </span>
              <span className="text-[10px] font-mono text-[#9d9590]">
                Official Selection IFFR 2026
              </span>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff4a1c] to-[#e0390f] text-white font-bold shadow-xl shadow-[#ff4a1c]/30'
                      : 'bg-[#180a05] text-[#efebe3] hover:bg-[#251007] border border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon className="w-5 h-5 opacity-90" />
                    <span className="font-anton text-2xl tracking-wide">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] bg-white/20 px-2.5 py-1 rounded-full font-mono font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full bg-[#efebe3] text-[#0d0401] hover:bg-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 tracking-wider uppercase text-xs shadow-xl"
              >
                <TrumpetIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>Host Screening in Your City</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {onOpenTrailer && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrailer();
                  }}
                  className="w-full bg-white/5 text-[#efebe3] hover:bg-white/10 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 tracking-wider uppercase text-xs border border-white/10 font-mono"
                >
                  <Play className="w-4 h-4 text-[#ff4a1c] fill-[#ff4a1c]" />
                  <span>Watch Trailer (2 Min)</span>
                </button>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-center">
            <p className="text-xs text-[#9d9590] font-mono">
              © 2026 Ustad Bantoo · The Yellow Orange & 1719 Film Factory
            </p>
          </div>
        </div>
      )}
    </>
  );
}