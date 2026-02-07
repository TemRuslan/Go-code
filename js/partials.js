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
        loadPartial(basePrefix + 'includes/header.html').then(function (html) {
          headerHost.innerHTML = replaceBase(html);
        })
      );
    }

    if (footerHost) {
      tasks.push(
        loadPartial(basePrefix + 'includes/footer.html').then(function (html) {
          footerHost.innerHTML = replaceBase(html);
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
