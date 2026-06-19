(function () {
  const video = document.getElementById('movie-player');
  const button = document.querySelector('.player-start');
  const streamNode = document.getElementById('movie-stream');
  if (!video || !button || !streamNode) {
    return;
  }

  let stream = '';
  try {
    stream = JSON.parse(streamNode.textContent).src || '';
  } catch (error) {
    stream = '';
  }

  let ready = false;
  let hlsInstance = null;

  function attachWithHls() {
    if (!stream || ready) {
      return Promise.resolve();
    }
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream;
      ready = true;
      return Promise.resolve();
    }
    return loadHls().then(function () {
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(stream);
        hlsInstance.attachMedia(video);
        ready = true;
      } else {
        video.src = stream;
        ready = true;
      }
    });
  }

  function loadHls() {
    if (window.Hls) {
      return Promise.resolve();
    }
    return new Promise(function (resolve, reject) {
      const existing = document.querySelector('script[data-hls-library]');
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js';
      script.async = true;
      script.setAttribute('data-hls-library', 'true');
      script.addEventListener('load', resolve, { once: true });
      script.addEventListener('error', reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function playVideo() {
    button.classList.add('is-loading');
    attachWithHls().then(function () {
      button.classList.remove('is-loading');
      button.classList.add('is-hidden');
      const promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          button.classList.remove('is-hidden');
        });
      }
    }).catch(function () {
      button.classList.remove('is-loading');
      button.classList.remove('is-hidden');
    });
  }

  button.addEventListener('click', playVideo);
  video.addEventListener('play', function () {
    button.classList.add('is-hidden');
  });
  video.addEventListener('pause', function () {
    if (!video.ended) {
      button.classList.remove('is-hidden');
    }
  });
  video.addEventListener('ended', function () {
    button.classList.remove('is-hidden');
  });

  window.addEventListener('beforeunload', function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
})();
