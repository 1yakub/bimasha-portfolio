'use client'

import Link from 'next/link'
import Container from '@/components/ui/container'

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50">
      <Container>
        <nav className="h-16 flex items-center justify-between border-b-[3px] border-black"> {/* Changed from h-20 to h-16 */}
          <Link href="/" className="text-2xl font-black">
            BIMASHA
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/projects" className="font-medium">
              Projects
            </Link>
            <Link 
              href="/newsletter" 
              className="px-4 py-2 bg-black text-white font-medium"
            >
              Newsletter
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}