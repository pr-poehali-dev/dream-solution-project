import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, slogan, content, isActive, showButton, buttonText, services, badges }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 pt-20">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="font-bold leading-[1.05] tracking-tight max-w-4xl text-[#1a2540]"
        style={{ fontSize: id === 'hero' ? 'clamp(2.5rem, 7vw, 6rem)' : 'clamp(2rem, 5vw, 5rem)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {slogan && (
        <motion.p
          className="text-[#c9a84c] text-xl md:text-2xl lg:text-3xl font-medium mt-3 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {slogan}
        </motion.p>
      )}

      {content && !services && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-slate-600"
          initial={{ opacity: 0, y: 50 }}
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
              className="flex flex-col items-start gap-3 p-4 border border-slate-200 rounded-lg hover:border-[#c9a84c] transition-colors bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <Icon name={service.icon} fallback="Hammer" size={28} className="text-[#c9a84c]" />
              <span className="text-[#1a2540] text-sm font-medium leading-tight">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {badges && (
        <motion.div
          className="mt-10 flex flex-wrap gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full border border-[#c9a84c]/40 flex items-center justify-center bg-white shadow-sm">
                <Icon name={badge.icon} fallback="Star" size={22} className="text-[#c9a84c]" />
              </div>
              <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-semibold">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 md:mt-14"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#c9a84c] bg-transparent border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-colors font-semibold tracking-wide px-8"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}