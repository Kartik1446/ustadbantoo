<<<<<<< HEAD
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
=======
# Ustad Bantoo

> An Indian wedding-band trumpet player risks everything to find his own tune, his own music.

**Ustad Bantoo** is an independent Indian film exploring music, identity, ambition, and the search for one's own voice. Set against the vibrant world of Delhi's wedding bands, the film follows a musician who dares to pursue a musical journey beyond the familiar.

**The Yellow Orange** in association with **1719 Film Factory**.

## About the Film

Ustad Bantoo is a cinematic exploration of the lives and music of India's wedding-band musicians. Rooted in the cultural landscape of Delhi, the film brings an intimate perspective to a world where tradition, livelihood, and artistic aspirations intersect.

The film invites audiences to reflect on what it means to find one's own voice while navigating the expectations of society.

## Journey

- **Research:** The team began researching Delhi's wedding-band culture.
- **Production:** The film was shot over 14 days.
- **Work-In-Progress Lab:** Selected as one of five projects for the Waves Film Bazaar Work-In-Progress Lab.
- **World Premiere:** International Film Festival Rotterdam.
- **North American Premiere:** Chicago South Asian Film Festival.
- **Washington Premiere:** Tasveer International Film Festival.
- **Asian Premiere:** Dharamshala International Film Festival.

## Road to 100 Screenings

Ustad Bantoo is embarking on a journey of 100 community screenings across India.

The initiative aims to bring independent cinema to audiences in cities and communities throughout the country, creating opportunities for people to experience the film together.

### Host a Screening

Interested in hosting Ustad Bantoo in your city?

- **Location:** Anywhere in India
- **Initiative:** Road to 100 Screenings
- **Registration:** [Join the Waitlist](https://tally.so)

## Cast

- Kashi Kumar Dubey as Bantoo
- Anam Ambawata as Shahid
- Sachin Kumar as Feroz
- Sankalp Bharadwaj as Musharraf
- Shivam Khurrana as Interviewer
- Harsh as himself (Kirti Band Owner)
- Nawaab as himself (Singer in the market)
- Manohar Lal as himself (Flute Player)

## Crew

### Direction

- **Written and Directed by:** Arsh Jain
- **First Assistant Director:** Aaryan Marcha
- **Second Assistant Director:** Yash Rajoria
- **Third Assistant Director:** Pancham

### Producers

- **Producers:** Arsh Jain, Dhruv Solanki, Jyotsana Rajpurohit
- **Executive Producer:** Harjas Singh
- **Co-Producers:** Praveen Morchhale, Anshulika Dubey, Sarika Jadhav

### Visuals

- **Director of Photography:** Samraj Agarwal
- **Colorist:** Hamidreza Fatourehchian
- **Editor:** Arsh Jain
- **Associate Editor:** Kritik Varshney
- **Animations:** Arsh Jain
- **Title and Poster Design:** Jaidev Tripathy

### Sound

- **Original Score:** Aman Gupta
- **Sound Recordist:** Bharat Kishore Mehra
- **Boom Operators:** Pancham, Aaryan Marcha, Bharat Kishore Mehra
- **Sound Designer and Re-Recording Mixer:** Bharat Kishore Mehra
- **Foley Artist:** Gowtham Raju K
- **Additional Foley Recording:** Bharat Kishore Mehra
- **Post-Production Sound Assistant:** Sharan Kishore Mehra

### Production

- **Production Assistants:** Jai Kapoor, Arul Vaid, Salik Malik
- **Camera Vendor:** Ekta Vision
- **Location Scouting and On-Set Lighting:** Riya
- **On-Set Food:** Kiran Ji

### Marketing and Distribution

- **Distribution Head:** Shreya Agarwal
- **Venue Outreach:** Pancham
- **Marketing and PR Consultant:** Mananya
- **Marketing Consultants:** Sankalp Bharadwaj, Kashi Kumar Dubey
- **Social Media Associate:** Abhishek Nagpal

## Special Thanks

Kirti Band, Delhi wedding-band musicians, Abhijit Mazumdar, Beth Sanders, Rohit Chauhan, Philippa Campbell, Kiki Fung, Sandrine Faucher Cassidy, Srikanth Srinivasan, Nitin Baid, Sanyukta Kaza, Shaharyar Ahmed Chauhan, Vardaan Kochhar, Rohan Shyam Chowdhury, and the Aatranslator team (Michael Rooney).

## Soundtrack

Tracks listed in order of appearance:

1. **Rodeo** — Lapgan  
   From the album *Duniya Kya Hai*  
   © Lapgan, 2021

2. **Interlude** — Yash Raj Mishra  
   From the album *SUPER SHAKTI*  
   © Yash Raj Mishra, 2023

3. **Billo** — EXCISE DEPT  
   © EXCISE DEPT, 2023

4. **Bismillah** — Sarathy Korwar  
   From the album *Day To Day*  
   © Sarathy Korwar, 2016

5. **Jaan Mein Jaan** — Yash Sahai  
   From the album *Laailaaj*  
   © Yash Sahai, 2024

## Poster Credits

Poster billing, in order of appearance:

1. The Yellow Orange presents *Ustad Bantoo* in association with 1719 Film Factory.
2. Written and directed by Arsh Jain. Starring Kashi Kumar Dubey, Anam Ambawata, Sankalp Bharadwaj, Sachin Kumar, and Shivam Khurrana.
3. Director of Photography Samraj Agarwal. Sound Design Bharat Kishore Mehra. Original Score Aman Gupta. Editors Arsh Jain and Kritik V.
4. Producers Arsh Jain, Dhruv Solanki, Jyotsana Rajpurohit. Executive Producer Harjas Singh. Produced in association with Kirti Band.
5. Poster and Title Design Jaidev Tripathy. Assistant Directors Aaryan Marcha, Yash Rajoria, Pancham. Production Assistants Jai Kapoor, Salik Malik, Arul Vaid.

## Collaborate

For screening partnerships, collaborations, and other enquiries, visit the official website.

## Official Links

- **Website:** [ustadbantoo.in](https://www.ustadbantoo.in/)
- **Screening Information:** [Screenings](https://www.ustadbantoo.in/)
- **Collaboration:** [Collaborate](https://www.ustadbantoo.in/)
- **Coded by:** [Kartik Bhardwaj](https://github.com/kartik1446/), [Yash Wahi](https://github.com/YashWahi)

## Credits

Designed by **Jaidev Tripathy**.

Production partners include 1719 Film Factory, Barefoot Pictures, Indieink Films, Indiespirit, and The Yellow Orange.

---

© 2026 Ustad Bantoo. All rights reserved.
>>>>>>> d41499c9c4f98859aeaa4d4718b9f7237e718e6d
