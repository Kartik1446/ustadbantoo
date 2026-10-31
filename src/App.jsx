import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScreeningPage from './pages/ScreeningPage';
import CastCrewPage from './pages/CastCrewPage';
import CollaboratePage from './pages/CollaboratePage';
import BookingModal from './components/BookingModal';
import WaitlistModal from './components/WaitlistModal';
import CastBioModal from './components/CastBioModal';
import { FILM_INFO } from './data/filmData';
import { X } from 'lucide-react';

export default function App() {
  // Determine initial page from URL pathname
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (path === 'about') return 'about';
    if (path === 'screening' || path === 'screening-2') return 'screening';
    if (path === 'cast-crew') return 'cast-crew';
    if (path === 'collaborate') return 'collaborate';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [activeBooking, setActiveBooking] = useState(null);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Sync state with browser History API
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    const newPath = pageId === 'home' ? '/' : `/${pageId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  return (
    <div className="bg-[#0d0401] min-h-screen text-[#efebe3] flex flex-col font-sans selection:bg-[#ff4a1c] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onOpenWaitlist={() => setShowWaitlistModal(true)}
        onOpenTrailer={() => setShowTrailerModal(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={navigateTo}
            onOpenWaitlist={() => setShowWaitlistModal(true)}
            onSelectScreening={(screening) => setActiveBooking(screening)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={navigateTo} />
        )}
        {currentPage === 'screening' && (
          <ScreeningPage
            onSelectScreening={(screening) => setActiveBooking(screening)}
            onOpenWaitlist={() => setShowWaitlistModal(true)}
          />
        )}
        {currentPage === 'cast-crew' && (
          <CastCrewPage
            onSelectMember={(member) => setSelectedMember(member)}
          />
        )}
        {currentPage === 'collaborate' && (
          <CollaboratePage />
        )}
      </main>

      {/* Global Interactive Audio Companion */}
      <AudioPlayer />

      {/* Global Footer */}
      <Footer setCurrentPage={navigateTo} />

      {/* Interactive Booking Modal */}
      {activeBooking && (
        <BookingModal
          screening={activeBooking}
          onClose={() => setActiveBooking(null)}
        />
      )}

      {/* City Waitlist Modal */}
      {showWaitlistModal && (
        <WaitlistModal
          onClose={() => setShowWaitlistModal(false)}
        />
      )}

      {/* Cast & Crew Bio Lightbox */}
      {selectedMember && (
        <CastBioModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {/* Standalone Fullscreen Trailer Modal */}
      {showTrailerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn"
          onClick={() => setShowTrailerModal(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTrailerModal(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#ff4a1c] text-white flex items-center justify-center transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={FILM_INFO.trailerEmbedUrl}
              title="Ustad Bantoo Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}