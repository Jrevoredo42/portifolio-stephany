import type { Metadata } from 'next'
import '@/index.css'
import Navigation from '@/components/Navigation'
import PortfolioButton from '@/components/PortfolioButton'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Stephany Metódio',
  description: 'Portfólio artístico de Stephany Metódio: espetáculos, arte-educação, produção cultural, projetos e trajetória.',
  icons: {
    icon: [
      { url: '/assets/favicon_io/favicon.ico' },
      { url: '/assets/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
