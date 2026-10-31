import React, { useState } from 'react';
import { ArrowUpRight, Music, Film, Award, Users, ChevronRight, X, ChevronLeft, Disc3, Sparkles, ExternalLink } from 'lucide-react';
import { FILM_INFO } from '../data/filmData';
import { TrumpetIcon } from '../components/Icons';

export default function AboutPage({ setCurrentPage }) {
  const [activeStillIndex, setActiveStillIndex] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('All');

  const galleryCategories = ['All', 'Procession', 'Nocturnal Delhi', 'Band', 'On Set', 'Portraits'];

  const filteredStills = galleryFilter === 'All'
    ? FILM_INFO.stills
    : FILM_INFO.stills.filter(s => s.category === galleryFilter);

  const activeStill = activeStillIndex !== null ? filteredStills[activeStillIndex] : null;

  const nextStill = () => {
    if (activeStillIndex !== null) {
      setActiveStillIndex((activeStillIndex + 1) % filteredStills.length);
    }
  };

  const prevStill = () => {
    if (activeStillIndex !== null) {
      setActiveStillIndex((activeStillIndex - 1 + filteredStills.length) % filteredStills.length);
    }
  };

  return (
    <div className="min-h-screen text-[#efebe3] pt-32 pb-24 selection:bg-[#ff4a1c] selection:text-white film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="border-b border-white/10 pb-10 mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
              The Film Dossier
            </span>
            <span className="text-xs font-mono text-[#9d9590]">
              54th International Film Festival Rotterdam
            </span>
          </div>

          <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3] mt-2">
            ABOUT THE FILM
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#9d9590] mt-3 max-w-2xl">
            A portrait of musical restlessness set amidst Delhi's high-decibel wedding bands, exploring what it takes to find an original voice in a world that profits from repetition.
          </p>
        </div>

        {/* Narrative & Technical Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Metadata Dossier (Left Column) */}
          <div className="lg:col-span-4 p-7 rounded-3xl bg-[#140804] border border-white/10 space-y-5 shadow-2xl">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff4a1c] font-bold block">
                Technical Dossier
              </span>
              <h3 className="font-anton text-2xl tracking-wide uppercase text-[#efebe3] mt-1">
                Film Specifications
              </h3>
            </div>
            
            <div className="space-y-3.5 font-mono text-xs text-[#efebe3]">
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Language</span>
                <span className="font-bold">{FILM_INFO.meta.language} (English Subtitles)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Runtime</span>
                <span className="font-bold">{FILM_INFO.meta.duration}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Aspect Ratio</span>
                <span className="font-bold">{FILM_INFO.meta.aspectRatio}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Sound Format</span>
                <span className="font-bold">{FILM_INFO.meta.soundFormat}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Production Sprint</span>
                <span className="font-bold">{FILM_INFO.meta.shootingDays} (Guerrilla)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Director & Writer</span>
                <span className="font-bold">Arsh Jain</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Director of Photography</span>
                <span className="font-bold">Samraj Agarwal</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Sound Design</span>
                <span className="font-bold">Bharat Kishore Mehra</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-[#9d9590]">Original Score</span>
                <span className="font-bold">Aman Gupta</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#9d9590]">Poster & Visual Identity</span>
                <span className="font-bold">Jaidev Tripathy</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('cast-crew')}
                className="w-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#ff4a1c]/25"
              >
                <span>Full Cast & Crew Directory</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Synopsis & Cultural Context (Right Column) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a1c] font-bold">
                Synopsis
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-[#efebe3] mt-2">
                WHEN THE WEDDING ENDS, THE TRUE MUSIC BEGINS
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-base sm:text-lg text-[#efebe3]/90 leading-relaxed space-y-5 font-light">
              <p>
                {FILM_INFO.synopsis}
              </p>
              
              <div className="p-6 rounded-2xl bg-[#1b0d06] border-l-4 border-[#ff4a1c] space-y-2">
                <p className="text-sm font-mono text-[#f6e12b] font-bold uppercase tracking-wider">
                  The Reality of India's Wedding Bands
                </p>
                <p className="text-sm sm:text-base text-[#efebe3]/90 italic font-normal">
                  “In an Indian wedding band, you are paid to play happy music regardless of the sorrow in your heart. Bantoo's trumpet asks: who are we when the celebration packs up?”
                </p>
              </div>

              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-[#efebe3] pt-4">
                THE 14-DAY NOCTURNAL SPRINT
              </h3>
              <p className="text-sm sm:text-base text-[#9d9590] leading-relaxed font-mono">
                Filmed entirely on location in Delhi during the peak winter wedding season, the crew embedded themselves with real wedding band players from Kirti Band. Instead of staging fake processions on soundstages, the film was shot amidst real baraats, blinding sodium vapour streetlights, dense traffic jams, and midnight fog — capturing an unvarnished slice of working-class Delhi street life.
              </p>
            </div>
          </div>

        </div>

        {/* CINEMATIC BTS GALLERY & STILLS */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-5 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a1c] font-bold">
                Cinematography & Visuals
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-wide text-[#efebe3] mt-1">
                Film Stills & Behind the Scenes
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    galleryFilter === cat
                      ? 'bg-[#efebe3] text-[#0d0401] font-bold shadow-md'
                      : 'bg-[#150a06] text-[#9d9590] hover:text-[#efebe3] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStills.map((still, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStillIndex(idx)}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#180a05] border border-white/10 cursor-pointer shadow-xl hover:border-[#ff4a1c]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={still.src}
                  alt={still.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md text-[#f6e12b] border border-white/10">
                    {still.category}
                  </span>
                </div>

                {/* Bottom title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex items-end">
                  <p className="text-xs font-mono text-white tracking-wide">
                    {still.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OFFICIAL SOUNDTRACK SHOWCASE */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#1db954]/15 text-[#1db954] border border-[#1db954]/30 mb-2">
              <Music className="w-3.5 h-3.5" />
              <span>Original Soundtrack & Licensed Music</span>
            </span>
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide text-[#efebe3]">
              THE MUSIC OF USTAD BANTOO
            </h2>
            <p className="text-sm text-[#9d9590] mt-2 max-w-xl mx-auto font-mono">
              From Sarathy Korwar's spiritual jazz to Lapgan's Delhi brass and Aman Gupta's poignant trumpet score.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Spotify Player Embed */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#140804]">
              <iframe
                src={FILM_INFO.spotifyEmbedUrl}
                width="100%"
                height="420"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Ustad Bantoo Official Soundtrack"
                className="rounded-3xl"
              />
            </div>

            {/* Detailed Song Tracklist */}
            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#ff4a1c] font-bold mb-2">
                Tracks in Order of Appearance
              </p>

              {FILM_INFO.soundtrack.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#140804] border border-white/10 hover:border-[#ff4a1c]/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-anton text-2xl text-[#ff4a1c] w-7 text-center">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="font-anton text-xl text-[#efebe3] tracking-wide">
                        {t.title}
                      </p>
                      <p className="text-xs font-mono text-[#9d9590]">
                        {t.artist} · <span className="text-[#efebe3]">{t.album}</span> ({t.year})
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-[#1d0e08] text-[#f6e12b] border border-white/10">
                      {t.vibe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FULL FESTIVAL AWARDS DISPLAY */}
        <div className="mb-16 text-center">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
            Global Recognition
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide text-[#efebe3] mt-3 mb-10">
            FESTIVAL SELECTIONS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {FILM_INFO.laurels.map((laurel, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#140804] border border-white/10 text-center flex flex-col items-center justify-between hover:border-[#ff4a1c]/40 transition-all"
              >
                <img
                  src={laurel.badge}
                  alt={laurel.name}
                  className="h-24 w-auto object-contain my-3 filter brightness-95"
                />
                <div className="mt-2 w-full pt-2 border-t border-white/5">
                  <p className="text-xs font-bold text-[#efebe3] leading-snug">{laurel.name}</p>
                  <span className="text-[10px] font-mono text-[#ff4a1c] block mt-1">
                    {laurel.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal with Prev/Next Controls */}
      {activeStill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveStillIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden rounded-3xl bg-[#140804] border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveStillIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#ff4a1c] transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev & Next arrows */}
            <button
              onClick={prevStill}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#ff4a1c] transition-colors border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextStill}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#ff4a1c] transition-colors border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center justify-center bg-black">
              <img
                src={activeStill.src}
                alt={activeStill.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            <div className="p-5 bg-[#0d0401] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#ff4a1c] font-bold block">
                  Category: {activeStill.category}
                </span>
                <p className="font-anton text-xl text-[#efebe3] tracking-wide mt-0.5">
                  {activeStill.title}
                </p>
              </div>
              <span className="text-xs font-mono text-[#9d9590]">
                {activeStillIndex + 1} of {filteredStills.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}