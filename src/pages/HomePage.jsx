import React, { useState } from 'react';
import { Play, ArrowUpRight, Calendar, Sparkles, Film, Heart, Ticket, Quote, MapPin, Clock, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { FILM_INFO } from '../data/filmData';
import { SCREENINGS } from '../data/screeningsData';
import { TrumpetIcon } from '../components/Icons';

export default function HomePage({ setCurrentPage, onOpenWaitlist, onSelectScreening }) {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const trailerChapters = [
    { title: "01: The Wedding Procession", desc: "Old Delhi midnight brass" },
    { title: "02: The Street Encounter", desc: "A wandering mystic's tune" },
    { title: "03: Bantoo's Obsession", desc: "Finding his own voice" },
  ];

  const nextScreening = SCREENINGS[0];

  return (
    <div className="min-h-screen text-[#efebe3] selection:bg-[#ff4a1c] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden film-grain">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#ff4a1c]/15 via-[#a33a2b]/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-[#f6e12b]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#ff4a1c]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Festival Laurel Pre-header, Massive Title, Specs, CTAs */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Prestigious Festival Pre-header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1e0e08]/90 border border-[#ff4a1c]/30 text-[#efebe3] shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#ff4a1c] animate-pulse" />
                  <span>Official Selection · 54th IFFR Rotterdam</span>
                </span>
                <span className="text-xs font-mono tracking-wider text-[#9d9590] hidden sm:inline-block">
                  {FILM_INFO.designedBy}
                </span>
              </div>

              {/* Huge Anton Title with Saffron Highlights */}
              <div>
                <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#efebe3] leading-[0.88] uppercase">
                  USTAD <br />
                  <span className="text-fire-gradient">BANTOO</span>
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9d9590] uppercase font-bold">
                    A Film by Arsh Jain
                  </p>
                  <span className="text-white/20">·</span>
                  <p className="text-xs font-mono text-[#f6e12b] tracking-wider">
                    “Har cheez mein ek sur hota hai”
                  </p>
                </div>
              </div>

              {/* Tagline / Narrative Hook */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#efebe3]/90 font-light leading-relaxed max-w-xl">
                An Indian wedding-band trumpet player risks everything to go on an obsessive journey of finding his own tune, his own music.
              </p>

              {/* Technical Film Credentials Bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#9d9590] py-3 border-y border-white/10 bg-[#140804]/40 px-4 rounded-xl">
                <div><span className="text-[#efebe3] font-bold">Language:</span> Hindi (Eng Sub)</div>
                <div className="text-white/20">|</div>
                <div><span className="text-[#efebe3] font-bold">Scope:</span> 2.39:1</div>
                <div className="text-white/20">|</div>
                <div><span className="text-[#efebe3] font-bold">Runtime:</span> 120 Mins</div>
                <div className="text-white/20">|</div>
                <div><span className="text-[#efebe3] font-bold">Sound:</span> Dolby Atmos / 5.1</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => setIsPlayingTrailer(true)}
                  className="bantoo-btn group focus:outline-none"
                >
                  <span className="bantoo-btn-body">
                    <Play className="w-4 h-4 text-[#ff4a1c] fill-[#ff4a1c]" />
                    <span>Watch Official Trailer</span>
                  </span>
                  <span className="bantoo-btn-icon">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>

                <button
                  onClick={() => setCurrentPage('screening')}
                  className="px-6 py-4 rounded-full bg-[#1b0d07] hover:bg-[#28140c] border border-white/15 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#efebe3] transition-all flex items-center gap-2 hover:border-[#ff4a1c]/40 hover:shadow-lg hover:shadow-[#ff4a1c]/10"
                >
                  <Calendar className="w-4 h-4 text-[#ff4a1c]" />
                  <span>Road to 100 Tour</span>
                </button>
              </div>

              {/* Live Tour Ticker Banner */}
              <div
                onClick={() => setCurrentPage('screening')}
                className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-full bg-[#170a05] border border-white/10 hover:border-[#ff4a1c]/40 cursor-pointer transition-colors text-xs font-mono group"
              >
                <span className="px-2.5 py-1 rounded-full bg-[#ff4a1c] text-white font-bold text-[10px] uppercase">
                  Next Show
                </span>
                <span className="text-[#efebe3] font-bold group-hover:text-[#ff4a1c] transition-colors">
                  DELHI · Siri Fort Auditorium · 12 Sep
                </span>
                <span className="text-[#f6e12b] text-[11px] font-bold">
                  61 seats left →
                </span>
              </div>
            </div>

            {/* Right Column: Hero Poster with 3D-feel frame & Festival Stamp */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                {/* Poster backlighting glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ff4a1c]/40 via-[#f6e12b]/25 to-[#ff4a1c]/40 rounded-3xl opacity-60 group-hover:opacity-90 blur-xl transition duration-700" />
                
                <div className="relative rounded-2xl overflow-hidden bg-[#150a06] border border-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={FILM_INFO.heroPoster}
                    alt="Ustad Bantoo Official Poster"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Top Right Festival Ribbon */}
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-mono text-[#f6e12b] uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-[#f6e12b]" />
                    <span>IFFR Rotterdam '26</span>
                  </div>

                  {/* Bottom Vignette Overlay with Play Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-anton text-2xl text-white tracking-wider">USTAD BANTOO</p>
                        <p className="text-xs text-[#d9d8ca] font-mono mt-0.5">Written & Directed by Arsh Jain</p>
                      </div>
                      
                      <button
                        onClick={() => setIsPlayingTrailer(true)}
                        className="w-12 h-12 rounded-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white flex items-center justify-center shadow-xl shadow-[#ff4a1c]/50 transition-transform group-hover:scale-110"
                        title="Watch Trailer"
                      >
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FESTIVAL LAURELS STRIP */}
      <section className="py-14 bg-[#080201] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#ff4a1c] font-bold">
              Official Festival Selections & Recognition
            </p>
            <p className="text-xs font-mono text-[#9d9590]">
              Premiering across Rotterdam, Chicago, Washington & Dharamshala
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-stretch">
            {FILM_INFO.laurels.map((laurel, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-[#140804]/70 hover:bg-[#1b0b06] border border-white/10 hover:border-[#ff4a1c]/40 transition-all duration-300 group shadow-md"
              >
                <img
                  src={laurel.badge}
                  alt={laurel.name}
                  className="h-20 sm:h-24 w-auto object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300 my-auto"
                  loading="lazy"
                />
                <div className="mt-3 pt-2 border-t border-white/5 w-full">
                  <span className="text-[11px] font-mono font-bold text-[#efebe3] block line-clamp-1">
                    {laurel.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#9d9590] block mt-0.5">
                    {laurel.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS & CURATOR QUOTES CAROUSEL / GRID */}
      <section className="py-16 bg-[#0c0402]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FILM_INFO.pressQuotes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#150904] border border-white/10 flex flex-col justify-between hover:border-[#ff4a1c]/30 transition-all shadow-lg"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#ff4a1c] opacity-60 mb-3" />
                  <p className="text-sm text-[#efebe3]/90 italic leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5">
                  <p className="font-mono text-xs font-bold text-[#ff4a1c]">
                    {item.source}
                  </p>
                  <p className="text-[11px] text-[#9d9590] font-mono">
                    {item.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBEDDED TRAILER & SCREENING ROOM */}
      <section className="py-24 bg-[#080201] relative overflow-hidden border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
              Theatrical Experience
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-[#efebe3] mt-3">
              THE SOUND OF AN UNCLAIMED TUNE
            </h2>
            <p className="text-sm text-[#9d9590] mt-2 max-w-xl mx-auto font-mono">
              Step into the high-decibel chaos of Old Delhi wedding processions and Bantoo's relentless search for his music.
            </p>
          </div>

          {/* Screening Player Stage */}
          <div className="relative">
            {/* Ambient player back-glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff4a1c]/20 via-[#f6e12b]/10 to-[#ff4a1c]/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              {isPlayingTrailer ? (
                <iframe
                  src={FILM_INFO.trailerEmbedUrl}
                  title="Ustad Bantoo Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  className="relative w-full h-full group cursor-pointer"
                  onClick={() => setIsPlayingTrailer(true)}
                >
                  <img
                    src="https://i.ytimg.com/vi_webp/4AiMrlQmjQk/maxresdefault.webp"
                    alt="Ustad Bantoo Trailer Preview"
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                  {/* Big Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#ff4a1c] text-white flex items-center justify-center shadow-2xl shadow-[#ff4a1c]/60 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 fill-white ml-1.5" />
                    </div>
                  </div>

                  {/* Player footer overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div>
                      <p className="font-anton text-xl tracking-wider">USTAD BANTOO · OFFICIAL THEATRICAL TRAILER</p>
                      <p className="text-xs font-mono text-[#d9d8ca]">Click to Play · Mastered 5.1 Brass Score by Aman Gupta</p>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#ff4a1c] text-white font-mono text-xs font-bold uppercase">
                      Watch Now
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chapters Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {trailerChapters.map((ch, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveChapter(idx);
                  setIsPlayingTrailer(true);
                }}
                className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                  activeChapter === idx
                    ? 'bg-[#1b0d07] border-[#ff4a1c]/50 text-white'
                    : 'bg-[#120603] border-white/10 text-[#9d9590] hover:text-white hover:border-white/20'
                }`}
              >
                <p className="font-mono text-xs font-bold text-[#ff4a1c]">{ch.title}</p>
                <p className="text-xs text-[#efebe3] mt-0.5">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR'S NOTE SPOTLIGHT */}
      <section className="py-20 bg-[#0d0401]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1c0c06] via-[#140804] to-[#0c0401] border border-[#ff4a1c]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-right font-anton text-9xl text-white/5 select-none pointer-events-none">
              BANTOO
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/20 text-[#ff4a1c] border border-[#ff4a1c]/40">
                  Director's Statement
                </span>
                <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-[#efebe3]">
                  “Every wedding ends. Who are we when the celebration packs up?”
                </h3>
                <p className="text-sm sm:text-base text-[#efebe3]/80 leading-relaxed font-light">
                  {FILM_INFO.directorsNote}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <div>
                    <p className="font-anton text-xl text-[#efebe3] tracking-wide">ARSH JAIN</p>
                    <p className="text-xs font-mono text-[#ff4a1c]">Writer, Director & Editor</p>
                  </div>
                  <span className="text-white/20">|</span>
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="text-xs font-mono text-[#f6e12b] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Read full story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Photo of director Arsh Jain on set */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#1b0d07]">
                  <img
                    src="https://framerusercontent.com/images/6sKABE3PtlKJGps41MUid9jbA.jpg?width=6000&height=4000"
                    alt="Arsh Jain, Director"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROAD TO 100 SCREENINGS - MARQUEE & TOUR HIGHLIGHT */}
      <section className="py-20 bg-[#080201] border-y border-white/10 overflow-hidden">
        {/* Massive Marquee */}
        <div className="mb-6">
          <div className="animate-marquee whitespace-nowrap flex space-x-8 text-center select-none">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-anton text-6xl sm:text-7xl md:text-8xl tracking-wider text-[#efebe3]/15 hover:text-[#ff4a1c]/60 transition-colors uppercase"
              >
                ROAD TO 100 SCREENINGS · ROAD TO 100 SCREENINGS ·
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto px-4 mt-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#1d0e07] text-[#ff4a1c] border border-[#ff4a1c]/30 mb-3">
            National Community Distribution
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-[#efebe3] uppercase tracking-wide">
            A Journey of 100 Community Screenings Across India
          </h2>
          <p className="text-sm text-[#9d9590] mt-3 leading-relaxed font-mono">
            From premiering at Rotterdam to taking the film directly to independent film societies, colleges, cultural venues, and grassroots spaces across India.
          </p>
        </div>

        {/* TIMELINE CARDS */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FILM_INFO.timeline.slice(0, 4).map((item, idx) => (
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
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#9d9590]">
                  <span>Milestone 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#ff4a1c]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentPage('screening')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#f6e12b] hover:text-white transition-colors"
            >
              <span>View full 8-milestone roadmap & tour schedule</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FEATURED UPCOMING SHOW SPOTLIGHT */}
        {nextScreening && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#200d06] via-[#170a05] to-[#120603] border border-[#ff4a1c]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#ff4a1c] flex flex-col items-center justify-center text-white font-anton shrink-0 shadow-lg shadow-[#ff4a1c]/30">
                  <span className="text-2xl leading-none">{nextScreening.day}</span>
                  <span className="text-[10px] font-mono uppercase">{nextScreening.month}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/10 text-[#efebe3]">
                      Tour Premiere
                    </span>
                    <span className="text-xs font-mono text-[#f6e12b]">
                      {nextScreening.seatsLeft}
                    </span>
                  </div>
                  <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                    {nextScreening.city} · {nextScreening.venue}
                  </h3>
                  <p className="text-xs text-[#9d9590] font-mono mt-0.5">
                    {nextScreening.time} · {nextScreening.note}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
                <button
                  onClick={() => {
                    if (onSelectScreening) onSelectScreening(nextScreening);
                    else setCurrentPage('screening');
                  }}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Ticket className="w-4 h-4 text-[#ff4a1c]" />
                  <span>Reserve Seat ({nextScreening.price})</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HOST BANTOO IN YOUR CITY BANNER */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1f0e07] via-[#2a130a] to-[#1a0b06] border border-[#ff4a1c]/40 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            {/* Background trumpet glow */}
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#ff4a1c]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f6e12b]/15 text-[#f6e12b] border border-[#f6e12b]/30 text-xs font-mono font-bold uppercase mb-3">
              <TrumpetIcon className="w-4 h-4" />
              <span>Independent Cinema Movement</span>
            </div>

            <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#efebe3] uppercase tracking-wide">
              Want to host Bantoo in Your city?
            </h3>
            <p className="text-sm sm:text-base text-[#efebe3]/80 font-mono mt-2 max-w-xl mx-auto">
              Anywhere in INDIA — Bring the trumpet of Bantoo to your college, community center, film club, or independent venue.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={onOpenWaitlist}
                className="bantoo-btn group focus:outline-none"
              >
                <span className="bantoo-btn-body">
                  JOIN CITY WAITLIST
                </span>
                <span className="bantoo-btn-icon">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>

              <button
                onClick={() => setCurrentPage('collaborate')}
                className="px-6 py-4 rounded-full bg-[#1b0d07] hover:bg-[#25120a] border border-white/20 text-[#efebe3] font-bold text-xs uppercase tracking-wider transition-all"
              >
                Hosting Details & FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}