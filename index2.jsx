import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Cpu, 
  Gamepad2, 
  Layers, 
  Monitor, 
  Smartphone, 
  Users, 
  ChevronRight, 
  Menu, 
  X,
  Globe,
  Zap,
  ArrowRight,
  Target,
  Rocket,
  Layout,
  Code2,
  Server,
  Cloud
} from 'lucide-react';

const App = () => {
  const [viewMode, setViewMode] = useState('b2b');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Цветовые схемы для каждого направления
  const themes = {
    b2b: {
      primary: 'text-blue-600',
      bgGradient: 'from-blue-50 via-white to-blue-50/30',
      accentBg: 'bg-blue-600',
      accentLight: 'bg-blue-50',
      border: 'border-blue-100',
      glow: 'bg-blue-400',
      shadow: 'shadow-blue-200'
    },
    games: {
      primary: 'text-indigo-600',
      bgGradient: 'from-indigo-50 via-white to-purple-50/30',
      accentBg: 'bg-indigo-600',
      accentLight: 'bg-indigo-50',
      border: 'border-indigo-100',
      glow: 'bg-purple-400',
      shadow: 'shadow-indigo-200'
    },
    web: {
      primary: 'text-violet-600',
      bgGradient: 'from-violet-50 via-white to-fuchsia-50/30',
      accentBg: 'bg-violet-600',
      accentLight: 'bg-violet-50',
      border: 'border-violet-100',
      glow: 'bg-fuchsia-400',
      shadow: 'shadow-violet-200'
    }
  };

  const currentTheme = themes[viewMode];

  const b2bContent = {
    tag: 'Промышленность и бизнес',
    title: "Инженерные решения в ",
    accentTitle: "3D & VR",
    description: "Разрабатываем высокотехнологичные VR-симуляторы и 3D-атласы для тяжелой промышленности. Сокращаем расходы на обучение персонала и визуализируем сложные процессы.",
    projects: ["РЖД", "СБЕРБАНК", "БЕЛAЗ"],
    services: [
      { id: 'vr-sim', title: 'VR Симуляторы', description: 'Безопасная отработка опасных операций.', icon: <Box className="w-8 h-8" />, highlight: true },
      { id: '3d-atlas', title: '3D Атласы', description: 'Кросс-платформенные цифровые двойники.', icon: <Layers className="w-8 h-8" />, highlight: true },
      { id: 'training', title: 'Обучающие системы', description: 'Интерактивные видео и ПО для персонала.', icon: <Monitor className="w-8 h-8" /> },
      { id: 'exhibitions', title: 'Стендовая активность', description: 'Презентации для выставок и сенсорных киосков.', icon: <Target className="w-8 h-8" /> }
    ]
  };

  const gamesContent = {
    tag: 'Студия разработки игр',
    title: "Разработка игр ",
    accentTitle: "мирового уровня",
    description: "Студия разработки мобильных игр полного цикла. От гиперказуальных хитов до глубоких иммерсивных проектов. Более 6 000 000 игроков по всему миру.",
    projects: ["APP STORE", "GOOGLE PLAY", "STEAM"],
    services: [
      { id: 'mobile-games', title: 'Мобильные игры', description: 'Разработка под iOS and Android на Unity.', icon: <Gamepad2 className="w-8 h-8" />, highlight: true },
      { id: 'game-design', title: 'Геймдизайн', description: 'Проработка механик, баланса и монетизации.', icon: <Rocket className="w-8 h-8" />, highlight: true },
      { id: 'animation', title: '3D Анимация', description: 'Скульптурирование и риггинг персонажей.', icon: <Users className="w-8 h-8" /> },
      { id: 'pc-dev', title: 'Разработка для ПК', description: 'Создание высокопроизводительных игр для десктопа.', icon: <Monitor className="w-8 h-8" /> }
    ]
  };

  const webContent = {
    tag: 'Web & Highload разработка',
    title: "Проектируем ",
    accentTitle: "сложный WEB",
    description: "Создаем современные веб-сервисы, корпоративные порталы и масштабируемые API. Используем передовой стек технологий для реализации ваших бизнес-задач.",
    projects: ["NEXT.JS", "REACT", "NODE.JS"],
    services: [
      { id: 'frontend', title: 'Frontend разработка', description: 'Быстрые и адаптивные интерфейсы на React.', icon: <Layout className="w-8 h-8" />, highlight: true },
      { id: 'backend', title: 'Backend & API', description: 'Надежная серверная логика и архитектура.', icon: <Server className="w-8 h-8" />, highlight: true },
      { id: 'saas', title: 'SaaS Решения', description: 'Облачные сервисы с высокой доступностью.', icon: <Cloud className="w-8 h-8" /> },
      { id: 'integration', title: 'Интеграции', description: 'Синхронизация с ERP, CRM и внешними сервисами.', icon: <Code2 className="w-8 h-8" /> }
    ]
  };

  const getContent = () => {
    switch(viewMode) {
      case 'games': return gamesContent;
      case 'web': return webContent;
      default: return b2bContent;
    }
  };

  const current = getContent();

  const Navbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Go Gravity</span>
        </div>

        {/* Переключатель: px-6 py-2 обеспечивает сбалансированные отступы со всех сторон */}
        <div className="hidden lg:flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-full border border-slate-200 mx-4">
          <button 
            onClick={() => setViewMode('b2b')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${viewMode === 'b2b' ? 'bg-white text-blue-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            B2B Решения
          </button>
          <button 
            onClick={() => setViewMode('games')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${viewMode === 'games' ? 'bg-white text-indigo-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Gamedev
          </button>
          <button 
            onClick={() => setViewMode('web')}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${viewMode === 'web' ? 'bg-white text-violet-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Web разработка
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Проекты</a>
          <button className={`px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-500 shadow-lg ${currentTheme.accentBg} ${currentTheme.shadow}`}>
            Начать проект
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );

  return (
    <div className={`min-h-screen font-sans text-slate-900 overflow-x-hidden transition-colors duration-1000 bg-gradient-to-br ${currentTheme.bgGradient}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 lg:pt-56 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute -top-20 -right-20 w-[600px] h-[600px] transition-all duration-1000 blur-[120px] rounded-full mix-blend-multiply opacity-50 ${
            viewMode === 'b2b' ? 'bg-blue-200' : viewMode === 'games' ? 'bg-indigo-200' : 'bg-violet-200'
          }`} />
          <div className={`absolute top-1/2 -left-20 w-[400px] h-[400px] transition-all duration-1000 blur-[100px] rounded-full mix-blend-multiply opacity-40 ${
            viewMode === 'b2b' ? 'bg-cyan-100' : viewMode === 'games' ? 'bg-purple-200' : 'bg-fuchsia-100'
          }`} />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left duration-700 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ${currentTheme.accentLight} ${currentTheme.primary} ${currentTheme.border}`}>
              <Zap size={12} fill="currentColor" /> 
              {current.tag}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-slate-900 tracking-tight">
              {current.title} 
              <span className={`block transition-colors duration-700 ${currentTheme.primary}`}>
                {current.accentTitle}
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {current.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-white shadow-2xl transition-all duration-500 active:scale-95 text-lg ${currentTheme.accentBg} ${currentTheme.shadow} hover:brightness-110`}>
                Смотреть {viewMode === 'b2b' ? 'кейсы' : 'проекты'}
              </button>
              
              <div className="hidden sm:flex items-center gap-6 px-8 py-5 border-l border-slate-200 ml-0 lg:ml-4">
                {current.projects.map((p, i) => (
                  <span key={i} className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl perspective-1000 group mx-auto">
            <div className="relative z-10 w-full aspect-square rounded-[3.5rem] bg-white/40 border border-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-1 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
              
              <div className={`w-48 h-48 sm:w-64 sm:h-64 relative transition-all duration-1000 ${
                viewMode === 'b2b' ? 'rotate-0' : viewMode === 'games' ? 'rotate-[135deg]' : 'rotate-[225deg]'
              }`}>
                <div className={`absolute inset-0 border-[20px] rounded-[3rem] opacity-20 transition-all duration-700 ${
                  viewMode === 'b2b' ? 'border-blue-500' : viewMode === 'games' ? 'border-indigo-500' : 'border-violet-500'
                }`} />
                <div className={`absolute inset-8 sm:inset-10 border-[15px] rounded-[2rem] opacity-40 transition-all duration-700 ${
                  viewMode === 'b2b' ? 'border-blue-400' : viewMode === 'games' ? 'border-indigo-400' : 'border-violet-400'
                }`} />
                <div className={`absolute inset-16 sm:inset-20 bg-gradient-to-br rounded-2xl shadow-2xl transition-all duration-1000 ${
                  viewMode === 'b2b' ? 'from-blue-500 to-indigo-600 scale-100' : 
                  viewMode === 'games' ? 'from-indigo-600 to-purple-700 scale-110' : 
                  'from-violet-500 to-fuchsia-600 scale-105'
                }`} />
              </div>

              <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 p-5 sm:p-6 rounded-3xl bg-white/60 border border-white/40 backdrop-blur-md transition-all duration-500 group-hover:translate-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Status</div>
                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      {viewMode === 'b2b' ? 'Active Production' : viewMode === 'games' ? 'Studio Online' : 'Cloud Synchronized'}
                    </div>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-700 ${currentTheme.accentBg}`}>
                    {viewMode === 'b2b' ? <Cpu size={20}/> : viewMode === 'games' ? <Gamepad2 size={20}/> : <Globe size={20}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative transition-colors duration-1000 bg-white/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20 space-y-4 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight transition-all">
              {viewMode === 'b2b' ? 'Промышленные решения' : viewMode === 'games' ? 'Игровая разработка' : 'Web & Cloud решения'}
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl font-medium">
              {viewMode === 'b2b' 
                ? 'Мы автоматизируем обучение и проектирование через VR-технологии.' 
                : viewMode === 'games' 
                ? 'Создаем миры, в которые хочется возвращаться. Unity-экспертиза мирового уровня.' 
                : 'Проектируем архитектуру, которая растет вместе с вашим бизнесом.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {current.services.map((service, idx) => (
              <div 
                key={idx}
                className={`group p-8 lg:p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between min-h-[340px] lg:h-[380px] ${
                  service.highlight 
                  ? `${currentTheme.accentLight} ${currentTheme.border} shadow-xl`
                  : 'bg-white/70 border-slate-100 hover:shadow-2xl'
                }`}
              >
                <div>
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    service.highlight 
                    ? `${currentTheme.accentBg} text-white ${currentTheme.shadow}`
                    : 'bg-slate-100 text-slate-600'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-transparent transition-all duration-300 self-end ${
                  viewMode === 'b2b' ? 'group-hover:bg-blue-600 group-hover:text-white' : 
                  viewMode === 'games' ? 'group-hover:bg-indigo-600 group-hover:text-white' : 
                  'group-hover:bg-violet-600 group-hover:text-white'
                }`}>
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Block */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'b2b' ? (
            <div className="bg-slate-900 rounded-[3rem] lg:rounded-[4rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden relative shadow-3xl animate-in fade-in zoom-in duration-700">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
              <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
                <div className="text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase italic">#High-Performance</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">3D Атласы нового поколения</h2>
                <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">Замена бумажной документации интерактивными цифровыми копиями.</p>
                <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all text-lg">Запросить демо</button>
              </div>
              <div className="flex-1 w-full bg-slate-800/50 rounded-3xl p-4 border border-slate-700/50 backdrop-blur-sm">
                <div className="aspect-video rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center">
                   <div className="text-slate-700 font-mono text-xs sm:text-sm">[ 3D VIEWER ACTIVE ]</div>
                </div>
              </div>
            </div>
          ) : viewMode === 'games' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700">
              {[
                { val: "5M+", lab: "Игроков в хитах", color: "text-indigo-600" },
                { val: "1M+", lab: "Active Users", color: "text-purple-600" },
                { val: "26+", lab: "Live Projects", color: "text-blue-600" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 border border-slate-100 p-10 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] text-center shadow-sm hover:shadow-xl transition-all backdrop-blur-md">
                  <div className={`text-4xl lg:text-5xl font-black mb-4 ${stat.color}`}>{stat.val}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.lab}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-violet-950 rounded-[3rem] lg:rounded-[4rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden relative shadow-3xl animate-in fade-in zoom-in duration-700">
               <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
                <div className="text-violet-400 font-bold tracking-[0.3em] text-[10px] uppercase italic">#Modern-Stack</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">Scalable Web Ecosystems</h2>
                <p className="text-violet-100/60 text-lg lg:text-xl leading-relaxed">Превращаем идеи в работающие цифровые продукты с высокой конверсией.</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                   <div className="px-4 py-2 bg-violet-900/50 border border-violet-800 rounded-lg text-violet-300 text-xs font-mono">React</div>
                   <div className="px-4 py-2 bg-violet-900/50 border border-violet-800 rounded-lg text-violet-300 text-xs font-mono">Node.js</div>
                   <div className="px-4 py-2 bg-violet-900/50 border border-violet-800 rounded-lg text-violet-300 text-xs font-mono">AWS</div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                   <div className="w-48 h-64 sm:w-64 sm:h-80 bg-violet-500/20 rounded-2xl border border-violet-500/30 backdrop-blur-xl animate-pulse" />
                   <div className="absolute -top-6 -left-6 w-48 h-64 sm:w-64 sm:h-80 bg-violet-500/10 rounded-2xl border border-violet-500/20 backdrop-blur-xl rotate-6" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-slate-100 transition-colors duration-1000 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
          <div className="max-w-sm space-y-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
              <span className="text-2xl font-bold">Go Gravity</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">Студия разработки ПО. Три направления — одна безупречная экспертиза в создании цифрового будущего.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="space-y-6">
              <div className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-900">Enterprise</div>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">VR Тренажеры</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">3D Атласы</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-900">Digital</div>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Gamedev</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Web Apps</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-900">Go Gravity</div>
              <div className="text-slate-500 text-sm font-semibold leading-relaxed">hello@go-gravity.ru<br/>г. Москва, IT-Hub</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] flex flex-col sm:flex-row justify-between gap-4 text-center">
           <div>© 2024 Go Gravity development unit</div>
           <div className="hidden sm:block">Built with high-end architecture</div>
        </div>
      </footer>
    </div>
  );
};

export default App;