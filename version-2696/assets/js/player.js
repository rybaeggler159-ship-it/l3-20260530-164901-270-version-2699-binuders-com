(function () {
  var scriptUrl = document.currentScript ? document.currentScript.src : '';
  var vendorUrl = scriptUrl ? new URL('hls-vendor-dru42stk.js', scriptUrl).href : 'hls-vendor-dru42stk.js';
  var hlsPromise = null;

  function loadHlsModule() {
    if (!hlsPromise) {
      hlsPromise = import(vendorUrl).then(function (module) {
        return module.H;
      });
    }

    return hlsPromise;
  }

  function setStatus(status, message) {
    if (!status) {
      return;
    }

    status.textContent = message;
    status.classList.remove('hidden');
  }

  function hideStatus(status) {
    if (status) {
      status.classList.add('hidden');
    }
  }

  function initPlayer(root) {
    var video = root.querySelector('video');
    var start = root.querySelector('[data-player-start]');
    var status = root.querySelector('[data-player-status]');
    var source = root.dataset.videoSrc;
    var hlsInstance = null;
    var initialized = false;

    if (!video || !start || !source) {
      setStatus(status, '播放器初始化失败：缺少 video 或播放源。');
      return;
    }

    function playVideo() {
      var playResult = video.play();

      if (playResult && typeof playResult.catch === 'function') {
        playResult.catch(function () {
          setStatus(status, '浏览器阻止自动播放，请再次点击播放器播放。');
        });
      }
    }

    function attachWithNativeHls() {
      video.src = source;
      video.addEventListener('loadedmetadata', function () {
        hideStatus(status);
        playVideo();
      }, { once: true });
      video.load();
    }

    function attachWithHls(Hls) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90
      });

      hlsInstance.loadSource(source);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
        hideStatus(status);
        playVideo();
      });
      hlsInstance.on(Hls.Events.ERROR, function (event, data) {
        if (!data || !data.fatal) {
          return;
        }

        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          setStatus(status, '网络加载异常，正在重试播放源。');
          hlsInstance.startLoad();
          return;
        }

        if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          setStatus(status, '媒体解码异常，正在尝试恢复。');
          hlsInstance.recoverMediaError();
          return;
        }

        setStatus(status, '播放源暂时无法加载，请刷新重试。');
      });
    }

    function startPlayback() {
      if (initialized) {
        playVideo();
        return;
      }

      initialized = true;
      start.classList.add('hidden');
      setStatus(status, '正在加载播放源...');

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        attachWithNativeHls();
        return;
      }

      loadHlsModule()
        .then(function (Hls) {
          if (Hls && Hls.isSupported()) {
            attachWithHls(Hls);
            return;
          }

          attachWithNativeHls();
        })
        .catch(function () {
          attachWithNativeHls();
        });
    }

    start.addEventListener('click', startPlayback);
    video.addEventListener('click', function () {
      if (!initialized) {
        startPlayback();
      }
    });
    video.addEventListener('play', function () {
      start.classList.add('hidden');
      hideStatus(status);
    });
    window.addEventListener('beforeunload', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.call(document.querySelectorAll('[data-player]')).forEach(initPlayer);
  });
})();
