"use client";

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

import stephanyHero from '@/assets/stephany-mascara-nobg.png'
import luandaRuanda from '@/assets/luanda-ruanda.png'
import ayoPerformance from '@/assets/luanda-ruanda/sterAyo.jpeg'
import stephanyNarrando from '@/assets/stephany-narrando.png'
import coletivoTear from '@/assets/coletivo-tear.png'
import sterMaoPraCima from '@/assets/luanda-ruanda/sterMaoPraCima.jpeg'
import sterPremio from '@/assets/ster/sterPremio.png'
import sterStudioTear from '@/assets/ster/sterStudioTear.jpeg'
import sterArteEducacao from '@/assets/ster/sterArteEducacao.jpeg'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const agenda = [
  { date: '28 Out', event: 'Luanda Ruanda', local: 'Teatro Municipal, São Paulo — SP', tipo: 'Espetáculo' },
  { date: '4 Nov', event: 'Ayô — Contos e Danças', local: 'Festival Internacional de Contação, BH', tipo: 'Festival' },
  { date: '10–11 Nov', event: 'Formação em Arte-Educação', local: 'SESC Pinheiros, São Paulo — SP', tipo: 'Formação' },
  { date: '18 Nov', event: 'O Livro em Cena', local: 'FLIP — Festa Literária de Paraty', tipo: 'Evento' },
  { date: '5 Dez', event: 'Histórias da Caixola', local: 'Centro Cultural Banco do Brasil, RJ', tipo: 'Espetáculo' },
]

const destaques = [
  {
    titulo: 'Luanda Ruanda',
    descricao: 'Espetáculo de contação que tece memórias africanas e afro-brasileiras.',
    img: luandaRuanda.src,
    categoria: 'Teatro & Contação',
    href: '/projetos',
  },
  {
    titulo: 'Ayô',
    descricao: 'Performance de contos e danças de matriz iorubá. Alegria como resistência.',
    img: ayoPerformance.src,
    categoria: 'Performance',
    href: '/projetos',
  },
  {
    titulo: 'Arte-Educação',
    descricao: 'Oficinas e formações que transformam a sala de aula em palco de vida.',
    img: sterArteEducacao.src,
    categoria: 'Educação',
    href: '/arte-educacao',
  },
]

