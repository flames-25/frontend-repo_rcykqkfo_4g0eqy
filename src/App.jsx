import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, LineChart, Megaphone, ShieldCheck, Stars } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import StickyInquiry from './components/StickyInquiry'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#07070b] text-white overflow-x-hidden">
      {/* Decorative global gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-cyan-400/20 to-violet-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="font-semibold tracking-wide">Digiwic</div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:bg-zinc-100 transition-colors">
                Get Proposal <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Spline */}
      <section className="relative">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Subtle gradient overlay to improve contrast (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(7,7,11,0)_0%,_rgba(7,7,11,0.6)_60%,_rgba(7,7,11,0.9)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-36 md:pb-40">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
          >
            <Stars className="h-4 w-4 text-cyan-300" />
            Interactive. Tech. Futuristic.
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Digital marketing that feels like tomorrow
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-zinc-300"
          >
            Digiwic blends creativity, data, and cutting‑edge 3D to craft conversion‑focused experiences. We turn clicks into customers with performance you can see and feel.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-black">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-zinc-200 hover:bg-white/10 transition-colors">
              See our work
            </a>
          </motion.div>

          {/* Floating stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: '4.8x', v: 'ROAS avg.' },
              { k: '120+', v: 'brands scaled' },
              { k: '32M', v: 'monthly reach' },
              { k: '98%', v: 'client satisfaction' },
            ].map((item, i) => (
              <motion.div
                key={item.v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">{item.k}</div>
                <div className="text-xs text-zinc-400 mt-1">{item.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold"
          >
            Performance services that convert
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Rocket,
                title: 'Growth Campaigns',
                desc: 'Full‑funnel paid media across Meta, Google, and TikTok to scale efficiently.',
                accent: 'from-fuchsia-500 to-violet-500',
              },
              {
                icon: LineChart,
                title: 'CRO & Analytics',
                desc: 'Data‑driven experimentation, heatmaps, and attribution that unlock insights.',
                accent: 'from-cyan-400 to-blue-500',
              },
              {
                icon: Megaphone,
                title: 'Content & Creative',
                desc: 'High‑impact creatives, UGC, and motion that stop the scroll and sell.',
                accent: 'from-amber-400 to-rose-500',
              },
              {
                icon: ShieldCheck,
                title: 'Brand Protection',
                desc: 'Reputation, compliance, and security so you can grow with confidence.',
                accent: 'from-emerald-400 to-teal-500',
              },
            ].map(({ icon: Icon, title, desc, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
                <div className="relative z-10">
                  <div className={`h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br ${accent}`}>
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work highlight */}
      <section id="work" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 md:p-12 overflow-hidden"
          >
            <div className="relative">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold">Campaigns that lift KPIs across the board</h3>
                  <p className="mt-3 text-zinc-300">
                    From DTC rockets to B2B demand engines, we craft creative systems that convert. Expect clear targets, clear reporting, and clear growth.
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    {[
                      ['+63%', 'Conversion rate'],
                      ['-34%', 'CAC'],
                      ['+5.2x', 'ROAS'],
                      ['+280k', 'New users'],
                    ].map(([k, v]) => (
                      <li key={v} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-xl font-bold">{k}</div>
                        <div className="text-xs text-zinc-400">{v}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.15),_transparent_35%),radial-gradient(circle_at_60%_80%,_rgba(34,211,238,0.15),_transparent_35%)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies slider */}
      <div id="case-studies">
        <CaseStudies />
      </div>

      {/* Testimonials carousel */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* CTA */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-violet-600/10 to-cyan-400/10 p-10 md:p-14"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15),_transparent_40%)]" />
            <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">Ready to accelerate your growth?</h3>
                <p className="mt-3 text-zinc-200 max-w-xl">Tell us about your goals. We’ll craft a bespoke strategy, creative that converts, and a plan to scale.</p>
                <form className="mt-6 grid gap-3 max-w-md">
                  <input placeholder="Your email" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                  <input placeholder="Company / brand" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white/30" />
                  <button className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:bg-zinc-100 transition-colors">
                    Get my proposal <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['Certified Partner', 'Meta, Google, TikTok'],
                  ['Global Team', 'NYC • London • Dubai'],
                  ['24/7 Monitoring', 'Real‑time reporting'],
                  ['Security First', 'GDPR, SOC2 ready'],
                ].map(([title, sub]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-zinc-400">{sub}</div>
                    <div className="mt-1 text-lg font-semibold">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400">
              <Sparkles className="h-4 w-4 text-black" />
            </div>
            <span>Digiwic Digital Marketing Agency</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* Sticky Inquiry Widget */}
      <StickyInquiry />
    </div>
  )
}
