import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScreeningPage from './pages/ScreeningPage';
import CastCrewPage from './pages/CastCrewPage';
import CollaboratePage from './pages/CollaboratePage';
import BookingModal from './components/BookingModal';
import WaitlistModal from './components/WaitlistModal';
import CastBioModal from './components/CastBioModal';

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
    <div className="bg-[#0d0401] min-h-screen text-[#efebe3] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onOpenWaitlist={() => setShowWaitlistModal(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={navigateTo}
            onOpenWaitlist={() => setShowWaitlistModal(true)}
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

      {/* Global Footer */}
      <Footer setCurrentPage={navigateTo} />

      {/* Interactive Modals */}
      {activeBooking && (
        <BookingModal
          screening={activeBooking}
          onClose={() => setActiveBooking(null)}
        />
      )}

      {showWaitlistModal && (
        <WaitlistModal
          onClose={() => setShowWaitlistModal(false)}
        />
      )}

      {selectedMember && (
        <CastBioModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
