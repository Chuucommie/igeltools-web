// IgelTools — small progressive enhancements, no dependencies.

(() => {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');
  const navToggle = document.querySelector('.nav-toggle');

  // Header gets a hairline once the page moves.
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile navigation.
  if (nav && navToggle) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.textContent = open ? 'Close' : 'Menu';
    };

    navToggle.addEventListener('click', () => {
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  // Reveal on scroll, once per element.
  const revealables = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!revealables.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealables.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(el);
  });

  // Footer year.
  document.querySelectorAll('#year').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
