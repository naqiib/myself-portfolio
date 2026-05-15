# Naqib Zakir — Developer Portfolio

A modern, responsive personal portfolio website built with React. Features a dark/light theme toggle, smooth scroll animations, and a fully automated CI/CD deployment pipeline to AWS S3 via GitHub Actions.

---

## Live Demo

> Deployed on AWS S3 — link available after deployment.

---

## Features

- Animated typewriter effect in Hero section
- Dark / Light theme toggle
- Scroll animations powered by AOS
- Fully responsive layout (mobile + desktop)
- Professional SVG social icons (GitHub, LinkedIn, Behance, Facebook)
- Projects section with live demo and GitHub links
- Contact form section
- CI/CD pipeline — auto deploys to AWS S3 on every push to `main`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, JavaScript (ES6+) |
| Styling | Inline CSS with CSS Variables |
| Animations | AOS (Animate On Scroll) |
| Hosting | AWS S3 (Static Website Hosting) |
| CI/CD | GitHub Actions |

---

## Projects Showcased

| Project | Stack | Link |
|---|---|---|
| Online Book Sale & Purchase | Blazor .NET, C#, SQL Server | [GitHub](https://github.com/naqiib/Fyp.git) |
| Chitral Tourism Management System | MongoDB, Express, React, Node.js | [Live Demo](https://chitral-tourism-git-main-naqiibs-projects.vercel.app/) |
| Restaurant Management System | Flutter, Firebase, Dart | [GitHub](https://github.com/naqiib/restaurant-.git) |
| Developer Portfolio | React, AWS S3, GitHub Actions | This repo |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/naqiib/naqib-portfolio.git

# Navigate into the project
cd naqib-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

App runs at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output goes into the `/build` folder, ready for deployment.

---

## Adding Your Photo

Place your photo as `perfil.png` inside the `public/` folder. The Hero and About sections will display it automatically.

---

## Deployment (AWS S3 + GitHub Actions)

The pipeline triggers automatically on every push to `main`.

### Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | Your AWS IAM access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS IAM secret key |
| `AWS_REGION` | e.g. `us-east-1` |
| `AWS_S3_BUCKET` | Your S3 bucket name |

### Pipeline Steps

1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Build React app
5. Configure AWS credentials
6. Sync `/build` to S3 bucket

---

## Folder Structure

```
naqib-portfolio/
├── public/
│   ├── index.html
│   └── perfil.png          ← your photo goes here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Work.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

---

## Connect

- GitHub: [github.com/naqiib](https://github.com/naqiib)
- LinkedIn: [linkedin.com/in/naqib-zakir-303711183](https://www.linkedin.com/in/naqib-zakir-303711183/)
- Behance: [behance.net/naqibullah6](https://www.behance.net/naqibullah6)

---

© 2025 Naqib Zakir. All rights reserved.
