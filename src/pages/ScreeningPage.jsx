import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, AlertCircle, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { SCREENINGS } from '../data/screeningsData';

export default function ScreeningPage({ onSelectScreening, onOpenWaitlist }) {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [viewMode, setViewMode] = useState('schedule'); // 'schedule' | 'soon'

  const filteredScreenings = selectedMonth === 'All'
    ? SCREENINGS
    : SCREENINGS.filter(s => s.monthGroup === selectedMonth);

  return (
    <div className="min-h-screen text-[#efebe3] pt-28 pb-20 selection:bg-[#ff4a1c] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Header with Live Stats & Mode Switcher */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
                  Live Dates · The 2026 Run
                </span>
                <span className="text-xs font-mono text-[#9d9590]">
                  India Community Tour
                </span>
              </div>
              <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3]">
                Live Dates
              </h1>
            </div>

            {/* Tour stats counter badges */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-3 rounded-2xl bg-[#140804] border border-white/10 text-center">
                <span className="font-anton text-2xl sm:text-3xl text-[#ff4a1c] block leading-none">11</span>
                <span className="text-[10px] font-mono uppercase text-[#9d9590] mt-1 block">Dates in 2026</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#140804] border border-white/10 text-center">
                <span className="font-anton text-2xl sm:text-3xl text-[#f6e12b] block leading-none">1</span>
                <span className="text-[10px] font-mono uppercase text-[#9d9590] mt-1 block">Still Open</span>
              </div>

              {/* View Mode Switcher */}
              <div className="bg-[#1b0d07] p-1 rounded-2xl border border-white/10 flex">
                <button
                  onClick={() => setViewMode('schedule')}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    viewMode === 'schedule'
                      ? 'bg-[#ff4a1c] text-white font-bold'
                      : 'text-[#9d9590] hover:text-white'
                  }`}
                >
                  Tour Dates
                </button>
                <button
                  onClick={() => setViewMode('soon')}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    viewMode === 'soon'
                      ? 'bg-[#ff4a1c] text-white font-bold'
                      : 'text-[#9d9590] hover:text-white'
                  }`}
                >
                  Announced Soon
                </button>
              </div>
            </div>
          </div>

          {/* Quick city route pill ticker */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-[#ff4a1c] font-bold shrink-0 mr-2">
              INDIA TOUR:
            </span>
            {SCREENINGS.map((s, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#170a05] border border-white/10 text-xs font-mono whitespace-nowrap"
              >
                <span className="text-[#efebe3] font-bold">{s.shortCity}</span>
                <span className="text-[#9d9590] text-[10px]">{s.date}</span>
              </span>
            ))}
          </div>
        </div>

        {viewMode === 'soon' ? (
          /* TO BE ANNOUNCED SOON VIEW (Matching /screening-2) */
          <div className="py-24 text-center max-w-2xl mx-auto space-y-6 animate-fadeIn">
            <div className="w-20 h-20 bg-[#ff4a1c]/10 border border-[#ff4a1c]/30 rounded-full flex items-center justify-center mx-auto text-[#ff4a1c]">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl text-[#efebe3] uppercase tracking-wide">
              To Be Announced Soon…
            </h2>
            <p className="text-sm font-mono text-[#9d9590] leading-relaxed">
              We are finalizing festival dates, university auditorium approvals, and indie film collective venues across India.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setViewMode('schedule')}
                className="px-6 py-3 rounded-full bg-[#efebe3] text-[#0d0401] font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
              >
                View Confirmed Tour Dates
              </button>
              <button
                onClick={() => onOpenWaitlist()}
                className="px-6 py-3 rounded-full bg-[#ff4a1c] text-white font-bold uppercase text-xs tracking-wider hover:bg-[#e0390f] transition-colors"
              >
                Request Your City
              </button>
            </div>
          </div>
        ) : (
          /* FULL TOUR SCHEDULE */
          <div>
            {/* FEATURED SPOTLIGHT CARD (Next Show) */}
            <div className="mb-14 relative rounded-3xl bg-gradient-to-r from-[#240e06] via-[#1a0b05] to-[#120703] border border-[#ff4a1c]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-right hidden sm:block opacity-10 font-anton text-9xl select-none">
                DELHI
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold">
                      (Next show)
                    </span>
                    <span className="text-xs font-mono text-[#f6e12b] italic">
                      “Har cheez mein ek sur hota hai”
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-[#9d9590] uppercase tracking-widest block">
                      DEC 12 · Doors 7 · on at 8
                    </span>
                    <h2 className="font-anton text-4xl sm:text-6xl text-[#efebe3] uppercase tracking-wide mt-1">
                      DELHI · USTAD BANTOO
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-[#efebe3]">
                      DELHI, 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#ff4a1c]/20 text-[#ff4a1c] border border-[#ff4a1c]/30 font-bold">
                      61 of 220 left · Going fast
                    </span>
                    <span className="text-[#9d9590]">
                      Volta Sunday · Nocturne in order · 22H - 33J
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onSelectScreening(SCREENINGS[0])}
                    className="bantoo-btn group focus:outline-none"
                  >
                    <span className="bantoo-btn-body">
                      Get Tickets
                    </span>
                    <span className="bantoo-btn-icon">
                      <Ticket className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* MONTH FILTER BUTTONS */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#9d9590] mr-2">Filter Month:</span>
                {['All', 'September', 'October', 'November'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                      selectedMonth === m
                        ? 'bg-[#efebe3] text-[#0d0401] font-bold shadow-md'
                        : 'bg-[#150a06] text-[#9d9590] hover:text-[#efebe3] border border-white/10'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Status Legend */}
              <div className="flex items-center gap-4 text-xs font-mono text-[#9d9590]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1db954]" /> On sale
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff4a1c]" /> Nearly gone / Sold out
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f6e12b]" /> Unclaimed
                </span>
              </div>
            </div>

            {/* SCREENINGS SCHEDULE TABLE / LIST */}
            <div className="space-y-4">
              {filteredScreenings.map((screening) => {
                const isSoldOut = screening.status === 'Sold out';
                const isUnclaimed = screening.status === 'Unclaimed';

                return (
                  <div
                    key={screening.id}
                    className={`p-5 sm:p-6 rounded-2xl bg-[#140804] border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      isSoldOut
                        ? 'border-white/5 opacity-70'
                        : 'border-white/10 hover:border-[#ff4a1c]/50 hover:bg-[#1a0a05]'
                    }`}
                  >
                    {/* Date Block */}
                    <div className="flex items-center gap-6">
                      <div className="w-16 sm:w-20 text-center shrink-0 p-2.5 rounded-xl bg-[#090301] border border-white/10">
                        <span className="font-anton text-3xl sm:text-4xl text-[#efebe3] block leading-none">
                          {screening.day}
                        </span>
                        <span className="font-mono text-xs uppercase text-[#ff4a1c] font-bold block mt-1">
                          {screening.month}
                        </span>
                      </div>

                      {/* City & Venue */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-anton text-2xl sm:text-3xl text-[#efebe3] uppercase tracking-wide">
                            {screening.city}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase ${
                              isSoldOut
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : isUnclaimed
                                ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}
                          >
                            {screening.status}
                          </span>
                        </div>

                        <p className="text-xs font-mono text-[#9d9590] mt-1 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#ff4a1c]" />
                          <span>{screening.time}</span>
                          <span>·</span>
                          <span>{screening.venue}</span>
                        </p>

                        <p className="text-xs text-[#9d9590]/80 mt-1">
                          {screening.note}
                        </p>
                      </div>
                    </div>

                    {/* Action & Urgency */}
                    <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                      <div className="text-left md:text-right font-mono text-xs">
                        <span className="text-[#efebe3] font-bold block">{screening.price}</span>
                        <span className="text-[11px] text-[#ff4a1c]">{screening.seatsLeft}</span>
                      </div>

                      {isUnclaimed ? (
                        <button
                          onClick={() => onOpenWaitlist()}
                          className="px-5 py-2.5 rounded-full bg-[#f6e12b] hover:bg-yellow-300 text-[#0d0401] font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                        >
                          JOIN WAITLIST
                        </button>
                      ) : isSoldOut ? (
                        <button
                          disabled
                          className="px-5 py-2.5 rounded-full bg-white/10 text-[#9d9590] font-bold text-xs uppercase tracking-wider cursor-not-allowed shrink-0"
                        >
                          Sold Out
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectScreening(screening)}
                          className="px-5 py-2.5 rounded-full bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0"
                        >
                          <Ticket className="w-3.5 h-3.5 text-[#ff4a1c]" />
                          <span>Tickets</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 text-center p-8 rounded-3xl bg-[#140804] border border-white/10">
              <span className="text-xs font-mono uppercase text-[#ff4a1c] tracking-widest font-bold">
                Unclaimed Date: 22 Nov
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl text-[#efebe3] uppercase tracking-wide mt-2">
                Want Bantoo in your city or college?
              </h3>
              <p className="text-sm text-[#9d9590] mt-2 max-w-lg mx-auto">
                Anywhere in India — let us know where you want us to bring the screen and speakers.
              </p>
              <button
                onClick={() => onOpenWaitlist()}
                className="mt-6 px-8 py-3.5 rounded-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#ff4a1c]/30 transition-colors"
              >
                Join City Waitlist
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
