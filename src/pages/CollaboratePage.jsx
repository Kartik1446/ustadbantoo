import React, { useState } from 'react';
import { Mail, MapPin, Users, CheckCircle2, Send, HelpCircle, Film, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FILM_INFO } from '../data/filmData';

export default function CollaboratePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !city) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4a1c', '#f6e12b', '#efebe3']
      });
    } catch (err) {}
  };

  return (
    <div className="min-h-screen text-[#efebe3] pt-28 pb-20 selection:bg-[#ff4a1c] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
            Community Collaborations
          </span>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3] mt-3">
            Want to Host A Screening ?
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#9d9590] mt-2 max-w-2xl">
            Bring Ustad Bantoo to your college, community center, film club, or independent venue. Let's make cinema accessible everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Hosting Form */}
          <div className="lg:col-span-7 bg-[#140804] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h2 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3]">
                    Screening Request Form
                  </h2>
                  <p className="text-xs font-mono text-[#9d9590] mt-1">
                    Fill in your venue details and our team will get in touch within 24 hours.
                  </p>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Pune, Jaipur, Chandigarh"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                      Audience Capacity
                    </label>
                    <input
                      type="text"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      placeholder="e.g. 50, 100, 250"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                    College / Organization / Space Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. IIT Delhi Film Society / Harkat Studios"
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5">
                    Message / Dates / Technical Setup
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the screening venue, preferred dates, or sound/projection setup..."
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl p-4 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff4a1c] hover:bg-[#e0390f] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ff4a1c]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#ff4a1c]/20 border border-[#ff4a1c] rounded-full flex items-center justify-center mx-auto text-[#ff4a1c]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-anton text-3xl uppercase tracking-wide text-[#efebe3]">
                  REQUEST RECEIVED!
                </h3>
                <p className="text-sm font-mono text-[#9d9590] max-w-md mx-auto">
                  Thank you, <strong className="text-[#efebe3]">{name}</strong>. We've logged your request for <strong className="text-[#efebe3]">{city}</strong>. We will write back to you at <strong className="text-[#efebe3]">{email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCity('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#efebe3] text-[#0d0401] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contact & Guidelines */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Booking & Management Contacts */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#140804] border border-white/10 space-y-6">
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#1d0e07] border border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff4a1c] block">
                    Live / Booking
                  </span>
                  <a
                    href={`mailto:${FILM_INFO.contacts.bookingEmail}`}
                    className="text-base font-mono font-bold text-[#efebe3] hover:text-[#ff4a1c] transition-colors mt-1 block break-all"
                  >
                    {FILM_INFO.contacts.bookingEmail}
                  </a>
                  <p className="text-xs text-[#9d9590] mt-1">
                    For tour dates, college fest screenings, and private previews.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1d0e07] border border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff4a1c] block">
                    Management
                  </span>
                  <a
                    href={`mailto:${FILM_INFO.contacts.managementEmail}`}
                    className="text-base font-mono font-bold text-[#efebe3] hover:text-[#ff4a1c] transition-colors mt-1 block break-all"
                  >
                    {FILM_INFO.contacts.managementEmail}
                  </a>
                  <p className="text-xs text-[#9d9590] mt-1">
                    For festival queries, theatrical licensing, and press.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosting Guidelines / FAQ */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#140804] border border-white/10 space-y-4">
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#ff4a1c]" />
                <span>Hosting FAQ</span>
              </h3>

              <div className="space-y-3 text-xs font-mono text-[#9d9590]">
                <div>
                  <p className="text-[#efebe3] font-bold">1. Who can host a screening?</p>
                  <p className="mt-0.5">Colleges, independent cafes, film clubs, art galleries, or even neighborhood rooftop collectives!</p>
                </div>
                <div>
                  <p className="text-[#efebe3] font-bold">2. What tech is required?</p>
                  <p className="mt-0.5">A clear 1080p projector and a decent stereo or PA sound system so the brass instruments shine.</p>
                </div>
                <div>
                  <p className="text-[#efebe3] font-bold">3. Will the filmmakers attend?</p>
                  <p className="mt-0.5">Director Arsh Jain and select cast members attend in person or host a live interactive Q&A after the film.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
