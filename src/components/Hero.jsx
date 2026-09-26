import { WaIcon } from './Icons.jsx';
import { waLink } from '../lib/whatsapp.js';

export default function Hero({ total }) {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-grid">
        <div>
          <div className="eyebrow-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            Two Guwahati showrooms · Made to your room
          </div>
          <h1>Furniture that fits <span className="highlight">Guwahati homes.</span></h1>
          <p className="hero-lead">
            Furniture8home builds solid teak sofas, L-sectionals, and accent seating you can sit on before you buy. Visit Maligaon or Paschim Boragaon, or send a photo of your room on WhatsApp and we will size it for you.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#catalog">
              Explore All {total} Designs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
            </a>
            <a className="btn-secondary" href={waLink('Hi Furniture8home, I have a specific room dimension and want to order a custom sofa or chair.')} target="_blank" rel="noopener noreferrer">
              <WaIcon size={16} />
              Custom Size Request
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="num">2</span><span className="label">Showrooms in Guwahati</span></div>
            <div className="stat-item"><span className="num">{total}</span><span className="label">Designs ready to view</span></div>
            <div className="stat-item"><span className="num">Custom</span><span className="label">Sizes to the inch</span></div>
            <div className="stat-item"><span className="num" style={{ fontSize: 20 }}>60025</span><span className="label">84075 on WhatsApp</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-main-card">
            <img src="images/original_site/hero.jpeg" alt="Handcrafted seating at Furniture8home, Guwahati" />
          </div>
          <div className="floating-badge badge-top">
            <div className="badge-icon-box">★</div>
            <div>
              <div className="badge-title">Sit before you buy</div>
              <div className="badge-sub">Maligaon and Boragaon floors</div>
            </div>
          </div>
          <div className="floating-badge badge-bottom">
            <div className="badge-icon-box">🪵</div>
            <div>
              <div className="badge-title">100% Seasoned Assam Teak</div>
              <div className="badge-sub">High-Density 40D Foam Core</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
