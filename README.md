# furniture8home.com

> **Sharma & Sons** · Handcrafted Furniture Workshop · Guwahati, Assam (Est. 1994)

A luxury web showcase and digital catalog for **furniture8home.com**, featuring 49 handcrafted furniture pieces across 5 distinct categories, with direct WhatsApp ordering and bespoke sizing consultation.

---

## 🛋️ Highlights & Features

- **50 Curated High-Resolution Images**:
  - **15 L-Shaped Sectionals**: Corner suites in Royal Indigo, Charcoal Graphite, Emerald Teal, Sky Blue, and two-tone chenilles with reversible chaise configurations.
  - **11 Handcrafted Wooden Sofas**: Solid seasoned Assam Teak and Sheesham suites featuring traditional Assamese lattice wood joinery, hand-chiseled floral crests, and Scandinavian daybeds.
  - **11 Accent & Lounge Chairs**: Modern bouclé armchairs, fluted velvet club chairs, sculpted solid teak frames, and French Neoclassical parlor seats.
  - **7 Dining Chairs & Pairs**: Curved bucket-back velvet dining chairs, Scandinavian woven oak, cane-back teak, and spindle Windsor chairs.
  - **5 Wingbacks & Ottomans**: Tall floral and diamond button-tufted reading chairs with matching footstool ottomans.
- **Editorial Design System**:
  - Warm paper (`#FAF7F2`), deep charcoal ink (`#1C1917`), Assam artisanal sage (`#384832`), and warm heritage brass (`#B08238`).
  - Google Fonts **Fraunces** (tactile editorial serif) & **Plus Jakarta Sans** (clean modern sans).
  - One-click Dark Mode toggle with automatic local storage persistence.
- **Interactive Discovery**:
  - **Live Search**: Instant keyword filtering by fabric, timber type, color, or model name.
  - **Category Pills**: Dynamic count badges for each category.
  - **Sorting**: Featured, Price (Low to High / High to Low), Customer Rating, Alphabetical.
  - **Product Detail Modal**: Full-screen image zoom, interactive fabric swatches, L-chaise orientation selector, detailed specs table, and pre-filled WhatsApp ordering.
  - **Slide-Over Wishlist Drawer**: Save favorite pieces, view estimated totals, and send a combined inquiry to Manoj Sharma on WhatsApp.
  - **Bespoke Consultation**: Custom measurement request guide for unique room dimensions.
  - **Direct Workshop Contacts**: Phone numbers (`+91 90850 33301` / `+91 95082 69888`) and floating WhatsApp quick assistance.

---

## 📁 Repository Structure

```
├── index.html                           # Primary production web application
├── products_data.json                   # Structured product database (49 items)
├── template.html                        # Base HTML template for rebuilds
├── build.py                             # Build script compiling data into HTML
├── images/
│   ├── chairs/                          # Dining & accent chair photos
│   ├── lsofa/                           # L-shaped sectional sofa photos
│   ├── singlechair/                     # Accent & lounge chair photos
│   ├── woodensofa/                      # Solid teak & sheesham sofa photos
│   └── original_site/                   # Signature collection & hero image
└── README.md
```

---

## 🚀 Running Locally

No dependencies or build steps required. Simply open `index.html` in any modern web browser, or serve locally:

```bash
# Using Python
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

© 1994–2026 furniture8home.com · Sharma & Sons, Guwahati, Assam.
