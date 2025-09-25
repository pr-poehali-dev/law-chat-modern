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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Scale" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">АСТРА ЛЕГАЛ</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
              <Button size="sm">Обратная связь</Button>
            </nav>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Modern architectural image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/f7aee24a-c2c8-4f45-8382-ba5ea6945287.png')`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Компания</p>
                  <h1 className="text-6xl md:text-7xl font-light text-white leading-tight tracking-tight">
                    Право с
                    <span className="block font-light">особым</span>
                    <span className="block font-light">подходом.</span>
                  </h1>
                </div>
                
                {/* Scroll indicator */}
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-sm font-medium">Прокрутите для изучения</span>
                  <button 
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      servicesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center hover:border-slate-400 hover:bg-slate-800 transition-all duration-300 group"
                  >
                    <Icon name="ArrowDown" size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              
              {/* Right Column - Description */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Максима Лигал — команда талантливых юристов, которые более двадцати лет консультируют бизнес и частных клиентов в самых сложных областях права.
                  </p>
                  
                  <div className="flex justify-end">
                    <span className="text-slate-500 text-sm font-mono">1.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <div ref={experienceCounter.elementRef} className="text-center">
                <div className="text-7xl font-light text-slate-900 mb-4">
                  {experienceCounter.count}
                </div>
                <div className="text-2xl font-medium text-slate-800 mb-2">ЛЕТ ОПЫТА</div>
                <div className="text-slate-600 text-lg">в юридических проектах</div>
              </div>
              
              <div ref={avgExperienceCounter.elementRef} className="text-center">
                <div className="text-7xl font-light text-slate-900 mb-4">
                  {avgExperienceCounter.count}
                </div>
                <div className="text-2xl font-medium text-slate-800 mb-2">ЛЕТ СТАЖА</div>
                <div className="text-slate-600 text-lg">средний стаж наших юристов</div>
              </div>
              
              <div ref={servicesCounter.elementRef} className="text-center">
                <div className="text-7xl font-light text-slate-900 mb-4">
                  {servicesCounter.count}
                </div>
                <div className="text-2xl font-medium text-slate-800 mb-2">НАПРАВЛЕНИЙ</div>
                <div className="text-slate-600 text-lg">юридического сопровождения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Предоставляем полный спектр юридических услуг для успешного развития вашего бизнеса
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeServiceType} onValueChange={setActiveServiceType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-16 h-16 max-w-md mx-auto bg-slate-200">
                <TabsTrigger value="business" className="text-lg py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  Для компаний
                </TabsTrigger>
                <TabsTrigger value="individual" className="text-lg py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  Для физических лиц
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {businessServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 cursor-pointer bg-white hover:bg-slate-900 hover:text-white">
                      <CardHeader className="pb-4">
                        <div className="mb-4">
                          <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                            <Icon name={service.icon} size={24} className="text-slate-900 group-hover:text-white" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-white leading-tight">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 group-hover:text-slate-300 mb-4 text-sm">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-slate-900 group-hover:text-slate-300 font-medium">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="individual" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {individualServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 cursor-pointer bg-white hover:bg-slate-900 hover:text-white">
                      <CardHeader className="pb-4">
                        <div className="mb-4">
                          <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                            <Icon name={service.icon} size={24} className="text-slate-900 group-hover:text-white" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-white leading-tight">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 group-hover:text-slate-300 mb-4 text-sm">{service.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-slate-900 group-hover:text-slate-300 font-medium">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
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
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">Получить консультацию</h2>
              <p className="text-xl text-slate-600 font-light">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            
            <Card className="p-12 shadow-2xl border-0 bg-slate-50">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-medium text-slate-700">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="h-14 text-base bg-white" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-medium text-slate-700">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="h-14 text-base bg-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-medium text-slate-700">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-14 text-base bg-white" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-base font-medium text-slate-700">Описание вашего вопроса</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашей ситуации..." 
                    className="min-h-36 resize-none text-base bg-white"
                  />
                </div>
                <Button className="w-full h-16 text-lg font-medium bg-slate-900 hover:bg-slate-800">
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
            
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/80">© 2025 АСТРА ЛЕГАЛ. Все права защищены.</p>
                <div className="flex gap-6 text-white/80">
                  <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
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