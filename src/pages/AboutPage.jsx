import React, { useState } from 'react';
import { ArrowUpRight, Music, Film, Award, Users, ChevronRight, X } from 'lucide-react';
import { FILM_INFO } from '../data/filmData';

export default function AboutPage({ setCurrentPage }) {
  const [activeStill, setActiveStill] = useState(null);

  return (
    <div className="min-h-screen text-[#efebe3] pt-28 pb-20 selection:bg-[#ff4a1c] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
            About the film
          </span>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3] mt-3">
            About Us
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#9d9590] mt-2">
            A portrait of musical restlessness set amidst Delhi's high-decibel wedding bands.
          </p>
        </div>

        {/* Synopsis & Key Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Metadata badges (Left) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#140804] border border-white/10 space-y-4">
            <h3 className="font-anton text-2xl tracking-wide uppercase text-[#ff4a1c]">
              Film Details
            </h3>
            
            <div className="space-y-3 font-mono text-sm text-[#efebe3]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#9d9590]">Language</span>
                <span className="font-bold">{FILM_INFO.meta.language}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#9d9590]">Genre</span>
                <span className="font-bold">{FILM_INFO.meta.genre}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#9d9590]">Duration</span>
                <span className="font-bold">{FILM_INFO.meta.duration}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#9d9590]">Director</span>
                <span className="font-bold">Arsh Jain</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#9d9590]">Art & Poster</span>
                <span className="font-bold">Jaidev Tripathy</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#9d9590]">Original Score</span>
                <span className="font-bold">Aman Gupta</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setCurrentPage('cast-crew')}
                className="w-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-colors"
              >
                <span>More about the cast</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Synopsis text (Right) */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a1c]">
              Synopsis
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-[#efebe3]">
              WHEN THE WEDDING ENDS, THE TRUE MUSIC BEGINS
            </h2>
            
            <div className="prose prose-invert max-w-none text-base sm:text-lg text-[#efebe3]/90 leading-relaxed space-y-4">
              <p>
                {FILM_INFO.synopsis}
              </p>
              <p className="text-sm font-mono text-[#9d9590] border-l-2 border-[#ff4a1c] pl-4 italic">
                “In an Indian wedding band, you are paid to play happy music regardless of the sorrow in your heart. Bantoo's trumpet asks: who are we when the celebration packs up?”
              </p>
            </div>
          </div>

        </div>

        {/* FILM STILLS & CINEMATIC GALLERY */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a1c]">
                Visual Journey
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-[#efebe3] mt-1">
                Behind The Scenes & Film Stills
              </h2>
            </div>
            <p className="text-xs font-mono text-[#9d9590] mt-2 sm:mt-0">
              Shot on location in Delhi in 14 days
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILM_INFO.stills.map((still, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStill(still)}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#180a05] border border-white/10 cursor-pointer shadow-lg hover:border-[#ff4a1c]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={still.src}
                  alt={still.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <p className="text-xs font-mono text-white tracking-wide">
                    {still.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AWARDS & RECOGNITION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
              Film Festival Tour
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide text-[#efebe3] mt-3">
              AWARDS & RECOGNITION
            </h2>
            <p className="text-sm text-[#9d9590] mt-2 max-w-xl mx-auto">
              Screened at premiere international film festivals celebrating independent voices and world cinema.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {FILM_INFO.laurels.map((laurel, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#140804] border border-white/10 text-center flex flex-col items-center justify-between hover:border-[#ff4a1c]/40 transition-all"
              >
                <img
                  src={laurel.badge}
                  alt={laurel.name}
                  className="h-24 w-auto object-contain my-2 filter brightness-95"
                />
                <div className="mt-2">
                  <p className="text-xs font-bold text-[#efebe3]">{laurel.name}</p>
                  <span className="text-[10px] font-mono text-[#ff4a1c] block mt-1">
                    {laurel.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OFFICIAL SOUNDTRACK - SPOTIFY PLAYER */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#1db954]/15 text-[#1db954] border border-[#1db954]/30">
              Original Music by Aman Gupta
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide text-[#efebe3] mt-3">
              OFFICIAL SOUNDTRACK
            </h2>
            <p className="text-sm text-[#9d9590] mt-2 max-w-lg mx-auto">
              Listen to the brass trumpets, energetic dhol, and haunting solo melodies of Ustad Bantoo on Spotify.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#140804]">
            <iframe
              src={FILM_INFO.spotifyEmbedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Ustad Bantoo Official Soundtrack"
              className="rounded-3xl"
            />
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeStill && (
        <div
          onClick={() => setActiveStill(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl">
            <button
              onClick={() => setActiveStill(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeStill.src}
              alt={activeStill.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="p-4 bg-[#0d0401] text-center">
              <p className="font-mono text-xs text-[#efebe3]">{activeStill.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
