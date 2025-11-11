import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const testimonials = [
  {
    quote:
      "Digiwic rebuilt our paid engine and landing experience. We hit profitability in 6 weeks and sustained a 5x ROAS for the next quarter.",
    name: 'Elena Marshall',
    title: 'VP Growth, NovaWear',
  },
  {
    quote:
      "Their CRO program and creative sprints transformed our funnel. Conversion rate up 58% and CAC down 31% in 90 days.",
    name: 'Rahul Menon',
    title: 'CMO, Finline',
  },
  {
    quote:
      "Best agency experience we’ve had. Transparent, fast, and outcome-obsessed. The team feels like an extension of ours.",
    name: 'Chloe Nguyen',
    title: 'Founder, Aura Labs',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold"
        >
          What clients say
        </motion.h2>

        <div className="mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  )
}

function Carousel() {
  const [index, setIndex] = React.useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  React.useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <div className="relative mt-6 min-h-[120px]">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${i === index ? 'pointer-events-auto' : 'pointer-events-none'} text-lg md:text-xl text-zinc-200`}
            >
              “{t.quote}”
              <footer className="mt-4 text-sm text-zinc-400">
                — {t.name}, {t.title}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-8 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/20'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={prev} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">Prev</button>
            <button onClick={next} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
