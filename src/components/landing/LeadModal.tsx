import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const SEND_LEAD_URL = 'https://functions.poehali.dev/65aeebc7-132c-4863-83bb-09bf2b3caa22'

interface LeadModalProps {
  open: boolean
  onClose: () => void
  title?: string
}

export default function LeadModal({ open, onClose, title = 'Получить расчёт' }: LeadModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStatus('idle')
        setName('')
        setPhone('')
        setMessage('')
      }, 300)
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative z-10 bg-[#0f1c2e] border border-[#1e3050] rounded-2xl p-8 w-full max-w-md shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-4 py-4">
                <div className="w-14 h-14 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c] flex items-center justify-center">
                  <Icon name="Check" size={26} className="text-[#c9a84c]" />
                </div>
                <p className="text-[#c9a84c] text-xl font-bold">Заявка отправлена!</p>
                <p className="text-white/50 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                <Button
                  onClick={onClose}
                  className="mt-2 bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold px-8"
                >
                  Закрыть
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-[#c9a84c] text-xl font-bold mb-6">{title}</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="bg-[#0a1525] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] h-11"
                  />
                  <Input
                    placeholder="Телефон"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    type="tel"
                    className="bg-[#0a1525] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] h-11"
                  />
                  <Textarea
                    placeholder="Опишите ваш объект (необязательно)"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    className="bg-[#0a1525] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] resize-none"
                  />
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    size="lg"
                    className="bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold tracking-wide mt-1"
                  >
                    {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
