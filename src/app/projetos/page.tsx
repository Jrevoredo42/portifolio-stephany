"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import luandaRuanda from '@/assets/luanda-ruanda.png'
import ayoPerformance from '@/assets/ayo-performance.png'
import stephanyNarrando from '@/assets/stephany-narrando.png'
import historiasAmanha from '@/assets/historias-amanha.png'
import stephanyHero from '@/assets/ster/sterSorrindo.jpeg'
import coletivoTear from '@/assets/coletivo-tear.png'
import stephanyMascara from '@/assets/stephany-mascara.png'
import livroEmCena from '@/assets/livro-em-cena.png'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

type Projeto = {
  id: string
  titulo: string
  subtitulo: string
  categoria: string
  ano: string
  descricao: string
  detalhes: string
  circulacao: string
  img: string
  imgFull: string
  cor: string
}

const projetos: Projeto[] = [
  {
    id: 'luanda-ruanda',
    titulo: 'Luanda Ruanda',
    subtitulo: 'Espetáculo solo de contação de histórias',
    categoria: 'Teatro & Contação',
    ano: '2016 — em circulação',
    descricao: 'Uma travessia poética entre Angola e o Brasil, entre continentes que o oceano separou mas a memória nunca deixou de unir. Luanda Ruanda tece contos tradicionais africanos com causos populares nordestinos.',
    detalhes: 'Duração: 65 minutos | Classificação: Livre | Formato: espetáculo solo | Necessita palco ou espaço alternativo',
    circulacao: '+50 cidades | 3 festivais internacionais | São Paulo, Rio, Salvador, Recife, Fortaleza, Lisboa, Luanda',
    img: luandaRuanda.src,
    imgFull: ayoPerformance.src,
    cor: 'text-gold',
  },
  {
    id: 'historias-do-amanha',
    titulo: 'Histórias do Amanhã',
    subtitulo: 'Teatro-contação para crianças e jovens',
    categoria: 'Infanto-Juvenil',
    ano: '2019 — em circulação',
    descricao: 'E se o futuro fosse contado por quem está construindo ele agora? Espetáculo interativo que convida crianças e jovens a imaginar, narrar e co-criar as histórias que ainda não foram escritas.',
    detalhes: 'Duração: 50 minutos | Classificação: Livre | Formato: teatro interativo | Ideal para escolas e festivais',
    circulacao: '+30 cidades | SESC SP e RJ | Escolas públicas de 8 estados',
    img: stephanyNarrando.src,
    imgFull: historiasAmanha.src,
    cor: 'text-azure',
  },
  {
    id: 'ayo',
    titulo: 'Ayô',
    subtitulo: 'Performance de contos e danças de matriz iorubá',
    categoria: 'Performance',
    ano: '2020 — em circulação',
    descricao: 'Ayô, palavra iorubá para alegria, é um manifesto cênico. Contos da tradição nagô dançam com o corpo, a voz e os instrumentos em uma celebração da ancestralidade afro-brasileira que pulsa como resistência.',
    detalhes: 'Duração: 70 minutos | Classificação: 10 anos | Formato: solo com música ao vivo | Necessita palco técnico',
    circulacao: '8 estados | Festival de Culturas Negras BH | Festival de Contação RJ',
    img: stephanyHero.src,
    imgFull: coletivoTear.src,
    cor: 'text-crimson',
  },
  {
    id: 'historias-da-caixola',
    titulo: 'Histórias da Caixola',
    subtitulo: 'Contação intimista para bebês e famílias',
    categoria: 'Bebês & Família',
    ano: '2018 — em circulação',
    descricao: 'Uma caixinha que guarda histórias. De dentro dela saem mundos inteiros — animais, cores, músicas, textos e personagens que habitam o imaginário das primeiras infâncias. Espetáculo de contação para bebês de 0 a 3 anos.',
    detalhes: 'Duração: 35 minutos | Bebês de 0 a 3 anos | Formato: circular, chão | Pode ser realizado em espaços alternativos',
    circulacao: 'Centro Cultural SP | SESC | Festivais de Teatro para Bebês',
    img: stephanyMascara.src,
    imgFull: stephanyNarrando.src,
    cor: 'text-purple',
  },
  {
    id: 'o-livro-em-cena',
    titulo: 'O Livro em Cena',
    subtitulo: 'Projeto de animação literária e mediação de leitura',
    categoria: 'Arte-Educação',
    ano: '2021 — em andamento',
    descricao: 'Literatura e teatro se encontram neste projeto de mediação cultural que transforma obras da literatura afro-brasileira em experiências cênicas. Realizado em escolas, bibliotecas e espaços culturais.',
    detalhes: 'Formato: palestra-performance | 60 a 90 minutos | Para estudantes de 8 a 17 anos | Adaptável ao espaço',
    circulacao: 'Parceria com MEC | Projeto Escola de Tempo Integral SP | FLIP 2023 e 2024',
    img: livroEmCena.src,
    imgFull: luandaRuanda.src,
    cor: 'text-gold',
  },
]

