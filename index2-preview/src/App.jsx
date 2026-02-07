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
  Rocket
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

  const current = viewMode === 'b2b' ? b2bContent : gamesContent;

  const Navbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Go Gravity</span>
        </div>

        <div className="hidden lg:flex bg-slate-200/50 backdrop-blur-md p-1 rounded-full border border-slate-200">
          <button 
            onClick={() => setViewMode('b2b')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${viewMode === 'b2b' ? 'bg-white text-blue-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            B2B Решения
          </button>
          <button 
            onClick={() => setViewMode('games')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${viewMode === 'games' ? 'bg-white text-indigo-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Gamedev Студия
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
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
      <section className="relative pt-32 pb-20 md:pt-56 md:pb-32 px-6 overflow-hidden">
        {/* Анимированные пятна фона */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute -top-20 -right-20 w-[600px] h-[600px] transition-all duration-1000 blur-[120px] rounded-full mix-blend-multiply opacity-50 ${viewMode === 'b2b' ? 'bg-blue-200' : 'bg-indigo-200'}`} />
          <div className={`absolute top-1/2 -left-20 w-[400px] h-[400px] transition-all duration-1000 blur-[100px] rounded-full mix-blend-multiply opacity-40 ${viewMode === 'b2b' ? 'bg-cyan-100' : 'bg-purple-200'}`} />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left duration-700">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ${currentTheme.accentLight} ${currentTheme.primary} ${currentTheme.border}`}>
              <Zap size={12} fill="currentColor" /> 
              {current.tag}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 tracking-tight">
              {current.title} 
              <span className={`block transition-colors duration-700 ${currentTheme.primary}`}>
                {current.accentTitle}
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              {current.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-white shadow-2xl transition-all duration-500 active:scale-95 text-lg ${currentTheme.accentBg} ${currentTheme.shadow} hover:brightness-110`}>
                Смотреть {viewMode === 'b2b' ? 'кейсы' : 'проекты'}
              </button>
              
              <div className="hidden sm:flex items-center gap-6 px-8 py-5 border-l border-slate-200 ml-4">
                {current.projects.map((p, i) => (
                  <span key={i} className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Canvas */}
          <div className="flex-1 relative w-full perspective-1000 group">
            <div className="relative z-10 w-full aspect-square rounded-[3.5rem] bg-white/40 border border-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-1 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
              
              <div className={`w-64 h-64 relative transition-all duration-1000 ${viewMode === 'b2b' ? 'rotate-0' : 'rotate-[135deg]'}`}>
                <div className={`absolute inset-0 border-[20px] rounded-[3rem] opacity-20 transition-all duration-700 ${viewMode === 'b2b' ? 'border-blue-500' : 'border-indigo-500'}`} />
                <div className={`absolute inset-10 border-[15px] rounded-[2rem] opacity-40 transition-all duration-700 ${viewMode === 'b2b' ? 'border-blue-400' : 'border-indigo-400'}`} />
                <div className={`absolute inset-20 bg-gradient-to-br rounded-2xl shadow-2xl transition-all duration-1000 ${viewMode === 'b2b' ? 'from-blue-500 to-indigo-600 scale-100' : 'from-indigo-600 to-purple-700 scale-110'}`} />
              </div>

              <div className="absolute bottom-12 left-12 right-12 p-6 rounded-3xl bg-white/60 border border-white/40 backdrop-blur-md transition-all duration-500 group-hover:translate-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Status</div>
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      {viewMode === 'b2b' ? 'Active Production' : 'Studio Online'}
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-700 ${currentTheme.accentBg}`}>
                    {viewMode === 'b2b' ? <Cpu size={24}/> : <Gamepad2 size={24}/>}
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
          <div className="max-w-2xl mb-20 space-y-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight transition-all">
              {viewMode === 'b2b' ? 'Промышленные решения' : 'Игровая разработка'}
            </h2>
            <p className="text-slate-500 text-xl font-medium">
              {viewMode === 'b2b' 
                ? 'Мы автоматизируем обучение и проектирование через VR-технологии.' 
                : 'Создаем миры, в которые хочется возвращаться. Unity-экспертиза мирового уровня.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {current.services.map((service, idx) => (
              <div 
                key={idx}
                className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between h-[360px] ${
                  service.highlight 
                  ? `${currentTheme.accentLight} ${currentTheme.border} shadow-xl`
                  : 'bg-white/70 border-slate-100 hover:shadow-2xl'
                }`}
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    service.highlight 
                    ? `${currentTheme.accentBg} text-white ${currentTheme.shadow}`
                    : 'bg-slate-100 text-slate-600'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-transparent transition-all duration-300 ${
                  viewMode === 'b2b' ? 'group-hover:bg-blue-600 group-hover:text-white' : 'group-hover:bg-indigo-600 group-hover:text-white'
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
            <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row gap-20 items-center overflow-hidden relative shadow-3xl animate-in fade-in zoom-in duration-700">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
              <div className="flex-1 space-y-8 relative z-10">
                <div className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase italic">#High-Performance</div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1]">3D Атласы нового поколения</h2>
                <p className="text-slate-400 text-xl leading-relaxed">Замена бумажной документации интерактивными цифровыми копиями.</p>
                <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all text-lg">Запросить демо</button>
              </div>
              <div className="flex-1 w-full bg-slate-800/50 rounded-3xl p-4 border border-slate-700/50 backdrop-blur-sm">
                <div className="aspect-video rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center">
                   <div className="text-slate-700 font-mono text-sm">[ 3D VIEWER ACTIVE ]</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700">
              {[
                { val: "5M+", lab: "Игроков в хитах", color: "text-indigo-600" },
                { val: "1M+", lab: "Active Users", color: "text-purple-600" },
                { val: "26+", lab: "Live Projects", color: "text-blue-600" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 border border-slate-100 p-12 rounded-[3rem] text-center shadow-sm hover:shadow-xl transition-all backdrop-blur-md">
                  <div className={`text-5xl font-black mb-4 ${stat.color}`}>{stat.val}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.lab}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-slate-100 transition-colors duration-1000 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">
          <div className="max-w-sm space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
              <span className="text-2xl font-bold">Go Gravity</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">Студия разработки ПО. Два направления — одна безупречная экспертиза в Unity.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="font-bold text-xs uppercase tracking-[0.3em] text-slate-900">Enterprise</div>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">VR Тренажеры</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">3D Атласы</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="font-bold text-xs uppercase tracking-[0.3em] text-slate-900">Gamedev</div>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Mobile Games</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="font-bold text-xs uppercase tracking-[0.3em] text-slate-900">Go Gravity</div>
              <div className="text-slate-500 text-sm font-semibold">hello@go-gravity.ru<br/>г. Москва, IT-Hub</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] flex justify-between">
           <div>© 2024 Go Gravity development unit</div>
           <div className="hidden sm:block">Built with high-end architecture</div>
        </div>
      </footer>
    </div>
  );
};

export default App;