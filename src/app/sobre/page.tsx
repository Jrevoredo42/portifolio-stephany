"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'

import stephanyNarrando from '@/assets/stephany-narrando.png'
import coletivoTear from '@/assets/coletivo-tear.png'
import sterApresentando from '@/assets/ster/sterApresentando.jpeg'
import sterApresentando2 from '@/assets/ster/sterApresentando2.jpeg'
import sterComLivro from '@/assets/ster/sterComLivro.jpeg'
import sterAtuacao from '@/assets/ster/ster-atuacao.jpeg'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const areasAtuacao = [
  'Produção Cultural',
  'Gestão Cultural e Marketing',
  'Curadoria Artística',
  'Gestão de Carreiras Artísticas',
  'Empreendedorismo Criativo',
  'Arte Educação',
  'Música',
  'Teatro',
  'Audiovisual',
  'Literatura',
  'Patrimônio Imaterial'
]

export default function SobrePage() {
  return (
    <div className="bg-terracota min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={stephanyNarrando.src} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-l from-crimson/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-4"
          >
            Sobre
          </motion.p>
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(3rem,8vw,7rem)] text-white leading-none mb-4"
          >
            Quem é<br /><span className="text-gold">Stephany</span>
          </motion.h1>
          <motion.div custom={2} variants={reveal} initial="hidden" animate="show" className="w-16 h-px bg-gold" />
        </div>
      </section>

      {/* ── BIOGRAFIA ────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-8 grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:sticky lg:top-32 space-y-6"
        >
          <div className="relative overflow-hidden aspect-3/4">
            <img
              src={sterApresentando.src}
              alt="Stephany Metódio com máscara africana"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brown/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-sans text-[10px] uppercase tracking-widest text-gold/70">Personagem — Luanda Ruanda</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-32 overflow-hidden">
              <img src={coletivoTear.src} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-32 overflow-hidden">
              <img src={sterApresentando2.src} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <p className="font-serif italic text-gold text-2xl leading-relaxed">
              &ldquo;A palavra é o fio. O corpo é o tear. A história, o tecido que nos une.&rdquo;
            </p>
            <div className="w-8 h-px bg-gold/40" />
          </div>

          <div className="space-y-5 font-sans text-white/70 leading-loose text-base">
            <p className="text-amber-100">
              <strong className="text-yellow font-semibold">Stephany Metódio</strong> é mulher negra, agrestina, natural de Garanhuns. Artista e produtora, antirracista, constrói sua trajetória atuando de forma múltipla e comprometida com cultura, educação, gestão, ancestralidade e memória. É atriz, narradora de histórias (narratriz), poeta, arte-educadora, produtora, curadora e gestora cultural.
            </p>
            <p className="text-amber-100">É graduada em Letras – Língua Portuguesa e Literaturas pela Universidade de Pernambuco (UPE), pós-graduada em Educação Intercultural Indígena-Quilombola e Antirracista pelo Instituto Federal de Pernambuco (IFPE) e graduanda em Secretariado Executivo Bilíngue pela FAHUG. Une pesquisa acadêmica e prática cultural em projetos que atravessam oralidade, literatura, teatro, gestão e formação</p>
            <p className="text-amber-100"> É CEO do Coletivo Tear, do espaço cultural Aldeia Tear, do Selo Musical Studio Tear e da Cartonera Severina Catadora, além de integrar o grupo gestor da RIPA – Rede Interiorana de Produtores, Técnicos e Artistas de Pernambuco. Sua pesquisa central está voltada à tradição oral africana e afro-brasileira, entendendo a palavra como tecnologia de memória, educação e resistência.</p>
          </div>
        </motion.div>
      </section>

      {/* ── ÁREAS DE ATUAÇÃO ──────────────────────────────── */}
      <section className="bg-amber-100 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl xl:max-w-340 mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* ── Card Roxo: Áreas de Atuação ── */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 bg-purple border border-gold/25 rounded-2xl p-6 sm:p-8 xl:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Detalhe de luz suave de fundo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gold mb-2 font-medium">
                  Atuação Profissional & Artística
                </p>
                <h2 className="font-display text-2xl sm:text-3xl xl:text-4xl text-yellow mb-3 leading-tight">
                  Áreas de <span className="text-white">Atuação</span>
                </h2>
                <p className="font-sans text-amber-100/80 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                  Prática multidisciplinar que conecta gestão e produção cultural, linguagens artísticas, pesquisa ancestral e processos educativos transformadores.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {areasAtuacao.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 rounded-xl bg-black/15 border border-gold/15 hover:border-gold/40 hover:bg-black/25 transition-all duration-200 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-125 group-hover:bg-yellow transition-all duration-200" />
                      <span className="font-sans text-amber-100 text-xs sm:text-[13px] xl:text-sm font-medium leading-snug group-hover:text-white transition-colors">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Imagem com Fundo (Adaptável: Horizontal ou Vertical sem cortar) ── */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col items-center justify-center w-full"
            >
              <div className="relative w-full flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/25 bg-purple/10 group">
                  <img
                    src={sterAtuacao.src}
                    alt="Stephany Metódio em atividade de formação e atuação profissional"
                    className="w-full h-auto max-h-180 xl:max-h-200 object-contain block mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 max-w-full mx-auto px-8 bg-crimson flex flex-col sm:flex-row gap-30 items-center justify-center">
        <div>
          <p className="font-display text-3xl text-white mb-1">Conheça os projetos</p>
          <p className="font-sans text-amber-100 text-sm">Espetáculos, performances e criações cênicas</p>
        </div>
        <Link
          href="/projetos"
          className="shrink-0 bg-gold text-amber-100 font-sans font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-crimson transition-colors duration-300"
        >
          Ver Projetos →
        </Link>
      </section>
    </div>
  )
}
