import { CHAISE_OPTIONS, FABRICS } from '../data/content.js';
import { CloseIcon, HeartIcon, WaIcon } from './Icons.jsx';
import ShareButton from './ShareButton.jsx';
import { waLink } from '../lib/whatsapp.js';

export default function ProductModal({ product, fabric, chaise, saved, onClose, onFabric, onChaise, onToggleWish }) {
  if (!product) return null;

  const specs = [`Fabric: ${fabric}`];
  if (product.cat === 'Sectionals') specs.push(`Orientation: ${chaise}`);
  const orderText = `Hi Furniture8home, I am interested in the ${product.name} (${product.price}).\nSelected specs: ${specs.join(', ')}\nPlease share availability and delivery in Guwahati.`;

  return (
    <div className="modal-overlay open" role="dialog" aria-modal="true" aria-label={product.name} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-container">
        <button className="modal-close-btn" aria-label="Close modal" type="button" onClick={onClose}><CloseIcon /></button>
        <div className="modal-content-grid">
          <div className="modal-gallery">
            <div className="modal-main-img-wrap" onClick={() => window.open(product.img, '_blank', 'noopener')} role="button" tabIndex={0}>
              <img src={product.img} alt={product.name} />
            </div>
            <div className="modal-gallery-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
              Click image to open high-resolution photo
            </div>
          </div>
          <div className="modal-info">
            <div className="modal-breadcrumbs">{product.cat} Collection · SKU #{product.id}</div>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price-row">
              <div className="modal-price">{product.price}</div>
              <div className="modal-price-tax">Includes GST &amp; Guwahati Delivery</div>
            </div>
            <p className="modal-desc">{product.desc}</p>

            <div className="custom-section">
              <div className="custom-title">Choose Upholstery Color / Fabric <span>{fabric}</span></div>
              <div className="swatches">
                {FABRICS.map((swatch) => (
                  <button key={swatch.name} type="button" className={`swatch-btn${fabric === swatch.name ? ' active' : ''}`} onClick={() => onFabric(swatch.name)}>
                    <span className="color-dot" style={{ background: swatch.hex }} /> {swatch.name}
                  </button>
                ))}
              </div>
            </div>

            {product.cat === 'Sectionals' && (
              <div className="custom-section">
                <div className="custom-title">L-Shape Orientation <span>{chaise === 'Custom Measurement' ? 'Custom Dimensions' : chaise}</span></div>
                <div className="swatches">
                  {CHAISE_OPTIONS.map((option) => (
                    <button key={option} type="button" className={`swatch-btn${chaise === option ? ' active' : ''}`} onClick={() => onChaise(option)}>
                      {option === 'Custom Measurement' ? 'Custom Dimensions' : option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <table className="specs-table">
              <tbody>
                <tr><td>Dimensions</td><td>{product.dims}</td></tr>
                <tr><td>Frame &amp; Materials</td><td>{product.material}</td></tr>
                <tr><td>Warranty</td><td>10 Years on Solid Timber &amp; Structure</td></tr>
                <tr><td>Delivery</td><td>Free Delivery &amp; Setup across Guwahati (3-5 Days)</td></tr>
              </tbody>
            </table>

            <div className="modal-actions">
              <a href={waLink(orderText)} target="_blank" rel="noopener noreferrer" className="btn-wa-modal">
                <WaIcon size={20} />
                <span>Enquire &amp; Order on WhatsApp</span>
              </a>
              <div className="modal-action-row">
                <ShareButton product={product} className="btn-call-modal" label="Share link" />
                <a href={waLink('Hi Furniture8home, I would like to enquire about your furniture.')} target="_blank" rel="noopener noreferrer" className="btn-call-modal" style={{ flex: 1 }}>
                  WhatsApp 60025 84075
                </a>
                <button className="btn-call-modal" type="button" style={{ flex: 1 }} onClick={() => onToggleWish(product.id)}>
                  <HeartIcon filled={saved} size={16} />
                  {saved ? 'Saved in Wishlist' : 'Save to Wishlist'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
