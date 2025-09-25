import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Conflicts = () => {
  const services = [
    {
      title: 'Медиация семейных конфликтов',
      description: 'Мирное урегулирование споров между супругами, родителями и детьми',
      features: ['Раздел имущества при разводе', 'Споры об алиментах', 'Определение места жительства детей', 'Урегулирование семейных конфликтов']
    },
    {
      title: 'Соседские споры',
      description: 'Разрешение конфликтов с соседями по коммунальным и жилищным вопросам',
      features: ['Споры о границах участков', 'Шум и нарушение покоя', 'Протечки и повреждения', 'Споры по общему имуществу']
    },
    {
      title: 'Конфликты с управляющими компаниями',
      description: 'Защита прав собственников жилья в отношениях с УК и ТСЖ',
      features: ['Качество коммунальных услуг', 'Начисление платежей', 'Капитальный ремонт', 'Содержание общего имущества']
    },
    {
      title: 'Переговоры и мировые соглашения',
      description: 'Досудебное урегулирование споров через переговоры и медиацию',
      features: ['Ведение переговоров', 'Составление мировых соглашений', 'Медиативные процедуры', 'Конфиденциальное урегулирование']
    }
  ];

  const advantages = [
    { icon: 'Handshake', title: '90%', description: 'споров урегулировано мирно' },
    { icon: 'Clock', title: '30 дней', description: 'средний срок урегулирования' },
    { icon: 'DollarSign', title: 'Экономия', description: 'до 70% от судебных расходов' },
    { icon: 'Heart', title: 'Сохранение', description: 'отношений' }
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
      <section className="relative pt-96 pb-32 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Users" size={40} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Разрешение конфликтов
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Мирное урегулирование личных и семейных конфликтов без судебных разбирательств.
              Сохраняем отношения и экономим ваше время и деньги
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн-медиация
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
              Помогаем разрешить конфликты мирно, сохраняя ваши отношения и интересы
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
              Наш подход позволяет решить конфликт быстро, конфиденциально и с сохранением отношений
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
          <h2 className="text-4xl font-bold mb-6">Есть конфликт?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Получите бесплатную консультацию о возможностях мирного урегулирования вашего спора
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Scale" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">АСТРА ЛЕГАЛ</h3>
              </div>
              <p className="text-gray-400">Мирное разрешение конфликтов для физических лиц</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  8-918-480-01-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  astartes.lawyers@gmail.com
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-8 text-center">
            <p className="text-gray-400">© 2025 АСТРА ЛЕГАЛ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Conflicts;