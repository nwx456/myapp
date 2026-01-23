'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#0A0A0A] text-white sticky top-0 z-50 border-b border-[#1A1A1A] backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity uppercase" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, letterSpacing: '0.05em' }}>
            AYBERK TANRIVERDI
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            <Link href="/" className={`hover:text-[#DC2626] transition-colors ${pathname === '/' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Ana Sayfa
            </Link>
            <Link href="/oyunlarim" className={`hover:text-[#DC2626] transition-colors ${pathname === '/oyunlarim' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Oyunlarım
            </Link>
            <Link href="/uygulamalarim" className={`hover:text-[#DC2626] transition-colors ${pathname === '/uygulamalarim' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Uygulamalarım
            </Link>
            <Link href="/fotograflarim" className={`hover:text-[#DC2626] transition-colors ${pathname === '/fotograflarim' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Fotoğraflarım
            </Link>
            <Link href="/hakkimda" className={`hover:text-[#DC2626] transition-colors ${pathname === '/hakkimda' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Hakkımda
            </Link>
            <Link href="/yardim" className={`hover:text-[#DC2626] transition-colors ${pathname === '/yardim' ? 'text-[#DC2626]' : 'text-white/70'}`}>
              Yardım
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
