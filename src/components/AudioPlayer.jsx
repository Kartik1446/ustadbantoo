import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc3, ExternalLink, ChevronUp, ChevronDown, Play, Pause, SkipForward, Sparkles } from 'lucide-react';
import { FILM_INFO } from '../data/filmData';

export default function AudioPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioCtxRef = useRef(null);
  const oscillatorNodesRef = useRef([]);
  const gainNodeRef = useRef(null);

  const tracks = FILM_INFO.soundtrack || [];
  const currentTrack = tracks[currentTrackIndex] || {
    title: "Ustad Bantoo Brass Theme",
    artist: "Aman Gupta",
    vibe: "Original Score",
    album: "Original Motion Picture Soundtrack"
  };

  // Synthesize an atmospheric warm Indian harmonium / brass drone sound
  const startDrone = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Stop previous
      stopDrone();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Chord frequencies: Root D3 (146.83 Hz), Fifth A3 (220.0 Hz), Octave D4 (293.66 Hz), Major Third F#3 (185.0 Hz)
      const freqs = [146.83, 220.0, 293.66, 185.0];
      const oscs = [];

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx === 0 ? 'triangle' : idx === 3 ? 'sine' : 'sawtooth';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        // Lowpass filter for smooth warm brass tone
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420 + idx * 80, ctx.currentTime);

        gain.gain.setValueAtTime(0.25 / (idx + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      oscillatorNodesRef.current = oscs;
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio Context error:", err);
    }
  };

  const stopDrone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        setTimeout(() => {
          oscillatorNodesRef.current.forEach((osc) => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          oscillatorNodesRef.current = [];
        }, 450);
      } catch (err) {}
    }
    setIsPlaying(false);
  };

  const toggleSoundscape = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      {/* Expanded Soundtrack Panel */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#140803]/95 backdrop-blur-xl border border-white/15 p-5 shadow-2xl text-[#efebe3] animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff4a1c] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#ff4a1c] font-bold">
                Cinematic Soundscape
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#9d9590] hover:text-white p-1"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Current track card */}
          <div className="p-3.5 rounded-2xl bg-[#1d0e07] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className={`w-10 h-10 rounded-xl bg-[#2b1208] border border-white/10 flex items-center justify-center shrink-0 ${isPlaying ? 'text-[#ff4a1c]' : 'text-[#9d9590]'}`}>
                <Disc3 className={`w-6 h-6 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
              </div>
              <div className="min-w-0">
                <p className="font-anton text-base tracking-wide text-[#efebe3] truncate">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-[#9d9590] font-mono truncate">
                  {currentTrack.artist} · <span className="text-[#f6e12b]">{currentTrack.vibe}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                onClick={nextTrack}
                title="Next Track"
                className="p-1.5 rounded-lg text-[#9d9590] hover:text-white hover:bg-white/5 transition-colors"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Ambient Tone Generator Controller */}
          <div className="mt-3 p-3 rounded-2xl bg-[#0d0401]/80 border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#efebe3] font-bold block">
                Delhi Brass Ambience
              </span>
              <span className="text-[10px] text-[#9d9590] font-mono">
                {isPlaying ? 'Playing warm brass drone' : 'Experience the film tone'}
              </span>
            </div>

            <button
              onClick={toggleSoundscape}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                isPlaying
                  ? 'bg-[#ff4a1c] text-white shadow-lg shadow-[#ff4a1c]/30'
                  : 'bg-white/10 text-[#efebe3] hover:bg-white/20'
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Listen</span>
                </>
              )}
            </button>
          </div>

          {/* Soundtrack quick list */}
          <div className="mt-3 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9d9590] block mb-2">
              Original Soundtrack ({tracks.length} Tracks)
            </span>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {tracks.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentTrackIndex(i)}
                  className={`p-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-colors ${
                    i === currentTrackIndex
                      ? 'bg-[#ff4a1c]/20 text-[#efebe3] border border-[#ff4a1c]/30'
                      : 'hover:bg-white/5 text-[#9d9590]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-mono text-[10px] opacity-60">0{i + 1}</span>
                    <span className="font-bold text-[#efebe3] truncate">{t.title}</span>
                    <span className="text-[10px] opacity-70 truncate">— {t.artist}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#f6e12b] shrink-0 ml-2">
                    {t.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spotify Direct Link */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#9d9590]">Full Soundtrack on Spotify</span>
            <a
              href={FILM_INFO.spotifyPlaylistUrl || FILM_INFO.spotifyEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#1db954] hover:underline flex items-center gap-1 font-bold"
            >
              <span>Open Spotify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 bg-[#170b06]/95 hover:bg-[#200e07] text-[#efebe3] px-4 py-2.5 rounded-full border border-white/15 hover:border-[#ff4a1c]/50 shadow-2xl backdrop-blur-xl transition-all duration-300"
        >
          {/* Animated vinyl / disc */}
          <div className="relative">
            <Disc3
              className={`w-4 h-4 text-[#ff4a1c] ${
                isPlaying ? 'animate-spin' : 'group-hover:rotate-45'
              } transition-transform`}
              style={{ animationDuration: '3s' }}
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#f6e12b] animate-ping" />
            )}
          </div>

          <div className="text-left font-mono text-xs hidden sm:block">
            <span className="font-bold text-[#efebe3] group-hover:text-[#ff4a1c] transition-colors">
              Soundtrack
            </span>
            <span className="text-[#9d9590] text-[10px] block leading-none">
              {isPlaying ? 'Atmosphere Active' : 'Score & Ambience'}
            </span>
          </div>

          {/* Mini Equalizer Bar Animation when active */}
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 px-1">
              <span className="w-0.5 bg-[#ff4a1c] rounded-full eq-bar-1" />
              <span className="w-0.5 bg-[#f6e12b] rounded-full eq-bar-2" />
              <span className="w-0.5 bg-[#ff4a1c] rounded-full eq-bar-3" />
              <span className="w-0.5 bg-[#efebe3] rounded-full eq-bar-4" />
            </div>
          ) : (
            <ChevronUp className="w-3.5 h-3.5 text-[#9d9590]" />
          )}
        </button>

        {/* Quick Audio Mute / Play Button */}
        <button
          onClick={toggleSoundscape}
          title={isPlaying ? "Mute Ambience" : "Play Brass Drone"}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xl backdrop-blur-xl ${
            isPlaying
              ? 'bg-[#ff4a1c] text-white hover:bg-[#e0390f] shadow-[#ff4a1c]/40'
              : 'bg-[#170b06]/95 text-[#9d9590] hover:text-white border border-white/15'
          }`}
        >
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}