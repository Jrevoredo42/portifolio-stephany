"use client";

import { motion } from 'framer-motion'
import stephanyApresentando from '@/assets/ster/sterApresentando3.jpeg'
import sterArteEducacao from '@/assets/ster/sterArteEducacao.jpeg'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const oficinas = [
  {
    titulo: 'Studio Tear Formativo',
    publico: 'Produtores culturais',
    desc: 'Gestão de Carreira Independente - Trabalhando com Música no Interior',
    cor: 'border-gold text-gold',
  },
  {
    titulo: 'Studio Tear Formativo',
    publico: 'Produtores culturais',
    desc: 'A Música Além do Palco: Gestão Afetiva de Carreira Artística',
    cor: 'border-azure text-azure',
  },
  {
    titulo: 'Editais sem mistério',
    publico: 'Professores culturais',
    desc: 'Dicas práticas para transformar sua ideia em projeto cultural.',
    cor: 'border-crimson text-crimson',
  },
  {
    titulo: 'Ciclo de Formação',
    publico: 'Produtores Culturais',
    desc: 'Gestão de Carreiras e projetos Culturais',
    cor: 'border-purple text-purple',
  },
  {
    titulo: 'Tua voz vai se Pronunciar',
    publico: 'Gestores e produtores culturais',
    desc: 'Saberes e estratégias na construção de Carreiras Musicais',
    cor: 'border-gold text-gold',
  },
  {
    titulo: 'Webnario de Economia Criativa',
    publico: 'Livre',
    desc: 'Criação de portfólio por meio de uso de ferramentas de AI',
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
    <div className="bg-purple min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-2/5 hidden lg:block">
          <img src={stephanyApresentando.src} alt="" className="w-full h-full object-cover " />
          <div className="absolute inset-0 bg-linear-to-r from-purple/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.p variants={reveal} initial="hidden" animate="show" className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-4">
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
            className="font-serif italic text-yellow text-xl max-w-xl leading-relaxed"
          >
            A arte-educação como ferramenta de transformação social, afirmação identitária e desenvolvimento humano integral.
          </motion.p>
          <motion.div
            custom={4}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-8 lg:hidden rounded-2xl overflow-hidden shadow-xl aspect-4/3 max-w-md border border-gold/20"
          >
            <img
              src={stephanyApresentando.src}
              alt="Stephany Metódio apresentando"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </section>

      {/* ── METODOLOGIA ──────────────────────────────────── */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-10">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-3">Metodologia</p>
              <h2 className="font-display text-3xl text-white mb-4">Gestão, Formação e Ensino</h2>
              <div className="w-8 h-px bg-gold mb-6" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-4/3 lg:aspect-4/3 mt-2 border border-purple/20">
              <img
                src={sterArteEducacao.src}
                alt="Stephany em atividade de Arte-Educação e Formação"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
          <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            <p className="font-sans text-amber-100 leading-loose">
              Atuei como Gerente de Cultura da Secult Garanhuns em <b>2021</b> e, de <b>2022</b> até o momento, atuo como professora de Produção Cultural e Economia Criativa no curso de EJA do Sesc/Senac Garanhuns. Também lecionei, nos cursos de Qualificação em Produção Cultural Executiva do Programa Minas, do Porto Digital, voltados para mulheres, mulheres trans e travestis em <b>2023</b> e <b>2024</b>.
            </p>
            <p className="font-sans text-amber-100 leading-loose">
              Em <b>2023</b>, desenvolvi as diretrizes pedagógicas, ementa e módulos do curso de Profissionalização em Produção Cultural do Centro Cultural Sesc Garanhuns, consolidando minha atuação como formadora e gestora educacional. Atualmente, sigo como professora de Produção Cultural no Coletivo Tear, fortalecendo práticas culturais integradas à educação transformadora.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: '○', label: 'Escuta Ativa', desc: 'Partir do que cada grupo traz' },
                { icon: '◇', label: 'Corpo Presente', desc: 'O movimento como linguagem' },
                { icon: '△', label: 'Ancestralidade', desc: 'Raízes africanas como fundamento' },
              ].map(m => (
                <div key={m.label} className="border bg-purple rounded-2xl border-gold/20 p-5">
                  <span className="text-yellow text-2xl block mb-3">{m.icon}</span>
                  <p className="font-sans text-yellow text-sm font-semibold mb-1">{m.label}</p>
                  <p className="font-sans text-amber-100 text-xs">{m.desc}</p>
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
              <h3 className="font-serif text-white font-semibold text-lg leading-snug mb-4">{o.titulo}</h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-yellow mb-3">{o.publico}</p>
              <p className="font-sans text-amber-100 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────── */}
      <section className="bg-gold py-20">
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
      <section className="py-16 bg-gold max-w-full mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <p className="font-display text-3xl text-yellow">Instituições parceiras</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {['SESC', 'SEBRAE', 'Porto Digital', 'Secretaria de Cultura de Pernambuco', 'RIPA', 'UPE', 'FUNDARPE'].map((p) => (
            <motion.span
              key={p}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-sans text-amber-100 text-sm hover:text-crimson transition-colors cursor-default"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-purple py-16 text-center">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="font-display text-4xl text-gold mb-4">Leve uma formação para sua instituição</h3>
          <p className="font-sans text-amber-100 text-sm mb-8">Formações continuadas, palestras e Podcastes Webnários</p>
          <a
            href="https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20de%20form%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow text-crimson font-sans font-semibold text-xs uppercase tracking-widest px-10 py-4 hover:bg-ink hover:text-gold transition-colors"
          >
            Solicitar proposta →
          </a>
        </motion.div>
      </section>
    </div>
  )
}
