import { ChairIcon, HeartIcon, WaIcon } from './Icons.jsx';
import { waLink } from '../lib/whatsapp.js';

const VISIT = 'Hi Furniture8home, I am visiting your website and would like to enquire about your furniture collection.';

export default function Header({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onFilter,
  wishlistCount,
  onOpenWishlist,
  onToggleTheme,
}) {
  return (
    <header>
      <div className="top-bar">
        <span>Maligaon · AT Road, opposite The GYM</span>
        <span>•</span>
        <span>Boragaon · Paschim Boragaon, opposite GYM Central</span>
        <span>•</span>
        <a href={waLink('Hi Furniture8home, I would like to enquire about your furniture.')} target="_blank" rel="noopener noreferrer" className="phone-link">
          WhatsApp 60025 84075
        </a>
      </div>
      <div className="nav wrap">
        <a href="#hero" className="logo" onClick={onCloseMenu}>
          <div className="logo-icon"><ChairIcon /></div>
          <div>
            <div className="logo-text">Furniture<span className="num">8</span>home</div>
            <div className="logo-sub">Maligaon · Boragaon · Guwahati</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('all'); }}>Collection</a>
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Sectionals'); }}>L-Sectionals</a>
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Wooden Sofas'); }}>Wooden Sofas</a>
          <a href="#bespoke" onClick={onCloseMenu}>Custom Sizes</a>
          <a href="#showrooms">Showrooms</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn menu-toggle" title="Open menu" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobileNav" onClick={onToggleMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
          </button>
          <button className="icon-btn" title="Toggle dark/light mode" aria-label="Toggle theme" onClick={onToggleTheme}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
          </button>
          <button className="icon-btn" title="View saved pieces" aria-label="Wishlist" onClick={onOpenWishlist}>
            <HeartIcon size={18} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </button>
          <a className="btn-wa-header" href={waLink(VISIT)} target="_blank" rel="noopener noreferrer">
            <WaIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobileNav">
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('all'); }}>All pieces</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Sectionals'); }}>L-sectionals</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Wooden Sofas'); }}>Wooden sofas</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Accent'); }}>Accent chairs</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Dining'); }}>Dining chairs</a>
        <a href="#bespoke" onClick={onCloseMenu}>Custom sizes</a>
        <a href="#showrooms" onClick={onCloseMenu}>Showrooms</a>
        <a href={waLink('Hi Furniture8home, I would like to enquire about your furniture.')} target="_blank" rel="noopener noreferrer">WhatsApp 60025 84075</a>
      </nav>
    </header>
  );
}
