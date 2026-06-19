
(function () {
  function byId(id) { return document.getElementById(id); }

  function setActiveNav() {
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(function (a) {
      if (a.getAttribute('href') === path) {
        a.classList.add('active');
      }
    });
  }

  function initHeroSlider() {
    var hero = document.querySelector('[data-hero-slider]');
    if (!hero) return;
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.slide'));
    var dotsWrap = hero.querySelector('[data-dots]');
    if (!slides.length) return;
    var index = 0;
    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) {
        s.classList.toggle('active', idx === index);
      });
      if (dotsWrap) {
        Array.prototype.slice.call(dotsWrap.children).forEach(function (dot, idx) {
          dot.classList.toggle('active', idx === index);
        });
      }
    }
    if (dotsWrap) {
      slides.forEach(function (_, idx) {
        var dot = document.createElement('button');
        dot.className = 'dot' + (idx === 0 ? ' active' : '');
        dot.type = 'button';
        dot.setAttribute('aria-label', '切换到第 ' + (idx + 1) + ' 张');
        dot.addEventListener('click', function () { show(idx); });
        dotsWrap.appendChild(dot);
      });
    }
    show(0);
    var timer = setInterval(function () { show(index + 1); }, 5200);
    hero.addEventListener('mouseenter', function () { clearInterval(timer); });
    hero.addEventListener('mouseleave', function () {
      clearInterval(timer);
      timer = setInterval(function () { show(index + 1); }, 5200);
    });
  }

  function normalizeText(s) {
    return String(s || '').toLowerCase();
  }

  function filterCards(scope) {
    var root = scope || document;
    var input = root.querySelector('[data-search-input]');
    var sort = root.querySelector('[data-sort]');
    var genre = root.querySelector('[data-genre]');
    var year = root.querySelector('[data-year]');
    var cards = Array.prototype.slice.call(root.querySelectorAll('[data-search-card]'));
    if (!cards.length) return;

    function apply() {
      var q = normalizeText(input ? input.value : '');
      var g = genre ? genre.value : '';
      var y = year ? year.value : '';
      var s = sort ? sort.value : '';
      var visible = [];
      cards.forEach(function (card) {
        var text = normalizeText(card.getAttribute('data-search-keywords'));
        var genres = normalizeText(card.getAttribute('data-card-genres'));
        var cardYear = card.getAttribute('data-year-value') || '';
        var ok = (!q || text.indexOf(q) !== -1 || genres.indexOf(q) !== -1);
        ok = ok && (!g || genres.indexOf(normalizeText(g)) !== -1);
        ok = ok && (!y || cardYear === y);
        card.style.display = ok ? '' : 'none';
        if (ok) visible.push(card);
      });
      if (s) {
        visible.sort(function (a, b) {
          var ay = parseInt(a.getAttribute('data-year-value') || '0', 10);
          var by = parseInt(b.getAttribute('data-year-value') || '0', 10);
          var as = parseInt(a.getAttribute('data-hot-score') || '0', 10);
          var bs = parseInt(b.getAttribute('data-hot-score') || '0', 10);
          var at = normalizeText(a.getAttribute('data-title'));
          var bt = normalizeText(b.getAttribute('data-title'));
          if (s === 'hot-desc') return bs - as;
          if (s === 'hot-asc') return as - bs;
          if (s === 'year-desc') return by - ay;
          if (s === 'year-asc') return ay - by;
          return at.localeCompare(bt, 'zh-Hans-CN');
        });
        var parent = visible[0] ? visible[0].parentNode : null;
        if (parent) {
          visible.forEach(function (node) { parent.appendChild(node); });
        }
      }
      var counter = root.querySelector('[data-result-count]');
      if (counter) counter.textContent = visible.length;
    }

    if (input) input.addEventListener('input', apply);
    if (sort) sort.addEventListener('change', apply);
    if (genre) genre.addEventListener('change', apply);
    if (year) year.addEventListener('change', apply);
    root.querySelectorAll('[data-tag-filter]').forEach(function (tag) {
      tag.addEventListener('click', function () {
        var value = tag.getAttribute('data-tag-filter');
        if (genre) genre.value = value;
        root.querySelectorAll('[data-tag-filter]').forEach(function (x) { x.classList.remove('active'); });
        tag.classList.add('active');
        apply();
      });
    });
    apply();
  }

  function initPlayer() {
    var player = document.querySelector('[data-player]');
    if (!player) return;
    var video = player.querySelector('video');
    var btn = player.querySelector('[data-play-toggle]');
    var label = player.querySelector('[data-play-label]');
    if (!video || !btn) return;

    function sync() {
      if (label) label.textContent = video.paused ? '点击播放' : '点击暂停';
      btn.textContent = video.paused ? '▶' : '❚❚';
    }

    btn.addEventListener('click', function () {
      if (video.paused) {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        video.pause();
      }
    });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
    video.addEventListener('click', function () {
      if (video.paused) video.play(); else video.pause();
    });
    sync();

    // HLS fallback logic for future .m3u8 sources.
    var hlsSrc = video.getAttribute('data-hls-src');
    if (hlsSrc && hlsSrc.indexOf('.m3u8') !== -1) {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = hlsSrc;
      } else if (window.Hls && window.Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(hlsSrc);
        hls.attachMedia(video);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initHeroSlider();
    filterCards(document);
    initPlayer();
  });
})();
