import { CloseIcon, WaIcon } from './Icons.jsx';
import { waLink } from '../lib/whatsapp.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function WishlistDrawer({ open, products, onClose, onToggle }) {
  const { t, localize } = useLang();
  const items = products.map((product) => localize(product));
  const total = products.reduce((sum, product) => sum + (product.priceNum || 0), 0);
  const lines = items.map((product) => `• ${product.name} (${product.price})`).join('\n');
  const message = t('waWish', { lines, total: total.toLocaleString('en-IN') });

  return (
    <div className={`drawer-overlay${open ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="drawer" role="dialog" aria-label={t('wishTitle')} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>{t('wishTitle')} ({products.length})</h3>
          <button className="modal-close-btn" style={{ position: 'static' }} aria-label={t('closeDrawer')} type="button" onClick={onClose}>
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="drawer-body">
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 16px', color: 'var(--ink-muted)' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🤍</div>
              <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>{t('wishEmpty')}</div>
              <p style={{ fontSize: 13, marginTop: 6 }}>{t('wishEmptyBody')}</p>
            </div>
          ) : items.map((product) => (
            <div className="drawer-item" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="drawer-item-info">
                <div className="drawer-item-title">{product.name}</div>
                <div className="drawer-item-price">{product.price}</div>
              </div>
              <button className="drawer-item-del" type="button" title={t('remove')} aria-label={t('remove')} onClick={() => onToggle(product.id)}>
                <CloseIcon size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="drawer-foot" style={{ display: products.length ? undefined : 'none' }}>
          <div className="drawer-total-row">
            <span>{t('estimated')}</span>
            <span className="drawer-total-price">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-wa-drawer">
            <WaIcon size={18} />
            {t('enquireAll')}
          </a>
        </div>
      </div>
    </div>
  );
}
