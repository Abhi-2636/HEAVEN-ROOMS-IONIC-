<div align="center">

<img src="https://i.postimg.cc/Qt51j6tw/Whats-App-Image-2025-10-11-at-16-48-26-removebg-preview.png" alt="Heaven Rooms Logo" width="140"/>

# 🏠 Heaven Rooms

### *Connecting Dreams to Homes*

**A modern, mobile-first student accommodation app for rooms near LPU**

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Ionic](https://img.shields.io/badge/Ionic-8-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Overview

**Heaven Rooms** is a beautifully crafted student accommodation app designed for students at **Lovely Professional University (LPU)**. It helps students discover, explore, favourite, and book PG rooms near campus — all from a single, lightning-fast mobile app.

Whether you're looking for an AC room near Lawgate, a cozy villa in Green Valley, or a premium apartment near the Maingate, Heaven Rooms has you covered.

---

## 📸 Screens at a Glance

| Landing | Home | Room Detail |
|:---------:|:------:|:-----------:|
| *Splash with Login / Sign Up* | *Browse & Search PG Listings* | *Full Room Info & Booking* |

| Favourites | Bookings | Profile |
|:----------:|:--------:|:-------:|
| *Saved Rooms* | *Your Booking History* | *Edit Your Profile* |

---

## 🚀 Key Features

- 🔐 **Authentication** — Login & Sign Up flow with a polished landing screen
- 🔍 **Smart Search** — Real-time search by PG name or location with debounce
- 🗂️ **Location Filter** — Instantly filter rooms by Lawgate, Green Valley, or Maingate
- 🏡 **Featured Rooms** — Highlighted listings with rich imagery and pricing badges
- ❤️ **Favourites** — Bookmark your preferred PGs with a single tap
- 📅 **Bookings** — Manage your room bookings and rate your stay
- 🛋️ **Room Detail** — Full amenities list, description, pricing, and one-tap booking
- 👤 **Profile Management** — Edit name, email, phone, bio, and profile photo
- 💾 **Offline-Ready** — Data persisted via `localStorage` for seamless re-visits
- 📱 **Mobile-First** — Built with Ionic for a native-like feel on iOS & Android

---

## 🗺️ Available Locations & Rooms

| # | Room Name | Location | Rent/Month | Highlights |
|---|-----------|----------|------------|------------|
| 1 | SP Bhargav 1 | Lawgate | ₹7,000 | AC · Bed · Wardrobe · Fridge · RO Water |
| 2 | SP Bhargav 2 | Lawgate | ₹6,500 | AC · Fridge · Wi-Fi · Meals |
| 3 | Preet Villa | Green Valley | ₹8,500 | AC · Private Balcony · RO Water |
| 4 | IPS Villa | Green Valley | ₹9,000 | AC · Study Table · Daily Cleaning |
| 5 | Ambey Apartment | Maingate | ₹10,000 | AC · Kitchen Access · Wardrobe |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Angular 20 (Standalone Components) |
| **UI Library** | Ionic 8 + Ionicons 7 |
| **Mobile Runtime** | Capacitor 7 (iOS & Android) |
| **Language** | TypeScript 5.8 |
| **Styling** | SCSS + Ionic Theming |
| **State / Storage** | Angular Services + localStorage |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── landing/          # Welcome / splash screen
│   ├── login/            # Login & Sign Up
│   ├── tabs/             # Bottom tab navigation
│   ├── home/             # Browse & search PG listings
│   ├── favourite/        # Saved / wishlisted rooms
│   ├── bookings/         # Booking history & ratings
│   ├── profile/          # User profile view
│   ├── pages/
│   │   ├── room-detail/  # Full room info & booking
│   │   └── edit-profile/ # Edit user details
│   └── services/
│       ├── auth.service.ts     # Authentication logic
│       └── pg-data.service.ts  # Rooms, favourites, bookings & profile data
├── assets/               # Static assets & images
└── theme/                # Global Ionic theme variables
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [npm](https://www.npmjs.com/) ≥ 9
- [Ionic CLI](https://ionicframework.com/docs/cli) — `npm install -g @ionic/cli`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Abhi-2636/HEAVEN-ROOMS-IONIC-.git
cd HEAVEN-ROOMS-IONIC-

# 2. Install dependencies
npm install

# 3. Start the development server
ionic serve
```

The app will open at **http://localhost:8100** 🎉

### Build for Production

```bash
npm run build
```

### Run on Android / iOS (via Capacitor)

```bash
# Add a native platform (first time only)
npx cap add android   # or ios

# Sync web build to native
npx cap sync

# Open in Android Studio / Xcode
npx cap open android  # or ios
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server (`ng serve`) |
| `npm run build` | Production build |
| `npm run watch` | Dev build with file watching |
| `npm test` | Run unit tests (Karma + Jasmine) |
| `npm run lint` | Lint the project (ESLint) |

---

## 🌐 Deployment

The app is deployed on **Vercel**. The `vercel.json` configuration handles SPA routing so all deep links resolve correctly.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Abhishek Kumar**
- 🎓 BCA Student at Lovely Professional University
- 📧 abhishek.kumar@lpu.in

---

## 📄 License

This project is private and intended for personal/educational use.

---

<div align="center">

Made with ❤️ for LPU students &nbsp;|&nbsp; **Heaven Rooms** — *Connecting Dreams to Homes*

</div>
