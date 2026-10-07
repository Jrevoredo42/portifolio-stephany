"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import luandaRuanda from '@/assets/luanda-ruanda/ster-projeto-luanda.png'
import livroEmCena from '@/assets/livro-em-cena.png'

import luandaFoto1 from '@/assets/luanda-ruanda/luanda-ruanda-projeto-1.jpg'
import luandaFoto2 from '@/assets/luanda-ruanda/luanda-ruanda-projeto-2.jpg'
import luandaFoto3 from '@/assets/luanda-ruanda/luanda-ruanda-projeto-3.jpeg'
import luandaFoto4 from '@/assets/luanda-ruanda/luanda-ruanda-projeto-4.jpg'
import luandaFoto5 from '@/assets/luanda-ruanda/luanda-ruanda-projeto-5.jpeg'


import ayoCapa from '@/assets/ayo/ayo-capa.jpeg'
import ayoFoto1 from '@/assets/ayo/ayo-projeto-1.jpeg'
import ayoFoto2 from '@/assets/ayo/ayo-projeto-2.jpeg'

import historiasDaCaixolaCapa from '@/assets/historias-da-caixola/historias-da-caixola-capa.jpg'
import historiasDaCaixolaFoto1 from '@/assets/historias-da-caixola/historias-da-caixola-projeto1.jpg'
import historiasDaCaixolaFoto2 from '@/assets/historias-da-caixola/historias-da-caixola-projeto2.jpg'
import historiasDaCaixolaFoto3 from '@/assets/historias-da-caixola/historias-da-caixola-projeto3.jpg'
import historiasDaCaixolaFoto4 from '@/assets/historias-da-caixola/historias-da-caixola-projeto4.jpg'
import historiasDaCaixolaFoto5 from '@/assets/historias-da-caixola/historias-da-caixola-projeto5.jpeg'

import livroEmCenaCapa from '@/assets/livro-em-cena/livro-em-cena-capa.jpeg'
import livroEmCenaFoto1 from '@/assets/livro-em-cena/livro-em-cena1.jpeg'
import livroEmCenaFoto2 from '@/assets/livro-em-cena/livro-em-cena2.jpeg'
import livroEmCenaFoto3 from '@/assets/livro-em-cena/livro-em-cena3.jpeg'

import severinaCatadoraCapa from '@/assets/severina-catadora/severina-catadora-capa.jpeg'
import severinaCatadoraFoto1 from '@/assets/severina-catadora/severina-catadora1.jpeg'
import severinaCatadoraFoto2 from '@/assets/severina-catadora/severina-catadora2.jpeg'
import severinaCatadoraFoto3 from '@/assets/severina-catadora/severina-catadora3.jpeg'
import severinaCatadoraFoto4 from '@/assets/severina-catadora/severina-catadora4.jpeg'
import severinaCatadoraFoto5 from '@/assets/severina-catadora/severina-catadora5.jpeg'

import cineclubinhoMalunguinhoCapa from '@/assets/cineclubinho-malunguinho/cineclubinho-malunguinho-capa.jpeg'
import cineclubinhoMalunguinhoFoto1 from '@/assets/cineclubinho-malunguinho/cineclubinho-malunguinho1.jpeg'
import cineclubinhoMalunguinhoFoto2 from '@/assets/cineclubinho-malunguinho/cineclubinho-malunguinho2.jpeg'
import cineclubinhoMalunguinhoFoto3 from '@/assets/cineclubinho-malunguinho/cineclubinho-malunguinho3.jpeg'

import amostraMundauCapa from '@/assets/amostra-mundau/amostra-mundau-capa.png'
import amostraMundauFoto1 from '@/assets/amostra-mundau/amostra-mundau1.png'
import amostraMundauFoto2 from '@/assets/amostra-mundau/amostra-mundau2.png'
import amostraMundauFoto3 from '@/assets/amostra-mundau/amostra-mundau3.png'
import amostraMundauFoto4 from '@/assets/amostra-mundau/amostra-mundau4.png'
import amostraMundauFoto5 from '@/assets/amostra-mundau/amostra-mundau5.png'

