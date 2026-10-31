import React, { useState } from 'react';
import { Play, ArrowUpRight, Calendar, Sparkles, Film, Heart } from 'lucide-react';
import { FILM_INFO } from '../data/filmData';

export default function HomePage({ setCurrentPage, onOpenWaitlist }) {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  return (
    <div className="min-h-screen text-[#efebe3] selection:bg-[#ff4a1c] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden film-grain">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4a1c]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#f6e12b]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, credits, synopsis, CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
              
              {/* Badge & Designer credit */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#1e0e08] border border-white/10 text-[#efebe3]">
                  about the film
                </span>
                <span className="text-xs font-mono tracking-wider text-[#9d9590]">
                  {FILM_INFO.designedBy}
                </span>
              </div>

              {/* Huge Anton Title */}
              <div>
                <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#efebe3] leading-[0.9] uppercase">
                  USTAD <br />
                  <span className="text-[#ff4a1c]">BANTOO</span>
                </h1>
                <p className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-[#9d9590] uppercase">
                  Written & Directed by Arsh Jain
                </p>
              </div>

              {/* Tagline / Synopsis quote */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#efebe3]/90 font-light leading-relaxed max-w-xl">
                {FILM_INFO.tagline}
              </p>

              {/* Film Technical Specs */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#9d9590] py-2 border-y border-white/10">
                <div><span className="text-[#efebe3]">Language:</span> Hindi</div>
                <div>·</div>
                <div><span className="text-[#efebe3]">Genre:</span> Drama</div>
                <div>·</div>
                <div><span className="text-[#efebe3]">Duration:</span> 120 mins</div>
                <div>·</div>
                <div><span className="text-[#efebe3]">Format:</span> Feature Film</div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsPlayingTrailer(true)}
                  className="bantoo-btn group focus:outline-none"
                >
                  <span className="bantoo-btn-body flex items-center gap-2">
                    <Play className="w-4 h-4 text-[#ff4a1c] fill-[#ff4a1c]" />
                    <span>Watch Trailer</span>
                  </span>
                  <span className="bantoo-btn-icon">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>

                <button
                  onClick={() => setCurrentPage('screening')}
                  className="px-6 py-3.5 rounded-full bg-[#1b0d07] hover:bg-[#28140c] border border-white/15 text-sm font-bold tracking-wider uppercase text-[#efebe3] transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#ff4a1c]" />
                  <span>Road to 100 Tour</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Poster with framer frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                {/* Poster border glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#ff4a1c] to-[#f6e12b] rounded-3xl opacity-30 group-hover:opacity-75 blur-md transition duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden bg-[#150a06] border border-white/20 shadow-2xl">
                  <img
                    src={FILM_INFO.heroPoster}
                    alt="Ustad Bantoo Official Poster"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <p className="font-anton text-2xl text-white tracking-wider">USTAD BANTOO</p>
                      <p className="text-xs text-[#d9d8ca] font-mono mt-1">Official Selection · Waves WIP Lab · IFFR Rotterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FESTIVAL LAURELS SECTION */}
      <section className="py-12 bg-[#090301] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-[#ff4a1c] mb-8">
            Festival Selections & Recognition
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {FILM_INFO.laurels.map((laurel, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-[#140804]/50 hover:bg-[#1a0b06] border border-white/5 transition-all group"
              >
                <img
                  src={laurel.badge}
                  alt={laurel.name}
                  className="h-20 sm:h-24 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  loading="lazy"
                />
                <span className="text-[10px] font-mono text-[#9d9590] mt-2 group-hover:text-[#efebe3] transition-colors leading-tight line-clamp-2">
                  {laurel.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBEDDED TRAILER SECTION */}
      <section className="py-20 bg-[#0d0401] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
              Official Teaser / Trailer
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wide uppercase text-[#efebe3] mt-3">
              THE SOUND OF AN UNCLAIMED TUNE
            </h2>
            <p className="text-sm text-[#9d9590] mt-2 max-w-xl mx-auto">
              Step into the vibrant chaos of wedding processions in Delhi and Bantoo's relentless search for his music.
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl">
            {isPlayingTrailer ? (
              <iframe
                src={FILM_INFO.trailerEmbedUrl}
                title="Ustad Bantoo Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlayingTrailer(true)}>
                <img
                  src="https://i.ytimg.com/vi_webp/4AiMrlQmjQk/maxresdefault.webp"
                  alt="Ustad Bantoo Trailer Preview"
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#ff4a1c] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <p className="font-anton text-xl tracking-wider">USTAD BANTOO · OFFICIAL TRAILER</p>
                    <p className="text-xs font-mono text-[#d9d8ca]">Click to Play · Full Audio & Score</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROAD TO 100 SCREENINGS - MARQUEE BANNER */}
      <section className="py-16 bg-[#080201] border-y border-white/10 overflow-hidden">
        <div className="mb-4">
          <div className="animate-marquee whitespace-nowrap flex space-x-8 text-center select-none">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-anton text-6xl sm:text-7xl md:text-8xl tracking-wider text-[#efebe3]/20 hover:text-[#ff4a1c]/60 transition-colors uppercase"
              >
                ROAD TO 100 SCREENINGS · ROAD TO 100 SCREENINGS ·
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto px-4 mt-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#1d0e07] text-[#ff4a1c] border border-[#ff4a1c]/30 mb-3">
            TO be Announced Soon …
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-[#efebe3] uppercase tracking-wide">
            A Journey of 100 Community Screenings Across India
          </h2>
          <p className="text-sm text-[#9d9590] mt-3 leading-relaxed">
            From premiering at Rotterdam and Chicago to taking the film directly to colleges, cultural hubs, independent rooftops, and film clubs throughout India.
          </p>
        </div>

        {/* TIMELINE CARDS */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FILM_INFO.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#140804] border border-white/10 hover:border-[#ff4a1c]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#ff4a1c] uppercase tracking-wider block">
                    {item.date}
                  </span>
                  <h3 className="font-anton text-xl tracking-wide text-[#efebe3] mt-2 group-hover:text-[#ff4a1c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9d9590] mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#9d9590]">
                  <span>Milestone 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4a1c]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOST BANTOO IN YOUR CITY BANNER */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1f0e07] via-[#2a130a] to-[#1a0b06] border border-[#ff4a1c]/30 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            {/* Background decorative trumpet circles */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#ff4a1c]/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-xs font-mono uppercase tracking-widest text-[#f6e12b] font-bold">
              Community Distribution
            </span>
            <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#efebe3] uppercase tracking-wide mt-2">
              Want to host Bantoo in Your city?
            </h3>
            <p className="text-sm sm:text-base text-[#efebe3]/80 font-mono mt-2">
              Anywhere in INDIA
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={onOpenWaitlist}
                className="bantoo-btn group focus:outline-none"
              >
                <span className="bantoo-btn-body">
                  JOIN WAITLIST
                </span>
                <span className="bantoo-btn-icon">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>

              <button
                onClick={() => setCurrentPage('screening')}
                className="px-6 py-3.5 rounded-full bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold text-sm uppercase tracking-wider transition-all"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
