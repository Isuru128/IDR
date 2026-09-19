import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';

const Admin = ({ onExitToStorefront }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isAddPieceModalOpen, setIsAddPieceModalOpen] = useState(false);
  const [selectedAllocation, setSelectedAllocation] = useState(null);

  // Clocks for luxury horological capitals
  const [currentTime, setCurrentTime] = useState({
    geneva: '',
    colombo: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime({
        geneva: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        colombo: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      });
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initial Masterpieces Data
  const [timepieces, setTimepieces] = useState([
    {
      id: 'kashyapa-01',
      name: 'The King Kashyapa Edition',
      category: 'Grand Complication',
      calibre: 'IDR-01 Flying Tourbillon',
      caseMaterial: 'Platinum 904L & 24K Hand-Chiseled Gold',
      gemstones: '36 Natural Ceylon Rainbow Baguettes',
      limitation: 'Strictly 8 Pieces',
      valuation: '$485,000',
      status: 'Allocation Active (5/8 Reserved)',
      image: '/king-kashyapa.jpg',
    },
    {
      id: 'fortress-02',
      name: 'The Fortress Celestial Edition',
      category: 'Haute Horlogerie',
      calibre: 'IDR-02 Automatic Openworked',
      caseMaterial: 'Blackened Titanium & Satin Silver',
      gemstones: 'Natural Ceylon Star Sapphire Cabochon',
      limitation: 'Limited to 12 Pieces',
      valuation: '$240,000',
      status: 'In Stock (4 Pieces Available)',
      image: '/fortress-edition.jpg',
    },
    {
      id: 'fresco-03',
      name: 'The Fresco Royal Guilloché',
      category: 'Métiers d’Art',
      calibre: 'IDR-03 Ultra-Thin Micro-Rotor',
      caseMaterial: 'Brushed Platinum & Yellow Gold',
      gemstones: 'Imperial Royal Blue Ceylon Sapphires',
      limitation: 'Limited to 18 Pieces',
      valuation: '$195,000',
      status: 'In Stock (6 Pieces Available)',
      image: '/fresco-edition.jpg',
    },
    {
      id: 'sigiriya-04',
      name: 'The Sigiriya Monolith Heritage',
      category: 'Historic Atelier',
      calibre: 'IDR-04 Perpetual Calendar',
      caseMaterial: 'Damascus Steel & 18K Yellow Gold Core',
      gemstones: 'Padparadscha Sapphire Crown Inlay',
      limitation: 'Limited to 5 Pieces',
      valuation: '$380,000',
      status: 'Museum Allocation (1 Reserved)',
      image: '/sigiriya.jpg',
    },
  ]);

  // Initial VIP Inquiries Data
  const [inquiries, setInquiries] = useState([
    {
      id: 'IDR-982410',
      patron: 'Lord Alistair Sterling',
      email: 'a.sterling@mayfair-holdings.co.uk',
      phone: '+44 20 7946 0912',
      salon: 'London Mayfair Suite',
      timepiece: 'The King Kashyapa Edition',
      notes: 'Desires inspection of the Ceylon rainbow sapphire gradation under natural light. Requesting piece #4 of 8.',
      status: 'Viewing Scheduled',
      date: '2026-08-28',
    },
    {
      id: 'IDR-741932',
      patron: 'His Excellency Tariq Al-Mansoor',
      email: 'tariq@almansoor-dynasty.ae',
      phone: '+971 4 812 4490',
      salon: 'Dubai DIFC Salon',
      timepiece: 'The King Kashyapa Edition',
      notes: 'Special request for personalized Arabic royal calligraphy caseback engraving with diamond-set crown.',
      status: 'Under Review',
      date: '2026-08-28',
    },
    {
      id: 'IDR-612089',
      patron: 'Dharmasena Senanayake, Esq.',
      email: 'dsenanayake@colombo-capital.lk',
      phone: '+94 77 123 4567',
      salon: 'Colombo Presidential Suite',
      timepiece: 'The Fortress Celestial Edition',
      notes: 'Interested in acquiring Fortress #03 with custom untreated blue star sapphire cabochon.',
      status: 'New',
      date: '2026-08-27',
    },
    {
      id: 'IDR-548102',
      patron: 'Madame Éléonore de Montmirail',
      email: 'eleonore@montmirail-patrimoine.ch',
      phone: '+41 22 819 3300',
      salon: 'Geneva Salon Privé',
      timepiece: 'The Fresco Royal Guilloché',
      notes: 'Private salon viewing scheduled alongside husband. Interested in pair allocation with King Kashyapa.',
      status: 'Viewing Scheduled',
      date: '2026-08-26',
    },
  ]);

  // King Kashyapa Allocations (1 to 8)
  const [allocations, _setAllocations] = useState([
    { number: '01 / 08', patron: 'Royal House of Monaco Patronage', status: 'Delivered', serial: 'IDR-KK-01-ROYAL', salon: 'Geneva Salon Privé' },
    { number: '02 / 08', patron: 'Baron Heinrich von Keller', status: 'Allocated & Paid', serial: 'IDR-KK-02-CHRONO', salon: 'Zürich Vault' },
    { number: '03 / 08', patron: 'Private Colombo Connoisseur', status: 'Allocated & Paid', serial: 'IDR-KK-03-CEYLON', salon: 'Colombo Atelier' },
    { number: '04 / 08', patron: 'Lord Alistair Sterling', status: 'Under Private Viewing', serial: 'IDR-KK-04-MAYFAIR', salon: 'London Mayfair' },
    { number: '05 / 08', patron: 'H.E. Tariq Al-Mansoor', status: 'Negotiation', serial: 'IDR-KK-05-EMIRATES', salon: 'Dubai DIFC' },
    { number: '06 / 08', patron: 'Unallocated', status: 'Available', serial: 'IDR-KK-06-UNASSIGNED', salon: 'Geneva Master Vault' },
    { number: '07 / 08', patron: 'Unallocated', status: 'Available', serial: 'IDR-KK-07-UNASSIGNED', salon: 'Geneva Master Vault' },
    { number: '08 / 08', patron: 'Maison IDR Museum Archive', status: 'Reserved - Archive', serial: 'IDR-KK-08-HERITAGE', salon: 'Colombo Flagship' },
  ]);

  // Form state for adding new masterpiece
  const [newPiece, setNewPiece] = useState({
    name: '',
    category: 'Grand Complication',
    calibre: '',
    caseMaterial: '',
    gemstones: '',
    limitation: '',
    valuation: '',
    image: '/king-kashyapa.jpg',
  });

  const handleAddPieceSubmit = (e) => {
    e.preventDefault();
    if (!newPiece.name) return;
    const added = {
      id: `piece-${Date.now()}`,
      ...newPiece,
      status: 'In Atelier Assembly',
    };
    setTimepieces([added, ...timepieces]);
    setIsAddPieceModalOpen(false);
    setNewPiece({
      name: '',
      category: 'Grand Complication',
      calibre: '',
      caseMaterial: '',
      gemstones: '',
      limitation: '',
      valuation: '',
      image: '/king-kashyapa.jpg',
    });
  };

  const updateInquiryStatus = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  return (
    <div className="lux-admin-portal">
      {/* 1. ADMIN SIDEBAR */}
      <aside className="lux-admin-sidebar">
        <div className="lux-admin-brand">
          <div className="lux-admin-logo-box">
            <img src="/logo.svg" alt="IDR Logo" className="lux-admin-logo" onError={(e) => { e.target.src = '/logo.png'; }} />
          </div>
          <div className="lux-admin-brand-info">
            <span className="lux-admin-brand-title">IDR MAISON</span>
            <span className="lux-admin-brand-badge">ATELIER VAULT & ADMIN</span>
          </div>
        </div>

        <div className="lux-admin-nav-group">
          <span className="lux-admin-nav-header">MAISON MANAGEMENT</span>
          <nav className="lux-admin-nav">
            <button
              className={`lux-admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="lux-nav-icon">❖</span>
              <span className="lux-nav-title">Atelier Dashboard</span>
            </button>
            <button
              className={`lux-admin-nav-item ${activeTab === 'timepieces' ? 'active' : ''}`}
              onClick={() => setActiveTab('timepieces')}
            >
              <span className="lux-nav-icon">⌚</span>
              <span className="lux-nav-title">Masterpiece Catalog</span>
              <span className="lux-nav-count">{timepieces.length}</span>
            </button>
            <button
              className={`lux-admin-nav-item ${activeTab === 'inquiries' ? 'active' : ''}`}
              onClick={() => setActiveTab('inquiries')}
            >
              <span className="lux-nav-icon">✉</span>
              <span className="lux-nav-title">VIP Concierge Inquiries</span>
              <span className="lux-nav-count lux-count-gold">{inquiries.length}</span>
            </button>
            <button
              className={`lux-admin-nav-item ${activeTab === 'allocations' ? 'active' : ''}`}
              onClick={() => setActiveTab('allocations')}
            >
              <span className="lux-nav-icon">👑</span>
              <span className="lux-nav-title">King Kashyapa 1 of 8</span>
              <span className="lux-nav-pill">5/8</span>
            </button>
            <button
              className={`lux-admin-nav-item ${activeTab === 'salons' ? 'active' : ''}`}
              onClick={() => setActiveTab('salons')}
            >
              <span className="lux-nav-icon">🏛</span>
              <span className="lux-nav-title">Private Salons</span>
            </button>
          </nav>
        </div>

        {/* Clocks Section */}
        <div className="lux-admin-clocks">
          <div className="lux-clock-item">
            <span className="lux-clock-city lux-text-silver">GENÈVE (CH)</span>
            <span className="lux-clock-time lux-text-gold">{currentTime.geneva || '12:00:00'}</span>
          </div>
          <div className="lux-clock-divider"></div>
          <div className="lux-clock-item">
            <span className="lux-clock-city lux-text-silver">COLOMBO (LK)</span>
            <span className="lux-clock-time lux-text-gold">{currentTime.colombo || '16:30:00'}</span>
          </div>
        </div>

        {/* Return to Client Storefront */}
        <div className="lux-admin-sidebar-footer">
          <Button
            variant="gold-outline"
            size="sm"
            onClick={onExitToStorefront}
            style={{ width: '100%' }}
          >
            ← View Client Storefront
          </Button>
        </div>
      </aside>

      {/* 2. ADMIN MAIN CONTENT WRAPPER */}
      <div className="lux-admin-main-wrap">
        {/* Top Header Bar */}
        <header className="lux-admin-topbar">
          <div className="lux-admin-topbar-left">
            <span className="lux-admin-breadcrumb-root lux-text-silver">MAISON ATELIER</span>
            <span className="lux-admin-breadcrumb-sep">/</span>
            <h1 className="lux-admin-page-title lux-text-gold">
              {activeTab === 'dashboard' && 'VAULT DASHBOARD & INTELLIGENCE'}
              {activeTab === 'timepieces' && 'HAUTE HORLOGERIE MASTERPIECE INVENTORY'}
              {activeTab === 'inquiries' && 'VIP CONCIERGE & CLIENT DOSSIERS'}
              {activeTab === 'allocations' && 'THE KING KASHYAPA ALLOCATION MATRIX'}
              {activeTab === 'salons' && 'PRIVATE SALON PRIVÉ SCHEDULE'}
            </h1>
          </div>

          <div className="lux-admin-topbar-actions">
            <div className="lux-admin-search-box">
              <span className="lux-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search calibre, patron, serial..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="lux-admin-search-input"
              />
            </div>

            <Button
              variant="gold"
              size="sm"
              onClick={() => setIsAddPieceModalOpen(true)}
            >
              + Register Timepiece
            </Button>

            <div className="lux-admin-profile">
              <div className="lux-profile-avatar">IH</div>
              <div className="lux-profile-info">
                <span className="lux-profile-name lux-text-silver">Isuru Dulanjaya</span>
                <span className="lux-profile-role lux-text-gold">Grand Directeur Horloger</span>
              </div>
            </div>
          </div>
        </header>

        {/* TAB 1: DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="lux-admin-content">
            {/* Metric Summary Cards */}
            <div className="lux-admin-metrics-row">
              <div className="lux-admin-stat-card">
                <div className="lux-stat-icon-wrap">✦</div>
                <div className="lux-stat-info">
                  <span className="lux-stat-label lux-text-silver">ESTIMATED VAULT VALUATION</span>
                  <span className="lux-stat-val lux-text-gold">$14,850,000</span>
                  <span className="lux-stat-sub lux-text-silver">Active inventory & bespoke allocations</span>
                </div>
              </div>

              <div className="lux-admin-stat-card">
                <div className="lux-stat-icon-wrap">⌚</div>
                <div className="lux-stat-info">
                  <span className="lux-stat-label lux-text-silver">ACTIVE TIMEPIECES</span>
                  <span className="lux-stat-val lux-text-silver">{timepieces.length} Masterpieces</span>
                  <span className="lux-stat-sub lux-text-gold">4 Grand Complications Active</span>
                </div>
              </div>

              <div className="lux-admin-stat-card">
                <div className="lux-stat-icon-wrap">✉</div>
                <div className="lux-stat-info">
                  <span className="lux-stat-label lux-text-silver">VIP INQUIRIES AWAITING</span>
                  <span className="lux-stat-val lux-text-gold">{inquiries.filter(i => i.status === 'New' || i.status === 'Under Review').length} Patrons</span>
                  <span className="lux-stat-sub lux-text-silver">Geneva, London, Dubai & Colombo</span>
                </div>
              </div>

              <div className="lux-admin-stat-card">
                <div className="lux-stat-icon-wrap">👑</div>
                <div className="lux-stat-info">
                  <span className="lux-stat-label lux-text-silver">KING KASHYAPA ALLOCATIONS</span>
                  <span className="lux-stat-val lux-text-gold">5 OF 8 PIECES</span>
                  <span className="lux-stat-sub lux-text-silver">Only 3 Allocations Remaining</span>
                </div>
              </div>
            </div>

            {/* Quick Overview Split Grid */}
            <div className="lux-admin-dashboard-split">
              {/* Recent Inquiries Table */}
              <div className="lux-admin-panel">
                <div className="lux-panel-header">
                  <div>
                    <h3 className="lux-panel-title lux-text-gold">Recent VIP Client Dossiers</h3>
                    <p className="lux-panel-desc lux-text-silver">Direct confidential requests received via the storefront</p>
                  </div>
                  <Button
                    variant="silver-outline"
                    size="sm"
                    onClick={() => setActiveTab('inquiries')}
                  >
                    View All Dossiers
                  </Button>
                </div>

                <div className="lux-admin-table-wrap">
                  <table className="lux-admin-table">
                    <thead>
                      <tr>
                        <th>REFERENCE</th>
                        <th>PATRON</th>
                        <th>TIMEPIECE</th>
                        <th>SALON</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.slice(0, 4).map((inq) => (
                        <tr key={inq.id}>
                          <td className="lux-td-code lux-text-gold">{inq.id}</td>
                          <td className="lux-td-patron">
                            <span className="lux-patron-name">{inq.patron}</span>
                            <span className="lux-patron-email">{inq.email}</span>
                          </td>
                          <td className="lux-td-piece lux-text-silver">{inq.timepiece}</td>
                          <td><span className="lux-salon-tag">{inq.salon}</span></td>
                          <td>
                            <span className={`lux-status-pill ${inq.status.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                              {inq.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="lux-table-action-btn"
                              onClick={() => setSelectedInquiry(inq)}
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* King Kashyapa Allocation Mini Showcase */}
              <div className="lux-admin-panel">
                <div className="lux-panel-header">
                  <div>
                    <h3 className="lux-panel-title lux-text-gold">King Kashyapa Vault Status</h3>
                    <p className="lux-panel-desc lux-text-silver">Flagship 1 of 8 Tourbillon allocation matrix</p>
                  </div>
                  <Button
                    variant="silver-outline"
                    size="sm"
                    onClick={() => setActiveTab('allocations')}
                  >
                    Manage Allocations
                  </Button>
                </div>

                <div className="lux-kashyapa-mini-preview">
                  <div className="lux-mini-image-box">
                    <img src="/king-kashyapa.jpg" alt="King Kashyapa Watch" className="lux-mini-watch-img" />
                    <div className="lux-mini-badge">ROYAL TOURBILLON</div>
                  </div>

                  <div className="lux-mini-allocations-list">
                    {allocations.slice(0, 5).map((item) => (
                      <div key={item.number} className="lux-mini-alloc-row">
                        <span className="lux-alloc-num lux-text-gold">{item.number}</span>
                        <div className="lux-alloc-details">
                          <span className="lux-alloc-patron">{item.patron}</span>
                          <span className="lux-alloc-serial lux-text-silver">{item.serial}</span>
                        </div>
                        <span className={`lux-alloc-status ${item.status.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TIMEPIECES CATALOG */}
        {activeTab === 'timepieces' && (
          <div className="lux-admin-content">
            <div className="lux-admin-panel">
              <div className="lux-panel-header">
                <div>
                  <h3 className="lux-panel-title lux-text-gold">Haute Horlogerie Inventory</h3>
                  <p className="lux-panel-desc lux-text-silver">Registered timepieces with technical movements, gemstone compositions, and valuations</p>
                </div>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => setIsAddPieceModalOpen(true)}
                >
                  + Commission New Timepiece
                </Button>
              </div>

              <div className="lux-admin-table-wrap">
                <table className="lux-admin-table">
                  <thead>
                    <tr>
                      <th>TIMEPIECE</th>
                      <th>CATEGORY</th>
                      <th>CALIBRE & MOVEMENT</th>
                      <th>GEMSTONES</th>
                      <th>LIMITATION</th>
                      <th>VALUATION</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timepieces
                      .filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.calibre.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((t) => (
                        <tr key={t.id}>
                          <td className="lux-td-watch">
                            <div className="lux-table-thumb">
                              <img src={t.image} alt={t.name} />
                            </div>
                            <div className="lux-table-watch-info">
                              <span className="lux-watch-table-name lux-text-gold">{t.name}</span>
                              <span className="lux-watch-table-mat lux-text-silver">{t.caseMaterial}</span>
                            </div>
                          </td>
                          <td><span className="lux-category-badge">{t.category}</span></td>
                          <td className="lux-text-silver">{t.calibre}</td>
                          <td className="lux-text-silver">{t.gemstones}</td>
                          <td><span className="lux-limitation-badge">{t.limitation}</span></td>
                          <td className="lux-td-price lux-text-gold">{t.valuation}</td>
                          <td>
                            <span className="lux-stock-status-pill">{t.status}</span>
                          </td>
                          <td>
                            <button
                              className="lux-table-action-btn"
                              onClick={() => alert(`Editing specifications for ${t.name}`)}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VIP INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="lux-admin-content">
            <div className="lux-admin-panel">
              <div className="lux-panel-header">
                <div>
                  <h3 className="lux-panel-title lux-text-gold">Private Concierge Dossiers</h3>
                  <p className="lux-panel-desc lux-text-silver">Inquiries and requests for private salon viewings submitted by global collectors</p>
                </div>
                <div className="lux-inquiry-stat-tags">
                  <span className="lux-tag-gold">Total: {inquiries.length}</span>
                  <span className="lux-tag-silver">Pending Action: {inquiries.filter(i => i.status !== 'Completed').length}</span>
                </div>
              </div>

              <div className="lux-admin-table-wrap">
                <table className="lux-admin-table">
                  <thead>
                    <tr>
                      <th>DOSSIER REF</th>
                      <th>PATRON & CONTACT</th>
                      <th>TIMEPIECE REQUESTED</th>
                      <th>PREFERRED SALON</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th>MANAGEMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries
                      .filter(i => i.patron.toLowerCase().includes(searchQuery.toLowerCase()) || i.id.toLowerCase().includes(searchQuery.toLowerCase()) || i.timepiece.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((inq) => (
                        <tr key={inq.id}>
                          <td className="lux-td-code lux-text-gold">{inq.id}</td>
                          <td className="lux-td-patron">
                            <span className="lux-patron-name">{inq.patron}</span>
                            <span className="lux-patron-email">{inq.email}</span>
                            <span className="lux-patron-phone lux-text-silver">{inq.phone}</span>
                          </td>
                          <td className="lux-td-piece lux-text-gold">{inq.timepiece}</td>
                          <td><span className="lux-salon-tag">{inq.salon}</span></td>
                          <td className="lux-text-silver">{inq.date}</td>
                          <td>
                            <select
                              value={inq.status}
                              onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                              className="lux-status-select"
                            >
                              <option value="New">New</option>
                              <option value="Under Review">Under Review</option>
                              <option value="Viewing Scheduled">Viewing Scheduled</option>
                              <option value="Allocated">Allocated</option>
                              <option value="Completed">Completed</option>
                              <option value="Declined">Declined</option>
                            </select>
                          </td>
                          <td>
                            <button
                              className="lux-table-action-btn"
                              onClick={() => setSelectedInquiry(inq)}
                            >
                              View Full Dossier
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: KING KASHYAPA ALLOCATIONS (1 OF 8) */}
        {activeTab === 'allocations' && (
          <div className="lux-admin-content">
            <div className="lux-admin-panel">
              <div className="lux-panel-header">
                <div>
                  <h3 className="lux-panel-title lux-text-gold">The King Kashyapa Allocation Register</h3>
                  <p className="lux-panel-desc lux-text-silver">Individual serial tracking for the 8 numbered masterpieces worldwide</p>
                </div>
                <div className="lux-allocation-summary-bar">
                  <span className="lux-tag-gold">5 OF 8 RESERVED</span>
                  <span className="lux-tag-silver">3 REMAINING UNASSIGNED</span>
                </div>
              </div>

              <div className="lux-allocations-grid">
                {allocations.map((alloc) => (
                  <div
                    key={alloc.number}
                    className={`lux-allocation-card ${alloc.status === 'Available' ? 'available' : 'allocated'}`}
                    onClick={() => setSelectedAllocation(alloc)}
                  >
                    <div className="lux-alloc-card-top">
                      <span className="lux-alloc-card-num lux-text-gold">{alloc.number}</span>
                      <span className={`lux-alloc-pill ${alloc.status.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        {alloc.status}
                      </span>
                    </div>

                    <div className="lux-alloc-card-center">
                      <span className="lux-alloc-card-label">DESIGNATED PATRON</span>
                      <h4 className="lux-alloc-card-patron lux-text-silver">{alloc.patron}</h4>
                    </div>

                    <div className="lux-alloc-card-bottom">
                      <div className="lux-alloc-spec">
                        <span className="lux-alloc-k">Serial:</span>
                        <span className="lux-alloc-v lux-text-gold">{alloc.serial}</span>
                      </div>
                      <div className="lux-alloc-spec">
                        <span className="lux-alloc-k">Vault:</span>
                        <span className="lux-alloc-v lux-text-silver">{alloc.salon}</span>
                      </div>
                    </div>

                    <div className="lux-alloc-card-action">
                      <button className="lux-alloc-manage-btn">
                        {alloc.status === 'Available' ? '+ Assign to Patron' : 'Update Allocation Dossier'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: PRIVATE SALONS */}
        {activeTab === 'salons' && (
          <div className="lux-admin-content">
            <div className="lux-admin-panel">
              <div className="lux-panel-header">
                <div>
                  <h3 className="lux-panel-title lux-text-gold">Private Salon Privé Network</h3>
                  <p className="lux-panel-desc lux-text-silver">Exclusive viewing suites and presidential atelier locations for VIP client receptions</p>
                </div>
              </div>

              <div className="lux-salons-grid">
                <div className="lux-salon-card">
                  <div className="lux-salon-header">
                    <span className="lux-salon-city lux-text-gold">GENÈVE SALON PRIVÉ</span>
                    <span className="lux-salon-country lux-text-silver">SWITZERLAND</span>
                  </div>
                  <p className="lux-salon-address">Rue du Rhône 42, 1204 Genève</p>
                  <div className="lux-salon-details">
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Active Calibres in Vault:</span>
                      <span className="lux-stat-v lux-text-gold">8 Masterpieces</span>
                    </div>
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Next Private Viewing:</span>
                      <span className="lux-stat-v lux-text-silver">Tomorrow, 14:00 (Mme. de Montmirail)</span>
                    </div>
                  </div>
                </div>

                <div className="lux-salon-card">
                  <div className="lux-salon-header">
                    <span className="lux-salon-city lux-text-gold">COLOMBO PRESIDENTIAL ATELIER</span>
                    <span className="lux-salon-country lux-text-silver">SRI LANKA</span>
                  </div>
                  <p className="lux-salon-address">Galle Face Promenade, Colombo 03</p>
                  <div className="lux-salon-details">
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Active Calibres in Vault:</span>
                      <span className="lux-stat-v lux-text-gold">6 Masterpieces (Gemstone Reserve)</span>
                    </div>
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Next Private Viewing:</span>
                      <span className="lux-stat-v lux-text-silver">Friday, 11:30 (Mr. Senanayake)</span>
                    </div>
                  </div>
                </div>

                <div className="lux-salon-card">
                  <div className="lux-salon-header">
                    <span className="lux-salon-city lux-text-gold">LONDON MAYFAIR SUITE</span>
                    <span className="lux-salon-country lux-text-silver">UNITED KINGDOM</span>
                  </div>
                  <p className="lux-salon-address">Old Bond Street, Mayfair, London W1S</p>
                  <div className="lux-salon-details">
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Active Calibres in Vault:</span>
                      <span className="lux-stat-v lux-text-gold">3 Masterpieces</span>
                    </div>
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Next Private Viewing:</span>
                      <span className="lux-stat-v lux-text-silver">Saturday, 16:00 (Lord Sterling)</span>
                    </div>
                  </div>
                </div>

                <div className="lux-salon-card">
                  <div className="lux-salon-header">
                    <span className="lux-salon-city lux-text-gold">DUBAI DIFC SALON</span>
                    <span className="lux-salon-country lux-text-silver">UNITED ARAB EMIRATES</span>
                  </div>
                  <p className="lux-salon-address">Gate Village Building 05, DIFC, Dubai</p>
                  <div className="lux-salon-details">
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Active Calibres in Vault:</span>
                      <span className="lux-stat-v lux-text-gold">4 Masterpieces</span>
                    </div>
                    <div className="lux-salon-stat">
                      <span className="lux-stat-lbl">Next Private Viewing:</span>
                      <span className="lux-stat-v lux-text-silver">Monday, 19:00 (H.E. Tariq Al-Mansoor)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. MODAL: INSPECT VIP INQUIRY DOSSIER */}
      {selectedInquiry && (
        <div className="lux-modal-backdrop" onClick={() => setSelectedInquiry(null)}>
          <div className="lux-modal-card lux-admin-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lux-modal-close-btn" onClick={() => setSelectedInquiry(null)}>×</button>

            <div className="lux-modal-header">
              <span className="lux-modal-tag lux-text-silver">CONFIDENTIAL PATRON DOSSIER</span>
              <h3 className="lux-modal-title lux-text-gold">{selectedInquiry.patron}</h3>
              <p className="lux-modal-desc lux-text-silver">Reference: {selectedInquiry.id} • Received {selectedInquiry.date}</p>
            </div>

            <div className="lux-dossier-body">
              <div className="lux-dossier-grid">
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Requested Timepiece</span>
                  <span className="lux-dossier-val lux-text-gold">{selectedInquiry.timepiece}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Preferred Salon</span>
                  <span className="lux-dossier-val lux-text-silver">{selectedInquiry.salon}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Patron Direct Email</span>
                  <span className="lux-dossier-val lux-text-silver">{selectedInquiry.email}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Patron Phone / Mobile</span>
                  <span className="lux-dossier-val lux-text-silver">{selectedInquiry.phone}</span>
                </div>
              </div>

              <div className="lux-dossier-notes-box">
                <span className="lux-dossier-label">Patron Request / Gemstone Notes</span>
                <p className="lux-dossier-notes-text lux-text-silver">{selectedInquiry.notes}</p>
              </div>

              <div className="lux-dossier-status-control">
                <label className="lux-dossier-label">Update Dossier Protocol Status</label>
                <div className="lux-status-btn-group">
                  {['New', 'Under Review', 'Viewing Scheduled', 'Allocated', 'Completed'].map((st) => (
                    <button
                      key={st}
                      className={`lux-status-btn ${selectedInquiry.status === st ? 'active' : ''}`}
                      onClick={() => updateInquiryStatus(selectedInquiry.id, st)}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lux-modal-actions" style={{ marginTop: '24px' }}>
              <Button
                variant="gold"
                size="md"
                onClick={() => {
                  alert(`Direct communication link established with ${selectedInquiry.patron}`);
                  setSelectedInquiry(null);
                }}
                style={{ width: '100%' }}
              >
                Initiate Private Diplomatic Protocol
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL: REGISTER NEW TIMEPIECE */}
      {isAddPieceModalOpen && (
        <div className="lux-modal-backdrop" onClick={() => setIsAddPieceModalOpen(false)}>
          <div className="lux-modal-card lux-admin-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lux-modal-close-btn" onClick={() => setIsAddPieceModalOpen(false)}>×</button>

            <div className="lux-modal-header">
              <span className="lux-modal-tag lux-text-silver">HAUTE HORLOGERIE REGISTRY</span>
              <h3 className="lux-modal-title lux-text-gold">Commission New Masterpiece</h3>
              <p className="lux-modal-desc lux-text-silver">Register a new horological creation into the Maison IDR Atelier Vault</p>
            </div>

            <form onSubmit={handleAddPieceSubmit} className="lux-modal-form">
              <div className="lux-form-row">
                <div className="lux-form-field">
                  <label className="lux-field-label">Masterpiece Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Celestial Tourbillon"
                    value={newPiece.name}
                    onChange={(e) => setNewPiece({ ...newPiece, name: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
                <div className="lux-form-field">
                  <label className="lux-field-label">Category</label>
                  <select
                    value={newPiece.category}
                    onChange={(e) => setNewPiece({ ...newPiece, category: e.target.value })}
                    className="lux-select-silver"
                  >
                    <option value="Grand Complication">Grand Complication</option>
                    <option value="Haute Horlogerie">Haute Horlogerie</option>
                    <option value="Métiers d’Art">Métiers d’Art</option>
                    <option value="Historic Atelier">Historic Atelier</option>
                  </select>
                </div>
              </div>

              <div className="lux-form-row">
                <div className="lux-form-field">
                  <label className="lux-field-label">Calibre & Movement</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Calibre IDR-05 Tourbillon"
                    value={newPiece.calibre}
                    onChange={(e) => setNewPiece({ ...newPiece, calibre: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
                <div className="lux-form-field">
                  <label className="lux-field-label">Case Composition</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Platinum 950 & 18K Rose Gold"
                    value={newPiece.caseMaterial}
                    onChange={(e) => setNewPiece({ ...newPiece, caseMaterial: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
              </div>

              <div className="lux-form-row">
                <div className="lux-form-field">
                  <label className="lux-field-label">Rare Gemstones Inlay</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Unheated Ceylon Padparadscha Sapphires"
                    value={newPiece.gemstones}
                    onChange={(e) => setNewPiece({ ...newPiece, gemstones: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
                <div className="lux-form-field">
                  <label className="lux-field-label">Limitation & Numbering</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Unique Piece 1 of 1 or Limited to 8"
                    value={newPiece.limitation}
                    onChange={(e) => setNewPiece({ ...newPiece, limitation: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
              </div>

              <div className="lux-form-row">
                <div className="lux-form-field">
                  <label className="lux-field-label">Valuation / POA</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. $350,000"
                    value={newPiece.valuation}
                    onChange={(e) => setNewPiece({ ...newPiece, valuation: e.target.value })}
                    className="lux-input-silver"
                  />
                </div>
                <div className="lux-form-field">
                  <label className="lux-field-label">Artwork / Image Asset</label>
                  <select
                    value={newPiece.image}
                    onChange={(e) => setNewPiece({ ...newPiece, image: e.target.value })}
                    className="lux-select-silver"
                  >
                    <option value="/king-kashyapa.jpg">The King Kashyapa Edition</option>
                    <option value="/fortress-edition.jpg">The Fortress Edition</option>
                    <option value="/fresco-edition.jpg">The Fresco Edition</option>
                    <option value="/sigiriya.jpg">Sigiriya Heritage</option>
                  </select>
                </div>
              </div>

              <div className="lux-modal-actions" style={{ marginTop: '20px' }}>
                <Button type="submit" variant="gold" size="md" style={{ width: '100%' }}>
                  Seal Creation & Add to Vault Inventory
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL: ALLOCATION INSPECTOR */}
      {selectedAllocation && (
        <div className="lux-modal-backdrop" onClick={() => setSelectedAllocation(null)}>
          <div className="lux-modal-card lux-admin-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lux-modal-close-btn" onClick={() => setSelectedAllocation(null)}>×</button>

            <div className="lux-modal-header">
              <span className="lux-modal-tag lux-text-silver">KING KASHYAPA SOVEREIGN ALLOCATION</span>
              <h3 className="lux-modal-title lux-text-gold">Piece {selectedAllocation.number}</h3>
              <p className="lux-modal-desc lux-text-silver">Serial Reference: {selectedAllocation.serial}</p>
            </div>

            <div className="lux-dossier-body">
              <div className="lux-dossier-grid">
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Current Patron / Custodian</span>
                  <span className="lux-dossier-val lux-text-gold">{selectedAllocation.patron}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Assigned Vault / Salon</span>
                  <span className="lux-dossier-val lux-text-silver">{selectedAllocation.salon}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Current Allocation Status</span>
                  <span className="lux-dossier-val lux-text-gold">{selectedAllocation.status}</span>
                </div>
                <div className="lux-dossier-field">
                  <span className="lux-dossier-label">Chronometer Regulation</span>
                  <span className="lux-dossier-val lux-text-silver">COSC Certified (±1.2 sec/day)</span>
                </div>
              </div>

              <div className="lux-dossier-notes-box">
                <span className="lux-dossier-label">Certificate of Provenance Registry</span>
                <p className="lux-dossier-notes-text lux-text-silver">
                  Each piece of the King Kashyapa Edition is accompanied by an engraved 18K solid gold certificate of provenance and lifetime bespoke servicing directly supervised by the Grand Master Horologist.
                </p>
              </div>
            </div>

            <div className="lux-modal-actions" style={{ marginTop: '24px' }}>
              <Button
                variant="gold"
                size="md"
                onClick={() => setSelectedAllocation(null)}
                style={{ width: '100%' }}
              >
                Save Allocation Dossier
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
