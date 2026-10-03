"use client";

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

type TipoEvento = 'espetaculo' | 'premio' | 'formacao' | 'institucional' | 'internacional'

type Evento = {
  ano: string
  titulo: string
  desc: string
  tipo: TipoEvento
}

const eventos: Evento[] = [
  { ano: '2005', titulo: 'Início da Trajetória', desc: 'Graduação em Artes Cênicas pela UFBA. Primeiros passos em teatro e contação de histórias em Salvador.', tipo: 'formacao' },
  { ano: '2007', titulo: 'Primeiro Espetáculo', desc: '"As Filhas da Noite" — primeiro espetáculo solo de contação, apresentado no Teatro SESI BA e em festivais regionais.', tipo: 'espetaculo' },
  { ano: '2010', titulo: 'Chegada a São Paulo', desc: 'Mudança para SP. Formação em pedagogia do teatro na ECA/USP e integração à cena alternativa paulistana.', tipo: 'formacao' },
  { ano: '2012', titulo: 'Coletivo Tear', desc: 'Fundação do Coletivo Tear, grupo de criação e produção artística voltado para arte periférica e contação de histórias.', tipo: 'institucional' },
  { ano: '2014', titulo: 'Primeira Circulação Internacional', desc: 'Festival Internacional de Contação de Histórias em Lisboa, Portugal. Apresentação de "As Filhas da Noite" em 3 cidades.', tipo: 'internacional' },
  { ano: '2016', titulo: 'Luanda Ruanda', desc: 'Estreia do espetáculo "Luanda Ruanda" no SESC Pinheiros. O espetáculo entra em circulação nacional e recebe prêmio de melhor espetáculo no Festival Cena Aberta.', tipo: 'espetaculo' },
  { ano: '2017', titulo: 'Reconhecimento Nacional', desc: 'Indicação ao Prêmio Shell de Teatro na categoria Melhor Atriz — Teatro Infantil e Jovem. Festival de Contação, RJ.', tipo: 'premio' },
  { ano: '2018', titulo: 'Festival Tear I', desc: 'Primeira edição do Festival Tear de Artes Cênicas, realizado na Zona Leste de SP. 12 grupos, 3 mil espectadores, 5 dias de programação.', tipo: 'institucional' },
  { ano: '2019', titulo: 'Residência na Nigéria', desc: 'Residência artística no Instituto Obá, Lagos, Nigéria. Pesquisa sobre teatro iorubá e tradições orais da África Ocidental.', tipo: 'internacional' },
  { ano: '2020', titulo: 'Ayô', desc: 'Estreia de "Ayô", espetáculo de contos e danças de matriz iorubá. Adaptação para formato online durante a pandemia.', tipo: 'espetaculo' },
  { ano: '2021', titulo: 'O Livro em Cena', desc: 'Lançamento do projeto "O Livro em Cena" em parceria com o MEC. Programa alcança 40 escolas públicas em 3 estados.', tipo: 'institucional' },
  { ano: '2022', titulo: 'Turnê — 8 Estados', desc: '"Ayô" realiza turnê por 8 estados brasileiros. Angola, Moçambique e Alemanha completam a circulação internacional do espetáculo.', tipo: 'internacional' },
  { ano: '2023', titulo: 'FLIP', desc: 'Curadoria e apresentações na Festa Literária Internacional de Paraty. "O Livro em Cena" abre a programação infantil do festival.', tipo: 'premio' },
  { ano: '2024', titulo: 'Expansão em Arte-Educação', desc: 'Parceria com SESC SP para programa anual de formação de educadores. Mais de 200 professores formados ao longo do ano.', tipo: 'formacao' },
  { ano: '2025', titulo: 'Novos Horizontes', desc: 'Desenvolvimento de novo espetáculo, manutenção da agenda de formações e planejamento de circulação europeia de "Luanda Ruanda".', tipo: 'espetaculo' },
]

