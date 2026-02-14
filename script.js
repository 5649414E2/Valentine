/* ============================================================
   LUXURY VALENTINE'S WEBSITE — SHARED JAVASCRIPT
   Stars, Hearts, Navigation, Animations
   ============================================================ */

// ── Star Field ────────────────────────────────────────────
function initStars() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random();
      stars.push({
        x:          Math.random() * width,
        y:          Math.random() * height,
        radius:     0.3 + size * 1.5,
        alpha:      0.1 + Math.random() * 0.9,
        alphaDir:   Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: 0.002 + Math.random() * 0.008,
        color:      pickStarColor(size),
      });
    }
  }

  function pickStarColor(size) {
    const r = Math.random();
    if (r < 0.6) return 'rgba(245,228,176,';  // gold-pale — most stars
    if (r < 0.8) return 'rgba(255,180,210,';  // pink
    if (r < 0.9) return 'rgba(200,180,255,';  // lavender
    return 'rgba(255,255,255,';               // pure white sparkles
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(s => {
      // Twinkle
      s.alpha += s.alphaDir * s.alphaSpeed;
      if (s.alpha > 1 || s.alpha < 0.05) s.alphaDir *= -1;

      ctx.save();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

      // Glow for larger stars
      if (s.radius > 1.2) {
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 4);
        gradient.addColorStop(0, s.color + s.alpha + ')');
        gradient.addColorStop(1, s.color + '0)');
        ctx.fillStyle = gradient;
        ctx.arc(s.x, s.y, s.radius * 4, 0, Math.PI * 2);
      } else {
        ctx.fillStyle = s.color + s.alpha + ')';
      }

      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  resize();
  createStars(180);
  draw();

  window.addEventListener('resize', () => {
    resize();
    createStars(180);
  });
}

// ── Floating Hearts ───────────────────────────────────────
const HEART_EMOJIS = ['♥', '❤', '💕', '💖', '💗', '💝', '❣'];

function createHeart(container, forced = false) {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];

  const size    = 0.8 + Math.random() * 1.4;
  const left    = Math.random() * 100;
  const dur     = 8 + Math.random() * 12;
  const delay   = forced ? Math.random() * 2 : Math.random() * 8;
  const colors  = ['#ff6b9d', '#c9a84c', '#ffb3cc', '#e8c97e', '#ff8fb3'];
  const color   = colors[Math.floor(Math.random() * colors.length)];

  heart.style.cssText = `
    left: ${left}%;
    font-size: ${size}rem;
    animation-duration: ${dur}s;
    animation-delay: ${delay}s;
    color: ${color};
    filter: drop-shadow(0 0 4px ${color}88);
  `;

  container.appendChild(heart);
  setTimeout(() => heart.remove(), (dur + delay) * 1000);
}

function initHearts(intensityMultiplier = 1) {
  const container = document.querySelector('.hearts-container');
  if (!container) return;

  // Initial burst
  for (let i = 0; i < Math.round(12 * intensityMultiplier); i++) {
    createHeart(container, true);
  }

  // Ongoing spawn
  const interval = Math.round(1800 / intensityMultiplier);
  setInterval(() => {
    createHeart(container);
    if (Math.random() > 0.6) createHeart(container);
  }, interval);
}

// ── Intersection Observer for Fade-In ─────────────────────
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => observer.observe(el));
}

// ── Active Nav Link ───────────────────────────────────────
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Page Transition ───────────────────────────────────────
function initPageTransition() {
  const overlay = document.querySelector('.page-transition');
  if (!overlay) return;

  // Fade in on load
  setTimeout(() => overlay.classList.remove('active'), 100);

  // Fade out on navigate
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => window.location.href = href, 600);
      });
    }
  });
}

// ── Parallax Subtle Mouse Move ────────────────────────────
function initParallax() {
  document.addEventListener('mousemove', (e) => {
    const mx = (e.clientX / window.innerWidth  - 0.5) * 2; // -1 to 1
    const my = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.015;
      el.style.transform = `translate(${mx * speed * 30}px, ${my * speed * 20}px)`;
    });
  });
}

// ── Init All ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initHearts();
  initFadeIn();
  setActiveNav();
  initPageTransition();
  initParallax();
});
