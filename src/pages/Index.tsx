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
              <h1 className="text-2xl font-bold text-white">МАКСИМА ЛИГАЛ</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Услуги</a>
              <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Контакты</a>
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-slate-900">Обратная связь</Button>
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
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
          
          {/* Geometric grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform skew-y-12"></div>
        </div>
        
        {/* Modern architectural image with enhanced filters */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/f7aee24a-c2c8-4f45-8382-ba5ea6945287.png')`,
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: 'contrast(1.3) brightness(0.8) saturate(1.2)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/70 to-slate-900/95"></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase animate-fade-in">Компания</p>
                  <h1 className="text-6xl md:text-8xl font-extralight text-white leading-[0.9] tracking-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
                    Право с
                    <span className="block font-extralight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">особым</span>
                    <span className="block font-extralight">подходом.</span>
                  </h1>
                </div>
                
                {/* Enhanced scroll indicator */}
                <div className="flex items-center gap-4 text-slate-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <span className="text-sm font-medium tracking-wide">Прокрутите для изучения</span>
                  <button 
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      servicesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative w-14 h-14 rounded-full border-2 border-amber-400/50 flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-500 hover:scale-110"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon name="ArrowDown" size={18} className="text-amber-400 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
                  </button>
                </div>
              </div>
              
              {/* Right Column - Description */}
              <div className="space-y-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                    <p className="text-xl text-slate-300 leading-relaxed pl-8 font-light">
                      Максима Лигал — команда талантливых юристов, которые более двадцати лет консультируют бизнес и частных клиентов в самых сложных областях права.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <span className="text-slate-500 text-sm font-mono bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">1.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-20">
              <div ref={experienceCounter.elementRef} className="text-center group hover:scale-105 transition-transform duration-500">
                <div className="relative">
                  <div className="text-8xl font-extralight bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {experienceCounter.count}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="text-2xl font-semibold text-white mb-3 tracking-wider">ЛЕТ ОПЫТА</div>
                <div className="text-slate-300 text-lg font-light">в юридических проектах</div>
              </div>
              
              <div ref={avgExperienceCounter.elementRef} className="text-center group hover:scale-105 transition-transform duration-500">
                <div className="relative">
                  <div className="text-8xl font-extralight bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {avgExperienceCounter.count}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="text-2xl font-semibold text-white mb-3 tracking-wider">ЛЕТ СТАЖА</div>
                <div className="text-slate-300 text-lg font-light">средний стаж наших юристов</div>
              </div>
              
              <div ref={servicesCounter.elementRef} className="text-center group hover:scale-105 transition-transform duration-500">
                <div className="relative">
                  <div className="text-8xl font-extralight bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {servicesCounter.count}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="text-2xl font-semibold text-white mb-3 tracking-wider">НАПРАВЛЕНИЙ</div>
                <div className="text-slate-300 text-lg font-light">юридического сопровождения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-10 tracking-tight">Наши услуги</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Предоставляем полный спектр юридических услуг для успешного развития вашего бизнеса с использованием передовых правовых технологий
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeServiceType} onValueChange={setActiveServiceType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-20 h-16 max-w-lg mx-auto bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <TabsTrigger value="business" className="text-lg py-4 font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/25 text-slate-300 hover:text-white transition-all duration-300">
                  Для компаний
                </TabsTrigger>
                <TabsTrigger value="individual" className="text-lg py-4 font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 text-slate-300 hover:text-white transition-all duration-300">
                  Для физических лиц
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {businessServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 shadow-xl hover:-translate-y-3 cursor-pointer bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-amber-500/10 hover:to-orange-500/10 hover:border-amber-500/30 relative overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-500 group-hover:scale-110">
                            <Icon name={service.icon} size={26} className="text-slate-300 group-hover:text-slate-900 transition-colors duration-300" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-white leading-tight group-hover:text-amber-100 transition-colors duration-300">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-slate-400 group-hover:text-slate-300 mb-6 text-sm leading-relaxed transition-colors duration-300">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-amber-400 group-hover:text-amber-300 font-medium transition-colors duration-300">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="individual" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {individualServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-slate-700/50 shadow-xl hover:-translate-y-3 cursor-pointer bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-blue-500/30 relative overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-110">
                            <Icon name={service.icon} size={26} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-slate-400 group-hover:text-slate-300 mb-6 text-sm leading-relaxed transition-colors duration-300">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-300">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Contact Form Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">Получить консультацию</h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут для персональной юридической консультации
              </p>
            </div>
            
            <Card className="p-12 shadow-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-slate-800/30"></div>
              
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-base font-medium text-slate-300">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="h-14 text-base bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/20 transition-all duration-300" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-base font-medium text-slate-300">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="h-14 text-base bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/20 transition-all duration-300" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="email" className="text-base font-medium text-slate-300">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-14 text-base bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/20 transition-all duration-300" />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="message" className="text-base font-medium text-slate-300">Описание вашего вопроса</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашей ситуации..." 
                    className="min-h-40 resize-none text-base bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-400/20 transition-all duration-300"
                  />
                </div>
                <Button className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 border-0">
                  <Icon name="Send" size={20} className="mr-3" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Scale" size={32} className="text-white" />
                  <h3 className="text-2xl font-bold">МАКСИМА ЛИГАЛ</h3>
                </div>
                <p className="text-white/80 text-lg">Современные правовые решения</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">КОНТАКТЫ</h4>
                <div className="space-y-3 text-white/80">
                  <p className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    8-918-480-01-67
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    astartes.lawyers@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    г. Краснодар, ул. Калинина, 190
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">УСЛУГИ</h4>
                <div className="space-y-3 text-white/80">
                  <p>Корпоративное право</p>
                  <p>Арбитражные споры</p>
                  <p>Недвижимость</p>
                  <p>Семейное право</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">РЕЖИМ РАБОТЫ</h4>
                <div className="space-y-3 text-white/80">
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 font-light">© 2025 МАКСИМА ЛИГАЛ. Все права защищены.</p>
                <div className="flex gap-8 text-slate-400">
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