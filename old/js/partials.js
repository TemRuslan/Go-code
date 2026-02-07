(function () {
  var already = window.__gocode_partials_ready;
  if (already && typeof already.then === 'function') {
    return;
  }

  var run = async function () {
    var headerHost = document.getElementById('site-header');
    var footerHost = document.getElementById('site-footer');
    if (!headerHost && !footerHost) return;

    var path = window.location.pathname || '';
    var inBlogFolder = path.indexOf('/blog/') !== -1;
    var basePrefix = inBlogFolder ? '../' : './';

    // Fallbacks are used when fetch() is blocked (e.g. opening via file://) or fails.
    // Keep these aligned with includes/header.html and includes/footer.html.
    var FALLBACK_HEADER =
      '<header class="fixed top-0 w-full border-b border-gray-100">' +
      '  <nav class="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">' +
      '    <a href="{{BASE}}index.html" class="flex items-center gap-3">' +
      '      <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black tracking-tight">G</div>' +
      '      <div class="leading-tight">' +
      '        <div class="font-extrabold text-lg tracking-tight text-gray-900">Go-code</div>' +
      '        <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 -mt-0.5">VR / 3D / Unity Studio</div>' +
      '      </div>' +
      '    </a>' +
      '    <div class="hidden md:flex gap-8 items-center text-sm font-semibold text-gray-600">' +
      '      <a href="{{BASE}}index.html" class="nav-link">Главная</a>' +
      '      <a href="{{BASE}}directions.html" class="nav-link">Направления</a>' +
      '      <a href="{{BASE}}projects.html" class="nav-link">Проекты</a>' +
      '      <a href="{{BASE}}blog.html" class="nav-link">Блог</a>' +
      '      <a href="{{BASE}}index.html#contact" class="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors">Обсудить проект</a>' +
      '    </div>' +
      '    <button id="burger-btn" class="md:hidden p-2 text-slate-600 focus:outline-none" aria-label="Открыть меню">' +
      '      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
      '        <path id="burger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />' +
      '        <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />' +
      '      </svg>' +
      '    </button>' +
      '    <div id="mobile-menu" class="absolute top-full left-0 w-full mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl md:hidden overflow-hidden">' +
      '      <div class="flex flex-col p-6 space-y-4 text-slate-700 font-medium">' +
      '        <a href="{{BASE}}index.html" class="hover:text-indigo-600 transition-colors py-2 border-b border-slate-100">Главная</a>' +
      '        <a href="{{BASE}}directions.html" class="hover:text-indigo-600 transition-colors py-2 border-b border-slate-100">Направления</a>' +
      '        <a href="{{BASE}}projects.html" class="hover:text-indigo-600 transition-colors py-2 border-b border-slate-100">Проекты</a>' +
      '        <a href="{{BASE}}blog.html" class="hover:text-indigo-600 transition-colors py-2 border-b border-slate-100">Блог</a>' +
      '        <a href="{{BASE}}index.html#contact" class="w-full mt-4 px-6 py-3 rounded-xl text-white font-medium bg-indigo-600 text-center">Обсудить проект</a>' +
      '      </div>' +
      '    </div>' +
      '  </nav>' +
      '</header>';

    var FALLBACK_FOOTER =
      '<footer class="py-12 border-t border-gray-100 bg-white">' +
      '  <div class="max-w-7xl mx-auto px-6">' +
      '    <div class="flex flex-col md:flex-row justify-between items-start gap-8">' +
      '      <div class="text-sm text-gray-500 space-y-2">' +
      '        <a href="{{BASE}}index.html" class="flex items-center gap-2">' +
      '          <div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>' +
      '          <span class="font-bold text-gray-900">Go-code</span>' +
      '        </a>' +
      '        <div class="text-gray-500">Студия VR/3D/Unity-разработки</div>' +
      '        <div class="text-gray-500">От прототипа до продакшна: дизайн, 3D, разработка, QA</div>' +
      '      </div>' +
      '      <div class="text-sm text-gray-500 space-y-2 md:text-right">' +
      '        <div class="font-semibold text-gray-700">Контакты</div>' +
      '        <div><a class="hover:text-indigo-600 transition-colors" href="https://t.me/gocode_studio">@gocode_studio</a></div>' +
      '        <div><a class="hover:text-indigo-600 transition-colors" href="mailto:hello@gocode.studio">hello@gocode.studio</a></div>' +
      '      </div>' +
      '    </div>' +
      '    <p class="text-sm text-gray-400 text-center mt-6">&copy; 2024–2026. Все права защищены.</p>' +
      '  </div>' +
      '</footer>';

    var replaceBase = function (html) {
      return html.replace(/\{\{BASE\}\}/g, basePrefix);
    };

    var loadPartial = async function (url) {
      var response = await fetch(url, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error('Failed to load ' + url + ': ' + response.status);
      }
      return response.text();
    };

    var tasks = [];

    if (headerHost) {
      tasks.push(
        loadPartial(basePrefix + 'includes/header.html')
          .then(function (html) {
            headerHost.innerHTML = replaceBase(html);
          })
          .catch(function (err) {
            console.warn('[partials] header fallback:', err);
            headerHost.innerHTML = replaceBase(FALLBACK_HEADER);
          })
      );
    }

    if (footerHost) {
      tasks.push(
        loadPartial(basePrefix + 'includes/footer.html')
          .then(function (html) {
            footerHost.innerHTML = replaceBase(html);
          })
          .catch(function (err) {
            console.warn('[partials] footer fallback:', err);
            footerHost.innerHTML = replaceBase(FALLBACK_FOOTER);
          })
      );
    }

    await Promise.all(tasks);

    var headerNode = document.querySelector('#site-header');
    if (headerNode) {
      var currentPath = path.split('/').pop() || 'index.html';
      var isArticle = inBlogFolder && currentPath && currentPath !== 'blog.html';
      var links = headerNode.querySelectorAll('a.nav-link');
      var isDirection = currentPath.indexOf('direction-') === 0;
      var isHome = currentPath === '' || currentPath === 'index.html';

      links.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var clean = href.split('#')[0];
        var file = clean.split('/').pop();
        var isActive = false;

        if (isDirection && file === 'directions.html') {
          isActive = true;
        } else if (isHome && file === 'index.html') {
          isActive = true;
        } else if (isArticle && file === 'blog.html') {
          isActive = true;
        } else if (file === currentPath) {
          isActive = true;
        }

        if (isActive) {
          link.classList.add('text-indigo-600');
        }
      });
    }

    document.dispatchEvent(new CustomEvent('gocode-partials-loaded'));
  };

  window.__gocode_partials_ready = run().catch(function (err) {
    console.error('[partials]', err);
  });
})();
