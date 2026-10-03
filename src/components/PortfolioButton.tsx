"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const materials = [
  { label: 'Currículo Artístico', icon: '📄', ext: 'PDF' },
  { label: 'Portfólio Completo', icon: '🎭', ext: 'PDF' },
  { label: 'Release de Imprensa', icon: '📰', ext: 'PDF' },
  { label: 'Fotos em Alta Resolução', icon: '📷', ext: 'ZIP' },
  { label: 'Rider Técnico', icon: '🎛️', ext: 'PDF' },
  { label: 'Ficha Técnica', icon: '📋', ext: 'PDF' },
]

export default function PortfolioButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="fixed right-6 bottom-6 z-40 bg-gold text-brown font-sans font-semibold text-xs uppercase tracking-widest px-5 py-3.5 shadow-lg shadow-gold/20 flex items-center gap-2.5 hover:bg-white transition-colors duration-300 cursor-pointer"
        style={{ writingMode: 'horizontal-tb' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Portfólio / Materiais
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-6 bottom-20 z-50 w-80 bg-brown border border-gold/25 shadow-2xl shadow-gold/10"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
                <div>
                  <h3 className="font-display text-gold text-lg">Materiais</h3>
                  <p className="text-white/50 text-xs font-sans mt-0.5">Solicite por e-mail ou WhatsApp</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-gold transition-colors text-xl leading-none cursor-pointer"
                >
                  ×
                </button>
              </div>

              <div className="p-4 space-y-1">
                {materials.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-3 py-3 hover:bg-gold/8 transition-colors rounded group cursor-default"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-white/80 text-sm font-sans flex-1">{item.label}</span>
                    <span className="text-[10px] font-sans text-gold/60 bg-gold/10 px-2 py-0.5 rounded">{item.ext}</span>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 pb-6 pt-2 space-y-3 border-t border-gold/15 mt-2">
                <p className="text-white/40 text-xs font-sans pt-3">Solicitar materiais:</p>
                <a
                  href="mailto:stephany.metodio@email.com"
                  className="flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-sans"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  stephany.metodio@email.com
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-sans"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
