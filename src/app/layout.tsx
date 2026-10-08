import type { Metadata } from 'next'
import '@/index.css'
import Navigation from '@/components/Navigation'
import PortfolioButton from '@/components/PortfolioButton'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Stephany Metódio',
  description: 'Portfólio artístico de Stephany Metódio: espetáculos, arte-educação, produção cultural, projetos e trajetória.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-terracota text-white font-sans antialiased selection:bg-gold/30 selection:text-gold">
        <Navigation />
        <PortfolioButton />
        {children}
        < Footer />
      </body>
    </html>
  )
}
