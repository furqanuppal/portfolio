// ===== Set current year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle (light/dark) =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('portfolio-theme', theme);
}

const savedTheme = localStorage.getItem('portfolio-theme')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Back to top button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================================================
// PROFILE / SOCIAL LINK CONFIGURATION
// Edit the three values below with your real information.
// =========================================================
const PROFILE_CONFIG = {
  githubUrl: "",   // e.g. "https://github.com/furqanuppal"
  linkedinUrl: "", // e.g. "https://www.linkedin.com/in/furqanuppal/"
  email: ""        // e.g. "muhammadfurqan1165@gmail.com"
};

function applyProfileConfig() {
  const { githubUrl, linkedinUrl, email } = PROFILE_CONFIG;

  const githubLinks = [document.getElementById('githubLink'), document.getElementById('githubLinkFooter')];
  const linkedinLinks = [document.getElementById('linkedinLink'), document.getElementById('linkedinLinkFooter')];
  const emailLink = document.getElementById('emailLink');

  if (githubUrl) githubLinks.forEach(el => el && (el.href = githubUrl));
  if (linkedinUrl) linkedinLinks.forEach(el => el && (el.href = linkedinUrl));
  if (email && emailLink) emailLink.href = `mailto:${email}`;
}

applyProfileConfig();
