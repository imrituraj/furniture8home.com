import { CATEGORIES, FILTERS } from '../data/content.js';
import { HeartIcon, WaIcon } from './Icons.jsx';
import ShareButton from './ShareButton.jsx';
import { waLink } from '../lib/whatsapp.js';

export default function Catalog({
  products,
  visible,
  category,
  query,
  sort,
  wishlist,
  onQuery,
  onSort,
  onFilter,
  onReset,
  onOpen,
  onToggleWish,
}) {
  return (
    <>
      <section className="quick-categories wrap">
        <div className="section-eyebrow">Curated Collections</div>
        <h2 className="section-title">Explore by Furniture Type</h2>
        <p className="section-desc">Click any category below to immediately browse all models, specifications, and workshop pricing.</p>
        <div className="cat-explorer-grid">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} type="button" className={`cat-pill-card${category === cat.id ? ' active' : ''}`} onClick={() => onFilter(cat.id)}>
              <div className="img-box"><img src={cat.img} alt={cat.alt} loading="lazy" /></div>
              <div className="cat-body">
                <div className="cat-title">{cat.title}</div>
                <div className="cat-count">{cat.count}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="catalog wrap" id="catalog">
        <div className="catalog-controls">
          <div className="controls-top">
            <div className={`search-box${query.trim() ? ' has-query' : ''}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input type="text" value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Search by name, fabric, teak, blue, velvet..." autoComplete="off" aria-label="Search furniture" />
              <button className="search-clear-btn" title="Clear search" type="button" onClick={() => onQuery('')}>×</button>
            </div>
            <div className="sort-box">
              <label htmlFor="sortSelect">Sort by:</label>
              <select id="sortSelect" value={sort} onChange={(e) => onSort(e.target.value)}>
                <option value="featured">Featured / Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>
          <div className="filters-bar">
            {FILTERS.map((filter) => {
              const count = filter.id === 'all' ? products.length : products.filter((p) => p.cat === filter.id).length;
              return (
                <button key={filter.id} type="button" className={`filter-btn${category === filter.id ? ' active' : ''}`} onClick={() => onFilter(filter.id)}>
                  {filter.label} <span className="count-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="catalog-status">
          <span>Showing <strong>{visible.length}</strong> of {products.length} handcrafted pieces</span>
          <span>{category === 'all' ? 'All Collections' : category}</span>
        </div>

        {visible.length === 0 ? (
          <div className="empty-state">
            <h3>No matching furniture designs found</h3>
            <p>Try searching for a different term like &quot;teak&quot;, &quot;sofa&quot;, &quot;velvet&quot;, or reset filters.</p>
            <button className="btn-primary" type="button" onClick={onReset}>Reset All Filters</button>
          </div>
        ) : (
          <div className="grid">
            {visible.map((product) => {
              const saved = wishlist.includes(product.id);
              return (
                <article className="card" key={product.id}>
                  <div className="card-img-wrap" onClick={() => onOpen(product)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(product); }}>
                    <img src={product.img} alt={product.name} loading="lazy" />
                    {product.badge && <span className="card-badge">{product.badge}</span>}
                    <button className={`wishlist-btn${saved ? ' active' : ''}`} type="button" title="Save to Wishlist" aria-label="Save to Wishlist" onClick={(e) => { e.stopPropagation(); onToggleWish(product.id); }}>
                      <HeartIcon filled={saved} />
                    </button>
                    <div className="card-quick-overlay">Quick View Details</div>
                  </div>
                  <div className="card-body" onClick={() => onOpen(product)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(product); }}>
                    <div className="card-meta">
                      <span className="card-cat">{product.cat}</span>
                      <span className="card-rating">★ {product.rating || '4.9'} ({product.reviews || 20})</span>
                    </div>
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-dims">{product.dims}</div>
                    <div className="card-footer">
                      <div className="card-price-box">
                        <span className="card-price">{product.price}</span>
                        <span className="card-price-sub">Guwahati Delivery Ready</span>
                      </div>
                      <div className="card-actions">
                        <ShareButton product={product} className="card-wa-btn" />
                        <a href={waLink(`Hi Furniture8home, I'd like to enquire about the ${product.name} (${product.price}). Is it available in Guwahati?`)} target="_blank" rel="noopener noreferrer" className="card-wa-btn" title="Enquire on WhatsApp" aria-label="Enquire on WhatsApp" onClick={(e) => e.stopPropagation()}>
                          <WaIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
