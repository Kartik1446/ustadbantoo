import React from 'react';
import { X, Mail, Quote, Film, Award, ExternalLink } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon, TrumpetIcon } from './Icons';

export default function CastBioModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#140803] border border-white/20 rounded-3xl p-6 sm:p-8 text-[#efebe3] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff4a1c] flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
          {/* Portrait Image (Left) */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#24130b] aspect-[3/4] border border-white/15 shadow-xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent md:hidden" />
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold tracking-wider">
                  {member.category.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-[#9d9590]">
                  Ustad Bantoo (2026)
                </span>
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl tracking-wide text-[#efebe3] mt-2">
                {member.name}
              </h2>
              <p className="text-sm font-semibold text-[#f6e12b] tracking-wide mt-0.5 font-mono">
                {member.role}
              </p>
            </div>

            {member.quote && (
              <div className="p-4 rounded-2xl bg-[#1e0f08] border-l-4 border-[#ff4a1c] text-xs italic text-[#efebe3] flex items-start gap-2.5 shadow-md">
                <Quote className="w-4 h-4 text-[#ff4a1c] shrink-0 mt-0.5" />
                <p className="leading-relaxed">“{member.quote}”</p>
              </div>
            )}

            <div className="text-xs sm:text-sm text-[#9d9590] leading-relaxed font-light">
              {member.bio}
            </div>

            {/* Social Links */}
            <div className="pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase font-mono text-[#9d9590] mb-2.5 tracking-wider font-bold">
                Connect & Portfolio
              </p>
              <div className="flex flex-wrap gap-2">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors border border-white/10"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors border border-white/10"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors border border-white/10"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors border border-white/10"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                    <span>X</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}