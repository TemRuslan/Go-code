/* Go-code site JS: partials sync, navigation, blog, small interactive helpers. */

if (window.__gocode_main_loaded) {
  // Prevent duplicate execution.
} else {
  window.__gocode_main_loaded = true;

  (function () {
    var initBurgerMenu = function () {
      var burgerBtn = document.getElementById('burger-btn');
      var mobileMenu = document.getElementById('mobile-menu');
      var burgerIcon = document.getElementById('burger-icon');
      var closeIcon = document.getElementById('close-icon');

      if (!burgerBtn || !mobileMenu || !burgerIcon || !closeIcon) return false;
      if (burgerBtn.__gocodeBound) return true;
      burgerBtn.__gocodeBound = true;

      var closeMobileMenu = function () {
        mobileMenu.classList.remove('active');
        burgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      };

      var openMobileMenu = function () {
        mobileMenu.classList.add('active');
        burgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      };

      burgerBtn.addEventListener('click', function () {
        var isActive = mobileMenu.classList.contains('active');
        if (isActive) closeMobileMenu();
        else openMobileMenu();
      }, { passive: true });

      document.addEventListener('click', function (event) {
        if (!mobileMenu.classList.contains('active')) return;
        var target = event.target;
        if (!target) return;
        if (mobileMenu.contains(target) || burgerBtn.contains(target)) return;
        closeMobileMenu();
      });

      document.addEventListener('click', function (event) {
        var target = event.target;
        if (!target) return;
        if (mobileMenu.contains(target) && target.tagName === 'A') closeMobileMenu();
      });

      return true;
    };

    var enableSmoothAnchors = function () {
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          var targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;
          var targetEl = document.querySelector(targetId);
          if (!targetEl) return;
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };

    var enableRevealCards = function () {
      var cards = document.querySelectorAll('.glass-card');
      if (!cards.length || typeof IntersectionObserver === 'undefined') return;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      }, { threshold: 0.1 });

      cards.forEach(function (card) {
        card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
        observer.observe(card);
      });
    };

    var enableProjectFilters = function () {
      var grid = document.getElementById('projectGrid');
      if (!grid) return;

      var buttons = document.querySelectorAll('[data-project-filter]');
      if (!buttons.length) return;

      var items = Array.prototype.slice.call(grid.querySelectorAll('[data-project-tags]'));

      var setActive = function (activeValue) {
        buttons.forEach(function (btn) {
          btn.classList.toggle('active', btn.getAttribute('data-project-filter') === activeValue);
        });
      };

      var apply = function (filterValue) {
        setActive(filterValue);
        items.forEach(function (item) {
          var tags = (item.getAttribute('data-project-tags') || '').split(',').map(function (s) { return s.trim(); });
          var show = filterValue === 'all' || tags.indexOf(filterValue) !== -1;
          item.classList.toggle('hidden', !show);
        });
      };

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          apply(btn.getAttribute('data-project-filter') || 'all');
        });
      });

      apply('all');
    };

    /* Blog (as in aipool): a single JS source of truth + template article pages. */
    var enableBlog = function () {
      var articles = [
        {
          id: 1,
          slug: 'unity-vr-trainers',
          title: 'Как мы проектируем VR‑тренажеры на Unity: сценарии, UX, контроль ошибок',
          category: 'VR Training',
          image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: 'Пайплайн, который помогает делать тренажеры стабильными, понятными и проверяемыми, а не “вау‑демо на 2 минуты”.',
          contentHtml:
            '<p>VR‑тренажер ценен не графикой, а тем, что он <strong>формирует навык</strong> и <strong>фиксирует ошибки</strong>. Мы начинаем с карты сценариев: шаги, условия, точки контроля, допуски и типовые “плохие” действия пользователя.</p>' +
            '<p>Дальше делаем быстрый прототип в Unity: навигация, взаимодействия, подсказки, телеметрия. Только после UX‑валидации уходим в полноценный 3D‑продакшн и оптимизацию под целевые устройства (PCVR / автономные шлемы).</p>' +
            '<p>На выходе вы получаете сборки, исходники (по договоренности), документацию, и опционально: отчеты по прохождению, статистику ошибок и экспорт результатов обучения.</p>'
        },
        {
          id: 2,
          slug: 'vr-simulators-industrial',
          title: 'Иммерсивные VR‑симуляторы для промки: от идеи до стенда',
          category: 'VR Sim',
          image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: 'Как сделать симулятор, который работает в реальных условиях презентаций: быстро, стабильно и с понятной “историей”.',
          contentHtml:
            '<p>VR‑симулятор для промышленности часто живет на выставках и презентациях. Там важны: быстрый вход, устойчивость, понятный сюжет и возможность “показать за 3 минуты”.</p>' +
            '<p>Мы проектируем опыт как короткий сценарий: цель, интерактивные точки, финальный эффект. Технически: надежная сборка, авто‑рестарт, логирование, простая панель управления для персонала стенда.</p>' +
            '<p>Если нужна драматургия, мы делаем “контрастные” сценарии (например, последствия правильного и неправильного поведения) так, чтобы это не выглядело как аттракцион, а работало на смысл.</p>'
        },
        {
          id: 3,
          slug: '3d-atlas-industrial',
          title: '3D‑атлас оборудования: кроссплатформа + VR‑режим без лишней сложности',
          category: '3D Atlas',
          image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: '3D‑атласы для промки, которые одинаково хорошо работают на ПК, iOS/Android и при необходимости “включают VR”.',
          contentHtml:
            '<p>3D‑атлас помогает объяснять устройство оборудования, узлы, технологический процесс и обслуживание. Сильная сторона такого продукта: он масштабируется на разные аудитории и каналы.</p>' +
            '<p>Мы делаем кроссплатформенную реализацию: ПК, iPhone/iPad, Android‑устройства. При необходимости добавляем VR‑режим как отдельный сценарий, не ломая основную архитектуру.</p>' +
            '<p>Ключевые требования: легкий вес ассетов, корректные LOD, предсказуемая навигация, режим “разборки” и контекстные подписи.</p>'
        },
        {
          id: 4,
          slug: 'quest-performance-checklist',
          title: 'Чек‑лист производительности для VR (Quest/PCVR): FPS, LOD, свет, шейдеры',
          category: 'Tech',
          image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: 'Практический список, который мы используем, чтобы проекты не “умирали” на автономных шлемах и слабых ПК.',
          contentHtml:
            '<p>VR не про “красиво”, если падает FPS. Мы начинаем с бюджета: целевой FPS, треугольники, материалы, пост‑эффекты, количество динамических источников света.</p>' +
            '<p>Дальше: LOD‑группы и импосторы, атласирование текстур, оптимизация шейдеров, bake‑свет, профилирование CPU/GPU, и контроль сборок под разные устройства.</p>' +
            '<p>В результате получаем предсказуемую производительность и проект, который комфортно демонстрировать и реально использовать в обучении.</p>'
        },
        {
          id: 5,
          slug: 'unity-360-tour',
          title: '360‑тур на Unity: как превратить панорамы в интерактивный продукт',
          category: 'Unity',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: 'Когда нужен быстрый результат, но хочется интерактива, логики и “продуктовой” подачи.',
          contentHtml:
            '<p>360‑тур часто начинается как “сделайте панорамы”, а заканчивается интерактивным продуктом: хотспоты, подсказки, режим презентации, локализация, сбор статистики кликов.</p>' +
            '<p>Unity удобен, потому что дает единый стек под разные платформы, и позволяет постепенно наращивать функциональность без переписывания.</p>' +
            '<p>Мы делали такие задачи на Unity: важно правильно упаковать контент, обеспечить стабильность и сделать управление понятным без обучения.</p>'
        },
        {
          id: 6,
          slug: '3d-pipeline-production',
          title: 'Production‑пайплайн 3D: моделлинг → скульпт → анимация → интеграция → QA',
          category: 'Pipeline',
          image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1400',
          date: '07 Фев 2026',
          excerpt: 'Почему “у нас большая команда” важно показывать как конвейер качества, а не как список профессий.',
          contentHtml:
            '<p>Сильная студия отличается не количеством людей, а тем, как выстроены роли и контроль качества. Мы работаем как production‑линия: концепт и требования → 3D‑производство → интеграция в Unity → тестирование и оптимизация → поставка.</p>' +
            '<p>В команде: программисты, аниматоры, моделлеры, скульптеры, QA, геймдизайнеры, чертежники и проектировщики. Каждый этап имеет критерии приемки: визуал, производительность, UX и стабильность.</p>' +
            '<p>Такой подход особенно важен в VR и промышленных проектах, где демонстрация и реальная эксплуатация требуют одинаково высокой надежности.</p>'
        }
      ];

      var grid = document.getElementById('blogGrid');
      if (grid) {
        var createCard = function (article) {
          return (
            '<a class="blog-card glass-card rounded-[2rem] overflow-hidden flex flex-col cursor-pointer" href="./blog/' + article.slug + '.html">' +
              '<div class="h-48 overflow-hidden relative">' +
                '<img src="' + article.image + '" alt="' + article.title + '" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">' +
                '<div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-indigo-600">' +
                  article.category +
                '</div>' +
              '</div>' +
              '<div class="p-6 flex-1 flex flex-col">' +
                '<div class="text-gray-400 text-[10px] font-bold uppercase mb-2">' + article.date + '</div>' +
                '<h3 class="text-xl font-extrabold mb-3 leading-tight">' + article.title + '</h3>' +
                '<p class="text-sm text-gray-500 mb-6 line-clamp-2">' + article.excerpt + '</p>' +
                '<div class="mt-auto flex items-center text-indigo-600 font-bold text-xs">' +
                  'Читать далее' +
                  '<svg class="ml-2" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
                '</div>' +
              '</div>' +
            '</a>'
          );
        };

        grid.innerHTML = articles.map(createCard).join('');
      }

      var stream = document.getElementById('articleStream');
      if (stream) {
        var breadcrumbTitle = document.getElementById('articleBreadcrumbTitle');
        var currentSlug = document.body.getAttribute('data-article') || '';
        var startIndex = Math.max(0, articles.findIndex(function (a) { return a.slug === currentSlug; }));
        var nextIndex = startIndex;
        var currentUrl = '';

        var basePrefix = location.pathname.indexOf('/Go-code/') !== -1 ? '/Go-code/' : '/';

        var updateBreadcrumb = function (article) {
          if (!breadcrumbTitle) return;
          breadcrumbTitle.textContent = article.title;
        };

        var updateUrl = function (article) {
          var nextUrl = basePrefix + 'blog/' + article.slug + '.html';
          if (currentUrl === nextUrl) return;
          currentUrl = nextUrl;
          history.replaceState({}, '', nextUrl);
          document.title = article.title + ' — Go-code';
          updateBreadcrumb(article);
        };

        var renderArticle = function (article) {
          var section = document.createElement('section');
          section.className = 'article-section mb-16 last:mb-0';
          section.setAttribute('data-slug', article.slug);
          section.innerHTML =
            '<div class="article-hero">' +
              '<img src="' + article.image + '" alt="' + article.title + '" class="w-full h-64 md:h-96 object-cover rounded-[28px]">' +
            '</div>' +
            '<div class="mt-8">' +
              '<div class="flex items-center gap-4 mb-6">' +
                '<span class="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">' +
                  article.category +
                '</span>' +
                '<span class="text-gray-400 font-bold text-xs uppercase">' + article.date + '</span>' +
              '</div>' +
              '<h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900">' + article.title + '</h2>' +
              '<div class="article-content">' +
                article.contentHtml +
                '<p class="mt-6"><strong>Нужен похожий продукт?</strong> Напишите нам в Telegram: <a class="text-indigo-600 font-bold hover:underline" href="https://t.me/gocode_studio">@gocode_studio</a></p>' +
              '</div>' +
            '</div>';
          return section;
        };

        var observeSection = function (section) {
          if (typeof IntersectionObserver === 'undefined') return;
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              var slug = entry.target.getAttribute('data-slug');
              var article = articles.find(function (a) { return a.slug === slug; });
              if (article) updateUrl(article);
            });
          }, { threshold: 0.6 });
          observer.observe(section);
        };

        var sentinel = document.createElement('div');
        sentinel.className = 'article-sentinel h-10';

        var appendNext = function () {
          if (!articles.length) return;
          if (nextIndex >= articles.length) nextIndex = 0;
          var section = renderArticle(articles[nextIndex]);
          stream.insertBefore(section, sentinel);
          observeSection(section);
          nextIndex += 1;
        };

        stream.appendChild(sentinel);

        if (typeof IntersectionObserver !== 'undefined') {
          var sentinelObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) appendNext();
            });
          }, { rootMargin: '300px' });
          sentinelObserver.observe(sentinel);
        }

        appendNext();
        appendNext();

        var first = articles[startIndex] || articles[0];
        if (first) updateUrl(first);
      }
    };

    var start = function () {
      initBurgerMenu();
      enableSmoothAnchors();
      enableRevealCards();
      enableProjectFilters();
      enableBlog();
    };

    var waitForPartials = function () {
      if (window.__gocode_partials_ready && typeof window.__gocode_partials_ready.then === 'function') {
        window.__gocode_partials_ready.then(start).catch(start);
        return;
      }

      var onPartialsLoaded = function () {
        document.removeEventListener('gocode-partials-loaded', onPartialsLoaded);
        start();
      };
      document.addEventListener('gocode-partials-loaded', onPartialsLoaded, { once: true });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
      } else {
        start();
      }
    };

    waitForPartials();
  })();
}

