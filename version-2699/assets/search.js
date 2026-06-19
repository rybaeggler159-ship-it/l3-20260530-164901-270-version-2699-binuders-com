(function () {
  const input = document.getElementById('search-input');
  const region = document.getElementById('search-region');
  const type = document.getElementById('search-type');
  const results = document.getElementById('search-results');
  const summary = document.getElementById('search-summary');
  if (!input || !region || !type || !results || !summary || typeof siteMovies === 'undefined') {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  input.value = params.get('q') || '';

  function matches(movie, query) {
    if (!query) {
      return true;
    }
    const haystack = [
      movie.title,
      movie.region,
      movie.type,
      movie.year,
      movie.genre,
      movie.oneLine,
      movie.tags.join(' ')
    ].join(' ').toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  function render() {
    const query = input.value.trim();
    const regionValue = region.value;
    const typeValue = type.value;
    const filtered = siteMovies.filter(function (movie) {
      return matches(movie, query) &&
        (!regionValue || movie.regionGroup === regionValue) &&
        (!typeValue || movie.typeGroup === typeValue);
    }).slice(0, 120);
    summary.textContent = filtered.length ? '为你找到以下相关作品' : '暂无匹配作品';
    results.innerHTML = filtered.map(function (movie) {
      const tags = movie.tags.slice(0, 3).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');
      return '<article class="movie-card small">' +
        '<a href="' + movie.url + '" class="card-link" aria-label="' + escapeHtml(movie.title) + '">' +
        '<span class="poster-frame">' +
        '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
        '<span class="play-chip">▶</span>' +
        '</span>' +
        '<span class="card-content">' +
        '<strong>' + escapeHtml(movie.title) + '</strong>' +
        '<span class="card-meta">' + escapeHtml(movie.year + ' · ' + movie.region + ' · ' + movie.type) + '</span>' +
        '<span class="card-desc">' + escapeHtml(movie.oneLine) + '</span>' +
        '<span class="tag-row">' + tags + '</span>' +
        '</span>' +
        '</a>' +
        '</article>';
    }).join('');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[char];
    });
  }

  input.addEventListener('input', render);
  region.addEventListener('change', render);
  type.addEventListener('change', render);
  render();
})();
