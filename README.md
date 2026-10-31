# Ustad Bantoo - React JS Clone

A high-fidelity React JS clone of [www.ustadbantoo.in](https://www.ustadbantoo.in/), the official website for the independent feature film **USTAD BANTOO** directed by Arsh Jain.

---

## 🎺 About the Film

> *"An Indian wedding band trumpet player risks everything to go on a journey of finding his own tune, his own music."*
> 
> — Written & Directed by **Arsh Jain** · Designed by **Jaidev Tripathy**

* **Language:** Hindi
* **Genre:** Drama
* **Duration:** 120 minutes
* **Official Selections:** International Film Festival Rotterdam (IFFR), Chicago South Asian Film Festival (CSAFF), Tasveer International Film Festival, Dharamshala International Film Festival (DIFF), Waves Film Bazaar WIP Lab (Top 5).

---

## ✨ Features Implemented

### 1. **Pages & Routes**
* **Home (`/`)**:
  * Hero banner with original high-resolution poster art by Jaidev Tripathy.
  * Embedded official YouTube trailer with custom player & playback state.
  * Festival laurels showcase (IFFR Rotterdam, Chicago SAFF, Tasveer, DIFF, Waves WIP Lab).
  * Animated infinite marquee banner: `ROAD TO 100 SCREENINGS`.
  * Complete timeline cards (Research in Sep 24 to 100 Community Screenings in Nov 26).
  * Community Screening Host Call-to-Action with instant waitlist modal.
* **About (`/about`)**:
  * Full film synopsis and technical specs.
  * 12 behind-the-scenes & production film stills with interactive lightbox preview.
  * Awards & Recognition festival laurels grid.
  * Official Soundtrack section featuring embedded Spotify playlist player.
  * Quick navigation to Cast & Crew.
* **Screening (`/screening` & `/screening-2`)**:
  * View toggle between "Tour Dates" and "Announced Soon".
  * India Tour ribbon (DEL, MUM, PUNE, HYD, KOL, CHE, PUN, BAN, DEL, You?).
  * Featured show spotlight (DELHI DEC 12 · *"Har cheez mein ek sur hota hai"* · 61 of 220 left).
  * Month filter tabs (All, September, October, November) and availability status indicators.
  * Interactive Ticket Booking modal with attendee details, seat code generator (`22H - 33J`), and confetti celebration.
* **Cast & Crew (`/cast-crew`)**:
  * All 25 cast and crew members with photos, character names, and designations.
  * Filter categories: All, Cast (Actors), Direction, Production, Camera & Post, Sound & Music, Distribution & PR, Poster & Design.
  * Search bar for filtering members by name or role.
  * Interactive bio modal with direct links to Instagram, email, LinkedIn, and X.
* **Collaborate (`/collaborate`)**:
  * Interactive screening request form (Name, Email, City, Capacity, Organization, Notes).
  * Form validation with instant feedback and confetti celebration.
  * Direct contact emails for Live / Booking (`Theyellorange@gmail.com`) and Management (`1719filmfactory@gmail.com`).
  * Screening venue FAQ and hosting guidelines.

### 2. **Design & Brand System**
* **Typography:** `Anton` (Cinematic headers), `Bebas Neue`, `Share Tech Mono` / `DM Mono` (Tour metadata), `Inter` / `Geist` (Body copy).
* **Color Palette:**
  * Background: `#0d0401` / `#080201`
  * Text / Surfaces: `#efebe3` (Antique Parchment)
  * Signature Brand Orange: `#ff4a1c` (The Yellow Orange)
  * Brass Golden Yellow: `#f6e12b`
* **Components & Interactivity:**
  * Framer-style asymmetric pill action buttons (`border-radius: 9999px 4px 9999px 9999px` with orange arrow icon).
  * Glassmorphism blurred header navigation with mobile drawer menu.
  * Canvas Confetti for booking and collaboration confirmations.
  * HTML5 History API URL synchronization for back/forward navigation.

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* npm

### Installation & Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Or start the server with custom port / host:
npx vite --port 5173
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ustadbantoo/
├── dist/                    # Production build output
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glass header with mobile drawer
│   │   ├── Footer.jsx       # Studio logos, giant title & social links
│   │   ├── BookingModal.jsx # Ticket booking modal with seat generator
│   │   ├── WaitlistModal.jsx# Host city waitlist modal
│   │   ├── CastBioModal.jsx # Detailed cast/crew bio modal
│   │   └── Icons.jsx        # Custom SVG social & brand icons
│   ├── data/
│   │   ├── filmData.js      # Synopsis, laurels, timeline, stills, soundtrack
│   │   ├── castCrewData.js  # 25 cast & crew members with bios & links
│   │   └── screeningsData.js# India tour dates, timings, venues, tickets
│   ├── pages/
│   │   ├── HomePage.jsx     # Hero, trailer, marquee, timeline, CTAs
│   │   ├── AboutPage.jsx    # Synopsis, stills gallery, Spotify player
│   │   ├── ScreeningPage.jsx# Tour dates, month filters, booking
│   │   ├── CastCrewPage.jsx # 25 cast & crew members with category filter
│   │   └── CollaboratePage.jsx # Screening host form & contacts
│   ├── App.jsx              # Main router & modal state manager
│   ├── index.css            # Tailwind directives & custom Framer styles
│   └── main.jsx             # React DOM root entry
├── index.html               # Main HTML with Google Fonts & OG metadata
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Custom colors, fonts, animations
└── vite.config.js           # Vite build configuration
```

---

## 📽️ Film Credits
* **Production Houses:** 1719 Film Factory, Barefoot Pictures, Indieink Films, Indiespirit, The Yellow Orange
* **Official Website:** [https://www.ustadbantoo.in/](https://www.ustadbantoo.in/)
