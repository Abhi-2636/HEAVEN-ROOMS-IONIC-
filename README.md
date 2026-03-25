# Heaven Rooms — Student Accommodation Near LPU

A modern, responsive **student accommodation website** built with **Ionic + TypeScript**. Heaven Rooms helps students quickly explore rooms near **LPU**, view amenities, compare pricing, and contact for bookings—optimized for **mobile-first** performance and clean UI.

---

## Highlights

- **Modern UI** with a clean, student-friendly layout  
- **Mobile-first** responsive design (smooth on phones, tablets, desktops)
- **Room listings** with details (pricing, amenities, images, etc.)
- **Fast & lightweight** front-end experience
- **Contact / inquiry** flow for quick communication

---

## Tech Stack

- **Ionic Framework**
- **TypeScript**
- **SCSS**
- **HTML**

> Repo language mix indicates major usage of TypeScript + SCSS + HTML, with some scripting utilities.

---

## Screenshots

> Add your app screenshots here for a more attractive README.

Example:
- `assets/screenshots/home.png`
- `assets/screenshots/rooms.png`
- `assets/screenshots/details.png`

```md
![Home](assets/screenshots/home.png)
![Rooms](assets/screenshots/rooms.png)
![Details](assets/screenshots/details.png)
```

---

## Getting Started

### Prerequisites
Make sure you have:
- **Node.js (LTS recommended)**
- **npm** (comes with Node)
- **Ionic CLI**

Install Ionic CLI (if not installed):
```bash
npm install -g @ionic/cli
```

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Abhi-2636/HEAVEN-ROOMS-IONIC-.git
cd HEAVEN-ROOMS-IONIC-
npm install
```

---

## Run Locally

Start the development server:
```bash
ionic serve
```

This will open the app in your browser with live reload.

---

## Build

Production build:
```bash
ionic build
```

---

## Project Structure (Typical Ionic)

```text
HEAVEN-ROOMS-IONIC-
├── src/
│   ├── app/              # Main app module / routing / core logic
│   ├── assets/           # Images, icons, static assets
│   ├── environments/     # Environment configs (if present)
│   └── theme/            # Global styling (variables, global SCSS)
├── www/                  # Build output (generated)
├── ionic.config.json
├── package.json
└── README.md
```

> Exact structure may vary depending on your Ionic version and setup.

---

## Customization

- **UI / Styles:** update SCSS under `src/theme/` and component/page styles  
- **Room content:** update the data source (static content, JSON, or services—depending on your implementation)  
- **Branding:** replace logo, icons, and theme variables for your own look  

---

## Deployment

### Web
Build and host the generated output (commonly in `www/`):
```bash
ionic build
```

Then deploy using any static hosting:
- GitHub Pages
- Netlify / Vercel
- Firebase Hosting

### Mobile (Optional)
If you’re using Capacitor:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
ionic build
npx cap add android
npx cap add ios
npx cap open android
```

---

## Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a branch:  
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add: my feature"
   ```
4. Push:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request

---

## License

Add a license if you want open-source sharing (MIT is common).  
If you already have a `LICENSE` file, this section will automatically make sense.

---

## Author / Contact

**GitHub:** https://github.com/Abhi-2636

---

### If you want, I can tailor this README further
Tell me:
1) Do you have a **live demo link**?  
2) What pages exist (Home / Rooms / Details / Contact)?  
3) Any **backend** or is it fully frontend/static?  
4) Do you want a **“Features”** section with bullet points specific to your UI?
