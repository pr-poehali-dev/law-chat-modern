import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Disputes = () => {
  const services = [
    {
      title: 'Арбитражное представительство',
      description: 'Профессиональное представительство интересов в арбитражных судах всех инстанций',
      features: ['Подготовка исковых заявлений', 'Представительство в судах', 'Обжалование решений', 'Исполнение судебных актов']
    },
    {
      title: 'Корпоративные споры',
      description: 'Разрешение конфликтов между участниками бизнеса и органами управления компаний',
      features: ['Споры между акционерами', 'Конфликты в советах директоров', 'Оспаривание сделок', 'Корпоративное рейдерство']
    },
    {
      title: 'Договорные споры',
      description: 'Взыскание задолженности и урегулирование нарушений договорных обязательств',
      features: ['Взыскание долгов', 'Неустойки и штрафы', 'Расторжение договоров', 'Поставка некачественных товаров']
    },
    {
      title: 'Досудебное урегулирование',
      description: 'Решение споров без обращения в суд через переговоры и медиацию',
      features: ['Претензионная работа', 'Переговоры с контрагентами', 'Медиация споров', 'Мировые соглашения']
    }
  ];

  const advantages = [
    { icon: 'Trophy', title: '95% побед', description: 'в арбитражных судах' },
    { icon: 'Users', title: '200+ споров', description: 'успешно разрешено' },
    { icon: 'Clock', title: 'Быстро', description: 'от 1 дня' },
    { icon: 'Target', title: 'Эффективно', description: 'максимальный результат' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between h-80">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/b824de58-6898-45c8-817a-6cc8cb4c3906.png" 
                alt="ASTRA LEGAL" 
                className="h-80 w-auto object-contain"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
              <Button size="sm">Консультация</Button>
            </nav>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-96 pb-32 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Scale" size={40} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Разрешение споров
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Профессиональное арбитражное представительство и разрешение коммерческих споров 
              с максимально возможным результатом для клиента
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Примеры дел
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексная юридическая поддержка в разрешении любых коммерческих споров
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы обеспечиваем максимально эффективную защиту ваших интересов в суде
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={advantage.icon} size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна помощь в споре?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Получите бесплатную оценку перспектив вашего дела от опытных арбитражных адвокатов
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Scale" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">АСТРА ЛЕГАЛ</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">Профессиональные юридические услуги в арбитражных спорах</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Контакты</h4>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <Icon name="Phone" size={16} />
                  8-918-480-01-67
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="Mail" size={16} />
                  astartes.lawyers@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="MapPin" size={16} />
                  г. Краснодар, ул. Калинина, 190
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Услуги</h4>
              <div className="space-y-3 text-gray-300">
                <p>Арбитражное представительство</p>
                <p>Корпоративные споры</p>
                <p>Договорные споры</p>
                <p>Досудебное урегулирование</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Режим работы</h4>
              <div className="space-y-3 text-gray-300">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2025 АСТРА ЛЕГАЛ. Все права защищены.</p>
              <div className="flex gap-8 text-gray-400">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Disputes;