const tipoCor: Record<TipoEvento, { dot: string; label: string; tag: string }> = {
  espetaculo: { dot: 'bg-gold', label: 'Espetáculo', tag: 'text-gold border-gold/30' },
  premio: { dot: 'bg-azure', label: 'Prêmio / Destaque', tag: 'text-azure border-azure/30' },
  formacao: { dot: 'bg-crimson', label: 'Formação', tag: 'text-crimson border-crimson/30' },
  institucional: { dot: 'bg-purple', label: 'Institucional', tag: 'text-purple border-purple/30' },
  internacional: { dot: 'bg-wine', label: 'Internacional', tag: 'text-wine border-wine/30' },
}

function TimelineItem({ evento, index }: { evento: Evento; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -30 : 30, 0])
  const cor = tipoCor[evento.tipo]
  const esquerda = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="grid grid-cols-[1fr_auto_1fr] gap-0 items-start bg-crimson"
    >
      {/* Lado esquerdo */}
      <div className={`pb-12 pr-10 ${esquerda ? 'text-right' : ''}`}>
        {esquerda ? (
          <div className="space-y-2">
            <span className={`inline-block font-sans text-[10px] uppercase tracking-widest border px-2 py-0.5 ${cor.tag}`}>{cor.label}</span>
            <h3 className="font-display text-xl text-white">{evento.titulo}</h3>
            <p className="font-sans text-amber-100 text-xs leading-relaxed">{evento.desc}</p>
          </div>
        ) : (
          <div className="pt-3 flex justify-end">
            <span className="font-display text-4xl text-azure">{evento.ano}</span>
          </div>
        )}
      </div>

      {/* Linha central */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${cor.dot} shrink-0 mt-1.5 z-10`} />
        <div className="w-px flex-1 bg-gold/15 min-h-15" />
      </div>

      {/* Lado direito */}
      <div className="pb-12 pl-10">
        {!esquerda ? (
          <div className="space-y-2">
            <span className={`inline-block font-sans text-[10px] uppercase tracking-widest border px-2 py-0.5 ${cor.tag}`}>{cor.label}</span>
            <h3 className="font-display text-xl text-white">{evento.titulo}</h3>
            <p className="font-sans text-amber-100 text-xs leading-relaxed">{evento.desc}</p>
          </div>
        ) : (
          <div className="pt-3">
            <span className="font-display text-4xl text-yellow">{evento.ano}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function TimelineItemMobile({ evento }: { evento: Evento }) {
  const cor = tipoCor[evento.tipo]
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-2.5 h-2.5 rounded-full ${cor.dot} mt-1.5`} />
        <div className="w-px flex-1 bg-gold/15 mt-1" />
      </div>
      <div className="pb-10 min-w-0">
        <span className="font-display text-3xl text-gold/25 block mb-1">{evento.ano}</span>
        <span className={`inline-block font-sans text-[10px] uppercase tracking-widest border px-2 py-0.5 mb-2 ${cor.tag}`}>{cor.label}</span>
        <h3 className="font-serif text-white font-semibold text-base mb-1">{evento.titulo}</h3>
        <p className="font-sans text-white/50 text-xs leading-relaxed">{evento.desc}</p>
      </div>
    </motion.div>
  )
}