import studioTearCapa from '@/assets/studio-tear/studio-tear2.png'
import studioTearFoto1 from '@/assets/studio-tear/studio-tear1.png'
import studioTearFoto2 from '@/assets/studio-tear/studio-tear-formativo1.png'
import studioTearFoto3 from '@/assets/studio-tear/studio-tear3.png'
import studioTearFoto4 from '@/assets/studio-tear/studio-tear4.png'
import studioTearFoto5 from '@/assets/studio-tear/studio-tear5.png'
import studioTearFoto6 from '@/assets/studio-tear/studio-tear-formativo.png'

import tearNaAreaCapa from '@/assets/tear-na-area/tear-na-area-capa.jpeg'
import tearNaAreaFoto1 from '@/assets/tear-na-area/tear-na-area1.jpeg'
import tearNaAreaFoto2 from '@/assets/tear-na-area/tear-na-area2.jpeg'
import tearNaAreaFoto3 from '@/assets/tear-na-area/tear-na-area3.png'
import tearNaAreaFoto4 from '@/assets/tear-na-area/tear-na-area4.png'


import sterComLivro from '@/assets/ster/sterComLivro.jpeg'
import sterStudioTear from '@/assets/ster/sterStudioTear.jpeg'

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
  descricao: string | string[]
  detalhes: string | string[]
  circulacao?: string | string[]
  img: string
  imgFull: string
  cor?: string
  fotos?: string[]
}

const categoriaCor: Record<string, string> = {
  'Literatura': 'bg-crimson/70 text-amber-100 font-bold border-crimson/40',
  'Contação de histórias': 'bg-azure/70 text-amber-100 font-bold border-azure/40',
  'Eventos': 'bg-purple/70 text-amber-100 font-bold border-purple/40',
  'Teatro': 'bg-yellow/80 text-brown font-bold border-yellow/50',
  'Arte-Educação': 'bg-gold/80 text-brown font-bold border-gold/50',
}
const getCategoriaCor = (cat: string) =>
  categoriaCor[cat] || 'bg-gold/80 text-brown font-bold border-gold/50'

