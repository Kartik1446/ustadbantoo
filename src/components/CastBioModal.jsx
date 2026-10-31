import React from 'react';
import { X, Mail, Quote } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function CastBioModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#140803] border border-white/15 rounded-3xl p-6 sm:p-8 text-[#efebe3] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Portrait Image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#24130b] aspect-[3/4] border border-white/10">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white tracking-wider">
                {member.category.toUpperCase()}
              </span>
              <h2 className="font-anton text-3xl tracking-wide text-[#efebe3] mt-2">
                {member.name}
              </h2>
              <p className="text-sm font-semibold text-[#ff4a1c] tracking-wide mt-0.5">
                {member.role}
              </p>
            </div>

            {member.quote && (
              <div className="p-3.5 rounded-xl bg-[#1e0f08] border-l-2 border-[#ff4a1c] text-xs italic text-[#efebe3] flex items-start gap-2">
                <Quote className="w-4 h-4 text-[#ff4a1c] shrink-0 mt-0.5" />
                <p>{member.quote}</p>
              </div>
            )}

            <div className="text-xs text-[#9d9590] leading-relaxed">
              {member.bio}
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-white/10">
              <p className="text-[10px] uppercase font-mono text-[#9d9590] mb-2 tracking-wider">
                Connect with {member.name.split(' ')[0]}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff4a1c] text-[#efebe3] text-xs font-mono transition-colors"
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
