# Muhammad Furqan Uppal — Data Engineer Portfolio

A responsive, static personal portfolio website built with plain HTML, CSS, and JavaScript,
designed for deployment on GitHub Pages.

## 🧱 Structure

├── index.html
├── style.css
├── script.js
├── assets/
│ └── images/
│ └── profile.jpg
└── README.md


## ✏️ Before publishing — update these

1. **Profile photo** — replace `assets/images/profile.jpg` with your own photo (keep the same filename, or update the `src` path in `index.html`'s Hero section, marked with an HTML comment).
2. **GitHub / LinkedIn / Email** — open `script.js` and fill in the `PROFILE_CONFIG` object near the bottom:
```js
   const PROFILE_CONFIG = {
     githubUrl: "https://github.com/furqanuppal",
     linkedinUrl: "https://www.linkedin.com/in/furqanuppal/",
     email: "muhammadfurqan1165@gmail.com"
   };
```

## 🚀 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then **Save**.
5. Your site will be published at `https://furqanuuppal.github.io/portfolio/`.

## 🎨 Features

- Light/dark mode toggle (persisted via `localStorage`)
- Fully responsive layout (desktop, tablet, mobile)
- Smooth-scrolling navigation
- No build step, no dependencies, no backend
