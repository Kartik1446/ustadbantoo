import React, { useState } from 'react';
import { X, CheckCircle, Ticket, MapPin, Calendar, Clock, Sparkles, Download, Share2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TrumpetIcon } from './Icons';

export default function BookingModal({ screening, onClose }) {
  const [step, setStep] = useState('select'); // 'select' | 'confirmed'
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketId, setTicketId] = useState('');

  if (!screening) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Generate authentic ticket serial code
    const randomCode = 'UB-2026-' + screening.shortCity.toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomCode);
    setStep('confirmed');

    // Launch celebratory brass confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4a1c', '#f6e12b', '#efebe3', '#d4af37']
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#140803] border border-white/20 rounded-3xl p-6 sm:p-8 text-[#efebe3] shadow-2xl overflow-hidden">
        
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4a1c]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff4a1c] flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'select' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white font-bold">
                Official Tour Pass
              </span>
              <span className="text-xs text-[#f6e12b] font-mono font-bold">
                {screening.seatsLeft}
              </span>
            </div>

            <h2 className="font-anton text-3xl sm:text-4xl tracking-wide text-[#efebe3]">
              USTAD BANTOO · {screening.city}
            </h2>

            {/* Screening Details Card */}
            <div className="mt-4 p-4 rounded-2xl bg-[#1d0e08] border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#efebe3]">
                <Calendar className="w-4 h-4 text-[#ff4a1c]" />
                <span className="font-bold text-sm">{screening.date}, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[#9d9590]">
                <Clock className="w-4 h-4 text-[#ff4a1c]" />
                <span>{screening.time}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9d9590]">
                <MapPin className="w-4 h-4 text-[#ff4a1c]" />
                <span>{screening.venue}</span>
              </div>
              <div className="pt-1 text-[11px] text-[#efebe3]/80 italic">
                {screening.note}
              </div>
            </div>

            <form onSubmit={handleBooking} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
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
                  placeholder="you@example.com"
                  className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9d9590] mb-1 font-bold">
                    Pass Quantity
                  </label>
                  <div className="flex items-center border border-white/15 rounded-xl bg-[#0a0301] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 hover:bg-white/10 text-base font-bold transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-sm font-bold font-mono">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(6, quantity + 1))}
                      className="px-3.5 py-2 hover:bg-white/10 text-base font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff4a1c] to-[#e0390f] hover:from-[#ff6c45] hover:to-[#ff4a1c] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#ff4a1c]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Reservation ({screening.price})</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9d9590] font-mono text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1db954]" />
                <span>Instant Confirmation · Digital e-Pass issued immediately</span>
              </div>
            </form>
          </div>
        ) : (
          /* VIRTUAL PHYSICAL TICKET PASS CONFIRMATION */
          <div className="text-center py-2 animate-fadeIn">
            <div className="w-14 h-14 bg-[#1db954]/20 border border-[#1db954] rounded-full flex items-center justify-center mx-auto mb-3 text-[#1db954]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase bg-[#ff4a1c] text-white px-3 py-1 rounded-full font-bold">
              Pass Confirmed & Issued
            </span>

            <h3 className="font-anton text-3xl tracking-wide mt-2 text-[#efebe3]">
              YOU'RE IN FOR {screening.city.toUpperCase()}!
            </h3>

            <p className="text-xs text-[#9d9590] mt-1 max-w-sm mx-auto font-mono">
              We've reserved {quantity} pass(es) for <strong className="text-[#efebe3]">{name}</strong>. A confirmation has been sent to {email}.
            </p>

            {/* Authentic Cinema Ticket Stub */}
            <div className="my-5 p-5 rounded-2xl bg-[#090301] border-2 border-dashed border-[#ff4a1c]/60 text-left font-mono relative overflow-hidden shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <TrumpetIcon className="w-4 h-4 text-[#ff4a1c]" />
                  <span className="text-xs text-[#ff4a1c] font-bold tracking-wider">
                    USTAD BANTOO TOUR PASS
                  </span>
                </div>
                <span className="text-[11px] text-[#f6e12b] font-bold bg-[#1d0e07] px-2 py-0.5 rounded border border-[#f6e12b]/30">
                  {ticketId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#9d9590]">
                <div>
                  <span className="text-[10px] uppercase text-[#9d9590] block">Screening City</span>
                  <strong className="text-sm font-anton uppercase text-[#efebe3] tracking-wide">{screening.city}</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#9d9590] block">Date & Time</span>
                  <strong className="text-xs font-bold text-[#efebe3]">{screening.date}, 2026 · {screening.day} {screening.month}</strong>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase text-[#9d9590] block">Venue</span>
                  <strong className="text-xs font-bold text-[#efebe3]">{screening.venue}</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#9d9590] block">Admit</span>
                  <strong className="text-xs font-bold text-[#f6e12b]">{quantity} Person(s)</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#9d9590] block">Seating Zone</span>
                  <strong className="text-xs font-bold text-[#efebe3]">Section 22H - General</strong>
                </div>
              </div>

              {/* Barcode Graphic */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-[9px] text-[#9d9590] tracking-widest">
                  ||||| ||| ||||||| || |||||| |||| |||||
                </div>
                <span className="text-[9px] text-[#9d9590] font-mono">
                  THE YELLOW ORANGE · 1719 FILM FACTORY
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Done & Return to Tour
            </button>
          </div>
        )}
      </div>
    </div>
  );
}