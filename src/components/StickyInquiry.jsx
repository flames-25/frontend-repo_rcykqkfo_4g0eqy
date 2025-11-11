import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, ArrowRight, Phone, Mail } from 'lucide-react'

export default function StickyInquiry() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] rounded-2xl border border-white/10 bg-[#0b0b12]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                  <MessageSquare className="h-4 w-4 text-black" />
                </div>
                Quick inquiry
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <form
                onSubmit={(e) => { e.preventDefault(); setOpen(false); }}
                className="grid gap-3"
              >
                <input placeholder="Your name" className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                <input type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                <input placeholder="Company / brand" className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                <textarea placeholder="What do you want to achieve?" rows={3} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                  Send request <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" /> hello@digiwic.com</span>
                  <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3" /> +1 (555) 123‑4567</span>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((s) => !s)}
        whileTap={{ scale: 0.98 }}
        className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors shadow-lg"
        aria-expanded={open}
        aria-controls="sticky-inquiry"
      >
        <MessageSquare className="h-4 w-4 text-cyan-300" />
        Start a quick inquiry
      </motion.button>
    </div>
  )
}
