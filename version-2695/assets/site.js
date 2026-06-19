
import Hls from "./hls-vendor.js";

const byId = (id) => document.getElementById(id);

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) return;
    const within = nav.contains(event.target) || toggle.contains(event.target);
    if (!within) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initVideoShells() {
  document.querySelectorAll("[data-video-shell]").forEach((shell) => {
    const video = shell.querySelector("video");
    const playButton = shell.querySelector("[data-play-button]");
    const stream = shell.dataset.stream;
    const fallback = shell.dataset.fallback;
    if (!video) return;

    const startPlayback = () => video.play().catch(() => {});
    const attachFallback = (src) => {
      if (src) {
        video.src = src;
      }
    };

    if (stream && stream.endsWith(".m3u8") && Hls && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: false,
        lowLatencyMode: false
      });
      hls.loadSource(stream);
      hls.attachMedia(video);
      shell.__hls = hls;
    } else if (stream) {
      attachFallback(stream);
    } else {
      attachFallback(fallback);
    }

    if (fallback && !video.src) {
      video.src = fallback;
    }

    if (playButton) {
      playButton.addEventListener("click", () => {
        shell.classList.add("is-playing");
        startPlayback();
      });
    }

    video.addEventListener("play", () => shell.classList.add("is-playing"));
    video.addEventListener("pause", () => shell.classList.remove("is-playing"));
    video.addEventListener("ended", () => shell.classList.remove("is-playing"));
    shell.addEventListener("click", (event) => {
      if (event.target === video) {
        shell.classList.add("is-playing");
      }
    });
  });
}

function normalize(text) {
  return String(text || "").toLowerCase().trim();
}

function initFilterableGrids() {
  document.querySelectorAll("[data-filter-form]").forEach((form) => {
    const grid = document.querySelector(form.dataset.filterTarget || "[data-filter-grid]");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll("[data-filter-card]"));
    const countEl = form.querySelector("[data-filter-count]");
    const input = form.querySelector("[data-filter-query]");
    const year = form.querySelector("[data-filter-year]");
    const type = form.querySelector("[data-filter-type]");
    const region = form.querySelector("[data-filter-region]");
    const sort = form.querySelector("[data-filter-sort]");

    const apply = () => {
      const q = normalize(input ? input.value : "");
      const y = normalize(year ? year.value : "");
      const t = normalize(type ? type.value : "");
      const r = normalize(region ? region.value : "");
      const s = normalize(sort ? sort.value : "score");

      let shown = 0;
      const visibleCards = [];

      cards.forEach((card) => {
        const hay = normalize([
          card.dataset.title,
          card.dataset.tags,
          card.dataset.genre,
          card.dataset.region,
          card.dataset.type,
          card.dataset.year
        ].join(" "));
        const ok = (!q || hay.includes(q)) &&
          (!y || normalize(card.dataset.year) === y) &&
          (!t || normalize(card.dataset.type).includes(t)) &&
          (!r || normalize(card.dataset.region).includes(r));
        card.classList.toggle("hidden", !ok);
        if (ok) {
          shown += 1;
          visibleCards.push(card);
        }
      });

      const sorter = {
        score: (a, b) => Number(b.dataset.score || 0) - Number(a.dataset.score || 0),
        year_desc: (a, b) => Number(b.dataset.year || 0) - Number(a.dataset.year || 0),
        year_asc: (a, b) => Number(a.dataset.year || 0) - Number(b.dataset.year || 0),
        title: (a, b) => (a.dataset.title || "").localeCompare(b.dataset.title || "", "zh-Hans-CN")
      }[s] || ((a, b) => Number(b.dataset.score || 0) - Number(a.dataset.score || 0));

      visibleCards.sort(sorter).forEach((card) => grid.appendChild(card));
      if (countEl) countEl.textContent = String(shown);
    };

    [input, year, type, region, sort].forEach((el) => {
      if (!el) return;
      el.addEventListener("input", apply);
      el.addEventListener("change", apply);
    });

    apply();
  });
}

function initSearchPage() {
  const root = document.querySelector("[data-site-search]");
  if (!root || !Array.isArray(window.MOVIES_INDEX)) return;

  const input = root.querySelector("[data-search-query]");
  const category = root.querySelector("[data-search-category]");
  const year = root.querySelector("[data-search-year]");
  const type = root.querySelector("[data-search-type]");
  const sort = root.querySelector("[data-search-sort]");
  const totalEl = root.querySelector("[data-search-total]");
  const list = root.querySelector("[data-search-results]");
  if (!input || !list) return;

  const escapeHtml = (text) => String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const posterPath = (item) => item.poster || `assets/posters/${String(item.id).padStart(4, "0")}.svg`;
  const moviePath = (item) => item.url || `movies/${String(item.id).padStart(4, "0")}.html`;

  const renderCard = (item) => {
    const tags = (item.tags || []).slice(0, 4).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    return `
      <a class="movie-card" href="${moviePath(item)}" data-filter-card
         data-title="${escapeHtml(item.title)}"
         data-year="${escapeHtml(item.year)}"
         data-type="${escapeHtml(item.type)}"
         data-region="${escapeHtml(item.region)}"
         data-genre="${escapeHtml(item.genre)}"
         data-tags="${escapeHtml((item.tags || []).join(" "))}"
         data-score="${escapeHtml(item.score)}">
        <div class="cover">
          <img src="${posterPath(item)}" alt="${escapeHtml(item.title)}">
          <div class="card-badge">${escapeHtml(item.year)} · ${escapeHtml(item.type)}</div>
        </div>
        <div class="content">
          <h3 class="title">${escapeHtml(item.title)}</h3>
          <div class="meta-row">
            <span>${escapeHtml(item.region)}</span>
            <span class="dot">${escapeHtml(item.genre)}</span>
          </div>
          <div class="tag-row">${tags}</div>
        </div>
      </a>
    `;
  };

  const render = () => {
    const q = normalize(input.value);
    const cat = normalize(category ? category.value : "");
    const y = normalize(year ? year.value : "");
    const t = normalize(type ? type.value : "");
    const s = normalize(sort ? sort.value : "score");

    let items = window.MOVIES_INDEX.filter((item) => {
      const hay = normalize([
        item.title,
        item.region,
        item.type,
        item.genre,
        item.summary,
        (item.tags || []).join(" "),
        item.category
      ].join(" "));
      return (!q || hay.includes(q)) &&
        (!cat || normalize(item.category) === cat) &&
        (!y || normalize(item.year) === y) &&
        (!t || normalize(item.type).includes(t));
    });

    const sorter = {
      score: (a, b) => Number(b.score || 0) - Number(a.score || 0),
      year_desc: (a, b) => Number(b.year || 0) - Number(a.year || 0),
      year_asc: (a, b) => Number(a.year || 0) - Number(b.year || 0),
      title: (a, b) => (a.title || "").localeCompare(b.title || "", "zh-Hans-CN")
    }[s] || ((a, b) => Number(b.score || 0) - Number(a.score || 0));

    items = items.sort(sorter);
    if (totalEl) totalEl.textContent = String(items.length);
    list.innerHTML = items.slice(0, 96).map(renderCard).join("");
  };

  [input, category, year, type, sort].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  render();
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;
  const toggle = () => {
    button.classList.toggle("hidden", window.scrollY < 500);
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initVideoShells();
  initFilterableGrids();
  initSearchPage();
  initBackToTop();
});
