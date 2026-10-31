import React, { useState } from 'react';
import { X, Send, MapPin, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FILM_INFO } from '../data/filmData';
import { TrumpetIcon } from './Icons';

export default function WaitlistModal({ onClose, defaultCity = '' }) {
  const [city, setCity] = useState(defaultCity);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [venueType, setVenueType] = useState('Indie Cinema');
  const [capacity, setCapacity] = useState('100');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || !name || !email) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4a1c', '#f6e12b', '#efebe3']
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#140803] border border-white/20 rounded-3xl p-6 sm:p-8 text-[#efebe3] shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff4a1c] flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold">
                Road to 100 Screenings
              </span>
              <span className="text-xs text-[#9d9590] font-mono">
                Community Movement
              </span>
            </div>

            <h2 className="font-anton text-3xl sm:text-4xl tracking-wide text-[#efebe3]">
              HOST BANTOO IN YOUR CITY
            </h2>
            <p className="text-xs text-[#9d9590] mt-1.5 font-mono">
              Help us bring the trumpet of Bantoo to colleges, cultural spaces, cafes, and indie cinemas across India.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                  Your City / Town *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#ff4a1c] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Lucknow, Jaipur, Kochi, Ahmedabad..."
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                  Your Name / Collective *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name or Film Society name"
                  className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@example.com"
                  className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                    Venue Type
                  </label>
                  <select
                    value={venueType}
                    onChange={(e) => setVenueType(e.target.value)}
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                  >
                    <option value="Indie Cinema">Indie Cinema / Hall</option>
                    <option value="College Auditorium">College / University</option>
                    <option value="Cultural Cafe">Cafe / Art Space</option>
                    <option value="Rooftop / Backyard">Rooftop / Open Air</option>
                    <option value="Film Club">Film Society / Club</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                    Est. Audience Capacity
                  </label>
                  <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="e.g. 100"
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff4a1c] to-[#e0390f] hover:from-[#ff6c45] hover:to-[#ff4a1c] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#ff4a1c]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <TrumpetIcon className="w-4 h-4" />
                  <span>Join City Waitlist</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={FILM_INFO.waitlistUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#9d9590] hover:text-[#ff4a1c] underline underline-offset-4 font-mono transition-colors"
                >
                  <span>Or open official Tally form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-3">
            <div className="w-16 h-16 bg-[#1db954]/20 border border-[#1db954] rounded-full flex items-center justify-center mx-auto mb-2 text-[#1db954]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-anton text-3xl tracking-wide text-[#efebe3]">
              WAITLIST JOINED FOR {city.toUpperCase()}!
            </h3>

            <p className="text-sm text-[#9d9590] max-w-sm mx-auto font-mono leading-relaxed">
              Thank you, <strong className="text-[#efebe3]">{name}</strong>. Our distribution team will coordinate with you at <strong className="text-[#efebe3]">{email}</strong> to schedule a screening date in {city}!
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}