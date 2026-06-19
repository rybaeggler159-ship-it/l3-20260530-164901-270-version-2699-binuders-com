(function () {
  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function initMobileMenu() {
    var toggle = qs('[data-menu-toggle]');
    var nav = qs('[data-mobile-nav]');

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  function initHero() {
    var hero = qs('[data-hero]');

    if (!hero) {
      return;
    }

    var slides = qsa('[data-hero-slide]', hero);
    var dots = qsa('[data-hero-dot]', hero);
    var thumbs = qsa('[data-hero-thumb]', hero);
    var prev = qs('[data-hero-prev]', hero);
    var next = qs('[data-hero-next]', hero);
    var index = 0;
    var timer = null;

    function setActive(nextIndex) {
      if (!slides.length) {
        return;
      }

      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === index);
      });

      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.classList.toggle('active', thumbIndex === index);
      });
    }

    function restartTimer() {
      if (timer) {
        window.clearInterval(timer);
      }

      timer = window.setInterval(function () {
        setActive(index + 1);
      }, 5200);
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        setActive(Number(dot.dataset.heroDot || 0));
        restartTimer();
      });
    });

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        setActive(Number(thumb.dataset.heroThumb || 0));
        restartTimer();
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        setActive(index - 1);
        restartTimer();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        setActive(index + 1);
        restartTimer();
      });
    }

    setActive(0);
    restartTimer();
  }

  function initFilters() {
    qsa('[data-filter-scope]').forEach(function (scope) {
      var search = qs('[data-card-search]', scope);
      var list = qs('[data-card-list]') || scope.nextElementSibling;
      var fields = qsa('[data-filter-field]', scope);
      var reset = qs('[data-filter-reset]', scope);
      var params = new URLSearchParams(window.location.search);

      if (search && params.get('q')) {
        search.value = params.get('q');
      }

      function matches(card) {
        var haystack = [
          card.dataset.title,
          card.dataset.category,
          card.dataset.region,
          card.dataset.type,
          card.dataset.year,
          card.dataset.tags
        ].join(' ').toLowerCase();
        var query = search ? search.value.trim().toLowerCase() : '';

        if (query && haystack.indexOf(query) === -1) {
          return false;
        }

        return fields.every(function (field) {
          var value = field.value;
          var key = field.dataset.filterField;

          if (!value) {
            return true;
          }

          return (card.dataset[key] || '') === value;
        });
      }

      function apply() {
        var cards = list ? qsa('.movie-card, .ranking-card', list) : [];

        cards.forEach(function (card) {
          card.classList.toggle('is-hidden', !matches(card));
        });
      }

      if (search) {
        search.addEventListener('input', apply);
      }

      fields.forEach(function (field) {
        field.addEventListener('change', apply);
      });

      if (reset) {
        reset.addEventListener('click', function () {
          if (search) {
            search.value = '';
          }

          fields.forEach(function (field) {
            field.value = '';
          });

          apply();
        });
      }

      apply();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initHero();
    initFilters();
  });
})();
