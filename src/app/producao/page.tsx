"use client";

import { motion } from 'framer-motion'
import sterPremio from '@/assets/ster/sterPremio.png'
import gabi from '@/assets/gabi.jpg'
import revoredo from '@/assets/revoredo-show.jpg'

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
    desc: 'Elaboração de projetos para leis de incentivo, editais públicos e fundações privadas. Funcultura, PNAB, Itaú Cultural, Paulo Gustavo e etc.',
    icon: '◎',
    cor: 'text-yellow border-purple/30',
  },
]

const projProduzidos = [
  {
    titulo: 'Revoredo',
    img: revoredo.src,
  },
  {
    titulo: 'Gabi da Pele Preta',
    img: gabi.src,
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
          className="font-serif italic text-amber-100 text-xl max-w-xl leading-relaxed"
        >
          A produção cultural como ato político. Gestão que não abdica da poesia.
        </motion.p>
      </section>

      {/* ── COLETIVO TEAR ────────────────────────────────── */}
      <section className="py-20 bg-brown/40">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="relative overflow-hidden aspect-4/3">
              <img src={sterPremio.src} alt="Coletivo Tear em performance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-[10px] uppercase tracking-widest text-yellow">Prêmio de Produtora Cultural</span>
              </div>
            </div>
          </motion.div>

          <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <div>
              <p className="font-sans text-[12px] uppercase tracking-[0.35em] text-gold mb-3">Coletivo Tear</p>
              <h2 className="font-display text-4xl text-white mb-4">Tecendo redes, <span className="text-gold">fazendo arte</span></h2>
            </div>
            <p className="font-sans text-amber-100 leading-loose">
              Além da atuação artística, Stephany desenvolve um trabalho sólido como gestora e estrategista de carreiras artísticas, sendo responsável pela gestão dos artistas Gabi da Pele Preta e Revoredo. Em suas estratégias, atua diretamente com planejamento de carreira, posicionamento de marca, gestão de produtos, elaboração de narrativas, circulação, presença digital e fortalecimento de imagem.
            </p>
            <p className="font-sans text-amber-100 leading-loose">
              É fundadora da célula empreendedora Tearte, da editora Cartonera Severina Catadora e do selo musical Studio Tear — iniciativas que articulam produção cultural, economia criativa e desenvolvimento de produtos artísticos.
            </p>
            <p className="font-sans text-amber-100 leading-loose">
              Toda essa atuação envolve práticas integradas de marketing cultural, branding, vendas, análise de público, construção de marca e planejamento de lançamentos, áreas centrais para o produtor e gestor cultural contemporâneo. Por isso, sua experiência prática se relaciona diretamente com os conteúdos do componente curricular Marketing e Vendas, para o qual possui plena qualificação.
            </p>
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
              className={`border ${s.cor.split(' ')[1]} bg-brown/40 p-8 hover:bg-purple transition-all duration-300`}
            >
              <span className={`text-3xl block mb-5 ${s.cor.split(' ')[0]}`}>{s.icon}</span>
              <h3 className="font-serif text-white font-semibold text-xl mb-3">{s.titulo}</h3>
              <p className="font-sans text-amber-100 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ARTISTAS PRODUZIDOS ───────────────────────────── */}
      <section className="bg-brown/30 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow mb-3">Produção Executiva</p>
            <h2 className="font-display text-4xl text-white">Artistas <span className="text-gold">Produzidos</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {projProduzidos.map((p) => (
              <motion.div
                key={p.titulo}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="group"
              >
                <div className="aspect-video w-full overflow-hidden mb-4 rounded-sm">
                  <img
                    src={p.img}
                    alt={p.titulo}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 block"
                  />
                </div>
                <h3 className="font-display text-yellow font-semibold text-lg mt-1 mb-2 group-hover:text-gold transition-colors">{p.titulo}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPTAÇÃO ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-purple border border-gold/20 p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-yellow  mb-4">Captação de Recursos</p>
            <h3 className="font-display text-3xl text-white mb-4">Projetos aprovados <span className="text-gold">em editais</span></h3>
            <p className="font-sans text-white-amber-100 text-sm leading-relaxed">
              Experiência comprovada na elaboração e aprovação de projetos para Lei Rouanet, BNB, Sesc Pulsar RJ, Lei Aldir Blanc, Lei Paulo Gustavo, Registro de Patrimônio Vivo Pernambuco, Funcultura, BNDES Cultural, Mais de 40 projetos aprovados em editais públicos e privados estaduais e federais.
            </p>
          </div>
          <div className="space-y-3">
            {['Lei Rouanet', 'Lei Aldir Blanc', 'Lei Paulo Gustavo', 'BNDES Cultural', 'Sesc Pulsar RJ', 'Funcultura', 'Registro de Patrimônio Vivo Pernambuco', 'BNB'].map((e) => (
              <motion.div
                key={e}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="font-sans text-amber-100 text-sm">{e}</span>
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
            href="https://wa.me/5587981480808?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20de%20form%C3%A7%C3%A3o"
            className="inline-block bg-white text-crimson font-sans font-semibold text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold hover:text-brown transition-colors"
          >
            Falar sobre um projeto →
          </a>
        </motion.div>
      </section>
    </div>
  )
}
