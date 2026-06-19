(function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
      menuButton.textContent = mobileNav.classList.contains('is-open') ? '×' : '☰';
    });
  }

  const slider = document.querySelector('[data-hero-slider]');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(slider.querySelectorAll('[data-hero-dot]'));
    const prev = slider.querySelector('[data-hero-prev]');
    const next = slider.querySelector('[data-hero-next]');
    let active = 0;
    const show = function (index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === active);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === active);
      });
    };
    if (prev) {
      prev.addEventListener('click', function () {
        show(active - 1);
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        show(active + 1);
      });
    }
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        show(index);
      });
    });
    setInterval(function () {
      show(active + 1);
    }, 5500);
  }

  const localInput = document.querySelector('[data-local-search]');
  if (localInput) {
    const cards = Array.from(document.querySelectorAll('[data-card]'));
    localInput.addEventListener('input', function () {
      const query = localInput.value.trim().toLowerCase();
      cards.forEach(function (card) {
        const haystack = [card.dataset.title, card.dataset.tags, card.dataset.region, card.dataset.type].join(' ').toLowerCase();
        card.style.display = !query || haystack.includes(query) ? '' : 'none';
      });
    });
  }
})();
