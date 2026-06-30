'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/oyunlarim', label: 'Oyunlarım' },
  { href: '/uygulamalarim', label: 'Uygulamalarım' },
  { href: '/fotograflarim', label: 'Fotoğraflarım' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/yardim', label: 'Yardım' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `block py-2 hover:text-[#DC2626] transition-colors ${
      pathname === href ? 'text-[#DC2626]' : 'text-white/70'
    }`;

  return (
    <header className="bg-[#0A0A0A] text-white sticky top-0 z-50 border-b border-[#1A1A1A] backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-sm sm:text-base md:text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity uppercase min-w-0"
            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, letterSpacing: '0.05em' }}
          >
            <span className="sm:hidden">AYBERK T.</span>
            <span className="hidden sm:inline">AYBERK TANRIVERDI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0 rounded-lg border border-white/10"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-white/10 text-sm font-medium uppercase tracking-wider">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkClass(href)}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
