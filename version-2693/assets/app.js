(function () {
  function ready(run) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run);
    } else {
      run();
    }
  }

  function normalize(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, "");
  }

  function initMenu() {
    var button = document.querySelector(".mobile-toggle");
    var panel = document.querySelector(".mobile-panel");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
  }

  function initHero() {
    var root = document.querySelector("[data-hero]");
    if (!root) {
      return;
    }
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll(".hero-dot"));
    var prev = root.querySelector(".hero-prev");
    var next = root.querySelector(".hero-next");
    var index = 0;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        show(dotIndex);
      });
    });

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
      });
    }

    window.setInterval(function () {
      show(index + 1);
    }, 5200);
  }

  function initCatalogFilter() {
    var grid = document.querySelector("[data-filter-grid]");
    if (!grid) {
      return;
    }
    var input = document.querySelector(".page-filter-input");
    var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter-chip]"));
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".movie-card"));
    var activeChip = "全部";

    function apply() {
      var query = normalize(input ? input.value : "");
      cards.forEach(function (card) {
        var haystack = normalize(card.getAttribute("data-search"));
        var chipMatch = activeChip === "全部" || haystack.indexOf(normalize(activeChip)) !== -1;
        var queryMatch = !query || haystack.indexOf(query) !== -1;
        card.classList.toggle("hidden-card", !(chipMatch && queryMatch));
      });
    }

    if (input) {
      input.addEventListener("input", apply);
    }

    chips.forEach(function (chip, chipIndex) {
      if (chipIndex === 0) {
        chip.classList.add("active");
      }
      chip.addEventListener("click", function () {
        activeChip = chip.getAttribute("data-filter-chip") || "全部";
        chips.forEach(function (item) {
          item.classList.toggle("active", item === chip);
        });
        apply();
      });
    });
  }

  function createResultCard(item) {
    var tags = (item.tags || []).slice(0, 3).map(function (tag) {
      return "<span>" + escapeHtml(tag) + "</span>";
    }).join("");
    return "<article class=\"movie-card\">" +
      "<a class=\"poster-link\" href=\"" + escapeAttr(item.link) + "\" aria-label=\"" + escapeAttr(item.title) + "\">" +
      "<img src=\"" + escapeAttr(item.cover) + "\" alt=\"" + escapeAttr(item.title) + "\" loading=\"lazy\">" +
      "<span class=\"poster-badge\">" + escapeHtml(item.type || "影片") + "</span>" +
      "</a>" +
      "<div class=\"movie-card-body\">" +
      "<a class=\"movie-card-title\" href=\"" + escapeAttr(item.link) + "\">" + escapeHtml(item.title) + "</a>" +
      "<p class=\"movie-card-line\">" + escapeHtml(item.oneLine || "") + "</p>" +
      "<div class=\"movie-card-meta\"><span>" + escapeHtml(item.year || "") + "</span><span>" + escapeHtml(item.region || "") + "</span></div>" +
      "<div class=\"movie-tags\">" + tags + "</div>" +
      "</div>" +
      "</article>";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function initSearchPage() {
    var results = document.querySelector("[data-search-results]");
    var summary = document.querySelector("[data-search-summary]");
    var form = document.querySelector(".search-page-form");
    var input = form ? form.querySelector("input[name='q']") : null;
    if (!results || !summary || !input || !window.__FILM_INDEX__) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    input.value = params.get("q") || "";

    function render() {
      var query = normalize(input.value);
      var items = window.__FILM_INDEX__;
      var matched = query ? items.filter(function (item) {
        var text = normalize([
          item.title,
          item.region,
          item.type,
          item.year,
          item.genre,
          (item.tags || []).join(" "),
          item.oneLine
        ].join(" "));
        return text.indexOf(query) !== -1;
      }) : items.slice(0, 48);

      var display = matched.slice(0, 120);
      summary.textContent = query ? "为你找到相关影片" : "推荐浏览以下影片";
      results.innerHTML = display.length ? display.map(createResultCard).join("") : "<div class=\"empty-state\">没有找到匹配影片</div>";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var url = new URL(window.location.href);
      if (input.value.trim()) {
        url.searchParams.set("q", input.value.trim());
      } else {
        url.searchParams.delete("q");
      }
      window.history.replaceState(null, "", url.toString());
      render();
    });

    input.addEventListener("input", render);
    render();
  }

  function initPlayers() {
    var shells = Array.prototype.slice.call(document.querySelectorAll(".player-shell"));
    shells.forEach(function (shell) {
      var video = shell.querySelector("video");
      var cover = shell.querySelector(".player-cover");
      var url = shell.getAttribute("data-video-url");
      var loaded = false;
      var hls = null;

      function load() {
        if (loaded || !video || !url) {
          return;
        }
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = url;
        } else if (window.Hls && window.Hls.isSupported()) {
          hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
          hls.loadSource(url);
          hls.attachMedia(video);
        } else {
          video.src = url;
        }
        loaded = true;
      }

      function play() {
        load();
        shell.classList.add("is-playing");
        var result = video.play();
        if (result && typeof result.catch === "function") {
          result.catch(function () {
            video.controls = true;
          });
        }
      }

      if (cover) {
        cover.addEventListener("click", play);
      }
      if (video) {
        video.addEventListener("click", function () {
          if (!loaded || video.paused) {
            play();
          }
        });
      }
      window.addEventListener("beforeunload", function () {
        if (hls && typeof hls.destroy === "function") {
          hls.destroy();
        }
      });
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initCatalogFilter();
    initSearchPage();
    initPlayers();
  });
})();
