"use client";

import { motion } from 'framer-motion'
import coletivoTear from '@/assets/coletivo-tear.png'
import luandaRuanda from '@/assets/luanda-ruanda.png'
import ayoPerformance from '@/assets/ayo-performance.png'
import stephanyNarrando from '@/assets/stephany-narrando.png'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const servicos = [
  {
    titulo: 'Produção Executiva',
    desc: 'Gestão completa de projetos artísticos: planejamento, orçamento, captação de recursos, logística e prestação de contas.',
    icon: '◈',
    cor: 'text-gold border-gold/30',
  },
  {
    titulo: 'Curadoria Artística',
    desc: 'Seleção e curadoria de espetáculos, artistas e programações para festivais, mostras e espaços culturais.',
    icon: '◉',
    cor: 'text-azure border-azure/30',
  },
  {
    titulo: 'Gestão Cultural',
    desc: 'Planejamento estratégico de espaços e projetos culturais, formação de equipes e desenvolvimento de públicos.',
    icon: '◌',
    cor: 'text-crimson border-crimson/30',
  },
  {
    titulo: 'Captação de Recursos',
    desc: 'Elaboração de projetos para leis de incentivo, editais públicos e fundações privadas. Lei Rouanet, ProAC e BNDES.',
    icon: '◎',
    cor: 'text-purple border-purple/30',
  },
]

const projProduzidos = [
  {
    titulo: 'Festival Tear de Artes Cênicas',
    ano: '2018–2023',
    desc: 'Festival anual de teatro e contação de histórias periférico, realizado em São Paulo. 6 edições, +40 grupos, +5.000 espectadores.',
    img: luandaRuanda.src,
  },
  {
    titulo: 'Gira Cultural — Coletivo Tear',
    ano: '2020–2024',
    desc: 'Circulação de espetáculos do Coletivo em escolas públicas e comunidades de periferia em 3 estados.',
    img: ayoPerformance.src,
  },
  {
    titulo: 'Mostra Negra em Cena',
    ano: '2022',
    desc: 'Curadoria e gestão da mostra de artes afro-brasileiras no Centro Cultural da Juventude, SP. 12 grupos participantes.',
    img: stephanyNarrando.src,
  },
]

export default function ProducaoPage() {
  return (
    <div className="bg-azure min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-8">
        <motion.p variants={reveal} initial="hidden" animate="show" className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-4">
          Produção & Curadoria
        </motion.p>
        <motion.h1
          custom={1} variants={reveal} initial="hidden" animate="show"
          className="font-display text-[clamp(2.5rem,7vw,6rem)] text-white leading-none mb-8"
        >
          Criando condições<br />para a <span className="text-gold">arte acontecer</span>
        </motion.h1>
        <motion.div custom={2} variants={reveal} initial="hidden" animate="show" className="w-16 h-px bg-gold mb-8" />
        <motion.p
          custom={3} variants={reveal} initial="hidden" animate="show"
          className="font-serif italic text-white/60 text-xl max-w-xl leading-relaxed"
        >
          A produção cultural como ato político. Gestão que não abdica da poesia.
        </motion.p>
      </section>

      {/* ── COLETIVO TEAR ────────────────────────────────── */}
      <section className="py-20 bg-brown/40">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="relative overflow-hidden aspect-4/3">
              <img src={coletivoTear.src} alt="Coletivo Tear em performance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold/70">Coletivo Tear</span>
              </div>
            </div>
          </motion.div>

          <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Coletivo Tear</p>
              <h2 className="font-display text-4xl text-white mb-4">Tecendo redes, <span className="text-gold">fazendo arte</span></h2>
            </div>
            <p className="font-sans text-white/65 leading-loose">
              O <strong className="text-gold">Coletivo Tear</strong> foi fundado em 2012 por Stephany Metódio com a missão de produzir, circular e fomentar arte cênica de qualidade em territórios fora dos grandes circuitos culturais. O grupo é formado por artistas, educadores e produtores culturais comprometidos com a arte como direito.
            </p>
            <p className="font-sans text-white/65 leading-loose">
              Em mais de uma década de existência, o Tear já produziu 6 espetáculos autorais, realizou 4 edições do Festival Tear de Artes Cênicas, viabilizou a circulação em +80 cidades e formou centenas de artistas e educadores por meio de suas oficinas.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: '12', label: 'Anos' },
                { num: '6', label: 'Espetáculos' },
                { num: '+80', label: 'Cidades' },
              ].map(s => (
                <div key={s.label} className="border border-gold/20 p-4 text-center">
                  <p className="font-display text-3xl text-gold">{s.num}</p>
                  <p className="font-sans text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVIÇOS ─────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">O que ofereço</p>
          <h2 className="font-display text-4xl text-white">Serviços de <span className="text-gold">Produção</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {servicos.map((s) => (
            <motion.div
              key={s.titulo}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`border ${s.cor.split(' ')[1]} bg-brown/40 p-8 hover:bg-brown transition-all duration-300`}
            >
              <span className={`text-3xl block mb-5 ${s.cor.split(' ')[0]}`}>{s.icon}</span>
              <h3 className="font-serif text-white font-semibold text-xl mb-3">{s.titulo}</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROJETOS PRODUZIDOS ───────────────────────────── */}
      <section className="bg-brown/30 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Histórico</p>
            <h2 className="font-display text-4xl text-white">Projetos <span className="text-gold">Produzidos</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projProduzidos.map((p) => (
              <motion.div
                key={p.titulo}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="group"
              >
                <div className="h-48 overflow-hidden mb-4">
                  <img
                    src={p.img}
                    alt={p.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold/50">{p.ano}</span>
                <h3 className="font-serif text-white font-semibold text-lg mt-1 mb-2 group-hover:text-gold transition-colors">{p.titulo}</h3>
                <p className="font-sans text-white/50 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPTAÇÃO ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-brown border border-gold/20 p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-4">Captação de Recursos</p>
            <h3 className="font-display text-3xl text-white mb-4">Projetos aprovados <span className="text-gold">em editais</span></h3>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Experiência comprovada na elaboração de projetos para Lei Rouanet (Mecenato e FNC), ProAC, Fundo Nacional de Cultura, BNDES e fundações privadas. Mais de 15 projetos aprovados em editais públicos estaduais e federais.
            </p>
          </div>
          <div className="space-y-3">
            {['Lei Rouanet — Mecenato', 'ProAC — SP', 'Fundo Nacional de Cultura', 'BNDES Sociocultural', 'Edital SESC de Artes Cênicas', 'Editais Municipais SP, RJ e SSA'].map((e) => (
              <motion.div
                key={e}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="font-sans text-white/65 text-sm">{e}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-crimson/90 py-14 text-center">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="font-display text-3xl text-white mb-3">Vamos construir algo juntos?</h3>
          <p className="font-sans text-white/70 text-sm mb-8">Produção, curadoria, gestão ou captação — entre em contato</p>
          <a
            href="mailto:stephany.metodio@email.com"
            className="inline-block bg-white text-crimson font-sans font-semibold text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold hover:text-brown transition-colors"
          >
            Falar sobre um projeto →
          </a>
        </motion.div>
      </section>
    </div>
  )
}
