/* face-lock landing — interactive polish
   - Copy buttons on install commands
   - Reveal on scroll (subtle, not janky)
   - Sticky-nav shadow on scroll
*/

(function () {
  'use strict';

  // ——— Copy buttons ———
  document.querySelectorAll('.copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = 'copied ✔';
        btn.style.color = 'var(--acc)';
        btn.style.borderColor = 'var(--acc)';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 1400);
      } catch (e) {
        btn.textContent = 'press ⌘+C';
        setTimeout(() => (btn.textContent = 'copy'), 1400);
      }
    });
  });

  // ——— Sticky nav shadow on scroll ———
  const nav = document.querySelector('.nav');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 8) {
      nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.04), 0 12px 40px -20px rgba(0,0,0,0.6)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ——— Reveal on scroll (IntersectionObserver, very subtle) ———
  const revealTargets = document.querySelectorAll(
    '.section__head, .state, .card, .install__step, .terminal'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in'));
  }

  // ——— Smooth anchor scrolling with offset for sticky nav ———
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