const projetos: Projeto[] = [
  {
    id: 'luanda-ruanda',
    titulo: 'Luanda Ruanda - Histórias Africanas',
    subtitulo: 'Espetáculo de contação de histórias',
    categoria: 'Contação de histórias',
    ano: '2016 — em circulação',
    descricao: [
      'Luanda Ruanda – Histórias Africanas é uma aventura lúdica, musical e visual, afrocentrada e antirracista, repleta de momentos mágicos, divertidos e imagéticos. Um espetáculo cênico que traz a prática ancestral da narração oral, voltado para as infâncias, e que nos conduz por costumes diaspóricos, lendas e texturas sonoras da riquíssima cultura de matriz africana. Uma viagem que nos transporta para outro mundo e, ao mesmo tempo, traz esse mundo para dentro de nós.',
      'Com dramaturgia construída a partir da oralidade e inspirada na figura do Griô/Djeli, o contador de histórias africano, Luanda Ruanda cria um universo cênico afrocentrado para as infâncias por meio de cantos, contos, lendas, vestimentas e elementos visuais, aliados a uma trilha sonora original executada ao vivo. A sonoridade do espetáculo, assinada pelo músico e diretor musical Alexandre Revoredo, junto ao percussionista Nino Alves, transporta o espectador para as paisagens sonoras da África, evocando seus ritmos e atmosferas ancestrais.'
    ],
    detalhes: [
      'Concepção, pesquisa e dramaturgia: Stephany Metódio',
      'Atriz/Narratriz: Stephany Metódio',
      'Trilha sonora original: Revoredo',
      'Músicos: Alexandre Revoredo (voz, violão e efeitos) / Nino Alves (percussão e efeitos)',
      'Direção Musical: Revoredo',
      'Figurino e adereços: Katarina Barbosa e Ana Paula',
      'Técnico de som: Efraim Rocha e Gabriel',
      'Produção: Stephany Metódio',
    ],
    circulacao: [
      '+50 cidades',
      '+5 festivais',
      '+10 comunidades Quilombolas',
      'Turnê no Rio',
      'Dezenas de escolas públicas',
    ],
    img: luandaRuanda.src,
    imgFull: luandaRuanda.src,
    cor: 'text-gold',
    fotos: [luandaFoto1.src, luandaFoto2.src, luandaFoto3.src, luandaFoto4.src, luandaFoto5.src],
  },
  {
    id: 'Ayo',
    titulo: 'Ayô - Histórias de griô',
    subtitulo: 'Teatro-contação para crianças e jovens',
    categoria: 'Contação de histórias',
    ano: '2019 — em circulação',
    descricao: [
      'Ayô tem em sua essência o reconhecimento da literatura oral em uma construção de pluralidade cultural. Vale-se da oralidade como uma ferramenta de aproximação com o ouvinte, onde a identificação é instantânea quando a história fictícia ou não, vai ao encontro de um passado que lembra algo que traz ancestralidade, felicidade, tristeza, amor, paixão, fome, sede, enfim, necessidades humanas que percorrem toda uma vida. E cada vez se faz mais necessário que essas lembranças venham à tona com o intuito de fortalecer, difundir e transmitir os saberes e fortalecer a nossa história.',
      'A partir do interesse em promover atividades que formem novos públicos leitores e novos ouvintes da nossa oralidade ancestral, associadas à vontade de divulgar a diversidade dos elementos culturais essencialmente africanos e afro-brasileiros, além de valorizar a figura dos Griôs, que são tidos como mestres/mestras dos saberes e da oralidade, é que nasce a contação de histórias “Ayô - Historias de Griô”  que visa levar histórias, contos, mitos, lendas e cantigas do universo afro-brasileiro  de casa em casa, embaixo de árvores e nos terreiros e diversos territórios. ',
    ],
    detalhes: [
      'Duração: 50 minutos',
      'Concepção, pesquisa e dramaturgia: Stephany Metódio e Revoredo ',
      'Atriz/Narratriz: Stephany Metódio',
      'Ator/Narração: Revoredo',
      'Trilha sonora original: Revoredo',
      'Músicos: Alexandre Revoredo (voz, violão e efeitos) / Nino Alves (percussão e efeitos)',
      'Classificação: Livre',
    ],
    circulacao: [
      'Dezenas de Cidades',
      'SESCs de 7 estados',
      'Escolas públicas',
      'Teatros',
    ],
    img: ayoCapa.src,
    imgFull: ayoCapa.src,
    cor: 'text-azure',
    fotos: [ayoFoto1.src, ayoFoto2.src, ayoCapa.src],
  },
  {
    id: 'historias-da-caixola',
    titulo: 'Histórias da Caixola',
    subtitulo: 'uma caixa que guarda todas as histórias do mundo!',
    categoria: 'Contação de histórias',
    ano: 'Em circulação',
    descricao: [
      'é uma coletânea de contos infantis, com textos produzidos pelo Coletivo Tear e contos de autores contemporâneos, narrados por Stephany Metódio e intervenções musicais de Alexandre Revoredo. As histórias mexem com o universo lúdico dos contos e se integram com as linguagens artísticas da música e do teatro. Os elementos cênicos, instrumentos, brinquedos e cenário são um convite à imaginação das crianças.',
      'O espetáculo de contação de histórias “Histórias da caixola” se apresenta como uma excelente alternativa na atividade de formação de público leitor, acrescentando em suas histórias, o uso de técnicas do “teatro do objeto”, modelo que permite que a história se complete na imaginação do ouvinte, incentivando assim a criatividade e percepção sensorial de cada um.'
    ],
    detalhes: [
      'Duração: 70 minutos',
      'Classificação: Livre',
      'Formato: solo com música ao vivo',
      'Necessita palco técnico',
    ],
    circulacao: [
      '8 estados',
      'Festival de Culturas Negras BH',
      'Festival de Contação RJ',
    ],
    img: historiasDaCaixolaFoto1.src,
    imgFull: historiasDaCaixolaFoto1.src,
    cor: 'text-crimson',
    fotos: [historiasDaCaixolaFoto1.src, historiasDaCaixolaFoto2.src, historiasDaCaixolaFoto3.src, historiasDaCaixolaFoto4.src, historiasDaCaixolaFoto5.src, historiasDaCaixolaCapa.src],
  },
  {
    id: 'livro-em-cena',
    titulo: 'O Livro em Cena',
    subtitulo: 'Peformance Literária',
    categoria: 'Literatura',
    ano: '2018 — em circulação',
    descricao: [
      'Projeto voltado para a literatura contemporânea, onde os artistas caminham por várias obras que produzidas na atualmente na literatura brasileira. Através de leituras, performances, canções e de uma interação direta com o público, os artistas mostram novos gêneros literários, novos autores, novas formas de publicação, contextualizado o público com a literatura contemporânea, numa fórmula eficaz para sensibilização a leitura longe do cânone literário.',
      'O projeto já existe desde 2011 e tem circulado por diversos espaços tanto educativos quanto palcos. Em 2017 O Livro em Cena circulou com 08 apresentações em Santa Catarina através do projeto nacional Arte da Palavra, do Sesc.',
      'A oficina do Livro em Cena, se aprofunda nas temáticas proposta pela aula-espetáculo, enfatizando também a leitura propriamente dita, performance, intenções sonoras e interpretativas. É um passeio completo sobre cada obra, sobre seus contextos, sobre novos autores (aqui incluem-se mais uma lista de autores), além de provocar o público com a escrita ou a própria performance. A oficina do Livro em Cena tem o intuito de trazer esse leitor/escritor pra mais perto da nossa realidade contemporânea através da literatura.'
    ],
    detalhes: [
      'Tempo médio de apresentação: 50 min',
      'Público alvo: jovens e adultos, escritores, professores e demais interessados em literatura.',
    ],
    circulacao: [
      'Centro Cultural SP',
      'SESC',
      'Festivais de Teatro para Bebês',
    ],
    img: livroEmCenaCapa.src,
    imgFull: livroEmCenaCapa.src,
    fotos: [livroEmCenaFoto1.src, livroEmCenaFoto2.src, livroEmCenaFoto3.src, livroEmCenaCapa.src],
    cor: 'text-purple',
  },
  {
    id: 'severina-catadora',
    titulo: 'Severina Catadora',
    subtitulo: 'Projeto de animação literária e mediação de leitura',
    categoria: 'Literatura',
    ano: '2021 — em andamento',
    descricao: [
      'Literatura e teatro se encontram neste projeto de mediação cultural que transforma obras da literatura afro-brasileira em experiências cênicas.',
      'Realizado em escolas, bibliotecas e espaços culturais.',
    ],
    detalhes: [
      'Formato: palestra-performance',
      'Duração: 60 a 90 minutos',
      'Para estudantes de 8 a 17 anos',
      'Adaptável ao espaço',
    ],
    circulacao: [
      'Parceria com MEC',
      'Projeto Escola de Tempo Integral SP',
      'FLIP 2023 e 2024',
    ],
    img: severinaCatadoraCapa.src,
    imgFull: severinaCatadoraCapa.src,
    cor: 'text-purple',
    fotos: [severinaCatadoraFoto1.src, severinaCatadoraFoto2.src, severinaCatadoraFoto3.src, severinaCatadoraFoto4.src, severinaCatadoraFoto5.src],
  },
  {
    id: 'cineclubinho-maluguinho',
    titulo: 'Cineclubinho Maluguinho',
    subtitulo: 'cineclube itinerante antirracista',
    categoria: 'Arte-Educação',
    ano: '2021 — em andamento',
    descricao: [
      'É um cine clube afrocentrado e antirracista dedicado às infâncias, possui caráter itinerante voltado para o público infantil, exibindo filmes acompanhados de debates focados na valorização das culturas negras e indígenas.',
    ],
    detalhes: [
      'Sessão de cinema acompanhadas de debates',
      'Duração: 60 a 90 minutos',
      'Para crianças de todas as idades',
      'Adaptável ao espaço',
    ],
    circulacao: [
      'Parceria com MEC',
      'Projeto Escola de Tempo Integral SP',
      'FLIP 2023 e 2024',
    ],
    img: cineclubinhoMalunguinhoCapa.src,
    imgFull: cineclubinhoMalunguinhoCapa.src,
    cor: 'text-gold',
    fotos: [cineclubinhoMalunguinhoFoto1.src, cineclubinhoMalunguinhoFoto2.src, cineclubinhoMalunguinhoFoto3.src],
  },
  {
    id: 'mostra-mundau',
    titulo: 'Mostra Mundaú de Canções',
    subtitulo: 'Festival cultural de canções autorais',
    categoria: 'Eventos',
    ano: '2022',
    descricao: [
      'uma itinerância musical por vários espaços culturais e IEs fortalecendo a participação de artistas compositoras mulheres com uma gira de canções.',
      'São seis encontros com dez artistas da cidade de Garanhuns, que mostram suas canções e também dialogam sobre o ofício de ser artista e de compor canções.',
      'momentos lindos de trocas e fortalecimento da música produzida em nosso lugar com representantes de diversas gerações de artistas de nosso território.'
    ],
    detalhes: [
      'Identidade visual: Diego Bias',
      'Realização: Aldeia Tear',
      'Produção executiva: Stephany Metódio',
      'Direção e Produção Musical: Revoredo',
      'Incentivo: Funcultura Música',
      'Apoio: sescpe e espacozeroart',
    ],
    circulacao: [
      'Parceria com MEC',
      'Projeto Escola de Tempo Integral SP',
      'FLIP 2023 e 2024',
    ],
    img: amostraMundauCapa.src,
    imgFull: amostraMundauCapa.src,
    cor: 'text-gold',
    fotos: [amostraMundauFoto1.src, amostraMundauFoto2.src, amostraMundauFoto3.src, amostraMundauFoto4.src, amostraMundauFoto5.src],
  },
  {
    id: 'studio-tear',
    titulo: 'Studio Tear',
    subtitulo: 'Evento multicultural',
    categoria: 'Eventos',
    ano: '2021 — em andamento',
    descricao: [
      'É um evento cultural focado na produção, circulação e formação de artistas independentes do Agreste pernambucano. Realiza shows, eventos culturais, além de ciclos formativos e oficinas sobre gestão de carreira e mercado musical',
    ],
    detalhes: [
      'Formato: palestra-performance',
      'Duração: 60 a 90 minutos',
      'Para estudantes de 8 a 17 anos',
      'Adaptável ao espaço',
    ],
    circulacao: [
      'Parceria com MEC',
      'Projeto Escola de Tempo Integral SP',
      'FLIP 2023 e 2024',
    ],
    img: studioTearCapa.src,
    imgFull: studioTearCapa.src,
    cor: 'text-gold',
    fotos: [studioTearFoto1.src, studioTearFoto2.src, studioTearFoto3.src, studioTearFoto4.src, studioTearFoto5.src, studioTearFoto6.src],
  },
  {
    id: 'tear-na-area',
    titulo: 'Tear na Área',
    subtitulo: 'Projeto de animação literária e mediação de leitura',
    categoria: 'Eventos',
    ano: '2021 — em andamento',
    descricao: [
      'O TEAR NA ÁREA é um evento cultural e artístico realizado em Garanhuns que reúne música, gastronomia autoral, drinks e encontros. Uma experiência que resgata o conceito do antigo Studio Tear, transformando um espaço acolhedor em um ponto de troca cultural e afetiva.',
      'Música ao vivo, aromas, comidinhas e drinks criados especialmente para cada edição.',
    ],
    detalhes: [
      'Formato: palestra-performance',
      'Duração: 60 a 90 minutos',
      'Para estudantes de 8 a 17 anos',
      'Adaptável ao espaço',
    ],
    circulacao: [
      'Parceria com MEC',
      'Projeto Escola de Tempo Integral SP',
      'FLIP 2023 e 2024',
    ],
    img: tearNaAreaCapa.src,
    imgFull: tearNaAreaCapa.src,
    cor: 'text-gold',
    fotos: [tearNaAreaFoto1.src, tearNaAreaFoto2.src, tearNaAreaFoto3.src, tearNaAreaFoto4.src],
  },
]

