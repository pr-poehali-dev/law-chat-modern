import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Corporate = () => {
  const services = [
    {
      title: 'Создание и регистрация бизнеса',
      description: 'Полное сопровождение процедуры создания юридических лиц различных форм',
      features: ['Подготовка учредительных документов', 'Регистрация в налоговых органах', 'Получение лицензий', 'Открытие банковских счетов']
    },
    {
      title: 'Корпоративные сделки (M&A)',
      description: 'Сопровождение слияний, поглощений и крупных корпоративных сделок',
      features: ['Due Diligence проверки', 'Структурирование сделок', 'Переговоры и документооборот', 'Антимонопольное сопровождение']
    },
    {
      title: 'Корпоративное управление',
      description: 'Консультации по вопросам управления компанией и корпоративных процедур',
      features: ['Проведение собраний участников', 'Оформление корпоративных решений', 'Управление долями/акциями', 'Корпоративные споры']
    },
    {
      title: 'Договорная работа',
      description: 'Подготовка и анализ коммерческих договоров различной сложности',
      features: ['Поставки товаров и услуг', 'Агентские соглашения', 'Партнерские договоры', 'Международные контракты']
    }
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-96 pb-32 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Building2" size={40} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Корпоративное право
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Комплексное юридическое сопровождение корпоративных сделок, M&A операций 
              и управления бизнесом на всех этапах развития компании
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Кейсы M&A
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Корпоративные услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональное сопровождение бизнеса от создания до крупных сделок
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

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна корпоративная консультация?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Получите профессиональную помощь в корпоративных вопросах от опытных юристов
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Icon name="Scale" size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">АСТРА ЛЕГАЛ</h3>
            </div>
            <p className="text-gray-400 mb-8">Профессиональные корпоративные услуги</p>
            <div className="flex justify-center gap-8 text-gray-300">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                8-918-480-01-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                astartes.lawyers@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Corporate;