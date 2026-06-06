import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#c9a84c] border-[#c9a84c] bg-transparent tracking-widest text-xs uppercase">Строительная компания</Badge>,
    title: "Бетон, который стоит веками.",
    slogan: "Строим надёжно. Делаем на совесть.",
    showButton: true,
    buttonText: 'Получить расчёт',
    badges: [
      { icon: 'ShieldCheck', label: 'Качество' },
      { icon: 'Link', label: 'Надёжность' },
      { icon: 'Handshake', label: 'Ответственность' },
      { icon: 'TrendingUp', label: 'Результат' },
    ]
  },
  {
    id: 'about',
    title: 'Высокое качество — наш стандарт.',
    content: 'Мы специализируемся на всех видах бетонных и железобетонных работ. От заливки фундамента до промышленных полов — каждый объект сдаём в срок и с гарантией. Более 10 лет опыта, собственная техника, квалифицированные бригады.'
  },
  {
    id: 'features',
    title: 'Наши услуги',
    services: [
      { icon: 'Building2', label: 'Фундаменты' },
      { icon: 'Layers', label: 'Монолитное строительство' },
      { icon: 'Factory', label: 'Промышленные полы' },
      { icon: 'Grid3x3', label: 'Стяжка пола' },
      { icon: 'Droplets', label: 'Гидроизоляция' },
    ]
  },
  {
    id: 'why',
    title: 'Почему выбирают нас?',
    content: 'Работаем с жилыми домами, коммерческими и промышленными объектами. Строгий контроль качества бетонной смеси и армирования на каждом этапе. Ваш проект — наша репутация.'
  },
  {
    id: 'cta',
    title: 'Обсудим ваш объект?',
    content: 'Оставьте заявку — подготовим расчёт стоимости бесплатно. Выезд специалиста в день обращения.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]