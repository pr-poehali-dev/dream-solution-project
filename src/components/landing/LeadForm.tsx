import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const SEND_LEAD_URL = 'https://functions.poehali.dev/65aeebc7-132c-4863-83bb-09bf2b3caa22'

export default function LeadForm({ isActive }: { isActive: boolean }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="flex flex-col items-start gap-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center">
            <Icon name="Check" size={20} className="text-[#c9a84c]" />
          </div>
          <p className="text-[#c9a84c] text-lg font-semibold">Заявка отправлена!</p>
        </div>
        <p className="text-white/60 text-sm">Мы свяжемся с вами в ближайшее время.</p>
        <button
          className="text-[#c9a84c]/60 text-sm underline underline-offset-2 mt-1 hover:text-[#c9a84c] transition-colors"
          onClick={() => setStatus('idle')}
        >
          Отправить ещё одну заявку
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Input
        placeholder="Ваше имя"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="bg-[#0f1c2e] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] h-11"
      />
      <Input
        placeholder="Телефон"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
        type="tel"
        className="bg-[#0f1c2e] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] h-11"
      />
      <Textarea
        placeholder="Опишите ваш объект (необязательно)"
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={3}
        className="bg-[#0f1c2e] border-[#1e3050] text-white placeholder:text-white/30 focus:border-[#c9a84c] resize-none"
      />
      {status === 'error' && (
        <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
      )}
      <Button
        type="submit"
        disabled={status === 'loading'}
        size="lg"
        className="bg-[#c9a84c] text-black hover:bg-[#b8963e] font-bold tracking-wide w-full"
      >
        {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
      </Button>
    </motion.form>
  )
}
