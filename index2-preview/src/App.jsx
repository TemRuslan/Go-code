import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Layers, 
  Monitor, 
  Smartphone, 
  Users, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  Zap,
  ArrowRight,
  Target,
  Rocket,
  Layout,
  Code2,
  Server,
  Cloud,
  Briefcase,
  Mail,
  Gamepad2
} from 'lucide-react';

const App = () => {
  const [viewMode, setViewMode] = useState('b2b');
  const [activePage, setActivePage] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const TELEGRAM_URL = 'https://t.me/gocode_studio';
  const MAIL_TO_URL = 'mailto:hello@gogravity.tech';
  const openTelegram = () => window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');

  const viewModeLabels = { b2b: 'VR/3D', games: 'GAMEDEV', web: 'WEB' };
  const currentViewModeLabel = viewModeLabels[viewMode] || viewMode.toUpperCase();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const themes = {
    b2b: {
      primary: 'text-blue-600',
      bgGradient: 'from-blue-50 via-white to-blue-50/30',
      accentBg: 'bg-blue-600',
      accentLight: 'bg-blue-50',
      border: 'border-blue-100',
      shadow: 'shadow-blue-200',
      techStack: 'Unity 3D • C# • OpenXR • NVIDIA Omniverse'
    },
    games: {
      primary: 'text-indigo-600',
      bgGradient: 'from-indigo-50 via-white to-purple-50/30',
      accentBg: 'bg-indigo-600',
      accentLight: 'bg-indigo-50',
      border: 'border-indigo-100',
      shadow: 'shadow-indigo-200',
      techStack: 'Unreal Engine 5 • C++ • Blender • Photon'
    },
    web: {
      primary: 'text-violet-600',
      bgGradient: 'from-violet-50 via-white to-fuchsia-50/30',
      accentBg: 'bg-violet-600',
      accentLight: 'bg-violet-50',
      border: 'border-violet-100',
      shadow: 'shadow-violet-200',
      techStack: 'React • Next.js • Node.js • PostgreSQL'
    }
  };

  const currentTheme = themes[viewMode];

  const allServices = {
    b2b: [
      { id: 'service-vr-sim', title: 'VR Симуляторы', description: 'Безопасная отработка опасных операций.', icon: <Box className="w-5 h-5" />, longDesc: 'Промышленные VR-тренажеры для обучения персонала работе на опасных объектах.' },
      { id: 'service-3d-atlas', title: '3D Атласы', description: 'Кросс-платформенные цифровые двойники.', icon: <Layers className="w-5 h-5" />, longDesc: 'Интерактивные 3D-модели оборудования с детальной визуализацией всех узлов.' },
      { id: 'service-training', title: 'Обучающие системы', description: 'Интерактивные видео и ПО для персонала.', icon: <Monitor className="w-5 h-5" />, longDesc: 'Комплексные LMS-системы с элементами геймификации для корпоративного обучения.' },
      { id: 'service-exhibitions', title: 'Стендовая активность', description: 'Презентации для выставок и киосков.', icon: <Target className="w-5 h-5" />, longDesc: 'Интерактивные инсталляции и AR-презентации для маркетинговых мероприятий.' }
    ],
    games: [
      { id: 'service-mobile', title: 'Мобильные игры', description: 'Разработка под iOS и Android.', icon: <Smartphone className="w-5 h-5" /> },
      { id: 'service-gamedesign', title: 'Геймдизайн', description: 'Механики, баланс и экономика.', icon: <Rocket className="w-5 h-5" /> },
      { id: 'service-art', title: 'Арт и Анимация', description: '3D моделирование и персонажи.', icon: <Users className="w-5 h-5" /> },
      { id: 'service-pc', title: 'PC Разработка', description: 'Игры для Steam и Epic Store.', icon: <Gamepad2 className="w-5 h-5" /> }
    ],
    web: [
      { id: 'service-frontend', title: 'Frontend', description: 'React и Next.js интерфейсы.', icon: <Layout className="w-5 h-5" /> },
      { id: 'service-backend', title: 'Backend', description: 'Масштабируемая архитектура.', icon: <Server className="w-5 h-5" /> },
      { id: 'service-saas', title: 'SaaS', description: 'Облачные бизнес-сервисы.', icon: <Cloud className="w-5 h-5" /> },
      { id: 'service-api', title: 'API & Интеграции', description: 'Синхронизация данных.', icon: <Code2 className="w-5 h-5" /> }
    ]
  };

  const projectItems = {
    b2b: [
      {
        id: 'project-vr-rzd',
        title: 'Локомотив VR для РЖД',
        category: 'VR',
        client: 'РЖД',
        description: 'VR-проект для презентации/обучения с интерактивными сценариями.',
        media: [
          { type: 'pdf', title: 'Презентация (PDF)', src: 'projects/Локомотив VR для РЖД.pdf' }
        ]
      },
      {
        id: 'project-cgi-ads',
        title: 'CGI Ads',
        category: 'CGI',
        description: 'Видеоматериалы по CGI-проекту: ролик, рендер и таймлайн.',
        media: [
          { type: 'video', title: 'Видео-презентация', src: 'projects/Video presentation CGI Ads.mov' },
          { type: 'video', title: 'Demo render', src: 'projects/Demo render 1.mov' },
          { type: 'video', title: 'Cooker timeline', src: 'projects/Cooker Timeline 2.mov' }
        ]
      },
      {
        id: 'project-cgi-demo',
        title: 'CGI Demo',
        category: 'CGI',
        description: 'Демонстрационный CGI-ролик.',
        media: [
          { type: 'video', title: 'CGI Demo', src: 'projects/CGI Demo.mp4' }
        ]
      },
      {
        id: 'project-cgi-cartoon',
        title: 'CGI Cartoon',
        category: 'CGI',
        description: 'Стилизованный CGI-мульт.',
        media: [
          { type: 'video', title: 'CGI Cartoon', src: 'projects/CGI Cartoon.mp4' }
        ]
      },
      {
        id: 'project-3d-skaven',
        title: '3D модель (Skaven)',
        category: '3D',
        description: '3D-модель персонажа: демонстрация качества и детализации.',
        media: [
          { type: 'video', title: '3D model skaven', src: 'projects/3D model skaven.mp4' }
        ]
      }
    ],
    games: [
      {
        id: 'project-shooter-proto',
        title: 'Прототип шутера',
        category: 'Gameplay',
        description: 'Две версии демо геймплея прототипа.',
        media: [
          { type: 'video', title: 'Shooter demo', src: 'projects/shoter game.mp4' },
          { type: 'video', title: 'Shooter demo 2', src: 'projects/shoter game 2.mp4' }
        ]
      },
      {
        id: 'project-fight-proto',
        title: 'Прототип файтинга',
        category: 'Gameplay',
        description: 'Геймплейные демо прототипа.',
        media: [
          { type: 'video', title: 'Fight demo', src: 'projects/fight game.mp4' },
          { type: 'video', title: 'Fight demo 2', src: 'projects/fight game video 2.mp4' }
        ]
      },
      {
        id: 'project-space-demo',
        title: 'Космическая игра (демо)',
        category: 'Gameplay',
        description: 'Демо геймплея.',
        media: [
          { type: 'video', title: 'Space game demo', src: 'projects/space game.mp4' }
        ]
      },
      {
        id: 'project-crazy-gan',
        title: 'Crazy gan game (демо)',
        category: 'Gameplay',
        description: 'Демо геймплея.',
        media: [
          { type: 'video', title: 'Crazy gan game demo', src: 'projects/crazy gan game.mp4' }
        ]
      }
    ],
    web: [
      {
        id: 'project-uae-panel',
        title: 'Интерактивная панель для недвижимости в ОАЭ',
        category: 'Web',
        description: 'Интерактивная панель/презентация для недвижимости: структура, сценарии, UI.',
        media: [
          { type: 'pdf', title: 'Презентация (PDF)', src: 'projects/Интерактивная панель для недвижимости в ОАЭ.pdf' }
        ]
      }
    ]
  };

  const currentServices = allServices[viewMode];
  const currentProjects = projectItems[viewMode];

  const handleViewModeChange = (newMode) => {
    if (activePage.startsWith('service-')) {
      setActivePage(allServices[newMode][0].id);
    } 
    else if (activePage.startsWith('project-')) {
      setActivePage(projectItems[newMode][0].id);
    }
    setViewMode(newMode);
  };

  const homeContent = {
    b2b: { tag: 'Промышленность', title: "Инженерные решения в ", accentTitle: "3D & VR", desc: "Разрабатываем VR-симуляторы и 3D-атласы для тяжелой промышленности." },
    games: { tag: 'Gamedev', title: "Разработка игр ", accentTitle: "мирового уровня", desc: "Студия разработки мобильных и десктопных игр полного цикла." },
    web: { tag: 'Web Dev', title: "Проектируем ", accentTitle: "сложный WEB", desc: "Создаем современные веб-сервисы и высоконагруженные системы." }
  };

  const Breadcrumbs = () => {
    if (activePage === 'home') return null;
    
    let path = [
      { label: 'Главная', page: 'home' },
      { label: currentViewModeLabel, page: 'home' }
    ];
    
    if (activePage === 'projects') {
      path.push({ label: 'Проекты', page: 'projects' });
    } else if (activePage.startsWith('service-')) {
      const service = Object.values(allServices).flat().find(s => s.id === activePage);
      path.push({ label: service?.title || 'Услуга', page: activePage });
    } else if (activePage.startsWith('project-')) {
      path.push({ label: 'Проекты', page: 'projects' });
      const project = Object.values(projectItems).flat().find(p => p.id === activePage);
      path.push({ label: project?.title || 'Проект', page: activePage });
    }

    return (
      <div className="max-w-7xl mx-auto px-6 pt-24 -mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        {path.map((item, index) => (
          <React.Fragment key={index}>
            <button 
              onClick={() => setActivePage(item.page)}
              className={`hover:text-slate-900 transition-colors ${index === path.length - 1 ? 'text-slate-900' : ''}`}
            >
              {item.label}
            </button>
            {index < path.length - 1 && <ChevronRight size={10} />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const Navbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="shrink-0">
            <button onClick={() => setActivePage('home')} className="flex items-center gap-3 outline-none group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">G</div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Go Gravity</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex bg-slate-200/50 backdrop-blur-md p-1 rounded-full border border-slate-200">
          {['b2b', 'games', 'web'].map((mode) => (
            <button 
              key={mode}
              onClick={() => handleViewModeChange(mode)}
              className={`px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${viewMode === mode ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {mode === 'b2b' ? 'VR&3D' : mode === 'games' ? 'Gamedev' : 'Web'}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-2 mr-4">
            {/* Исправлено: Обертка для услуг теперь корректно обрабатывает onMouseLeave для закрытия */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-bold px-4 py-2 transition-colors ${activePage.startsWith('service') ? currentTheme.primary : 'text-slate-600'}`}
              >
                Услуги <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <>
                  {/* Hover-bridge: закрывает "зазор" между кнопкой и меню, чтобы избежать мерцания при наведении */}
                  <div className="absolute top-full right-0 w-64 h-2 z-50" />
                  <div 
                    className="absolute top-full right-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-3xl p-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  >
                    {currentServices.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => { setActivePage(s.id); setIsServicesOpen(false); }}
                        className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors text-left"
                      >
                        <div className={`p-2 rounded-lg ${currentTheme.accentLight} ${currentTheme.primary}`}>
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{s.title}</div>
                          <div className="text-[10px] text-slate-400">Перейти</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setActivePage('projects')} className={`text-sm font-bold px-4 py-2 transition-colors ${activePage === 'projects' || activePage.startsWith('project') ? currentTheme.primary : 'text-slate-600 hover:text-slate-900'}`}>
              Проекты
            </button>
          </div>

          <button 
            onClick={openTelegram}
            className={`px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-500 shadow-lg ${currentTheme.accentBg} ${currentTheme.shadow}`}
          >
            Написать в Telegram
          </button>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6 shadow-2xl">
          <div className="grid gap-6">
            <div className="space-y-3">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Навигация</div>
              <button onClick={() => { setActivePage('home'); setIsMobileMenuOpen(false); }} className="block text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Главная</button>
              <button onClick={() => { setActivePage('projects'); setIsMobileMenuOpen(false); }} className="block text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Проекты</button>
              <button onClick={() => { openTelegram(); setIsMobileMenuOpen(false); }} className="block text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors">Написать в Telegram</button>
            </div>
            <div className="h-px bg-slate-100 w-full" />
            <div className="space-y-3">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Услуги · {currentViewModeLabel}</div>
              {currentServices.map(s => (
                <button key={s.id} onClick={() => { setActivePage(s.id); setIsMobileMenuOpen(false); }} className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors">{s.title}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const MobileTabBar = () => (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[60] bg-white/70 backdrop-blur-xl rounded-3xl p-1 flex shadow-xl border border-slate-200/70">
      {['b2b', 'games', 'web'].map((mode) => (
        <button 
          key={mode}
          onClick={() => handleViewModeChange(mode)}
          className={`flex-1 py-3 rounded-2xl transition-all text-[10px] font-semibold uppercase tracking-wider ${viewMode === mode ? 'bg-slate-900/10 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
        >
          {mode === 'b2b' ? 'VR/3D' : mode === 'games' ? 'GAMEDEV' : 'WEB'}
        </button>
      ))}
    </div>
  );

  const ProjectDetailPage = ({ project }) => (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${currentTheme.accentLight} ${currentTheme.primary}`}>
            <Briefcase size={12} /> {project.category}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase">{project.title}</h1>
          {(project.client || project.year) && (
            <div className="grid grid-cols-2 gap-12 border-y border-slate-100 py-8">
              <div className={project.client ? '' : 'opacity-0 pointer-events-none'}>
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Клиент</div>
                <div className="font-bold text-slate-900">{project.client}</div>
              </div>
              <div className={project.year ? '' : 'opacity-0 pointer-events-none'}>
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Год</div>
                <div className="font-bold text-slate-900">{project.year}</div>
              </div>
            </div>
          )}
          <p className="text-xl text-slate-500 font-medium leading-relaxed">{project.description}</p>
          <button onClick={openTelegram} className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-white shadow-2xl ${currentTheme.accentBg}`}>
            Написать в Telegram
          </button>
        </div>
        
        <div className="space-y-6">
          {project.media?.length ? (
            <>
              {project.media.map((m, idx) => {
                const url = encodeURI(m.src);
                const label = m.title || (m.type === 'pdf' ? 'Презентация' : 'Видео');

                return (
                  <div key={`${m.src}-${idx}`} className="bg-white rounded-[3rem] border border-slate-100 p-4 shadow-xl">
                    <div className="px-4 pt-3 pb-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</div>
                    </div>

                    {m.type === 'video' ? (
                      <div className="px-4 pb-4 space-y-3">
                        <video
                          src={url}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full rounded-[2.5rem] border border-slate-100 bg-black/5"
                        />
                        <a href={url} target="_blank" rel="noreferrer" className={`inline-flex text-xs font-bold uppercase tracking-widest ${currentTheme.primary} hover:underline`}>
                          Открыть видео в новой вкладке
                        </a>
                      </div>
                    ) : (
                      <div className="px-4 pb-4 space-y-3">
                        <a href={url} target="_blank" rel="noreferrer" className={`inline-flex text-xs font-bold uppercase tracking-widest ${currentTheme.primary} hover:underline`}>
                          Открыть PDF в новой вкладке
                        </a>
                        <iframe
                          title={label}
                          src={url}
                          className="w-full h-[520px] rounded-[2.5rem] border border-slate-100 bg-white"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden flex items-center justify-center relative shadow-inner">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${currentTheme.accentBg}`} />
              <div className="text-slate-300 font-black text-2xl uppercase tracking-[1em]">Project</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ServiceDetailPage = ({ service }) => (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl ${currentTheme.accentBg}`}>
            {service.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">{service.title}</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">{service.longDesc || service.description}</p>
          <div className="pt-8 flex gap-4">
            <button onClick={openTelegram} className={`px-10 py-5 rounded-2xl font-bold text-white shadow-2xl ${currentTheme.accentBg}`}>Написать в Telegram</button>
          </div>
        </div>
        <div className="bg-white rounded-[3rem] border border-slate-100 p-10 shadow-xl">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Технологический стек</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Unity 3D', 'C# / .NET', 'WebXR', 'Compute Shaders', 'PostgreSQL', 'Docker'].map(tech => (
              <div key={tech} className="p-4 bg-slate-50 rounded-2xl text-slate-600 font-bold text-sm text-center border border-slate-100/50">{tech}</div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
             <div className="text-xs font-bold uppercase text-slate-400 mb-2">Методология</div>
             <p className="text-sm text-slate-600 italic">"Мы используем Agile-подход с двухнедельными спринтами и регулярными демо для заказчика."</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsListPage = () => (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 animate-in fade-in duration-700">
      <div className="mb-16">
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tighter text-slate-900">Наши проекты</h1>
        <p className="text-slate-500 text-xl font-medium">Портфолио в сегменте <span className={currentTheme.primary}>{currentViewModeLabel}</span></p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {currentProjects.map((project) => {
          const primaryMedia = project.media?.[0];
          const mediaTag = primaryMedia ? (primaryMedia.type === 'pdf' ? 'PDF' : 'VIDEO') : null;

          return (
            <button 
              key={project.id}
              onClick={() => setActivePage(project.id)}
              className="group text-left relative rounded-[2.5rem] bg-white border border-slate-100 p-4 transition-all hover:shadow-2xl"
            >
              <div className="aspect-[16/10] bg-slate-100 rounded-[2rem] mb-6 flex items-center justify-center relative overflow-hidden text-slate-900">
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${currentTheme.accentBg}`} />
                <div className="text-slate-200 font-black text-2xl uppercase tracking-widest text-center px-6">{project.title}</div>
                {mediaTag && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-slate-700 border border-white/50">
                    {mediaTag}
                  </div>
                )}
              </div>
              <div className="px-4 pb-4 flex justify-between items-end">
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${currentTheme.primary}`}>{project.category}</div>
                  <h3 className="text-2xl font-black text-slate-900">{project.title}</h3>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${currentTheme.accentBg} opacity-0 group-hover:opacity-100 transition-all`}>
                  <ChevronRight size={20} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const Hero = () => {
    const content = homeContent[viewMode];
    return (
      <section className="relative pt-32 pb-20 md:pt-48 lg:pt-56 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 text-slate-900">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${currentTheme.accentLight} ${currentTheme.primary} ${currentTheme.border}`}>
              <Zap size={12} fill="currentColor" /> {content.tag}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.85] text-slate-900 tracking-tight">
              {content.title} <span className={`block ${currentTheme.primary}`}>{content.accentTitle}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium">{content.desc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <button onClick={() => setActivePage('projects')} className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-white shadow-2xl transition-all ${currentTheme.accentBg} ${currentTheme.shadow}`}>
                Все проекты
              </button>
              
              <div className="text-left hidden sm:block">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400/80">
                  {currentTheme.techStack}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl relative">
             <div className="aspect-square rounded-[3.5rem] bg-white/40 border border-white/80 backdrop-blur-2xl shadow-xl flex items-center justify-center overflow-hidden">
                <div className={`w-64 h-64 relative transition-all duration-1000 ${viewMode === 'b2b' ? 'rotate-0' : viewMode === 'games' ? 'rotate-[135deg]' : 'rotate-[225deg]'}`}>
                   <div className={`absolute inset-0 border-[20px] rounded-[3rem] opacity-20 ${viewMode === 'b2b' ? 'border-blue-500' : viewMode === 'games' ? 'border-indigo-500' : 'border-violet-500'}`} />
                   <div className={`absolute inset-20 bg-gradient-to-br rounded-2xl shadow-2xl ${viewMode === 'b2b' ? 'from-blue-500 to-indigo-600' : viewMode === 'games' ? 'from-indigo-600 to-purple-700' : 'from-violet-500 to-fuchsia-600'}`} />
                </div>
             </div>
          </div>
        </div>
      </section>
    );
  };

  const ServiceCards = () => (
    <section className="py-24 px-6 bg-white/50 backdrop-blur-3xl text-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight uppercase">Основные направления</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service) => (
            <button 
              key={service.id}
              onClick={() => setActivePage(service.id)}
              className={`group p-8 rounded-[2.5rem] border transition-all hover:-translate-y-2 flex flex-col justify-between min-h-[300px] text-left ${(service.id === 'service-vr-sim' || service.id === 'service-3d-atlas') ? `${currentTheme.accentLight} ${currentTheme.border} shadow-lg` : 'bg-white/70 border-slate-100'}`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${(service.id === 'service-vr-sim' || service.id === 'service-3d-atlas') ? `${currentTheme.accentBg} text-white` : 'bg-slate-100 text-slate-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all self-end">
                <ArrowRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="pt-20 pb-12 px-6 border-t border-slate-100 bg-white/70 backdrop-blur-md text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          <div className="space-y-6">
            <button onClick={() => setActivePage('home')} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">G</div>
              <span className="text-xl font-bold text-slate-900">Go Gravity</span>
            </button>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[320px]">
              Разрабатываем VR/3D продукты, игры и веб-сервисы. Основаны в 2018.
            </p>
            <button onClick={openTelegram} className={`text-sm font-semibold ${currentTheme.primary} hover:underline`}>
              Написать в Telegram
            </button>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-6">Навигация</h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li><button onClick={() => setActivePage('home')} className="hover:text-slate-900 transition-colors">Главная</button></li>
              <li><button onClick={() => setActivePage('projects')} className="hover:text-slate-900 transition-colors">Проекты</button></li>
              <li><button onClick={() => setActivePage(allServices[viewMode][0].id)} className="hover:text-slate-900 transition-colors">Услуги</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-6">Контакты</h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                  <Mail size={16} />
                </span>
                <a href={MAIL_TO_URL} className="hover:text-slate-900 transition-colors">hello@gogravity.tech</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-black">@</span>
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">@gocode_studio</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          <p>© 2018–{currentYear} Go Gravity Studio</p>
          <p>VR/3D • GameDev • Web</p>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    if (activePage === 'projects') return ProjectsListPage();
    
    const foundService = Object.values(allServices).flat().find(s => s.id === activePage);
    if (foundService) return ServiceDetailPage({ service: foundService });

    const foundProject = Object.values(projectItems).flat().find(p => p.id === activePage);
    if (foundProject) return ProjectDetailPage({ project: foundProject });
    
    return (
      <>
        {Hero()}
        {ServiceCards()}
      </>
    );
  };

  return (
    <div className={`min-h-screen font-sans text-slate-900 overflow-x-hidden transition-colors duration-1000 bg-gradient-to-br pb-32 lg:pb-0 ${currentTheme.bgGradient}`}>
      {Navbar()}
      {Breadcrumbs()}
      {/* Force page-level remount only when route changes (keeps hover menu state from retriggering page animations). */}
      <div key={activePage}>{renderContent()}</div>
      {Footer()}
      {MobileTabBar()}
    </div>
  );
};

export default App;
