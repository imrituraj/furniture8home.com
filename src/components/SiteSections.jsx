import { FEATURES, REVIEWS, STORES } from '../data/content.js';
import { WaIcon } from './Icons.jsx';
import { waLink } from '../lib/whatsapp.js';

export function Bespoke() {
  return (
    <section className="bespoke-section" id="bespoke">
      <div className="wrap">
        <div className="bespoke-card">
          <div className="bespoke-content">
            <div className="section-eyebrow" style={{ textAlign: 'left' }}>Bespoke Woodcraft</div>
            <h2>Have a Specific Room Size or Design in Mind?</h2>
            <p>Every home in Guwahati is unique. If standard store dimensions don&apos;t fit your living room or staircase, our master carpenters tailor L-sectionals, wooden sofas, and dining sets down to the exact inch. Send us your floor plan or a photo from Pinterest!</p>
            <div className="bespoke-steps">
              <div className="step-item"><div className="step-num">Step 1 · Measurements</div><div className="step-text">Share your wall size or photo on WhatsApp</div></div>
              <div className="step-item"><div className="step-num">Step 2 · Fabric Swatches</div><div className="step-text">Pick from 50+ velvet, chenille &amp; linen samples</div></div>
              <div className="step-item"><div className="step-num">Step 3 · Handcrafting</div><div className="step-text">Built in 7-10 days by our Guwahati artisans</div></div>
              <div className="step-item"><div className="step-num">Step 4 · White Glove</div><div className="step-text">Delivered &amp; assembled directly in your home</div></div>
            </div>
            <a href={waLink('Hi Furniture8home, I would like a custom-sized sofa or chair.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon size={18} />
              Start Custom Consultation
            </a>
          </div>
          <div className="bespoke-contact-box">
            <h3>Message the showroom</h3>
            <p>WhatsApp Furniture8home for fabric photos, sizes, and a visit time.</p>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--brand-brass)', marginBottom: 8 }}>60025 84075</div>
            <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 24 }}>Maligaon and Paschim Boragaon</div>
            <a href={waLink('Hi Furniture8home, I would like to visit a showroom.')} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="why-section wrap" id="why-us">
      <div className="section-eyebrow">The Furniture8home promise</div>
      <h2 className="section-title">Built for Guwahati Homes. Built for Generations.</h2>
      <p className="section-desc">We refuse to use cheap particle boards, synthetic foams, or flimsy imported hardware.</p>
      <div className="features-grid">
        {FEATURES.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="wrap">
        <div className="section-eyebrow">Guwahati Homeowners Love Us</div>
        <h2 className="section-title">Word on the Street</h2>
        <p className="section-desc">Families across Guwahati sit on the piece, check the timber, and take it home from either showroom.</p>
        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <div className="review-card" key={review.initials}>
              <div className="review-stars">★★★★★</div>
              <p>&quot;{review.text}&quot;</p>
              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div>
                  <div className="author-name">{review.name}</div>
                  <div className="author-loc">{review.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showrooms() {
  return (
    <section className="workshop-section wrap" id="showrooms">
      <div className="workshop-box" style={{ display: 'block' }}>
        <div className="workshop-details">
          <div className="section-eyebrow" style={{ textAlign: 'left' }}>Visit a showroom</div>
          <h2>Two Furniture8home floors in Guwahati</h2>
          <p>Sit on the sofas, compare fabrics, and talk through a custom size in person. Message us on WhatsApp before you leave so someone is on the floor to help.</p>
        </div>
        <div className="stores-grid">
          {STORES.map((store) => (
            <article className="store-card" key={store.name}>
              <iframe title={store.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={store.map} />
              <div className="store-card-body">
                <div className="store-kicker">{store.kicker}</div>
                <h3>{store.name}</h3>
                <p>{store.address}</p>
                <div className="store-pin">{store.pin}</div>
                <div className="store-actions">
                  <a className="btn-primary" href={store.directions} target="_blank" rel="noopener noreferrer">Directions</a>
                  <a className="btn-secondary" href={waLink(store.wa)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer({ onFilter }) {
  const links = [
    ['Sectionals', 'L-Shaped Sectionals'],
    ['Wooden Sofas', 'Handcrafted Wooden Sofas'],
    ['Accent', 'Accent & Lounge Chairs'],
    ['Dining', 'Dining Chairs'],
    ['Wingback', 'Wingbacks & Ottomans'],
  ];
  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-col">
          <div className="logo-text" style={{ fontSize: 22, marginBottom: 12 }}>Furniture<span className="num">8</span>home</div>
          <p>Furniture8home is a Guwahati furniture showroom with floors in Maligaon and Paschim Boragaon. Teak sofas, L-sectionals, accent chairs, and dining seating — including sizes made for your room.</p>
          <div style={{ marginTop: 16, fontSize: 13.5, color: 'var(--brand-sage)', fontWeight: 600 }}>Direct from the showroom floor</div>
        </div>
        <div className="foot-col">
          <h4>Browse Categories</h4>
          <ul>
            {links.map(([id, label]) => (
              <li key={id}><a href="#catalog" onClick={(e) => { e.preventDefault(); onFilter(id); }}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div className="foot-col">
          <h4>Showrooms</h4>
          <p>
            <strong>Maligaon · 781011</strong><br />
            AT Road, opposite The GYM<br /><br />
            <strong>Paschim Boragaon · 781035</strong><br />
            Opposite GYM Central<br /><br />
            WhatsApp: 60025 84075
          </p>
        </div>
        <div className="foot-col">
          <h4>Direct WhatsApp Order</h4>
          <p style={{ marginBottom: 16 }}>Send us a message anytime. We reply within minutes during the day with custom photos, fabric swatches, and dimension advice.</p>
          <a href={waLink('Hi Furniture8home, I would like to enquire about your furniture collection.')} target="_blank" rel="noopener noreferrer" className="btn-wa-header" style={{ justifyContent: 'center' }}>
            <WaIcon size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <div>&copy; 2026 Furniture8home · Guwahati, Assam. All rights reserved.</div>
        <div>Designed with pride for homes in Assam and the North East.</div>
      </div>
    </footer>
  );
}