export default function TrajetoriaPage() {
  return (
    <div className="bg-crimson min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-8">
        <motion.p variants={reveal} initial="hidden" animate="show" className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-4">
          Trajetória
        </motion.p>
        <motion.h1
          custom={1} variants={reveal} initial="hidden" animate="show"
          className="font-display text-[clamp(2.5rem,7vw,6rem)] text-white leading-none mb-8"
        >
          Uma vida<br /><span className="text-gold">em cena</span>
        </motion.h1>
        <motion.div custom={2} variants={reveal} initial="hidden" animate="show" className="w-16 h-px bg-yellow mb-8" />
        <motion.p
          custom={3} variants={reveal} initial="hidden" animate="show"
          className="font-serif italic text-amber-100 text-xl max-w-xl leading-relaxed"
        >
          Mais de 15 anos de criação, circulação e transformação através das artes cênicas.
        </motion.p>
      </section>

      {/* ── LEGENDA ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pb-12">
        <motion.div
          variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {(Object.entries(tipoCor) as [TipoEvento, typeof tipoCor[TipoEvento]][]).map(([, val]) => (
            <div key={val.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${val.dot}`} />
              <span className="font-sans text-[10px] uppercase tracking-widest text-amber-100">{val.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── TIMELINE DESKTOP ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 pb-24 hidden lg:block">
        {eventos.map((evento, i) => (
          <TimelineItem key={evento.ano + evento.titulo} evento={evento} index={i} />
        ))}
      </section>

      {/* ── TIMELINE MOBILE ──────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-8 pb-24 lg:hidden">
        {eventos.map(evento => (
          <TimelineItemMobile key={evento.ano + evento.titulo} evento={evento} />
        ))}
      </section>

      {/* ── RECONHECIMENTOS ──────────────────────────────── */}
      <section className="bg-purple py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-3">Reconhecimentos</p>
            <h2 className="font-display text-4xl text-white">Prêmios & <span className="text-gold">Destaques</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { premio: 'Melhor Espetáculo', festival: 'Festival Cena Aberta — 2016', obra: 'Luanda Ruanda' },
              { premio: 'Indicação — Melhor Atriz', festival: 'Prêmio Shell de Teatro — 2017', obra: 'Teatro Infantil e Jovem' },
              { premio: 'Seleção Oficial', festival: 'Festival Internacional de Lisboa — 2014, 2019', obra: 'Contação de Histórias' },
              { premio: 'Destaque em Arte-Educação', festival: 'SESC SP — 2022, 2024', obra: 'Formação de educadores' },
              { premio: 'Projeto Aprovado', festival: 'Lei Rouanet — 5 projetos aprovados', obra: '2016–2024' },
              { premio: 'Curadoria Convidada', festival: 'FLIP 2023 e 2024', obra: 'Programação Infantil' },
            ].map((r) => (
              <motion.div
                key={r.premio + r.festival}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="border border-terracota p-6 hover:border-gold/40 transition-colors"
              >
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="font-sans text-gold text-xs font-semibold uppercase tracking-widest mb-1">{r.premio}</p>
                <p className="font-serif text-white/70 text-sm leading-snug mb-2">{r.festival}</p>
                <p className="font-sans text-white/35 text-xs">{r.obra}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIRCULAÇÕES ──────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Circulação Nacional e Internacional</p>
          <h2 className="font-display text-4xl text-white">Onde já <span className="text-gold">esteve</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div custom={0} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mb-5">Brasil</p>
            <div className="flex flex-wrap gap-2">
              {['São Paulo', 'Rio de Janeiro', 'Salvador', 'Recife', 'Fortaleza', 'Belo Horizonte', 'Brasília', 'Porto Alegre', 'Curitiba', 'Manaus', 'Belém', 'São Luís', 'Natal', 'João Pessoa', 'Aracaju', 'Paraty', 'Campinas', 'Santos'].map(c => (
                <span key={c} className="font-sans text-white/50 text-xs border border-white/10 px-3 py-1.5 hover:border-gold/40 hover:text-gold transition-colors cursor-default">{c}</span>
              ))}
            </div>
          </motion.div>

          <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mb-5">Internacional</p>
            <div className="space-y-3">
              {[
                { pais: 'Portugal', cidades: 'Lisboa, Porto, Coimbra — 2014, 2019' },
                { pais: 'Angola', cidades: 'Luanda — 2019' },
                { pais: 'Nigéria', cidades: 'Lagos — 2019 (residência artística)' },
                { pais: 'Alemanha', cidades: 'Berlim, Hamburgo — 2022' },
                { pais: 'Senegal', cidades: 'Dakar — Festival Mundial das Artes Negras — 2023' },
              ].map(p => (
                <div key={p.pais} className="flex gap-4 items-baseline border-b border-white/8 pb-3">
                  <span className="font-display text-gold text-lg w-24 shrink-0">{p.pais}</span>
                  <span className="font-sans text-white/50 text-xs">{p.cidades}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
