import React from 'react';
import { ExternalLink, Mail, ArrowUp, Heart, Film } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TrumpetIcon } from './Icons';
import { FILM_INFO } from '../data/filmData';

export default function Footer({ setCurrentPage }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060201] text-[#efebe3] border-t border-white/10 pt-20 pb-14 overflow-hidden relative selection:bg-[#ff4a1c] selection:text-white">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#ff4a1c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Studio Partners Section */}
        <div className="border-b border-white/10 pb-14 mb-14">
          <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-[#ff4a1c] font-bold mb-10">
            Presented & Produced by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-85 hover:opacity-100 transition-opacity">
            {FILM_INFO.partners.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="h-12 sm:h-14 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 w-auto object-contain filter brightness-95 group-hover:brightness-125 transition-all group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase font-mono text-[#9d9590] mt-3 tracking-wider group-hover:text-[#ff4a1c] transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Film Title Banner */}
        <div className="text-center py-4 select-none">
          <h1 className="font-anton text-[13vw] leading-none tracking-tight text-[#efebe3]/15 hover:text-[#ff4a1c]/30 transition-colors uppercase whitespace-nowrap cursor-default">
            USTAD BANTOO
          </h1>
        </div>

        {/* Theatrical Billing Block (A24 / Criterion Style) */}
        <div className="my-10 p-6 rounded-2xl bg-[#0b0301] border border-white/5 text-center">
          <p className="billing-block text-[10px] sm:text-[11px] text-[#9d9590]/70 max-w-4xl mx-auto tracking-widest leading-loose">
            {FILM_INFO.billingBlock}
          </p>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 border-t border-white/10">
          
          {/* Col 1 & 2: Bio / Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6c45] to-[#ff4a1c] flex items-center justify-center font-anton text-white text-lg shadow-md shadow-[#ff4a1c]/30">
                B
              </div>
              <span className="font-anton text-2xl tracking-wider text-[#efebe3]">
                USTAD BANTOO
              </span>
            </div>
            <p className="text-sm text-[#9d9590] leading-relaxed max-w-md font-light">
              {FILM_INFO.tagline}
            </p>
            <div className="text-xs font-mono text-[#ff4a1c] tracking-wider pt-1 flex items-center gap-2">
              <TrumpetIcon className="w-3.5 h-3.5" />
              <span>Written & Directed by Arsh Jain · {FILM_INFO.designedBy}</span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#ff4a1c] font-bold mb-4">
              Explore Film
            </h3>
            <ul className="space-y-3 text-xs font-mono font-bold tracking-wider">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  ABOUT THE FILM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('screening')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors flex items-center gap-2"
                >
                  <span>ROAD TO 100 SCREENINGS</span>
                  <span className="text-[9px] bg-[#ff4a1c] text-white px-2 py-0.5 rounded-full font-mono">
                    Tour
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cast-crew')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  CAST & CREW
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('collaborate')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  HOST A SCREENING
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#ff4a1c] font-bold mb-4">
              Connect & Festival
            </h3>
            <div className="flex flex-col space-y-3 text-xs font-mono">
              <a
                href={FILM_INFO.contacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#9d9590] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>Instagram (@the.yelloworange)</span>
              </a>
              <a
                href={FILM_INFO.contacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#9d9590] hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>Official Trailer (YouTube)</span>
              </a>
              <a
                href={FILM_INFO.contacts.imdb}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#9d9590] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#ff4a1c]" />
                <span>IMDb Official Profile</span>
              </a>
              <a
                href={FILM_INFO.contacts.letterboxd}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#9d9590] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#ff4a1c]" />
                <span>Letterboxd Reviews</span>
              </a>
              <a
                href={`mailto:${FILM_INFO.contacts.bookingEmail}`}
                className="flex items-center gap-2.5 text-[#9d9590] hover:text-white transition-colors pt-1"
              >
                <Mail className="w-4 h-4 text-[#ff4a1c]" />
                <span className="text-[#f6e12b] font-bold">{FILM_INFO.contacts.bookingEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line with Back to Top */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9d9590] font-mono gap-4">
          <p>© 2026 Ustad Bantoo. Produced by The Yellow Orange & 1719 Film Factory. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#efebe3] hover:text-[#ff4a1c] transition-colors p-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#ff4a1c]" />
          </button>
        </div>
      </div>
    </footer>
  );
}