import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { FILM_INFO } from '../data/filmData';

export default function Footer({ setCurrentPage }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080201] text-[#efebe3] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Partners Section */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-[#9d9590] mb-8">
            Presented & Produced by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            {FILM_INFO.partners.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 sm:h-12 w-auto object-contain filter brightness-95 group-hover:brightness-125 transition-all"
                  loading="lazy"
                />
                <span className="text-[10px] uppercase font-mono text-[#9d9590] mt-2 tracking-wider group-hover:text-[#ff4a1c] transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Film Title Banner */}
        <div className="text-center py-6 select-none">
          <h1 className="font-anton text-[14vw] leading-none tracking-tight text-[#efebe3]/15 hover:text-[#efebe3]/30 transition-colors uppercase whitespace-nowrap">
            USTAD BANTOO
          </h1>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-white/10">
          {/* Col 1: Bio / Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#ff4a1c] flex items-center justify-center font-anton text-white text-base">
                B
              </span>
              <span className="font-anton text-2xl tracking-wider text-[#efebe3]">
                USTAD BANTOO
              </span>
            </div>
            <p className="text-sm text-[#9d9590] leading-relaxed max-w-md">
              {FILM_INFO.tagline}
            </p>
            <div className="text-xs font-mono text-[#ff4a1c] tracking-wider pt-2">
              Written & Directed by Arsh Jain · {FILM_INFO.designedBy}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#ff4a1c] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
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
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('screening')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors flex items-center gap-1.5"
                >
                  <span>SCREENING</span>
                  <span className="text-[10px] bg-[#ff4a1c] text-white px-1.5 py-0.2 rounded-full font-mono">
                    Tour
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cast-crew')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  CAST AND CREW
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('collaborate')}
                  className="text-[#9d9590] hover:text-[#efebe3] transition-colors"
                >
                  COLLABORATE
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#ff4a1c] mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href={FILM_INFO.contacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#9d9590] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>Instagram (@the.yelloworange)</span>
              </a>
              <a
                href={FILM_INFO.contacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#9d9590] hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>YouTube Trailer</span>
              </a>
              <a
                href={FILM_INFO.contacts.imdb}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#9d9590] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#ff4a1c]" />
                <span>IMDb Profile</span>
              </a>
              <a
                href={FILM_INFO.contacts.letterboxd}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#9d9590] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#ff4a1c]" />
                <span>Letterboxd</span>
              </a>
              <a
                href={`mailto:${FILM_INFO.contacts.bookingEmail}`}
                className="flex items-center gap-2 text-[#9d9590] hover:text-white transition-colors pt-1"
              >
                <Mail className="w-4 h-4 text-[#ff4a1c]" />
                <span className="font-mono text-xs">{FILM_INFO.contacts.bookingEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9d9590] font-mono">
          <p>© 2026 Ustad Bantoo. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            A journey of 100 community screenings across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
