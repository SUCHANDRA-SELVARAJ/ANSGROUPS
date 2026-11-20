# ANS GROUPS – Official Business Website

A modern, premium, fully responsive multi-page corporate website for **ANS GROUPS**, engineered with React, React Router, Vite, and an executive obsidian/gold design system.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `/dist`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📌 Central Business Configuration

All company information is centrally controlled in one single file:
👉 **`src/config/businessInfo.js`**

### Direct Contact Numbers:
- Primary Desk: **`+91 81110 15298`** (`8111015298`)
- Secondary Desk: **`+91 99440 52203`** (`9944052203`)

### When You Are Ready to Update:
1. **Business Location**: Edit the `location` object in `src/config/businessInfo.js`.
2. **Business Email**: Edit the `email` object in `src/config/businessInfo.js`.
3. **Real Photography**:
   - Save your photos in `public/images/gallery/` or `public/images/services/`.
   - Update `imagePath: "/images/gallery/your-photo.jpg"` in `src/config/businessInfo.js`.
   - Placeholders are automatically replaced with your high-res photos.

---

## 🌐 Website Pages & Architecture

| Page | URL Route | Description |
|---|---|---|
| **Home** | `/` | Executive hero, instant contact card, company intro, core capabilities, why choose us, featured gallery, and conversion CTA. |
| **About Us** | `/about` | Company introduction, corporate vision & mission, core values, operating principles, and competitive strengths. |
| **Our Services** | `/services` | Comprehensive catalog with real-time search, category filters, detailed modal specs, SLAs, and direct enquiry buttons. |
| **Gallery** | `/gallery` | Filterable portfolio gallery with image zoom modal, metadata view, and non-generic placeholders. |
| **Contact Us** | `/contact` | Dual direct call links (`tel:`), direct WhatsApp links, validated contact form, address placeholder, and map integration. |
| **Enquiry Page** | `/enquiry` | Formal commercial requirement portal with timeline & scope selectors, validation, reference ID generation, and WhatsApp dispatch. |

---

## 📱 Interactive Functionalities

- **Click-to-Call**: Every phone number triggers the device phone dialer (`tel:+918111015298` / `tel:+919944052203`).
- **WhatsApp Bridge**: Instant chat buttons pre-fill relevant enquiries with formatted references.
- **Floating Contact Hub**: Persistent bottom-right quick action bar for both mobile & desktop.
- **Responsive Navigation**: Full desktop menu + slide-out mobile drawer.
- **Zero Console Errors**: Strict validation and error boundaries.

---

## 🛠️ Tech Stack

- **React 18**
- **React Router DOM 6**
- **Vite 5**
- **Lucide React** (icons)
- **Custom Modern CSS System** (Variables, Grid, Glassmorphism)
