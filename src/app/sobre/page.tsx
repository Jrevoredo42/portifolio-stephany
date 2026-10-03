"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'

import stephanyNarrando from '@/assets/stephany-narrando.png'
import coletivoTear from '@/assets/coletivo-tear.png'
import sterApresentando from '@/assets/ster/sterApresentando.jpeg'
import sterApresentando2 from '@/assets/ster/sterApresentando2.jpeg'
import sterComLivro from '@/assets/ster/sterComLivro.jpeg'
import sterSaudandoNobg from '@/assets/sterSaudando-nobg.png'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

const formacao = [
  { ano: '2021', desc: 'Gerente de Cultura da Secult Garanhuns' },
  { ano: '2022 - Atual', desc: 'Professora de Produção Cultural e Economia Criativa no curso EJA do Sesc/Senac Garanhuns' },
  { ano: '2023', desc: 'Graduação em Letras — Universidade de Pernambuco (UPE)' },
  { ano: '2023', desc: 'Pós-Graduação Intercultural Indígena-Quilombola Antirracista (IFPE)' },
  { ano: '2023 - 2024', desc: 'Professora nos cursos de Qualificação em Produção Cultural Executiva do Programa Minas, do Porto digital, voltados para mulheres, mulheres trans e travestis' },
  { ano: '2026', desc: 'Mestranda Profissional em Artes da Cena: Laboratório em Artes e Mediação Cultural' }

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

          <div className="bg-purple border rounded-md border-gold/15 p-8">
            <h3 className="font-display text-yellow text-xl mb-6">Áreas de Atuação</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
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
              ].map(area => (
                <div key={area} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                  <span className="font-sans text-amber-100 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FORMAÇÃO ─────────────────────────────────────── */}
      <section className="bg-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* ── Texto + lista ── */}
            <div className="flex-1 min-w-0">
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-14"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-terracota mb-3">Formação Acadêmica & Artística</p>
                <h2 className="font-display text-4xl text-terracota">Trajetória de <span className="text-crimson">Formação</span></h2>
              </motion.div>

              <div className="space-y-0">
                {formacao.map((item) => (
                  <motion.div
                    key={item.ano}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-8 py-6 border-b border-gold/10 items-start group"
                  >
                    <span className="font-display text-gold text-3xl w-20 shrink-0 group-hover:text-crimson transition-colors">{item.ano}</span>
                    <p className="font-sans text-brown text-sm font-semibold leading-relaxed group-hover:text-crimson transition-colors pt-2">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Foto sem fundo ── */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="shrink-0 flex items-end justify-center lg:self-stretch -mr-32 xl:-mr-40"
            >
              <img
                src={sterSaudandoNobg.src}
                alt="Stephany em pose de dança"
                className="w-100 xl:w-132 object-contain drop-shadow-xl"
              />
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
