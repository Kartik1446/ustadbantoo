import React, { useState } from 'react';
import { Mail, MapPin, Users, CheckCircle2, Send, HelpCircle, Film, Sparkles, ShieldCheck, Projector, Volume2, Award, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FILM_INFO } from '../data/filmData';
import { TrumpetIcon } from '../components/Icons';

export default function CollaboratePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [venueType, setVenueType] = useState('Indie Cinema');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !city) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4a1c', '#f6e12b', '#efebe3']
      });
    } catch (err) {}
  };

  const hostingSteps = [
    {
      num: "01",
      title: "Submit Venue Request",
      desc: "Tell us about your city, college auditorium, cafe, rooftop, or film society space."
    },
    {
      num: "02",
      title: "Technical & Date Check",
      desc: "Our distribution team coordinates projection specs (1080p/2K/4K) and audio acoustics."
    },
    {
      num: "03",
      title: "Screening & Director Q&A",
      desc: "We supply the DCP / master digital file, posters, and arrange in-person or live Q&A with Arsh Jain."
    }
  ];

  const packageItems = [
    {
      icon: Film,
      title: "DCP & Master Digital File",
      desc: "High-bitrate 2K/4K theatrical master with embedded English subtitles."
    },
    {
      icon: Volume2,
      title: "Dolby 5.1 & Stereo Audio",
      desc: "Mastered for both large auditoriums and intimate acoustic spaces."
    },
    {
      icon: Award,
      title: "Official Artwork & Posters",
      desc: "High-resolution printable promotional art designed by Jaidev Tripathy."
    },
    {
      icon: Users,
      title: "Director & Cast Q&A",
      desc: "Live interactive discussion with Arsh Jain and cast either in-person or virtually."
    }
  ];

  return (
    <div className="min-h-screen text-[#efebe3] pt-32 pb-24 selection:bg-[#ff4a1c] selection:text-white film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#ff4a1c]/15 text-[#ff4a1c] border border-[#ff4a1c]/30">
            Road to 100 Screenings Movement
          </span>
          <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#efebe3] mt-3">
            HOST A SCREENING
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#9d9590] mt-2 max-w-2xl">
            Bring Ustad Bantoo to your college campus, community space, film society, or independent theater. Join us in taking independent cinema directly to audiences across India.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {hostingSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#140804] border border-white/10 relative overflow-hidden group hover:border-[#ff4a1c]/40 transition-all shadow-xl"
            >
              <span className="font-anton text-5xl text-[#ff4a1c]/20 group-hover:text-[#ff4a1c]/40 transition-colors block leading-none">
                {step.num}
              </span>
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3] mt-3">
                {step.title}
              </h3>
              <p className="text-xs font-mono text-[#9d9590] mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Interactive Hosting Form */}
          <div className="lg:col-span-7 bg-[#140804] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h2 className="font-anton text-3xl uppercase tracking-wide text-[#efebe3]">
                    Screening Proposal Form
                  </h2>
                  <p className="text-xs font-mono text-[#9d9590] mt-1">
                    Fill in your space details. Our community distribution team will reply within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      Your Name / Organiser *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      City / Town *
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
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      Audience Capacity
                    </label>
                    <input
                      type="text"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      placeholder="e.g. 50, 120, 300"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      Venue Type
                    </label>
                    <select
                      value={venueType}
                      onChange={(e) => setVenueType(e.target.value)}
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-xs text-[#efebe3] focus:outline-none focus:border-[#ff4a1c]"
                    >
                      <option value="College Auditorium">College / University Auditorium</option>
                      <option value="Indie Cinema">Indie Cinema / Cultural Complex</option>
                      <option value="Cultural Cafe">Cafe / Art Gallery / Collective</option>
                      <option value="Rooftop / Backyard">Rooftop / Open-Air Space</option>
                      <option value="Film Society">Film Society / Film Club</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                      College / Space / Org Name
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. FTII Pune, Lamakaan, Harkat"
                      className="w-full bg-[#0a0301] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#9d9590] mb-1.5 font-bold">
                    Preferred Dates, Projection & Sound Setup
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us your target dates, whether you have a projector/speakers, or any questions..."
                    className="w-full bg-[#0a0301] border border-white/15 rounded-xl p-4 text-sm text-[#efebe3] placeholder-[#9d9590] focus:outline-none focus:border-[#ff4a1c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff4a1c] to-[#e0390f] hover:from-[#ff6c45] hover:to-[#ff4a1c] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#ff4a1c]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Screening Request</span>
                </button>
              </form>
            ) : (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 bg-[#ff4a1c]/20 border border-[#ff4a1c] rounded-full flex items-center justify-center mx-auto text-[#ff4a1c]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-anton text-4xl uppercase tracking-wide text-[#efebe3]">
                  PROPOSAL RECEIVED!
                </h3>
                <p className="text-sm font-mono text-[#9d9590] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#efebe3]">{name}</strong>. We've logged your request for <strong className="text-[#efebe3]">{city}</strong>. Our team will review your venue details and write back to <strong className="text-[#efebe3]">{email}</strong> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCity('');
                    }}
                    className="px-8 py-3 rounded-full bg-[#efebe3] text-[#0d0401] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
                  >
                    Submit Another Venue Proposal
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contacts & Screening Kit */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Booking & Management Contacts */}
            <div className="p-7 rounded-3xl bg-[#140804] border border-white/10 space-y-5 shadow-2xl">
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#1d0e07] border border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff4a1c] font-bold block">
                    Tour & Screening Bookings
                  </span>
                  <a
                    href={`mailto:${FILM_INFO.contacts.bookingEmail}`}
                    className="text-base font-mono font-bold text-[#efebe3] hover:text-[#ff4a1c] transition-colors mt-1 block break-all"
                  >
                    {FILM_INFO.contacts.bookingEmail}
                  </a>
                  <p className="text-xs text-[#9d9590] mt-1 font-mono">
                    For national tour stops, university fest previews, and community screenings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1d0e07] border border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff4a1c] font-bold block">
                    Festival & Executive Management
                  </span>
                  <a
                    href={`mailto:${FILM_INFO.contacts.managementEmail}`}
                    className="text-base font-mono font-bold text-[#efebe3] hover:text-[#ff4a1c] transition-colors mt-1 block break-all"
                  >
                    {FILM_INFO.contacts.managementEmail}
                  </a>
                  <p className="text-xs text-[#9d9590] mt-1 font-mono">
                    For international festival licensing, theatrical releases, and press kits.
                  </p>
                </div>
              </div>
            </div>

            {/* What Hosts Receive (The Screening Package) */}
            <div className="p-7 rounded-3xl bg-[#140804] border border-white/10 space-y-4 shadow-2xl">
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3]">
                What We Provide To Hosts
              </h3>

              <div className="space-y-3">
                {packageItems.map((pkg, idx) => {
                  const Icon = pkg.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#1a0b06] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-[#ff4a1c]/20 text-[#ff4a1c] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#efebe3] font-mono">{pkg.title}</p>
                        <p className="text-[11px] text-[#9d9590] mt-0.5">{pkg.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hosting FAQ */}
            <div className="p-7 rounded-3xl bg-[#140804] border border-white/10 space-y-4 shadow-2xl">
              <h3 className="font-anton text-2xl uppercase tracking-wide text-[#efebe3] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#ff4a1c]" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-3.5 text-xs font-mono text-[#9d9590]">
                <div>
                  <p className="text-[#efebe3] font-bold">Who can organize a screening?</p>
                  <p className="mt-0.5">Anyone! College film clubs, cafes, cultural hubs, art galleries, independent rooftops, and community spaces.</p>
                </div>
                <div>
                  <p className="text-[#efebe3] font-bold">What projection setup is needed?</p>
                  <p className="mt-0.5">A 1080p or 4K projector, a clean white screen/wall, and a stereo or surround sound system so the brass horns resonate.</p>
                </div>
                <div>
                  <p className="text-[#efebe3] font-bold">Can tickets be charged for admission?</p>
                  <p className="mt-0.5">Yes, hosts can organize free community screenings or ticketed community shows to cover venue costs.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}