export default function ProjetosPage() {
  const [selected, setSelected] = useState<Projeto | null>(null)
  const [fotoExpandida, setFotoExpandida] = useState<string | null>(null)
  const categorias = ['Todos', ...Array.from(new Set(projetos.map(p => p.categoria)))]
  const [catAtiva, setCatAtiva] = useState('Todos')

  const filtered = catAtiva === 'Todos' ? projetos : projetos.filter(p => p.categoria === catAtiva)

  return (
    <div className="bg-amber-100 min-h-screen">
      {/* ── CABEÇALHO ────────────────────────────────────── */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-8">
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold mb-4"
        >
          Portfólio Artístico
        </motion.p>
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(3rem,8vw,7rem)] text-crimson leading-none mb-8"
        >
          Projetos &<br /><span className="text-gold">Criações</span>
        </motion.h1>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2.5"
        >
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCatAtiva(cat)}
              className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border rounded-md transition-all duration-300 cursor-pointer ${catAtiva === cat
                ? 'bg-gold border-gold text-white font-semibold shadow-md'
                : 'border-brown/30 text-brown font-medium bg-amber-50/80 hover:border-gold hover:text-gold hover:bg-gold/10 shadow-2xs'
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
                  <div className="absolute inset-0 bg-linear-to-t from-brown via-brown/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block font-sans text-[10px] uppercase tracking-widest border px-3 py-1 backdrop-blur-xs ${getCategoriaCor(projeto.categoria)}`}>
                      {projeto.categoria}
                    </span>
                    <span className="font-sans text-amber-100 text-[10px]">{projeto.ano.split(' — ')[0]}</span>
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2 group-hover:text-gold transition-colors">{projeto.titulo}</h3>
                  <p className="font-sans text-amber-100 text-xs mb-4">{projeto.subtitulo}</p>
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
              onClick={() => {
                setSelected(null)
                setFotoExpandida(null)
              }}
              className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
              className="fixed inset-x-4 top-[10vh] bottom-[5vh] z-50 max-w-4xl mx-auto bg-gold border border-gold/30 overflow-y-auto scrollbar-yellow"
            >
              <div className="relative h-full overflow-hidden">
                <img src={selected.imgFull} alt={selected.titulo} className="w-full h-full object-cover object-top" />
                <button
                  onClick={() => {
                    setSelected(null)
                    setFotoExpandida(null)
                  }}
                  className="absolute top-4 rounded-md right-4 text-white/60 hover:text-gold bg-ink/50 w-10 h-10 flex items-center justify-center text-xl transition-colors cursor-pointer"
                >
                  ×
                </button>

                {/* Indicador de rolagem */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-ink/80 backdrop-blur-md px-3.5 py-2 border border-gold/30 rounded-full shadow-lg pointer-events-none select-none"
                >
                  <span className="font-sans text-[10px] uppercase tracking-widest text-white/80 font-medium">
                    Role para ver mais
                  </span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="text-gold flex items-center justify-center"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-3">
                  <span className={`inline-block font-sans text-[10px] uppercase tracking-widest border px-3 py-1 backdrop-blur-xs ${getCategoriaCor(selected.categoria)}`}>
                    {selected.categoria}
                  </span>
                </div>
                <h2 className="font-display text-4xl text-white mb-2">{selected.titulo}</h2>
                <p className="font-sans text-yellow text-sm mb-8">{selected.subtitulo} · {selected.ano}</p>

                <div className="w-12 h-px bg-gold mb-3" />

                <div className="mb-10 space-y-4">
                  {(Array.isArray(selected.descricao) ? selected.descricao : [selected.descricao]).map((paragrafo, i) => (
                    <p key={i} className="font-serif text-amber-100 text-lg leading-relaxed">
                      {paragrafo}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center">
                  <div className="bg-ink/50 p-6 w-full max-w-xl">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-yellow mb-3">Ficha Técnica</p>
                    <ul className="space-y-2 font-sans text-amber-100 text-sm leading-relaxed">
                      {(Array.isArray(selected.detalhes) ? selected.detalhes : selected.detalhes.split(' | ')).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/60 select-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selected.fotos && selected.fotos.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gold/15">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gold/60 mb-4">Galeria de Fotos</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selected.fotos.map((foto, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFotoExpandida(foto)}
                          className="group relative h-40 overflow-hidden bg-ink/50 border border-gold/15 hover:border-gold/50 transition-colors cursor-pointer flex items-center justify-center p-2"
                        >
                          <img
                            src={foto}
                            alt={`${selected.titulo} foto ${idx + 1}`}
                            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                            <span className="font-sans text-[10px] uppercase tracking-wider text-gold">Ampliar +</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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

      {/* ── LIGHTBOX / FOTO EXPANDIDA ────────────────────── */}
      <AnimatePresence>
        {fotoExpandida && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFotoExpandida(null)}
              className="fixed inset-0 z-60 bg-ink/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 sm:inset-12 z-60 flex items-center justify-center pointer-events-none"
            >
              <div className="relative max-w-5xl max-h-full p-2 pointer-events-auto flex flex-col items-center">
                <img
                  src={fotoExpandida}
                  alt="Foto do projeto ampliada"
                  className="max-h-[80vh] w-auto max-w-full object-contain border border-gold/30 shadow-2xl"
                />
                <button
                  onClick={() => setFotoExpandida(null)}
                  className="mt-4 bg-gold text-crimson font-sans text-xs uppercase tracking-widest px-6 py-2 hover:bg-white transition-colors cursor-pointer"
                >
                  Fechar ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

