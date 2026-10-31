import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, AlertCircle, ArrowUpRight, Sparkles, Filter, Search, CheckCircle2, Share2, Download } from 'lucide-react';
import { SCREENINGS } from '../data/screeningsData';
import { TrumpetIcon } from '../components/Icons';

export default function ScreeningPage({ onSelectScreening, onOpenWaitlist }) {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('schedule'); // 'schedule' | 'soon'

  const filteredScreenings = SCREENINGS.filter((s) => {
    const matchesMonth = selectedMonth === 'All' || s.monthGroup === selectedMonth;
    const matchesStatus =
      selectedStatus === 'All'
        ? true
        : selectedStatus === 'On sale'
        ? s.status === 'On sale'
        : selectedStatus === 'Sold out'
        ? s.status === 'Sold out'
        : s.status === 'Unclaimed';

    const matchesSearch =
      searchQuery === ''
        ? true
        : s.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortCity.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesMonth && matchesStatus && matchesSearch;
  });

  // Calculate stats
  const totalDates = SCREENINGS.length;
  const onSaleCount = SCREENINGS.filter(s => s.status === 'On sale').length;
  const openCount = SCREENINGS.filter(s => s.status === 'Unclaimed').length;

  // Generate .ics calendar download
  const handleAddToCalendar = (screening, e) => {
    e.stopPropagation();
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ustad Bantoo Tour//Screening//EN
BEGIN:VEVENT
SUMMARY:Ustad Bantoo Screening - ${screening.city}
DESCRIPTION:Community Screening of independent film Ustad Bantoo at ${screening.venue}. ${screening.note}
LOCATION:${screening.venue}, ${screening.city}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `ustad-bantoo-${screening.shortCity.toLowerCase()}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen text-[#efebe3] pt-32 pb-24 selection:bg-[#ff4a1c] selection:text-white film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Header with Live Stats & Mode Switcher */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4a1c] animate-ping" />
                  <span>The 2026 National Run</span>
                </span>
                <span className="text-xs font-mono text-[#9d9590]">
                  Road to 100 Screenings Movement
                </span>
              </div>
              <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3]">
                TOUR & SCREENINGS
              </h1>
              <p className="text-sm font-mono text-[#9d9590] mt-2 max-w-xl">
                Experience Ustad Bantoo on the big screen with high-fidelity brass audio, followed by live Q&A with director Arsh Jain and cast.
              </p>
            </div>

            {/* Tour stats counter badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-3 rounded-2xl bg-[#140804] border border-white/10 text-center min-w-[90px]">
                <span className="font-anton text-3xl text-[#ff4a1c] block leading-none">{totalDates}</span>
                <span className="text-[10px] font-mono uppercase text-[#9d9590] mt-1 block">Confirmed Stops</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#140804] border border-white/10 text-center min-w-[90px]">
                <span className="font-anton text-3xl text-[#1db954] block leading-none">{onSaleCount}</span>
                <span className="text-[10px] font-mono uppercase text-[#9d9590] mt-1 block">On Sale Now</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#140804] border border-white/10 text-center min-w-[90px]">
                <span className="font-anton text-3xl text-[#f6e12b] block leading-none">100</span>
                <span className="text-[10px] font-mono uppercase text-[#9d9590] mt-1 block">Goal Milestone</span>
              </div>

              {/* View Mode Switcher */}
              <div className="bg-[#1b0d07] p-1 rounded-2xl border border-white/10 flex">
                <button
                  onClick={() => setViewMode('schedule')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all font-bold ${
                    viewMode === 'schedule'
                      ? 'bg-[#ff4a1c] text-white shadow-md'
                      : 'text-[#9d9590] hover:text-white'
                  }`}
                >
                  Tour Dates
                </button>
                <button
                  onClick={() => setViewMode('soon')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all font-bold ${
                    viewMode === 'soon'
                      ? 'bg-[#ff4a1c] text-white shadow-md'
                      : 'text-[#9d9590] hover:text-white'
                  }`}
                >
                  Upcoming / WIP
                </button>
              </div>
            </div>
          </div>

          {/* Road to 100 Progress Bar */}
          <div className="mt-8 p-4 rounded-2xl bg-[#140804] border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2 mb-2">
              <span className="text-[#efebe3] font-bold flex items-center gap-1.5">
                <TrumpetIcon className="w-4 h-4 text-[#ff4a1c]" />
                <span>Road to 100 Screenings Progress: 11% Completed</span>
              </span>
              <span className="text-[#9d9590]">
                89 Cities / Colleges Remaining · <button onClick={onOpenWaitlist} className="text-[#ff4a1c] underline font-bold">Request your city</button>
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0a0301] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff4a1c] via-[#f6e12b] to-[#ff4a1c] rounded-full transition-all duration-1000"
                style={{ width: '11%' }}
              />
            </div>
          </div>

          {/* Quick city route pill ticker */}
          <div className="mt-4 pt-3 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-[#ff4a1c] font-bold shrink-0 mr-1">
              TOUR STOPS:
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
          /* TO BE ANNOUNCED SOON VIEW */
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
                className="px-6 py-3.5 rounded-full bg-[#efebe3] text-[#0d0401] font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
              >
                View Confirmed Tour Dates
              </button>
              <button
                onClick={() => onOpenWaitlist()}
                className="px-6 py-3.5 rounded-full bg-[#ff4a1c] text-white font-bold uppercase text-xs tracking-wider hover:bg-[#e0390f] transition-colors"
              >
                Request Your City
              </button>
            </div>
          </div>
        ) : (
          /* FULL TOUR SCHEDULE */
          <div>
            {/* FEATURED SPOTLIGHT CARD (Next Show) */}
            <div className="mb-12 relative rounded-3xl bg-gradient-to-r from-[#240e06] via-[#1a0b05] to-[#120703] border border-[#ff4a1c]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-right hidden sm:block opacity-10 font-anton text-9xl select-none pointer-events-none">
                DELHI
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold shadow-md">
                      Next Confirmed Show
                    </span>
                    <span className="text-xs font-mono text-[#f6e12b] italic">
                      “Har cheez mein ek sur hota hai”
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-[#9d9590] uppercase tracking-widest block font-bold">
                      SEP 12 · Doors 7:00 PM · Screening at 8:00 PM
                    </span>
                    <h2 className="font-anton text-4xl sm:text-6xl text-[#efebe3] uppercase tracking-wide mt-1">
                      DELHI · SIRI FORT AUDITORIUM
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-[#efebe3]">
                      Opening Tour Premiere
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#ff4a1c]/20 text-[#ff4a1c] border border-[#ff4a1c]/30 font-bold">
                      61 of 220 seats left · Selling fast
                    </span>
                    <span className="text-[#9d9590]">
                      Includes Q&A with director Arsh Jain & Lead Cast
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => onSelectScreening(SCREENINGS[0])}
                    className="bantoo-btn group focus:outline-none"
                  >
                    <span className="bantoo-btn-body">
                      Get Passes
                    </span>
                    <span className="bantoo-btn-icon">
                      <Ticket className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              
              {/* Month Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#9d9590] mr-1">Month:</span>
                {['All', 'September', 'October', 'November'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                      selectedMonth === m
                        ? 'bg-[#efebe3] text-[#0d0401] font-bold shadow-md'
                        : 'bg-[#150a06] text-[#9d9590] hover:text-[#efebe3] border border-white/10'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#9d9590] absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city or venue..."
                  className="w-full bg-[#140804] border border-white/15 rounded-full pl-10 pr-4 py-2 text-xs text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                />
              </div>
            </div>

            {/* SCREENINGS SCHEDULE TABLE / PHYSICAL TICKET STUB LIST */}
            <div className="space-y-5">
              {filteredScreenings.map((screening) => {
                const isSoldOut = screening.status === 'Sold out';
                const isUnclaimed = screening.status === 'Unclaimed';

                return (
                  <div
                    key={screening.id}
                    className={`p-6 sm:p-7 rounded-3xl bg-[#140804] border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl ${
                      isSoldOut
                        ? 'border-white/5 opacity-70'
                        : isUnclaimed
                        ? 'border-[#f6e12b]/30 bg-[#160c04]'
                        : 'border-white/10 hover:border-[#ff4a1c]/50 hover:bg-[#1a0b06]'
                    }`}
                  >
                    {/* Left: Date & City Code block */}
                    <div className="flex items-center gap-5 sm:gap-6">
                      
                      {/* Ticket Stub Date Cutout */}
                      <div className="w-20 sm:w-24 text-center shrink-0 p-3 rounded-2xl bg-[#090301] border border-white/10 flex flex-col items-center justify-center shadow-inner">
                        <span className="font-anton text-3xl sm:text-4xl text-[#efebe3] block leading-none">
                          {screening.day}
                        </span>
                        <span className="font-mono text-xs uppercase text-[#ff4a1c] font-bold block mt-1">
                          {screening.month}
                        </span>
                        <span className="text-[9px] font-mono text-[#9d9590] mt-0.5 tracking-wider">
                          {screening.shortCity}
                        </span>
                      </div>

                      {/* City Name & Venue Details */}
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-anton text-2xl sm:text-3xl text-[#efebe3] uppercase tracking-wide">
                            {screening.city}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${
                              isSoldOut
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : isUnclaimed
                                ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}
                          >
                            {screening.status}
                          </span>
                          {screening.urgency && !isSoldOut && !isUnclaimed && (
                            <span className="text-[10px] font-mono text-[#ff4a1c] px-2 py-0.5 rounded bg-[#ff4a1c]/10 border border-[#ff4a1c]/20">
                              {screening.urgency}
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-mono text-[#9d9590] mt-1.5 flex items-center gap-2 flex-wrap">
                          <span className="flex items-center gap-1 text-[#efebe3]">
                            <Clock className="w-3.5 h-3.5 text-[#ff4a1c]" />
                            <span>{screening.time}</span>
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1 text-[#d9d8ca]">
                            <MapPin className="w-3.5 h-3.5 text-[#ff4a1c]" />
                            <span>{screening.venue}</span>
                          </span>
                        </p>

                        <p className="text-xs text-[#9d9590] mt-1.5">
                          {screening.note}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions, Seats Left & Price */}
                    <div className="flex items-center justify-between lg:justify-end gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                      <div className="text-left lg:text-right font-mono text-xs">
                        <span className="text-[#efebe3] font-bold text-sm block">{screening.price}</span>
                        <span className="text-[11px] text-[#ff4a1c] block">{screening.seatsLeft}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {!isUnclaimed && (
                          <button
                            onClick={(e) => handleAddToCalendar(screening, e)}
                            title="Add to Calendar (.ics)"
                            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#9d9590] hover:text-[#efebe3] border border-white/10 transition-colors"
                          >
                            <Calendar className="w-4 h-4" />
                          </button>
                        )}

                        {isUnclaimed ? (
                          <button
                            onClick={() => onOpenWaitlist()}
                            className="px-5 py-2.5 rounded-full bg-[#f6e12b] hover:bg-yellow-300 text-[#0d0401] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg shadow-[#f6e12b]/20"
                          >
                            CLAIM THIS DATE
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
                            className="px-6 py-2.5 rounded-full bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-lg"
                          >
                            <Ticket className="w-4 h-4 text-[#ff4a1c]" />
                            <span>Book Pass</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredScreenings.length === 0 && (
              <div className="text-center py-20 text-[#9d9590] font-mono">
                No tour screenings found matching your filters.
              </div>
            )}

            {/* Bottom Call to Action for Community Hosting */}
            <div className="mt-16 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170a05] via-[#200d07] to-[#170a05] border border-white/10 shadow-2xl">
              <span className="text-xs font-mono uppercase text-[#ff4a1c] tracking-widest font-bold">
                Open Date: 22 Nov 2026
              </span>
              <h3 className="font-anton text-3xl sm:text-5xl text-[#efebe3] uppercase tracking-wide mt-2">
                Want Bantoo in your city or college?
              </h3>
              <p className="text-sm text-[#9d9590] mt-2 max-w-lg mx-auto font-mono">
                Any city in India — Tell us your venue, auditorium, or rooftop. We bring the digital cinema package and sound setup.
              </p>
              <button
                onClick={() => onOpenWaitlist()}
                className="mt-6 px-8 py-4 rounded-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#ff4a1c]/30 transition-all hover:scale-105"
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