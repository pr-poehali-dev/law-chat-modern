import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
    { name: 'Недвижимость и строительство', description: 'Сопровождение сделок и строительных проектов', icon: 'Building' },
    { name: 'IP/ИТ', description: 'Защита интеллектуальной собственности и ИТ-права', icon: 'Code' },
    { name: 'Несостоятельность (банкротство)', description: 'Процедуры банкротства и антикризисное управление', icon: 'AlertTriangle' },
    { name: 'Разрешение споров', description: 'Арбитражное и судебное представительство', icon: 'Scale' },
    { name: 'Корпоративное право', description: 'Сопровождение бизнеса и корпоративных сделок', icon: 'Building2' },
    { name: 'Налоговое и административное право', description: 'Налоговое планирование и административные споры', icon: 'Calculator' }
  ];
  
  const individualServices = [
    { name: 'Разрешение конфликтов', description: 'Медиация и досудебное урегулирование споров', icon: 'HandHeart' },
    { name: 'Планирование наследства', description: 'Составление завещаний и наследственное планирование', icon: 'FileText' },
    { name: 'Наследственные споры', description: 'Защита наследственных прав в суде', icon: 'Scale' },
    { name: 'Семейные споры', description: 'Развод, алименты, раздел имущества', icon: 'Heart' },
    { name: 'Жилищные споры', description: 'Споры с управляющими компаниями и соседями', icon: 'Home' },
    { name: 'Защита прав потребителей', description: 'Возврат товаров, компенсации ущерба', icon: 'Shield' },
    { name: 'Трудовые споры', description: 'Защита трудовых прав и взыскание зарплат', icon: 'Briefcase' },
    { name: 'Гражданские споры', description: 'Другие имущественные и гражданские споры', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-white flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/532edd36-bb2a-4dba-ba00-13ecc542e141.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2 bg-white/10 border-white/30 text-white">
              <Icon name="Scale" size={16} className="mr-2" />
              Юридическая фирма с многолетним опытом
            </Badge>
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              ГК <span className="text-gray-300">АСТРА ЛЕГАЛ</span>
            </h1>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Это команда талантливых юристов, которые уже более двадцати лет консультирует 
              предприятия и частных клиентов в самых сложных областях права.
            </p>
            
            {/* Animated Counters */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div ref={experienceCounter.elementRef} className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {experienceCounter.count}+
                </div>
                <div className="text-xl text-white/80">лет опыта работы</div>
              </div>
              <div ref={avgExperienceCounter.elementRef} className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {avgExperienceCounter.count}+
                </div>
                <div className="text-xl text-white/80">средний опыт юристов</div>
              </div>
              <div ref={servicesCounter.elementRef} className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {servicesCounter.count}
                </div>
                <div className="text-xl text-white/80">видов юридической поддержки</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto bg-gray-700 hover:bg-gray-800 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-gray-800">
                <Icon name="Play" size={20} className="mr-2" />
                О компании
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Наши услуги</h2>
            <p className="text-xl text-gray-700">
              Комплексное юридическое сопровождение для бизнеса и частных лиц
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeServiceType} onValueChange={setActiveServiceType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
                <TabsTrigger value="business" className="text-base py-3">
                  <Icon name="Building2" size={20} className="mr-2" />
                  Для компаний
                </TabsTrigger>
                <TabsTrigger value="individual" className="text-base py-3">
                  <Icon name="User" size={20} className="mr-2" />
                  Для физических лиц
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {businessServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Icon name={service.icon} size={24} className="text-primary" />
                          </div>
                          <CardTitle className="text-xl text-gray-800">{service.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="individual" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {individualServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Icon name={service.icon} size={24} className="text-primary" />
                          </div>
                          <CardTitle className="text-xl text-gray-800">{service.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
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

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <Badge variant="outline" className="mb-4">О нашей компании</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Современный подход к юридическим услугам
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Мы объединяем глубокие знания права с инновационными технологиями. 
                  Наша команда состоит из опытных юристов, которые понимают вызовы современного бизнеса 
                  и готовы предложить эффективные решения.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-gray-700">Более 500 успешных дел</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-gray-700">Команда из 15+ экспертов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-gray-700">Работаем с 2015 года</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <Icon name="Scale" size={120} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-gray-700">
              Наши преимущества, которые делают нас лидером в сфере юридических услуг
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Быстрое решение</h3>
              <p className="text-gray-700">Используем современные технологии для ускорения процессов</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Точность</h3>
              <p className="text-gray-700">Детальный анализ каждого дела и персональный подход</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Опыт</h3>
              <p className="text-gray-700">Многолетний опыт в самых сложных юридических областях</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Получить консультацию</h2>
              <p className="text-xl text-gray-700">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            
            <Card className="p-8 shadow-lg border-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Описание вашего вопроса</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашей ситуации..." 
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button className="w-full h-12 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Icon name="Scale" size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold mb-2">LegalTech</h3>
              <p className="text-gray-300">Современные правовые решения</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+7 (495) 123-45-67</p>
                  <p>info@legaltech.ru</p>
                  <p>Москва, ул. Примерная, 10</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Услуги</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Арбитраж</p>
                  <p>Корпоративное право</p>
                  <p>Семейное право</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Режим работы</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-300">© 2024 ГК АСТРА ЛЕГАЛ. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;