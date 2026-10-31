import React, { useState } from 'react';
import { Mail, Quote, ArrowUpRight, Search, Users, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon, TrumpetIcon } from '../components/Icons';
import { CAST_CREW } from '../data/castCrewData';

export default function CastCrewPage({ onSelectMember }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All', count: CAST_CREW.length },
    { id: 'cast', label: 'Cast (Actors)', count: CAST_CREW.filter(m => m.category === 'cast').length },
    { id: 'direction', label: 'Direction', count: CAST_CREW.filter(m => m.category === 'direction').length },
    { id: 'production', label: 'Production', count: CAST_CREW.filter(m => m.category === 'production').length },
    { id: 'camera', label: 'Camera & Post', count: CAST_CREW.filter(m => m.category === 'camera' || m.category === 'post').length },
    { id: 'sound', label: 'Sound & Music', count: CAST_CREW.filter(m => m.category === 'sound').length },
    { id: 'marketing', label: 'Distribution & PR', count: CAST_CREW.filter(m => m.category === 'marketing').length },
    { id: 'design', label: 'Poster & Design', count: CAST_CREW.filter(m => m.category === 'design').length },
  ];

  const filteredMembers = CAST_CREW.filter((m) => {
    const matchesCat =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'camera'
        ? m.category === 'camera' || m.category === 'post'
        : m.category === selectedCategory;

    const matchesSearch =
      searchQuery === ''
        ? true
        : m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (m.bio && m.bio.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen text-[#efebe3] pt-32 pb-24 selection:bg-[#ff4a1c] selection:text-white film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
                  Press Kit & Credits
                </span>
                <span className="text-xs font-mono text-[#9d9590]">
                  The Brass Ensemble & Creative Team
                </span>
              </div>
              <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3]">
                CAST & CREW
              </h1>
              <p className="font-mono text-sm sm:text-base text-[#9d9590] mt-2 max-w-2xl">
                The actors, Delhi wedding band musicians, sound recordists, and independent filmmakers who brought Ustad Bantoo to life.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#9d9590] absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search actor, role, or crew..."
                className="w-full bg-[#140804] border border-white/15 rounded-full pl-11 pr-4 py-3 text-xs text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c] shadow-inner"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-[#9d9590] mr-2 shrink-0 font-bold">
              Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#efebe3] text-[#0d0401] font-bold shadow-lg shadow-white/10'
                    : 'bg-[#150a06] text-[#9d9590] hover:text-[#efebe3] border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Real Brass Musicians Tribute Callout */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#200e07] via-[#180a05] to-[#120603] border border-[#f6e12b]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f6e12b]/20 border border-[#f6e12b]/40 flex items-center justify-center text-[#f6e12b] shrink-0">
              <TrumpetIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3]">
                HONORING DELHI'S WEDDING BAND MUSICIANS
              </h3>
              <p className="text-xs font-mono text-[#9d9590] mt-1 max-w-xl">
                Special tribute to Kirti Band and the street musicians of Chandni Chowk, Daryaganj, and Old Delhi whose real lives, horns, and brotherhood form the backbone of this film.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#f6e12b] font-mono text-xs uppercase font-bold shrink-0">
            Authentic Delhi Brass
          </span>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl overflow-hidden bg-[#140804] border border-white/10 hover:border-[#ff4a1c]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              {/* Photo with Overlay */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-[#200f07] cursor-pointer"
                onClick={() => onSelectMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Right View Details Hint */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Category Tag */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold shadow-md">
                    {member.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#d9d8ca] bg-black/60 px-2 py-0.5 rounded-full">
                    Bio & Filmography →
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectMember(member)}
                    className="font-anton text-2xl tracking-wide text-[#efebe3] group-hover:text-[#ff4a1c] transition-colors cursor-pointer"
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ff4a1c] mt-1 font-mono">
                    {member.role}
                  </p>

                  {member.quote ? (
                    <p className="mt-3 text-xs italic text-[#9d9590] line-clamp-2 border-l-2 border-[#ff4a1c] pl-2.5">
                      {member.quote}
                    </p>
                  ) : (
                    <p className="mt-3 text-xs text-[#9d9590]/80 line-clamp-2 font-mono">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Social Icons & Read Bio */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-[#9d9590]">
                  <div className="flex items-center gap-3">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        title="Instagram"
                        className="hover:text-[#ff4a1c] transition-colors"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        title="Send Email"
                        className="hover:text-[#ff4a1c] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                        className="hover:text-[#ff4a1c] transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noreferrer"
                        title="X"
                        className="hover:text-[#ff4a1c] transition-colors"
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectMember(member)}
                    className="text-[11px] font-mono text-[#f6e12b] hover:text-white transition-colors font-bold"
                  >
                    View Bio →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-20 text-[#9d9590] font-mono">
            No cast or crew members found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}