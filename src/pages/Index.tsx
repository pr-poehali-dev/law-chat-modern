import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeServiceType, setActiveServiceType] = useState('business');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter hook
  const useAnimatedCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(target * easeOut));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [target, duration, hasStarted]);

    return { count, elementRef };
  };

  const experienceCounter = useAnimatedCounter(20);
  const avgExperienceCounter = useAnimatedCounter(15);
  const servicesCounter = useAnimatedCounter(14);
  
  const businessServices = [
    { 
      name: 'Недвижимость и строительство', 
      description: 'Сопровождение сделок с недвижимостью и строительными проектами',
      icon: 'Building',
      link: '/services/real-estate'
    },
    { 
      name: 'IP/IT', 
      description: 'Защита интеллектуальной собственности и IT-права',
      icon: 'Code',
      link: '/services/ip-it'
    },
    { 
      name: 'Несостоятельность (банкротство)', 
      description: 'Процедуры банкротства и антикризисное управление',
      icon: 'AlertTriangle',
      link: '/services/bankruptcy'
    },
    { 
      name: 'Разрешение споров', 
      description: 'Арбитражное и судебное представительство',
      icon: 'Scale',
      link: '/services/disputes'
    },
    { 
      name: 'Общие вопросы', 
      description: 'Комплексные юридические услуги для бизнеса',
      icon: 'Briefcase',
      link: '/services/general'
    },
    { 
      name: 'Корпоративное право', 
      description: 'Сопровождение корпоративных сделок и M&A',
      icon: 'Building2',
      link: '/services/corporate'
    },
    { 
      name: 'Налоговое и административное право', 
      description: 'Налоговое планирование и административные споры',
      icon: 'Calculator',
      link: '/services/tax'
    },
    { 
      name: 'Уголовно-правовая защита', 
      description: 'Защита интересов в уголовном процессе',
      icon: 'Shield',
      link: '/services/criminal'
    }
  ];
  
  const individualServices = [
    { 
      name: 'Разрешение конфликтов', 
      description: 'Досудебное и судебное урегулирование споров',
      icon: 'HandHeart',
      link: '/services/conflicts'
    },
    { 
      name: 'Операции с личными активами', 
      description: 'Структурирование личных активов и инвестиций',
      icon: 'TrendingUp',
      link: '/services/personal-assets'
    },
    { 
      name: 'Налогообложение физических лиц', 
      description: 'Налоговое планирование для физических лиц',
      icon: 'Calculator',
      link: '/services/personal-tax'
    },
    { 
      name: 'Персональный комплаенс', 
      description: 'Соблюдение требований законодательства',
      icon: 'FileCheck',
      link: '/services/compliance'
    },
    { 
      name: 'Защита личных активов и вопросы наследования', 
      description: 'Защита имущества и планирование наследства',
      icon: 'Heart',
      link: '/services/inheritance-protection'
    },
    { 
      name: 'Семейные споры', 
      description: 'Развод, алименты, раздел имущества',
      icon: 'Users',
      link: '/services/family'
    },
    { 
      name: 'Наследственные споры', 
      description: 'Оспаривание завещаний и наследственные права',
      icon: 'FileText',
      link: '/services/inheritance-disputes'
    },
    { 
      name: 'Жилищные споры', 
      description: 'Споры с УК, ТСЖ и по недвижимости',
      icon: 'Home',
      link: '/services/housing'
    },
    { 
      name: 'Споры, связанные с защитой прав потребителей', 
      description: 'Возврат товаров, компенсации ущерба',
      icon: 'ShoppingCart',
      link: '/services/consumer'
    },
    { 
      name: 'Трудовые споры', 
      description: 'Защита трудовых прав и взыскание зарплат',
      icon: 'Briefcase',
      link: '/services/labor'
    },
    { 
      name: 'Другие имущественные и гражданско-правовые споры', 
      description: 'Возмещение ущерба, взыскание долгов',
      icon: 'Scale',
      link: '/services/civil'
    },
    { 
      name: 'Наследственное планирование', 
      description: 'Комплексное планирование передачи активов',
      icon: 'FileHeart',
      link: '/services/estate-planning'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Scale" size={32} className="text-amber-400" />
              <h1 className="text-2xl font-bold text-white tracking-tight">МАКСИМА ЛИГАЛ</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium tracking-wide">Услуги</a>
              <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium tracking-wide">Контакты</a>
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-glow">Обратная связь</Button>
            </nav>
            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-slate-900">
        {/* Enhanced geometric background pattern */}
        <div className="absolute inset-0">
          {/* Multi-layered animated gradient orbs */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/40 to-orange-500/30 rounded-full blur-3xl animate-gradient-pulse"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/40 to-cyan-500/30 rounded-full blur-3xl animate-gradient-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-gradient-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Pure geometric architectural elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated geometric shapes */}
            <div 
              className="absolute top-20 right-20 w-64 h-64 border-2 border-amber-400/30 rounded-lg rotate-12 animate-pulse" 
              style={{transform: `translateY(${scrollY * 0.1}px) rotate(12deg)`, animationDuration: '4s'}}
            ></div>
            <div 
              className="absolute top-40 right-40 w-32 h-32 border border-blue-400/25 rounded-lg -rotate-12 animate-pulse" 
              style={{transform: `translateY(${scrollY * 0.15}px) rotate(-12deg)`, animationDuration: '6s'}}
            ></div>
            <div 
              className="absolute bottom-32 left-32 w-48 h-48 border border-amber-400/15 rounded-lg rotate-45 animate-pulse" 
              style={{transform: `translateY(${scrollY * -0.1}px) rotate(45deg)`, animationDuration: '8s'}}
            ></div>
            
            {/* Floating rectangles */}
            <div 
              className="absolute top-1/3 left-1/4 w-24 h-3 bg-gradient-to-r from-amber-400/40 to-orange-500/40 animate-pulse rounded-full" 
              style={{transform: `translateX(${scrollY * 0.05}px)`, animationDuration: '5s'}}
            ></div>
            <div 
              className="absolute bottom-1/3 right-1/4 w-32 h-3 bg-gradient-to-r from-blue-400/40 to-cyan-500/40 animate-pulse rounded-full" 
              style={{transform: `translateX(${scrollY * -0.05}px)`, animationDuration: '7s'}}
            ></div>
            
            {/* Modern architectural lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
          </div>
          
          {/* Enhanced geometric grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(245,158,11,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Diagonal architectural elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/8 to-transparent transform -skew-y-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/8 to-transparent transform skew-y-12"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/75 to-slate-900/95"></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <p className="text-amber-400 text-sm font-bold tracking-[0.4em] uppercase animate-fade-in">Компания</p>
                  <h1 className="text-6xl md:text-8xl font-extralight text-white leading-[0.85] tracking-tight animate-fade-in" style={{animationDelay: '0.3s'}}>
                    Право с
                    <span className="block font-extralight bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient-pulse">особым</span>
                    <span className="block font-extralight">подходом.</span>
                  </h1>
                </div>
                
                {/* Enhanced scroll indicator with better styling */}
                <div className="flex items-center gap-6 text-slate-300 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <span className="text-sm font-medium tracking-wide">Прокрутите для изучения</span>
                  <button 
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      servicesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative w-16 h-16 rounded-full border-2 border-amber-400/60 flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-500 hover:scale-110 shadow-glow"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Icon name="ArrowDown" size={20} className="text-amber-400 group-hover:translate-y-2 group-hover:scale-110 transition-all duration-500 relative z-10" />
                  </button>
                </div>
              </div>
              
              {/* Right Column - Enhanced Description */}
              <div className="space-y-12 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="space-y-10">
                  <div className="relative p-8 backdrop-blur-glass rounded-2xl border border-slate-700/50">
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 rounded-full"></div>
                    <p className="text-xl text-slate-200 leading-relaxed font-light pl-6">
                      Максима Лигал — команда талантливых юристов, которые более двадцати лет консультируют бизнес и частных клиентов в самых сложных областях права, обеспечивая индивидуальный подход к каждому делу.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <span className="text-slate-500 text-sm font-mono bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">1.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Enhanced */}
      <section className="py-40 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-transparent rounded-full blur-3xl animate-gradient-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-full blur-3xl animate-gradient-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-24">
              <div ref={experienceCounter.elementRef} className="text-center group hover:scale-105 transition-all duration-500">
                <div className="relative mb-8">
                  <div className="text-9xl font-extralight bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {experienceCounter.count}
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/25 to-orange-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                </div>
                <div className="text-2xl font-bold text-white mb-4 tracking-wider">ЛЕТ ОПЫТА</div>
                <div className="text-slate-300 text-lg font-light">в юридических проектах</div>
              </div>
              
              <div ref={avgExperienceCounter.elementRef} className="text-center group hover:scale-105 transition-all duration-500">
                <div className="relative mb-8">
                  <div className="text-9xl font-extralight bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {avgExperienceCounter.count}
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                </div>
                <div className="text-2xl font-bold text-white mb-4 tracking-wider">ЛЕТ СТАЖА</div>
                <div className="text-slate-300 text-lg font-light">средний стаж наших юристов</div>
              </div>
              
              <div ref={servicesCounter.elementRef} className="text-center group hover:scale-105 transition-all duration-500">
                <div className="relative mb-8">
                  <div className="text-9xl font-extralight bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {servicesCounter.count}
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                </div>
                <div className="text-2xl font-bold text-white mb-4 tracking-wider">НАПРАВЛЕНИЙ</div>
                <div className="text-slate-300 text-lg font-light">юридического сопровождения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Enhanced */}
      <section id="services" className="py-40 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/8 to-transparent rounded-full blur-3xl animate-gradient-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-3xl animate-gradient-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.08),transparent_60%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <h2 className="text-6xl md:text-7xl font-extralight text-white mb-12 tracking-tight">Наши услуги</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Предоставляем полный спектр юридических услуг для успешного развития вашего бизнеса с использованием передовых правовых технологий и индивидуального подхода к каждому клиенту
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeServiceType} onValueChange={setActiveServiceType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-24 h-18 max-w-xl mx-auto bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-2">
                <TabsTrigger value="business" className="text-lg py-4 px-6 font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-xl data-[state=active]:shadow-amber-500/30 text-slate-300 hover:text-white transition-all duration-500 rounded-xl">
                  Для компаний
                </TabsTrigger>
                <TabsTrigger value="individual" className="text-lg py-4 px-6 font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/30 text-slate-300 hover:text-white transition-all duration-500 rounded-xl">
                  Для физических лиц
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {businessServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-500 border border-slate-700/50 shadow-xl hover:-translate-y-4 cursor-pointer bg-slate-800/60 backdrop-blur-sm hover:bg-gradient-to-br hover:from-amber-500/15 hover:to-orange-500/15 hover:border-amber-500/40 relative overflow-hidden rounded-2xl">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-orange-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="pb-6 relative z-10 p-8">
                        <div className="mb-8">
                          <div className="w-18 h-18 bg-slate-700/60 rounded-3xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-500 group-hover:scale-110">
                            <Icon name={service.icon} size={28} className="text-slate-300 group-hover:text-slate-900 transition-colors duration-500" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold text-white leading-tight group-hover:text-amber-100 transition-colors duration-500 tracking-tight">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 p-8 pt-0">
                        <p className="text-slate-400 group-hover:text-slate-300 mb-8 text-sm leading-relaxed transition-colors duration-500">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-amber-400 group-hover:text-amber-300 font-semibold transition-colors duration-500">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="individual" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {individualServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 border border-slate-700/50 shadow-xl hover:-translate-y-4 cursor-pointer bg-slate-800/60 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-cyan-500/15 hover:border-blue-500/40 relative overflow-hidden rounded-2xl">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="pb-6 relative z-10 p-8">
                        <div className="mb-8">
                          <div className="w-18 h-18 bg-slate-700/60 rounded-3xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110">
                            <Icon name={service.icon} size={28} className="text-slate-300 group-hover:text-white transition-colors duration-500" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold text-white leading-tight group-hover:text-blue-100 transition-colors duration-500 tracking-tight">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 p-8 pt-0">
                        <p className="text-slate-400 group-hover:text-slate-300 mb-8 text-sm leading-relaxed transition-colors duration-500">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-blue-400 group-hover:text-blue-300 font-semibold transition-colors duration-500">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Luxurious Design */}
      <section id="contact" className="py-40 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/12 to-transparent rounded-full blur-3xl animate-gradient-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/12 to-transparent rounded-full blur-3xl animate-gradient-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-extralight text-white mb-10 tracking-tight">Получить консультацию</h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут для персональной юридической консультации с экспертом в вашей области права
              </p>
            </div>
            
            <Card className="p-16 shadow-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm relative overflow-hidden rounded-3xl">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-800/40"></div>
              
              <form className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-base font-semibold text-slate-200">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="h-16 text-lg bg-slate-700/60 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/30 transition-all duration-500 rounded-xl" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-base font-semibold text-slate-200">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="h-16 text-lg bg-slate-700/60 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/30 transition-all duration-500 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="email" className="text-base font-semibold text-slate-200">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-16 text-lg bg-slate-700/60 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/30 transition-all duration-500 rounded-xl" />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="message" className="text-base font-semibold text-slate-200">Описание вашего вопроса</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашей ситуации подробнее..." 
                    className="min-h-44 resize-none text-lg bg-slate-700/60 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/30 transition-all duration-500 rounded-xl leading-relaxed"
                  />
                </div>
                <Button className="w-full h-18 text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-500 border-0 rounded-xl">
                  <Icon name="Send" size={24} className="mr-4" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Elegant & Modern */}
      <footer className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name="Scale" size={36} className="text-amber-400" />
                  <h3 className="text-3xl font-bold tracking-tight">МАКСИМА ЛИГАЛ</h3>
                </div>
                <p className="text-slate-400 text-lg font-light leading-relaxed">Современные правовые решения для успешного бизнеса</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-8 text-xl tracking-wide">КОНТАКТЫ</h4>
                <div className="space-y-4 text-slate-300">
                  <p className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300">
                    <Icon name="Phone" size={18} />
                    8-918-480-01-67
                  </p>
                  <p className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300">
                    <Icon name="Mail" size={18} />
                    astartes.lawyers@gmail.com
                  </p>
                  <p className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300">
                    <Icon name="MapPin" size={18} />
                    г. Краснодар, ул. Калинина, 190
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-8 text-xl tracking-wide">УСЛУГИ</h4>
                <div className="space-y-4 text-slate-300">
                  <p className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Корпоративное право</p>
                  <p className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Арбитражные споры</p>
                  <p className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Недвижимость</p>
                  <p className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Семейное право</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-8 text-xl tracking-wide">РЕЖИМ РАБОТЫ</h4>
                <div className="space-y-4 text-slate-300">
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 pt-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-400 font-light">© 2025 МАКСИМА ЛИГАЛ. Все права защищены.</p>
                <div className="flex gap-10 text-slate-400">
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300 font-light">Политика конфиденциальности</a>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300 font-light">Пользовательское соглашение</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;