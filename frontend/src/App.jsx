import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#admin' ? 'admin' : 'store';
  });
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedTimepiece, setSelectedTimepiece] = useState('The King Kashyapa Edition');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('store');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToStore = () => {
    window.location.hash = '';
    setCurrentView('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openInquiry = (timepieceTitle) => {
    if (typeof timepieceTitle === 'string') {
      setSelectedTimepiece(timepieceTitle);
    } else {
      setSelectedTimepiece('The King Kashyapa Edition');
    }
    setInquiryModalOpen(true);
  };

  const closeInquiry = () => {
    setInquiryModalOpen(false);
  };

  if (currentView === 'admin') {
    return <Admin onExitToStorefront={navigateToStore} />;
  }

  return (
    <div className="lux-app">
      <Navbar onOpenInquiry={() => openInquiry('Private Concierge Request')} />
      <main className="lux-main">
        <Home
          onOpenInquiry={openInquiry}
          inquiryModalOpen={inquiryModalOpen}
          closeInquiry={closeInquiry}
          selectedTimepiece={selectedTimepiece}
        />
      </main>
      <Footer onOpenInquiry={() => openInquiry('Private Concierge Request')} />
    </div>
  );
}

export default App;
