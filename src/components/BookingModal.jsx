import React, { useState } from 'react';
import { X, CheckCircle, Ticket, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

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

    // Generate random ticket code
    const randomCode = 'UB-' + Math.floor(1000 + Math.random() * 9000) + '-' + screening.city.substring(0, 3).toUpperCase();
    setTicketId(randomCode);
    setStep('confirmed');

    // Launch confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4a1c', '#f6e12b', '#efebe3']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#140803] border border-white/15 rounded-3xl p-6 sm:p-8 text-[#efebe3] shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'select' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#ff4a1c] text-white">
                Live Tour Ticket
              </span>
              <span className="text-xs text-[#9d9590] font-mono">
                {screening.seatsLeft}
              </span>
            </div>

            <h2 className="font-anton text-3xl tracking-wide text-[#efebe3]">
              USTAD BANTOO · {screening.city}
            </h2>

            <div className="mt-4 p-4 rounded-2xl bg-[#1d0e08] border border-white/10 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#efebe3]">
                <Calendar className="w-4 h-4 text-[#ff4a1c]" />
                <span className="font-bold">{screening.date}, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[#9d9590]">
                <Clock className="w-4 h-4 text-[#ff4a1c]" />
                <span>{screening.time}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9d9590]">
                <MapPin className="w-4 h-4 text-[#ff4a1c]" />
                <span>{screening.venue}</span>
              </div>
            </div>

            <form onSubmit={handleBooking} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1">
                  Your Full Name
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
                <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1">
                  Email Address
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1">
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
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1">
                    Number of Passes
                  </label>
                  <div className="flex items-center border border-white/15 rounded-xl bg-[#0a0301] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2.5 hover:bg-white/10 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-sm font-bold font-mono">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(5, quantity + 1))}
                      className="px-3 py-2.5 hover:bg-white/10 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#ff4a1c]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Reservation ({screening.price})</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#9d9590] font-mono">
                Free reservation guarantee · Entry pass delivered via email & WhatsApp
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-[#ff4a1c]/20 border border-[#ff4a1c] rounded-full flex items-center justify-center mx-auto mb-4 text-[#ff4a1c]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase bg-[#ff4a1c] text-white px-2.5 py-0.5 rounded-full">
              Pass Confirmed
            </span>

            <h3 className="font-anton text-2xl tracking-wide mt-3 text-[#efebe3]">
              YOU'RE IN FOR {screening.city}!
            </h3>

            <p className="text-sm text-[#9d9590] mt-1 max-w-sm mx-auto">
              We've reserved {quantity} pass(es) under <strong className="text-[#efebe3]">{name}</strong>. A confirmation has been sent to {email}.
            </p>

            {/* Virtual Ticket Stub */}
            <div className="my-6 p-4 rounded-2xl bg-[#080201] border-2 border-dashed border-[#ff4a1c]/60 text-left font-mono">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                <span className="text-xs text-[#ff4a1c] font-bold">USTAD BANTOO LIVE PASS</span>
                <span className="text-xs text-[#efebe3] font-bold">{ticketId}</span>
              </div>
              <div className="text-xs space-y-1 text-[#9d9590]">
                <div><strong className="text-[#efebe3]">City:</strong> {screening.city}</div>
                <div><strong className="text-[#efebe3]">Venue:</strong> {screening.venue}</div>
                <div><strong className="text-[#efebe3]">Time:</strong> {screening.time}</div>
                <div><strong className="text-[#efebe3]">Pass Type:</strong> Admit {quantity} · Seating 22H - 33J</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#efebe3] hover:bg-white text-[#0d0401] font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider transition-colors"
            >
              Close & Return to Tour
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