const tipoCor: Record<string, string> = {
  'Espetáculo': 'bg-yellow font-bold text-brown border-yellow/40',
  'Festival': 'text-amber-100 bg-crimson font-bold border-crimson/40',
  'Formação': 'bg-brown text-amber-100 font-bold border-[#463f1a]/40',
  'Evento': 'bg-azure text-amber-100 font-bold border-azure/40',
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="bg-amber-100">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-terracota">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full flex justify-end"
        >
          <div
            className="relative w-full md:w-3/5 lg:w-[55%] h-full hero-mask"
          >
            <img
              src={stephanyHero.src}
              alt="Stephany Metódio em performance"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-between md:justify-center max-w-7xl mx-auto px-6 md:px-8 pt-18 sm:pt-20 md:pt-20 pb-12 md:py-0"
        >
          {/* Top content: Name in right corner on mobile */}
          <div className="flex flex-col items-end text-right md:items-start md:text-left">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              className="font-sans font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.35em] text-amber-100 mb-1 md:mb-6 max-w-60 md:max-w-none text-right md:text-left"
            >
              Atriz · Produtora Cultural · Contadora de Histórias · Arte-Educadora
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                className="font-display text-[2.6rem] sm:text-5xl md:text-[clamp(4rem,10vw,9rem)] text-white leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] text-right md:text-left"
              >
                Stephany
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                className="font-display text-[2.6rem] sm:text-5xl md:text-[clamp(4rem,10vw,9rem)] text-crimson leading-none mb-2 md:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-right md:text-left"
              >
                Metódio
              </motion.h1>
            </div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              className="hidden md:block w-16 h-px bg-terracota mb-8"
            />
          </div>

          {/* Bottom content: Buttons in right corner on mobile */}
          <div className="flex flex-col items-end md:items-start">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              className="hidden md:block font-serif italic text-amber-100 text-lg max-w-md leading-relaxed mb-10 text-left"
            >
              Narrando mundos, educando corpos e transformando vidas através da arte e da palavra.
            </motion.p>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2.5 md:gap-4 justify-end md:justify-start"
            >
              <Link
                href="/sobre"
                className="bg-crimson text-yellow font-sans font-semibold text-[11px] md:text-xs uppercase tracking-widest px-5 py-3 md:px-8 md:py-4 hover:bg-white hover:text-ink transition-colors duration-300 shadow-lg shadow-black/30"
              >
                Sobre mim
              </Link>
              <Link
                href="/projetos"
                className="border border-amber-100/50 bg-ink/50 backdrop-blur-md text-amber-100 font-sans text-[11px] md:text-xs uppercase tracking-widest px-5 py-3 md:px-8 md:py-4 hover:bg-terracota hover:text-brown transition-all duration-300 shadow-lg shadow-black/30"
              >
                Ver Projetos
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-terracota/40"
          />
          <span className="text-gold/40 text-[10px] uppercase tracking-widest font-sans">scroll</span>
        </motion.div>
      </section>

      {/* ── BIO RESUMO ───────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center bg-amber-100">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-terracota mb-5">Quem é</p>
          <h2 className="font-display text-5xl text-terracota mb-6 leading-tight">
            Uma artista <br />
            <span className="text-crimson">que conta mundos</span>
          </h2>
          <div className="w-12 h-px bg-terracota/60 mb-8" />
          <p className="font-serif text-brown text-lg leading-relaxed mb-6">
            Stephany Metódio é mulher negra, agrestina, natural de Garanhuns. Artista e produtora, antirracista, constrói sua trajetória atuando de forma múltipla e comprometida com cultura, educação, gestão, ancestralidade e memória. É atriz, narradora de histórias (narratriz), poeta, arte-educadora, produtora, curadora e gestora cultural.
          </p>
          <p className="font-sans text-brown text-sm leading-relaxed mb-10">
            CEO do <span className="text-crimson font-bold">Coletivo Tear</span>, do espaço cultural Aldeia Tear, do Selo Musical Studio Tear e da Cartonera Severina Catadora, além de integrar o grupo gestor da RIPA – Rede Interiorana de Produtores, Técnicos e Artistas de Pernambuco. Sua pesquisa central está voltada à tradição oral africana e afro-brasileira, entendendo a palavra como tecnologia de memória, educação e resistência.</p>
          <Link
            href="/sobre"
            className="inline-block font-sans font-bold text-xs uppercase tracking-widest text-terracota border-b border-terracota/60 pb-1 hover:border-terracota hover:text-crimson/80 transition-colors"
          >
            Leia a biografia completa →
          </Link>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 h-72 overflow-hidden">
            <img
              src={sterMaoPraCima.src}
              alt="Stephany com máscara africana"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="h-44 overflow-hidden">
            <img
              src={stephanyNarrando.src}
              alt="Stephany narrando"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="h-44 overflow-hidden bg-terracota flex flex-col items-center justify-center gap-2 p-6">
            <span className="font-display text-5xl text-crimson">+15</span>
            <span className="font-sans text-xs uppercase tracking-widest text-white text-center">anos de trajetória artística</span>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-terracota py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '+80', label: 'Cidades Circuladas' },
            { num: '6', label: 'Espetáculos Criados' },
            { num: '+12', label: 'Anos de Arte-Educação' },
            { num: '+20', label: 'Editais aprovados' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-display text-5xl text-crimson mb-2">{stat.num}</p>
              <p className="font-sans text-xs uppercase tracking-widest text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DESTAQUES ────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-terracota mb-3">Criações em Destaque</p>
            <h2 className="font-display text-4xl text-crimson">Trabalhos Recentes</h2>
          </div>
          <Link
            href="/projetos"
            className="hidden sm:block font-sans text-xs uppercase tracking-widest text-terracota hover:text-crimson transition-colors border-b border-terracota/20 pb-1"
          >
            Ver todos →
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {destaques.map((item) => (
            <motion.div
              key={item.titulo}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover="hover"
              className="group relative overflow-hidden bg-brown text-left block"
            >
              <Link href={item.href} className="block">
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.titulo}
                    className="w-full h-full object-cover object-center"
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-terracota/50 via-brown/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-amber-100 mb-2">{item.categoria}</p>
                  <h3 className="font-display text-2xl text-yellow mb-2">{item.titulo}</h3>
                  <p className="font-sans text-white text-xs leading-relaxed bg-crimson/50 rounded-md p-2 text-center">{item.descricao}</p>
                  <motion.div
                    variants={{ hover: { width: '100%' } }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-px bg-crimson mt-4"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── AGENDA ───────────────────────────────────────── */}
      <section className="bg-terracota border-y border-terracota/20 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-crimson mb-3">2025</p>
            <h2 className="font-display text-4xl text-amber-100">Próximas <span className="text-yellow">Apresentações</span></h2>
          </motion.div>

          <div className="space-y-0">
            {agenda.map((item) => (
              <motion.div
                key={item.event}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 border-b border-white/8 hover:bg-white/3 transition-colors px-2 group"
              >
                <div className="w-20 shrink-0">
                  <span className="font-display text-yellow text-2xl">{item.date.split(' ')[0]}</span>
                  <span className="font-sans text-amber-100 text-xs block">{item.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-white font-semibold text-lg group-hover:text-crimson transition-colors">{item.event}</h3>
                  <p className="font-sans text-amber-100 text-xs mt-0.5">{item.local}</p>
                </div>
                <span className={`shrink-0 font-sans text-[10px] uppercase tracking-widest border px-3 py-1 ${tipoCor[item.tipo]}`}>
                  {item.tipo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 grid grid-cols-1 lg:grid-cols-3">
        {[
          { src: coletivoTear.src, pos: 'object-center' },
          { src: sterStudioTear.src, pos: 'object-top' },
          { src: sterPremio.src, pos: 'object-top' },
        ].map(({ src, pos }, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="overflow-hidden h-64 lg:h-96"
          >
            <img src={src} alt="" className={`w-full h-full object-cover ${pos} hover:scale-105 transition-transform duration-1000`} />
          </motion.div>
        ))}
      </section>

      {/* ── CONTATO ──────────────────────────────────────── */}
      <section className="bg-crimson py-28">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-5">Contato</p>
            <h2 className="font-display text-5xl text-white leading-tight mb-4">
              Vamos criar <br /><span className="text-gold">juntos?</span>
            </h2>
            <div className="w-12 h-px bg-yellow mb-8" />
            <p className="font-serif text-amber-100 text-lg leading-relaxed max-w-md">
              Para contratações, convites, parcerias e colaborações, entre em contato pelos canais abaixo.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { label: 'E-mail', value: 'stephany.metodio@email.com', href: 'mailto:stephany.metodio@email.com', icon: '✉' },
              { label: 'WhatsApp', value: '+55 87 9 8148-0808', href: 'https://wa.me/5587981480808', icon: '◎' },
              { label: 'Instagram', value: '@stephanymetodio', href: 'https://instagram.com/stephanymetodio', icon: '◇' },
              { label: 'YouTube', value: 'Stephany Metódio', href: 'https://youtube.com/@stephanymetodio', icon: '▷' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center text-yellow group-hover:bg-yellow group-hover:text-brown transition-all duration-300 shrink-0">
                  <span className="text-sm">{item.icon}</span>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-yellow mb-0.5">{item.label}</p>
                  <p className="font-sans text-amber-100 text-sm group-hover:text-terracota transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-4 border-t border-gold/15">
              <p className="font-sans text-amber-100 text-xs leading-relaxed">
                Disponível para espetáculos, workshops, palestras, curadoria e projetos de arte-educação em todo o Brasil e exterior.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
