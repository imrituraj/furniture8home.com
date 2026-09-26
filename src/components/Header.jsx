import { ChairIcon, HeartIcon, WaIcon } from './Icons.jsx';
import { waLink } from '../lib/whatsapp.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Header({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onFilter,
  wishlistCount,
  onOpenWishlist,
  onToggleTheme,
}) {
  const { lang, t, toggleLang } = useLang();

  return (
    <header>
      <div className="top-bar">
        <span>{t('topMaligaon')}</span>
        <span>•</span>
        <span>{t('topBoragaon')}</span>
        <span>•</span>
        <a href={waLink(t('waGeneral'))} target="_blank" rel="noopener noreferrer" className="phone-link">
          {t('whatsappNumber')}
        </a>
        <button type="button" className="lang-switch" onClick={toggleLang} aria-label={t('langSwitchLabel')} title={t('langSwitchLabel')}>
          <span className={`lang-mark${lang === 'as' ? ' is-en' : ''}`} aria-hidden="true">{lang === 'en' ? 'অ' : 'EN'}</span>
          <span>{t('langSwitch')}</span>
        </button>
      </div>
      <div className="nav wrap">
        <a href="#hero" className="logo" onClick={onCloseMenu}>
          <div className="logo-icon"><ChairIcon /></div>
          <div>
            <div className="logo-text">Furniture<span className="num">8</span>home</div>
            <div className="logo-sub">{t('logoSub')}</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('all'); }}>{t('navCollection')}</a>
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Sectionals'); }}>{t('navSectionals')}</a>
          <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Wooden Sofas'); }}>{t('navWooden')}</a>
          <a href="#bespoke" onClick={onCloseMenu}>{t('navCustom')}</a>
          <a href="#showrooms">{t('navShowrooms')}</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn menu-toggle" title={t('openMenu')} aria-label={t('openMenu')} aria-expanded={menuOpen} aria-controls="mobileNav" onClick={onToggleMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
          </button>
          <button className="icon-btn" title={t('toggleTheme')} aria-label={t('toggleTheme')} onClick={onToggleTheme}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
          </button>
          <button className="icon-btn" title={t('wishlist')} aria-label={t('wishlist')} onClick={onOpenWishlist}>
            <HeartIcon size={18} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </button>
          <a className="btn-wa-header" href={waLink(t('waVisit'))} target="_blank" rel="noopener noreferrer">
            <WaIcon />
            <span>{t('whatsapp')}</span>
          </a>
        </div>
      </div>
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobileNav">
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('all'); }}>{t('mobAll')}</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Sectionals'); }}>{t('mobSectionals')}</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Wooden Sofas'); }}>{t('mobWooden')}</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Accent'); }}>{t('mobAccent')}</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter('Dining'); }}>{t('mobDining')}</a>
        <a href="#bespoke" onClick={onCloseMenu}>{t('mobCustom')}</a>
        <a href="#showrooms" onClick={onCloseMenu}>{t('mobShowrooms')}</a>
        <a href={waLink(t('waGeneral'))} target="_blank" rel="noopener noreferrer">{t('whatsappNumber')}</a>
      </nav>
    </header>
  );
}
