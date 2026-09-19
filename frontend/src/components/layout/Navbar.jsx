import React, { useState, useEffect } from 'react';
import Button from '../common/Button';

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'King Kashyapa', href: '#kashyapa' },
    { label: 'Masterpieces', href: '#masterpieces' },
    { label: 'Collections', href: '#collections' },
    { label: 'Royal Heritage', href: '#heritage' },
    { label: 'Atelier', href: '#atelier' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`lux-navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="lux-navbar-container">
        {/* Brand Logo */}
        <a href="#" className="lux-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="lux-logo-wrapper">
            <img src="/logo.svg" alt="IDR Logo" className="lux-logo-img" onError={(e) => { e.target.src = '/logo.png'; }} />
          </div>
          <div className="lux-brand-text">
            <span className="lux-brand-title">IDR</span>
            <span className="lux-brand-subtitle">HAUTE HORLOGERIE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="lux-nav-desktop" aria-label="Main Navigation">
          <ul className="lux-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="lux-nav-item">
                <a
                  href={link.href}
                  className="lux-nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className="lux-nav-link-text">{link.label}</span>
                  <span className="lux-nav-link-indicator"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA / Concierge */}
        <div className="lux-navbar-actions">
          <span className="lux-edition-tag">SWISS CALIBRE • CEYLON GEMS</span>

          <Button
            variant="gold-outline"
            size="sm"
            onClick={onOpenInquiry}
            className="lux-nav-cta"
          >
            Private Viewing
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lux-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`lux-hamburger-bar ${mobileMenuOpen ? 'open-top' : ''}`}></span>
            <span className={`lux-hamburger-bar ${mobileMenuOpen ? 'open-mid' : ''}`}></span>
            <span className={`lux-hamburger-bar ${mobileMenuOpen ? 'open-bot' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`lux-mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="lux-mobile-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="lux-mobile-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="lux-mobile-cta-item">
            <Button
              variant="gold"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              style={{ width: '100%', marginTop: '16px' }}
            >
              Request Private Concierge
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
