import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    title: 'NovaWear DTC Scale',
    kpis: ['+5.2x ROAS', '+63% CVR', '-34% CAC'],
    theme: 'from-fuchsia-500 to-violet-600',
  },
  {
    title: 'Finline Lead Engine',
    kpis: ['+280k Users', '+44% SQLs', '-27% CPL'],
    theme: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Aura B2B ABM',
    kpis: ['+3.1x Pipeline', '+38% Win Rate', '-22% Cycle'],
    theme: 'from-emerald-400 to-teal-600',
  },
]

export default function CaseStudies() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Featured case studies
        </motion.h2>

        <div className="mt-10 overflow-hidden">
          <Slider items={items} />
        </div>
      </div>
    </section>
  )
}

function Slider({ items }) {
  const [offset, setOffset] = React.useState(0)
  const visible = 1

  const next = () => setOffset((o) => (o + 1) % items.length)
  const prev = () => setOffset((o) => (o - 1 + items.length) % items.length)

  React.useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative">
      <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${offset * (100 / visible)}%)` }}>
        {items.concat(items[0]).map((card, i) => (
          <motion.div
            key={i}
            className="min-w-full"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
              <div className={`absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br ${card.theme} opacity-30 blur-3xl`} />
              <div className="relative z-10 grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold">{card.title}</h3>
                  <ul className="mt-5 grid grid-cols-2 gap-3">
                    {card.kpis.map((k) => (
                      <li key={k} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                        <div className="text-sm text-zinc-300">Outcome</div>
                        <div className="text-lg font-semibold">{k}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-[16/9] w-full rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_40%_40%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_20%,_rgba(168,85,247,0.15),_transparent_35%),radial-gradient(circle_at_60%_80%,_rgba(34,211,238,0.15),_transparent_35%)]" />
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:gap-3 transition-all">
                Read case study <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setOffset(i)} className={`h-2.5 w-8 rounded-full ${i === offset ? 'bg-white' : 'bg-white/20'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">Prev</button>
          <button onClick={next} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">Next</button>
        </div>
      </div>
    </div>
  )
}
