"use client";

import { motion } from 'framer-motion'
import stephanyNarrando from '@/assets/stephany-narrando.png'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const oficinas = [
  {
    titulo: 'A Arte de Contar Histórias',
    carga: '20h',
    publico: 'Educadores e artistas iniciantes',
    desc: 'Fundamentos da contação de histórias: voz, corpo, olhar, silêncio e escolha narrativa. Metodologia baseada na oralidade e nas matrizes africanas.',
    cor: 'border-gold text-gold',
  },
  {
    titulo: 'Corpo que Conta — Teatro e Oralidade',
    carga: '30h',
    publico: 'Artistas em formação e educadores',
    desc: 'Relação entre o corpo e a palavra falada. Exercícios de presença cênica, escuta, improviso e construção de personagens narradores.',
    cor: 'border-azure text-azure',
  },
  {
    titulo: 'Matrizes Africanas na Escola',
    carga: '16h',
    publico: 'Professores da educação básica',
    desc: 'Práticas pedagógicas que integram a cultura afro-brasileira no cotidiano escolar. Histórias, jogos, cantos e danças como ferramentas de ensino.',
    cor: 'border-crimson text-crimson',
  },
  {
    titulo: 'Literatura e Palco — O Livro Vivo',
    carga: '12h',
    publico: 'Mediadores de leitura e bibliotecários',
    desc: 'Como transformar obras literárias em experiências cênicas. Adaptação, dramatização e animação de textos da literatura afro-brasileira.',
    cor: 'border-purple text-purple',
  },
  {
    titulo: 'Formação em Mediação Cultural',
    carga: '40h',
    publico: 'Gestores e produtores culturais',
    desc: 'Ferramentas para mediação de projetos culturais em contextos vulneráveis. Gestão participativa, escuta ativa e cocriação comunitária.',
    cor: 'border-gold text-gold',
  },
  {
    titulo: 'Contação para Primeira Infância',
    carga: '8h',
    publico: 'Educadores de creches e pré-escolas',
    desc: 'Narrativas para bebês e crianças de 0 a 6 anos. Uso do corpo, objetos, musicais e elementos sensoriais no trabalho com as primeiras infâncias.',
    cor: 'border-azure text-azure',
  },
]

const depoimentos = [
  {
    texto: 'A formação com Stephany mudou completamente a forma como eu me relaciono com meus alunos. Aprendi que a história é o elo que nos torna humanos.',
    nome: 'Professora Marina S.',
    local: 'Escola Estadual — Salvador, BA',
  },
  {
    texto: 'Participei da oficina de Matrizes Africanas e saí de lá com uma caixa de ferramentas que nunca mais abandonei. Cada encontro foi uma revelação.',
    nome: 'Educador Paulo R.',
    local: 'SESC Pinheiros — SP',
  },
  {
    texto: 'Ela tem um dom raro: sabe ensinar fazendo acontecer. Não é uma oficina, é uma experiência que muda o modo de enxergar a educação.',
    nome: 'Produtora Cultural Cássia F.',
    local: 'Instituto Pensarte',
  },
]