export default function ProjetosPage() {
  const [selected, setSelected] = useState<Projeto | null>(null)
  const categorias = ['Todos', ...Array.from(new Set(projetos.map(p => p.categoria)))]
  const [catAtiva, setCatAtiva] = useState('Todos')

  const filtered = catAtiva === 'Todos' ? projetos : projetos.filter(p => p.categoria === catAtiva)

  return (
    <div className="bg-ink min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-8">
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-4"
        >
          Portfólio Artístico
        </motion.p>
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(3rem,8vw,7rem)] text-white leading-none mb-8"
        >
          Projetos &<br /><span className="text-gold">Criações</span>
        </motion.h1>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2"
        >
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCatAtiva(cat)}
              className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 cursor-pointer ${catAtiva === cat
                  ? 'bg-gold border-gold text-brown'
                  : 'border-white/20 text-white/50 hover:border-gold/50 hover:text-gold'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── GRID DE PROJETOS ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((projeto) => (
              <motion.button
                key={projeto.id}
                layout
                variants={reveal}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelected(projeto)}
                whileHover="hover"
                className="group relative overflow-hidden bg-brown text-left w-full cursor-pointer"
              >
                <div className="h-80 overflow-hidden">
                  <motion.img
                    src={projeto.img}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover object-top"
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown via-brown/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-sans text-[10px] uppercase tracking-widest ${projeto.cor}`}>{projeto.categoria}</span>
                    <span className="font-sans text-white/30 text-[10px]">{projeto.ano.split(' — ')[0]}</span>
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2 group-hover:text-gold transition-colors">{projeto.titulo}</h3>
                  <p className="font-sans text-white/50 text-xs mb-4">{projeto.subtitulo}</p>
                  <motion.div
                    variants={{ hover: { width: '100%' } }}
                    initial={{ width: '2rem' }}
                    transition={{ duration: 0.4 }}
                    className="h-px bg-gold"
                  />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── MODAL DE PROJETO ─────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
              className="fixed inset-x-4 top-[10vh] bottom-[5vh] z-50 max-w-4xl mx-auto bg-brown border border-gold/20 overflow-y-auto"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={selected.imgFull} alt={selected.titulo} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-linear-to-t from-brown to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white/60 hover:text-gold bg-ink/50 w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer"
                >
                  ×
                </button>
              </div>

              <div className="p-8 lg:p-12">
                <p className={`font-sans text-[10px] uppercase tracking-widest mb-3 ${selected.cor}`}>{selected.categoria}</p>
                <h2 className="font-display text-4xl text-white mb-2">{selected.titulo}</h2>
                <p className="font-sans text-white/50 text-sm mb-8">{selected.subtitulo} · {selected.ano}</p>

                <div className="w-12 h-px bg-gold mb-8" />

                <p className="font-serif text-white/75 text-lg leading-relaxed mb-10">{selected.descricao}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-ink/50 p-6">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gold/60 mb-3">Ficha Técnica</p>
                    <p className="font-sans text-white/60 text-sm leading-relaxed">{selected.detalhes}</p>
                  </div>
                  <div className="bg-ink/50 p-6">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gold/60 mb-3">Circulação</p>
                    <p className="font-sans text-white/60 text-sm leading-relaxed">{selected.circulacao}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold/15">
                  <a
                    href="mailto:stephany.metodio@email.com"
                    className="inline-block bg-gold text-brown font-sans font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
                  >
                    Solicitar Contratação →
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
