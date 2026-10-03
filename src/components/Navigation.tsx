"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/trajetoria', label: 'Trajetória' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/arte-educacao', label: 'Arte-Educação' },
  { href: '/producao', label: 'Produção & Curadoria' },

]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
          ? 'bg-crimson backdrop-blur-md border-b border-gold/15'
          : 'bg-linear-to-b from-ink/80 to-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col leading-none group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-display text-yellow text-xl tracking-wide group-hover:text-white transition-colors duration-300">
              Stephany
            </span>
            <span className="font-display text-white text-xl tracking-wide group-hover:text-gold transition-colors duration-300">
              Metódio
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map(item => {
              const active = isItemActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs uppercase tracking-[0.18em] font-sans transition-colors duration-300 pb-1 ${active ? 'text-yellow' : 'text-amber-100 hover:text-white'
                    }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-gold"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-gold"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-gold"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' as const }}
            className="fixed top-18 left-0 right-0 z-40 bg-purple backdrop-blur-md overflow-hidden border-b border-gold/20"
          >
            {navItems.map((item, i) => {
              const active = isItemActive(item.href)
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-8 py-5 text-sm uppercase tracking-[0.2em] border-b border-gold/10 transition-colors ${active
                      ? 'text-yellow bg-gold/5'
                      : 'text-white/70 hover:text-yellow hover:bg-gold/5'
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
