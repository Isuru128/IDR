import React, { useState } from 'react';
import Button from '../common/Button';

const Footer = ({ onOpenInquiry }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="lux-footer">
      <div className="lux-footer-top-accent"></div>
      
      <div className="lux-footer-container">
        {/* Brand Column */}
        <div className="lux-footer-brand-col">
          <div className="lux-footer-brand">
            <img src="/logo.svg" alt="IDR" className="lux-footer-logo" onError={(e) => { e.target.src = '/logo.png'; }} />
            <div className="lux-footer-brand-text">
              <span className="lux-footer-brand-name">IDR</span>
              <span className="lux-footer-brand-tag">HAUTE HORLOGERIE</span>
            </div>
          </div>
          <p className="lux-footer-desc">
            The pinnacle of royal craftsmanship. Blending Sri Lanka’s 2,500-year gemstone legacy and King Kashyapa’s Sigiriya majesty with Swiss tourbillon micro-engineering.
          </p>
          <div className="lux-boutique-badges">
            <span className="lux-badge">GENÈVE</span>
            <span className="lux-badge-divider">•</span>
            <span className="lux-badge">COLOMBO</span>
            <span className="lux-badge-divider">•</span>
            <span className="lux-badge">LONDON</span>
            <span className="lux-badge-divider">•</span>
            <span className="lux-badge">DUBAI</span>
          </div>
        </div>

        {/* Collections */}
        <div className="lux-footer-links-col">
          <h4 className="lux-footer-heading">Masterpieces</h4>
          <ul className="lux-footer-links">
            <li><a href="#kashyapa">King Kashyapa Edition</a></li>
            <li><a href="#collections">Fortress Celestial Tourbillon</a></li>
            <li><a href="#collections">Fresco Royal Guilloché</a></li>
            <li><a href="#collections">Sigiriya Heritage Calibre</a></li>
            <li><a href="#atelier" onClick={onOpenInquiry}>Bespoke Private Commissions</a></li>
          </ul>
        </div>

        {/* Concierge & Heritage */}
        <div className="lux-footer-links-col">
          <h4 className="lux-footer-heading">Maison IDR</h4>
          <ul className="lux-footer-links">
            <li><a href="#heritage">The Sigiriya Legend</a></li>
            <li><a href="#heritage">Ceylon Gemological Purity</a></li>
            <li><a href="#masterpieces">Flying Tourbillon Architecture</a></li>
            <li><a href="#atelier" onClick={onOpenInquiry}>Private Salon Appointments</a></li>
            <li><a href="#atelier" onClick={onOpenInquiry}>Certificate of Provenance</a></li>
          </ul>
        </div>

        {/* Private Salon Newsletter */}
        <div className="lux-footer-newsletter-col">
          <h4 className="lux-footer-heading">Private Salon Gazette</h4>
          <p className="lux-footer-subtext">
            Receive strictly private previews of numbered timepieces and confidential atelier launches.
          </p>
          {subscribed ? (
            <div className="lux-subscribed-msg">
              <span className="lux-subscribed-icon">✦</span> Welcome to the IDR Collector’s Circle.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="lux-newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter collector's email"
                required
                className="lux-input-silver"
              />
              <Button type="submit" variant="gold" size="sm">
                Join
              </Button>
            </form>
          )}
          <span className="lux-confidentiality-note">
            Confidentiality assured. Unsubscribe at any moment.
          </span>
        </div>
      </div>

      {/* Footer Bottom / Legal */}
      <div className="lux-footer-bottom">
        <div className="lux-footer-bottom-container">
          <p className="lux-copyright">
            &copy; {new Date().getFullYear()} IDR HAUTE HORLOGERIE. ALL RIGHTS RESERVED.
          </p>
          <div className="lux-footer-legal-links">
            <span className="lux-legal-item">PRIVACY PROTOCOL</span>
            <span className="lux-badge-divider">•</span>
            <span className="lux-legal-item">TERMS OF PATRONAGE</span>
            <span className="lux-badge-divider">•</span>
            <span className="lux-legal-item">SWISS CHRONOMETER ASSURANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
