import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const HERO_BG = "https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/6448acf9-fbd1-4f81-9d9f-1c56f449ea39.jpg"

export default function Section({ id, title, subtitle, slogan, content, isActive, showButton, buttonText, services, badges }: SectionProps) {
  const isHero = id === 'hero'

  if (isHero) {
    return (
      <section id={id} className="relative h-screen w-full snap-start overflow-hidden flex flex-col">
        {/* Картинка — верхняя часть экрана */}
        <div className="flex-1 relative min-h-0">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1525]" />
        </div>

        {/* Надписи — строго под картинкой */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-10 pt-5 bg-[#0a1525]">
          {subtitle && (
            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}

          <motion.h2
            className="font-bold leading-tight tracking-tight text-[#c9a84c]"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {badges && (
            <motion.div
              className="mt-4 flex flex-wrap gap-5 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="flex flex-col items-center gap-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/60 flex items-center justify-center bg-[#0f1c2e]">
                    <Icon name={badge.icon} fallback="Star" size={18} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5"
            >
              <Button
                size="lg"
                className="bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold tracking-wide px-10"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="font-bold leading-[1.05] tracking-tight max-w-4xl text-[#c9a84c]"
        style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && !services && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-5 text-white/70"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {services && (
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              className="flex flex-col items-start gap-3 p-4 border border-[#1e3050] rounded-lg hover:border-[#c9a84c] transition-colors bg-[#0f1c2e]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <Icon name={service.icon} fallback="Hammer" size={28} className="text-[#c9a84c]" />
              <span className="text-white/90 text-sm font-medium leading-tight">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 md:mt-10"
        >
          <Button
            size="lg"
            className="bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold tracking-wide px-10"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
