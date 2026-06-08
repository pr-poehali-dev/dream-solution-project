import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const HERO_BG = "https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/6448acf9-fbd1-4f81-9d9f-1c56f449ea39.jpg"

export default function Section({ id, title, subtitle, slogan, content, isActive, showButton, buttonText, services, badges }: SectionProps) {
  const isHero = id === 'hero'

  return (
    <section
      id={id}
      className={`relative h-screen w-full snap-start overflow-hidden flex flex-col ${isHero ? 'justify-end pb-12 md:pb-16' : 'justify-center pt-20'} p-8 md:p-16 lg:p-24`}
    >
      {isHero && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </>
      )}

      <div className="relative z-10">
        {subtitle && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}

        <motion.h2
          className={`font-bold leading-[1.05] tracking-tight max-w-4xl ${isHero ? 'text-white' : 'text-[#0f1c2e]'}`}
          style={{ fontSize: isHero ? 'clamp(2.2rem, 6vw, 5.5rem)' : 'clamp(2rem, 5vw, 5rem)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {title}
        </motion.h2>

        {slogan && (
          <motion.p
            className="text-[#c9a84c] text-lg md:text-xl lg:text-2xl font-medium mt-2 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {slogan}
          </motion.p>
        )}

        {content && !services && (
          <motion.p
            className={`text-lg md:text-xl max-w-2xl mt-5 ${isHero ? 'text-white/75' : 'text-[#3a4a60]'}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {badges && (
          <motion.div
            className="mt-8 flex flex-wrap gap-6 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-11 h-11 rounded-full border border-[#c9a84c]/70 flex items-center justify-center bg-black/40">
                  <Icon name={badge.icon} fallback="Star" size={20} className="text-[#c9a84c]" />
                </div>
                <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
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
                className="flex flex-col items-start gap-3 p-4 border border-[#1e3050] rounded-lg hover:border-[#c9a84c] transition-colors bg-[#0f1c2e] shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <Icon name={service.icon} fallback="Hammer" size={28} className="text-[#c9a84c]" />
                <span className="text-white text-sm font-medium leading-tight">{service.label}</span>
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
              className="bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold tracking-wide px-10 shadow-lg"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
