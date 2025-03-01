import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ThemeToggle from '@/components/shared/ThemeToggle'
import ScrollToTop from '@/components/shared/ScrollToTop'
import PageTransition from '@/components/shared/PageTransition'
import { Inter, Playfair_Display, Manrope, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

// Primary sans-serif font - clean, modern, and versatile
const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

// Secondary sans-serif font with distinctive character for UI elements
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// Elegant serif font for headings and display text
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

// Fallback/supporting font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Bimasha | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in scalable web solutions',
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
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                // Default to light mode instead of system preference
                const isDark = savedTheme === 'dark';
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Error accessing localStorage:', e);
              }
            })();
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-background dark:bg-background-dark text-secondary dark:text-secondary-dark font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Premium background effects */}
          <div className="fixed inset-0 bg-[url('/subtle-dots.svg')] dark:bg-[url('/subtle-dots-dark.svg')] bg-repeat opacity-5 pointer-events-none z-0"></div>
          
          {/* Gradient orbs for premium feel */}
          <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
          <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-vibrant-500/5 dark:bg-vibrant-400/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>
          
          {/* Noise texture overlay */}
          <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay z-0"></div>
          
          <ThemeToggle />
          <ScrollToTop />
          <Header />
          <main className="flex-grow pt-20 relative z-10">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}