import React, { useState, useRef } from 'react';
import Button from '../components/common/Button';

const Home = ({ onOpenInquiry, inquiryModalOpen, closeInquiry, selectedTimepiece }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSpecTab, setActiveSpecTab] = useState('specs');
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salon: 'Geneva Salon Privé',
    notes: '',
  });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setReferenceId(`IDR-${Math.floor(100000 + Math.random() * 900000)}`);
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      if (closeInquiry) closeInquiry();
    }, 3500);
  };

  const collectionTimepieces = [
    {
      id: 'kashyapa',
      title: 'The King Kashyapa Edition',
      tag: 'FLAGSHIP TOURBILLON • 1 OF 8',
      image: '/king-kashyapa.jpg',
      material: 'Platinum 904L & 24K Hand-Chiseled Gold',
      movement: 'Calibre IDR-01 Flying Tourbillon (Manual)',
      gems: '36 Natural Ceylon Rainbow Baguettes',
      description: 'A sovereign tribute to the 5th-century monarch of the Sigiriya sky fortress, fusing royal fresco micro-engraving with high-horology tourbillon precision.',
      badge: 'Bespoke Order',
    },
    {
      id: 'fortress',
      title: 'The Fortress Celestial Edition',
      tag: 'LIMITED TO 12 PIECES',
      image: '/fortress-edition.jpg',
      material: 'Blackened Titanium & Satin Silver',
      movement: 'Calibre IDR-02 Automatic Openworked',
      gems: 'Natural Ceylon Star Sapphire Cabochon',
      description: 'Architectural geometry mirroring the granite ramparts and hydraulic celestial gardens of the Sigiriya rock fortress.',
      badge: 'Rare Allocation',
    },
    {
      id: 'fresco',
      title: 'The Fresco Royal Guilloché',
      tag: 'LIMITED TO 18 PIECES',
      image: '/fresco-edition.jpg',
      material: 'Brushed Platinum & Yellow Gold Bezel',
      movement: 'Calibre IDR-03 Ultra-Thin Micro-Rotor',
      gems: 'Bespoke Imperial Blue Ceylon Sapphires',
      description: 'Intricate grand feu enamel dial capturing the heavenly nymphs painted on the precipitous cliffs of ancient Sri Lanka.',
      badge: 'Available to Order',
    },
    {
      id: 'sigiriya',
      title: 'The Sigiriya Monolith Heritage',
      tag: 'HISTORIC ATELIER TRIBUTE',
      image: '/sigiriya.jpg',
      material: 'Damascus Steel & 18K Yellow Gold Core',
      movement: 'Calibre IDR-04 Perpetual Calendar',
      gems: 'Padparadscha Sapphire Crown Inlay',
      description: 'Inspired by the 200-meter monolith rising from the tropical canopy, commemorating King Kashyapa’s golden reign.',
      badge: 'Museum Provenance',
    },
  ];

  const hotspots = [
    {
      id: 'bezel',
      x: '50%',
      y: '14%',
      title: 'Rainbow Gemstone Bezel',
      detail: '36 hand-selected, untreated natural Ceylon sapphires, rubies, and emeralds custom-baguette cut to seamlessly encircle the dial.',
    },
    {
      id: 'fresco',
      x: '42%',
      y: '35%',
      title: '24K Sigiriya Fresco Dial',
      detail: 'Hand-chiseled solid gold relief capturing King Kashyapa and the royal celestial maidens from the 5th-century mirror wall paintings.',
    },
    {
      id: 'tourbillon',
      x: '34%',
      y: '48%',
      title: 'Flying Tourbillon Complication',
      detail: 'Titanium tourbillon cage rotating 360 degrees once every 60 seconds at 6 o’clock, counteracting earth’s gravitational pull with Swiss precision.',
    },
    {
      id: 'bracelet',
      x: '25%',
      y: '70%',
      title: 'Gem-Set Integrated Platinum Bracelet',
      detail: 'Ergonomic 904L links featuring flush baguette gem settings, hand-brushed satin finish, and double-folding safety deployment clasp.',
    },
  ];

  return (
    <div className="lux-home">
      {/* 1. HERO VIDEO BANNER (NAVBAR OVERLAYS ON THIS VIDEO) */}
      <section className="lux-hero-banner" id="hero">
        <div className="lux-hero-video-container">
          <video
            ref={videoRef}
            className="lux-hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/king-kashyapa.jpg"
          >
            <source src="/hero-banner.mp4" type="video/mp4" />
          </video>
          {/* Layered cinematic overlays for text legibility and rich black luxury mood */}
          <div className="lux-hero-overlay-top"></div>
          <div className="lux-hero-overlay-radial"></div>
          <div className="lux-hero-overlay-bottom"></div>
        </div>

        {/* Hero Content Positioned Center-Bottom */}
        <div className="lux-hero-content">
          <div className="lux-hero-badge-wrap">
            <span className="lux-hero-badge">
              <span className="lux-gem-sparkle">✦</span> HAUTE HORLOGERIE ROYAL EDITION <span className="lux-gem-sparkle">✦</span>
            </span>
          </div>

          <h1 className="lux-hero-title">
            <span className="lux-text-silver">THE KING</span>{' '}
            <span className="lux-text-gold">KASHYAPA</span>
          </h1>

          <p className="lux-hero-subtitle">
            Ancient Sri Lankan Royal Heritage Crowned With Swiss Flying Tourbillon & Baguette Ceylon Gemstones.
          </p>

          {/* Luxury Metric Badges */}
          <div className="lux-hero-metrics">
            <div className="lux-metric-item">
              <span className="lux-metric-val lux-text-gold">1 of 8</span>
              <span className="lux-metric-lbl lux-text-silver">Numbered Pieces</span>
            </div>
            <div className="lux-metric-divider"></div>
            <div className="lux-metric-item">
              <span className="lux-metric-val lux-text-gold">72 H</span>
              <span className="lux-metric-lbl lux-text-silver">Power Reserve</span>
            </div>
            <div className="lux-metric-divider"></div>
            <div className="lux-metric-item">
              <span className="lux-metric-val lux-text-gold">36 GEMS</span>
              <span className="lux-metric-lbl lux-text-silver">Ceylon Baguettes</span>
            </div>
            <div className="lux-metric-divider"></div>
            <div className="lux-metric-item">
              <span className="lux-metric-val lux-text-gold">904L</span>
              <span className="lux-metric-lbl lux-text-silver">Platinum Grade</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lux-hero-actions">
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.getElementById('kashyapa');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover The Masterpiece
            </Button>
            <Button
              variant="silver-outline"
              size="lg"
              onClick={() => onOpenInquiry('The King Kashyapa Edition')}
            >
              Private Viewing Request
            </Button>
            <button
              className="lux-video-control-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause banner video' : 'Play banner video'}
              title={isPlaying ? 'Pause Film' : 'Play Film'}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
              <span className="lux-video-control-label">{isPlaying ? 'PAUSE FILM' : 'PLAY FILM'}</span>
            </button>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="lux-hero-scroll">
          <span className="lux-scroll-text">SCROLL TO EXPERIENCE</span>
          <div className="lux-scroll-needle">
            <span className="lux-needle-point"></span>
          </div>
        </div>
      </section>

      {/* 2. KING KASHYAPA SPOTLIGHT SECTION */}
      <section className="lux-section lux-kashyapa-spotlight" id="kashyapa">
        <div className="lux-section-header">
          <span className="lux-section-overline lux-text-silver">MASTER COMPLICATION</span>
          <h2 className="lux-section-title">
            <span className="lux-text-gold">KING KASHYAPA</span> <span className="lux-text-silver">EDITION</span>
          </h2>
          <div className="lux-gold-divider">
            <span className="lux-divider-diamond">◆</span>
          </div>
          <p className="lux-section-desc">
            A testament to the monarch who sculpted an empire in the clouds. Hand-engraved 24K gold miniature Sigiriya frescos converge with natural Ceylon rainbow gemstones and a flying tourbillon.
          </p>
        </div>

        <div className="lux-kashyapa-container">
          {/* Interactive Watch Display with Hotspots */}
          <div className="lux-watch-stage">
            <div className="lux-watch-glow-aura"></div>
            <div className="lux-watch-frame">
              <img
                src="/king-kashyapa.jpg"
                alt="King Kashyapa Edition Luxury Watch"
                className="lux-watch-image"
              />

              {/* Interactive Hotspots */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  className={`lux-hotspot-pin ${activeHotspot?.id === spot.id ? 'active' : ''}`}
                  style={{ left: spot.x, top: spot.y }}
                  onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                  aria-label={spot.title}
                >
                  <span className="lux-hotspot-pulse"></span>
                  <span className="lux-hotspot-dot">+</span>
                </button>
              ))}
            </div>

            {/* Active Hotspot Callout Card */}
            {activeHotspot && (
              <div className="lux-hotspot-popup">
                <div className="lux-hotspot-popup-header">
                  <span className="lux-hotspot-popup-title lux-text-gold">{activeHotspot.title}</span>
                  <button
                    className="lux-hotspot-close"
                    onClick={() => setActiveHotspot(null)}
                  >
                    ×
                  </button>
                </div>
                <p className="lux-hotspot-popup-desc lux-text-silver">{activeHotspot.detail}</p>
              </div>
            )}
            <div className="lux-hotspot-hint">
              <span className="lux-hint-icon">✦</span> Click hotspots on timepiece to inspect craftsmanship
            </div>
          </div>

          {/* Technical Specs & Provenance Dossier */}
          <div className="lux-watch-dossier">
            <div className="lux-tab-nav">
              <button
                className={`lux-tab-btn ${activeSpecTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('specs')}
              >
                Horological Specs
              </button>
              <button
                className={`lux-tab-btn ${activeSpecTab === 'dial' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('dial')}
              >
                Fresco Artwork
              </button>
              <button
                className={`lux-tab-btn ${activeSpecTab === 'gems' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('gems')}
              >
                Ceylon Gemstones
              </button>
              <button
                className={`lux-tab-btn ${activeSpecTab === 'provenance' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('provenance')}
              >
                Provenance Box
              </button>
            </div>

            <div className="lux-tab-content">
              {activeSpecTab === 'specs' && (
                <div className="lux-specs-grid">
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Calibre</span>
                    <span className="lux-spec-val lux-text-gold">IDR-01 Tourbillon</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Escapement</span>
                    <span className="lux-spec-val lux-text-silver">60-Second Flying Tourbillon</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Case Diameter</span>
                    <span className="lux-spec-val lux-text-silver">41.0 mm × 12.8 mm</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Power Reserve</span>
                    <span className="lux-spec-val lux-text-gold">72 Hours (Manual Wind)</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Frequency</span>
                    <span className="lux-spec-val lux-text-silver">28,800 VPH (4 Hz)</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Water Resistance</span>
                    <span className="lux-spec-val lux-text-silver">50 Metres (5 ATM)</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Crystal</span>
                    <span className="lux-spec-val lux-text-silver">Anti-Reflective Sapphire</span>
                  </div>
                  <div className="lux-spec-item">
                    <span className="lux-spec-label">Limitation</span>
                    <span className="lux-spec-val lux-text-gold">Strictly 8 Pieces Globally</span>
                  </div>
                </div>
              )}

              {activeSpecTab === 'dial' && (
                <div className="lux-tab-narrative">
                  <h4 className="lux-narrative-title lux-text-gold">Hand-Chiseled 24K Sigiriya Frescoes</h4>
                  <p className="lux-narrative-text">
                    The dial pays homage to the legendary 5th-century cloud maidens and King Kashyapa. Each dial requires over 95 hours of microscopic hand-engraving by master artisans under 40x stereoscopic magnification.
                  </p>
                  <ul className="lux-narrative-bullets">
                    <li><strong className="lux-text-gold">Material:</strong> Solid 24-Karat Yellow Gold plate</li>
                    <li><strong className="lux-text-silver">Technique:</strong> Ancient bas-relief chiseling & grand feu micro-patina</li>
                    <li><strong className="lux-text-silver">Hands:</strong> Hand-polished skeletonized gold alpha hands</li>
                  </ul>
                </div>
              )}

              {activeSpecTab === 'gems' && (
                <div className="lux-tab-narrative">
                  <h4 className="lux-narrative-title lux-text-gold">Natural Unheated Ceylon Rainbow Gems</h4>
                  <p className="lux-narrative-text">
                    Extracted from the fabled riverbeds of Ratnapura (The City of Gems), each stone undergoes rigorous microscopic color-matching to form an unbroken rainbow gradient.
                  </p>
                  <ul className="lux-narrative-bullets">
                    <li><strong className="lux-text-gold">Bezel:</strong> 36 baguette-cut Ceylon sapphires, rubies & emeralds (~4.20 carats)</li>
                    <li><strong className="lux-text-silver">Bracelet Links:</strong> 16 invisibly set princess-cut gemstone accents</li>
                    <li><strong className="lux-text-silver">Origin:</strong> 100% ethically sourced, certified unheated Sri Lankan gems</li>
                  </ul>
                </div>
              )}

              {activeSpecTab === 'provenance' && (
                <div className="lux-tab-narrative">
                  <h4 className="lux-narrative-title lux-text-gold">Royal Coffret & Lifetime Provenance</h4>
                  <p className="lux-narrative-text">
                    Presented in a solid Ceylon ebony and blackened burl wood chest lined with hand-spun raw silk, accompanied by an engraved 18K gold certificate of authenticity and numbered seal.
                  </p>
                  <ul className="lux-narrative-bullets">
                    <li><strong className="lux-text-gold">Warranty:</strong> 10-Year Haute Horlogerie Atelier Guarantee</li>
                    <li><strong className="lux-text-silver">Concierge:</strong> Complimentary biannual Swiss chronometer service</li>
                    <li><strong className="lux-text-silver">Delivery:</strong> Personally escorted by private white-glove security</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Direct Allocation CTA */}
            <div className="lux-dossier-actions">
              <div className="lux-price-label">
                <span className="lux-price-tag">PRICE UPON APPLICATION</span>
                <span className="lux-tax-tag">ALLOCATION BY PRIVATE SELECTION</span>
              </div>
              <Button
                variant="gold"
                size="lg"
                onClick={() => onOpenInquiry('The King Kashyapa Edition')}
              >
                Request Private Allocation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPERIAL COLLECTIONS SHOWCASE */}
      <section className="lux-section lux-collections-section" id="collections">
        <div className="lux-section-header" id="masterpieces">
          <span className="lux-section-overline lux-text-silver">THE IMPERIAL REPERTORY</span>
          <h2 className="lux-section-title">
            <span className="lux-text-gold">HAUTE HORLOGERIE</span> <span className="lux-text-silver">COLLECTIONS</span>
          </h2>
          <div className="lux-gold-divider">
            <span className="lux-divider-diamond">◆</span>
          </div>
          <p className="lux-section-desc">
            Each timepiece from Maison IDR embodies rare gemological heritage paired with Swiss grand complications.
          </p>
        </div>

        <div className="lux-collections-grid">
          {collectionTimepieces.map((watch) => (
            <div key={watch.id} className="lux-watch-card">
              <div className="lux-card-top-bar">
                <span className="lux-card-tag lux-text-gold">{watch.tag}</span>
                <span className="lux-card-badge">{watch.badge}</span>
              </div>

              <div className="lux-card-media-wrapper">
                <img
                  src={watch.image}
                  alt={watch.title}
                  className="lux-card-img"
                  loading="lazy"
                />
                <div className="lux-card-shine"></div>
              </div>

              <div className="lux-card-body">
                <h3 className="lux-card-title lux-text-gold">{watch.title}</h3>
                <p className="lux-card-desc">{watch.description}</p>

                <div className="lux-card-specs">
                  <div className="lux-card-spec-row">
                    <span className="lux-card-spec-k">Calibre:</span>
                    <span className="lux-card-spec-v">{watch.movement}</span>
                  </div>
                  <div className="lux-card-spec-row">
                    <span className="lux-card-spec-k">Composition:</span>
                    <span className="lux-card-spec-v">{watch.material}</span>
                  </div>
                  <div className="lux-card-spec-row">
                    <span className="lux-card-spec-k">Gemstones:</span>
                    <span className="lux-card-spec-v">{watch.gems}</span>
                  </div>
                </div>

                <div className="lux-card-footer">
                  <Button
                    variant="gold-outline"
                    size="sm"
                    onClick={() => onOpenInquiry(watch.title)}
                    style={{ width: '100%' }}
                  >
                    Acquire Dossier & Inquiry
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ROYAL HERITAGE & CRAFTSMANSHIP */}
      <section className="lux-section lux-heritage-section" id="heritage">
        <div className="lux-heritage-bg-blend"></div>
        <div className="lux-heritage-container">
          <div className="lux-heritage-content">
            <span className="lux-section-overline lux-text-gold">THE ANCIENT CITADEL IN THE SKY</span>
            <h2 className="lux-heritage-title">
              <span className="lux-text-silver">THE LEGEND OF</span>{' '}
              <span className="lux-text-gold">SIGIRIYA & KING KASHYAPA</span>
            </h2>

            <blockquote className="lux-heritage-quote">
              “To behold King Kashyapa is to touch the sovereign sky of 477 AD — where hydraulic celestial gardens, golden frescoes, and earth-born Ceylon sapphires immortalize Sri Lankan majesty.”
            </blockquote>

            <div className="lux-heritage-pillars">
              <div className="lux-pillar-card">
                <div className="lux-pillar-icon lux-text-gold">Ⅰ</div>
                <h4 className="lux-pillar-title lux-text-gold">2,500-Year Ceylon Gem Heritage</h4>
                <p className="lux-pillar-desc">
                  Sri Lanka, known anciently as <em>Ratna Dweepa</em> (Isle of Gems), has adorned royal crowns from Solomon to European monarchs. IDR selects only unheated, royal-grade stones.
                </p>
              </div>

              <div className="lux-pillar-card">
                <div className="lux-pillar-icon lux-text-gold">Ⅱ</div>
                <h4 className="lux-pillar-title lux-text-gold">The Sky Fortress Architecture</h4>
                <p className="lux-pillar-desc">
                  Rising 200 meters into the clouds, Sigiriya was King Kashyapa’s palace of granite, mirrors, and lions. Our watch cases replicate this monumental strength and proportion.
                </p>
              </div>

              <div className="lux-pillar-card">
                <div className="lux-pillar-icon lux-text-gold">Ⅲ</div>
                <h4 className="lux-pillar-title lux-text-gold">Swiss Flying Tourbillon Rigor</h4>
                <p className="lux-pillar-desc">
                  Each tourbillon movement is regulated over 15 days in six positions and three temperatures, fulfilling the strict accuracy standards of Geneva Haute Horlogerie.
                </p>
              </div>
            </div>
          </div>

          <div className="lux-heritage-visual">
            <div className="lux-heritage-img-card">
              <img
                src="/sigiriya.jpg"
                alt="Sigiriya Rock Fortress"
                className="lux-heritage-img"
              />
              <div className="lux-heritage-img-overlay">
                <span className="lux-heritage-caption lux-text-gold">SIGIRIYA UNESCO WORLD HERITAGE SITE</span>
                <span className="lux-heritage-subcaption lux-text-silver">Inspiration for the King Kashyapa Horological Series</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESPOKE ATELIER / PRIVATE SALON INVITATION */}
      <section className="lux-section lux-atelier-banner" id="atelier">
        <div className="lux-atelier-inner">
          <span className="lux-section-overline lux-text-silver">BY INVITATION ONLY</span>
          <h2 className="lux-atelier-heading">
            <span className="lux-text-silver">BESPOKE</span> <span className="lux-text-gold">PRIVATE COMMISSIONS</span>
          </h2>
          <p className="lux-atelier-sub">
            Maison IDR creates strictly bespoke, one-of-a-kind numbered timepieces upon private request for international collectors, royal patrons, and horological connoisseurs.
          </p>
          <div className="lux-atelier-ctas">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onOpenInquiry('Bespoke Atelier Commission')}
            >
              Arrange Private Salon Viewing
            </Button>
          </div>
          <div className="lux-atelier-cities">
            <span>GENEVA</span> • <span>COLOMBO</span> • <span>LONDON</span> • <span>DUBAI</span> • <span>ZÜRICH</span>
          </div>
        </div>
      </section>

      {/* 6. VIP CONCIERGE MODAL */}
      {inquiryModalOpen && (
        <div className="lux-modal-backdrop" onClick={closeInquiry}>
          <div className="lux-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="lux-modal-close-btn" onClick={closeInquiry} aria-label="Close modal">
              ×
            </button>

            <div className="lux-modal-header">
              <span className="lux-modal-tag lux-text-silver">CONFIDENTIAL HAUTE HORLOGERIE INQUIRY</span>
              <h3 className="lux-modal-title lux-text-gold">{selectedTimepiece}</h3>
              <p className="lux-modal-desc lux-text-silver">
                Your dossier will be reviewed confidentially by our Private Client Director in Geneva or Colombo.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="lux-modal-success">
                <div className="lux-success-gold-emblem">✦</div>
                <h4 className="lux-text-gold">Inquiry Received with Distinction</h4>
                <p className="lux-text-silver">
                  Reference: <strong>{referenceId}</strong>
                </p>
                <p className="lux-text-silver" style={{ fontSize: '14px', marginTop: '12px' }}>
                  Our Private Concierge will reach out directly within 24 hours to coordinate your viewing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="lux-modal-form">
                <div className="lux-form-row">
                  <div className="lux-form-field">
                    <label className="lux-field-label">Patron Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord / Ambassador / Mr. Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="lux-input-silver"
                    />
                  </div>
                  <div className="lux-form-field">
                    <label className="lux-field-label">Private Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="collector@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="lux-input-silver"
                    />
                  </div>
                </div>

                <div className="lux-form-row">
                  <div className="lux-form-field">
                    <label className="lux-field-label">Direct Contact Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 or +41 / +44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="lux-input-silver"
                    />
                  </div>
                  <div className="lux-form-field">
                    <label className="lux-field-label">Preferred Viewing Location</label>
                    <select
                      value={formData.salon}
                      onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
                      className="lux-select-silver"
                    >
                      <option value="Geneva Salon Privé">Geneva Salon Privé (Switzerland)</option>
                      <option value="Colombo Presidential Suite">Colombo Atelier (Sri Lanka)</option>
                      <option value="London Mayfair Suite">London Mayfair Suite (UK)</option>
                      <option value="Dubai DIFC Salon">Dubai DIFC Salon (UAE)</option>
                      <option value="Private Residence Dispatch">Private Residence White-Glove Dispatch</option>
                    </select>
                  </div>
                </div>

                <div className="lux-form-field">
                  <label className="lux-field-label">Special Requests / Gemstone Preferences</label>
                  <textarea
                    rows="3"
                    placeholder="Specific sapphire color preference, personalized caseback engraving, or delivery timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="lux-textarea-silver"
                  ></textarea>
                </div>

                <div className="lux-modal-actions">
                  <Button type="submit" variant="gold" size="lg" style={{ width: '100%' }}>
                    Transmit Confidential Request
                  </Button>
                  <span className="lux-privacy-pledge">
                    🔒 Strict Swiss client confidentiality protocol maintained.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
