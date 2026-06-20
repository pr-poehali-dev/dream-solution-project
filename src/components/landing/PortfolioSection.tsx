import { motion } from 'framer-motion'

const photos = [
  {
    url: 'https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/945a3188-cf04-4aff-a61f-4d9d6162f40c.jpg',
    label: 'Заливка стяжки',
    desc: 'Выравнивание поверхности виброрейкой',
  },
  {
    url: 'https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/72f8eca7-1b59-486d-b5fd-d69ebde72087.jpg',
    label: 'Армирование основания',
    desc: 'Подготовка арматурной сетки под бетонирование',
  },
  {
    url: 'https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/e2b148e4-2c0b-4c37-90ce-54b9c8232ea3.jpg',
    label: 'Контроль качества',
    desc: 'Приёмка готового покрытия на объекте',
  },
  {
    url: 'https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/80e88415-5265-40e3-bcd0-b5fd961be48b.jpg',
    label: 'Монолитный фундамент',
    desc: 'Армирование и опалубка под ленточный фундамент',
  },
  {
    url: 'https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/e44ba80e-91ab-411c-ac72-4dc0d1b7ed29.jpg',
    label: 'Бетонная площадка',
    desc: 'Готовая бетонная площадка под частный дом',
  },
]

export default function PortfolioSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24 py-12">
      <motion.h2
        className="font-bold leading-tight tracking-tight text-[#c9a84c] mb-2 shrink-0"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Наши работы
      </motion.h2>

      <motion.p
        className="text-white/50 text-sm md:text-base mb-6 shrink-0"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Реальные объекты — реальный результат
      </motion.p>

      <div className="flex gap-3 md:gap-4 h-[55vh] min-h-0">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.url}
            className="group relative rounded-xl overflow-hidden cursor-pointer flex-1 min-w-0 transition-all duration-500 hover:flex-[2.5]"
            style={{ flexBasis: '1fr' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <img
              src={photo.url}
              alt={photo.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-[#c9a84c] font-semibold text-xs md:text-sm leading-tight">{photo.label}</p>
              <p className="text-white/60 text-[10px] md:text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">{photo.desc}</p>
            </div>
            <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a84c]/40 rounded-xl transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