export default function ArteEducacaoPage() {
  return (
    <div className="bg-ink min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-2/5 hidden lg:block">
          <img src={stephanyNarrando.src} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-ink to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.p variants={reveal} initial="hidden" animate="show" className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-4">
            Arte-Educação & Formação
          </motion.p>
          <motion.h1
            custom={1} variants={reveal} initial="hidden" animate="show"
            className="font-display text-[clamp(2.5rem,7vw,6rem)] text-white leading-none mb-4"
          >
            Oficinas, Cursos<br /><span className="text-gold">& Formações</span>
          </motion.h1>
          <motion.div custom={2} variants={reveal} initial="hidden" animate="show" className="w-16 h-px bg-gold mb-8" />
          <motion.p
            custom={3} variants={reveal} initial="hidden" animate="show"
            className="font-serif italic text-white/60 text-xl max-w-xl leading-relaxed"
          >
            A arte-educação como ferramenta de transformação social, afirmação identitária e desenvolvimento humano integral.
          </motion.p>
        </div>
      </section>

      {/* ── METODOLOGIA ──────────────────────────────────── */}
      <section className="bg-brown/50 py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-10">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Metodologia</p>
            <h2 className="font-display text-3xl text-white mb-4">Como trabalho</h2>
            <div className="w-8 h-px bg-gold mb-6" />
          </motion.div>
          <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            <p className="font-sans text-white/65 leading-loose">
              Minhas práticas pedagógicas nascem da escuta — do grupo, do espaço, da história de cada participante. Não existe um roteiro fixo. Existe uma intenção: criar condições para que cada pessoa descubra que tem histórias a contar e um corpo que sabe narrá-las.
            </p>
            <p className="font-sans text-white/65 leading-loose">
              A metodologia que desenvolvi ao longo dos anos integra as tradições orais africanas e afro-brasileiras com pedagogias contemporâneas da educação e do teatro. O resultado é um espaço de criação que respeita as múltiplas formas de inteligência e expressão.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: '○', label: 'Escuta Ativa', desc: 'Partir do que cada grupo traz' },
                { icon: '◇', label: 'Corpo Presente', desc: 'O movimento como linguagem' },
                { icon: '△', label: 'Ancestralidade', desc: 'Raízes africanas como fundamento' },
              ].map(m => (
                <div key={m.label} className="border border-gold/20 p-5">
                  <span className="text-gold text-2xl block mb-3">{m.icon}</span>
                  <p className="font-sans text-white text-sm font-semibold mb-1">{m.label}</p>
                  <p className="font-sans text-white/40 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OFICINAS ─────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Catálogo</p>
          <h2 className="font-display text-4xl text-white">Oficinas & <span className="text-gold">Formações</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {oficinas.map((o) => (
            <motion.div
              key={o.titulo}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`border-l-2 ${o.cor.split(' ')[0]} bg-brown/50 p-7 hover:bg-brown transition-colors duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-white font-semibold text-lg leading-snug max-w-xs">{o.titulo}</h3>
                <span className={`font-sans text-xs font-bold border px-2 py-0.5 shrink-0 ml-4 ${o.cor}`}>{o.carga}</span>
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mb-3">{o.publico}</p>
              <p className="font-sans text-white/60 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────── */}
      <section className="bg-brown py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Vozes</p>
            <h2 className="font-display text-4xl text-white">O que dizem <span className="text-gold">os participantes</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {depoimentos.map((d) => (
              <motion.div
                key={d.nome}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-ink/60 p-8 border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <p className="font-serif italic text-white/75 text-base leading-relaxed mb-6">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="font-sans text-gold text-xs font-semibold">{d.nome}</p>
                <p className="font-sans text-white/30 text-xs">{d.local}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCEIROS ────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/50">Instituições parceiras</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {['SESC SP', 'SESC RJ', 'Centro Cultural Banco do Brasil', 'Secretaria de Cultura — BA', 'Instituto Pensarte', 'FLIP', 'MEC — ProEI', 'Teatro Municipal SP'].map((p) => (
            <motion.span
              key={p}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-sans text-white/25 text-sm hover:text-gold/60 transition-colors cursor-default"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-gold py-16 text-center">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="font-display text-4xl text-brown mb-4">Leve uma formação para sua instituição</h3>
          <p className="font-sans text-brown/70 text-sm mb-8">Workshops in-company, formações continuadas, palestras e residências artísticas</p>
          <a
            href="mailto:stephany.metodio@email.com"
            className="inline-block bg-brown text-gold font-sans font-semibold text-xs uppercase tracking-widest px-10 py-4 hover:bg-ink hover:text-gold transition-colors"
          >
            Solicitar proposta →
          </a>
        </motion.div>
      </section>
    </div>
  )
}
