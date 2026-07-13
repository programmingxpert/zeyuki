<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Zeyuki

The official codebase for **Zeyuki**, Satya's personal developer landing page and portfolio hub. Built with a modern dark-themed aesthetic, the application features glassmorphism, responsive components, and custom micro-animations to showcase his AI systems, developer projects, and engineering tools.

Live site: https://portfolio.zeyuki.app

---

## Key Features

- **Dynamic Interactive Landing Page**: Highlights Satya's AI engineering and software development capabilities.
- **Premium Micro-Animations**: Smooth scroll-triggered visual indicators, entrance transitions, and hover scaling powered by Framer Motion.
- **Responsive Modular Components**: Custom layout structures including Navbar, Hero section, About card, FeaturedProjects grid, Ecosystem chart, and CTA footer.
- **Glassmorphic Aesthetics**: Modern dark mode tailored with refined borders, backdrop-filters, custom glowing assets, and sleek typography.

---

## Tech Stack

- **Framework Core**: React (v19) with Vite
- **Programming Language**: TypeScript
- **Styling & Theme**: Tailwind CSS (Utility-first styling with custom animation tokens)
- **Animations Library**: Framer Motion (v11)
- **Icon Assets**: Lucide React
- **Packaging**: NPM

---

## Folder Organization

```
zeyuki/
├── src/
│   ├── components/      # UI sections (Hero, About, FeaturedProjects, Navbar, CTA)
│   ├── App.tsx          # Main layout orchestrator
│   ├── index.css        # Tailwind directives and custom animation styles
│   └── main.tsx         # Application entrypoint
├── public/              # Icons, static images, and developer metadata
├── vite.config.ts       # Vite build configurations
└── tsconfig.json        # TypeScript configuration rules
```

---

## Setup & Local Run

### Prerequisites
- Node.js (v18.0.0 or higher)
- NPM package manager

### Setup Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/programmingxpert/zeyuki.git
   cd zeyuki
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the page.

---

## Author

**Satya**  
GitHub: [programmingxpert](https://github.com/programmingxpert/)
