'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              Oyunlar
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/oyunlarim" className="hover:text-white transition-colors">Marble 3D</Link></li>
              <li><Link href="/oyunlarim" className="hover:text-white transition-colors">Flappy Bird 3D</Link></li>
              <li><Link href="/oyunlarim" className="hover:text-white transition-colors">Balance Tower 3D</Link></li>
              <li><Link href="/oyunlarim" className="hover:text-white transition-colors">Car Game</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              Uygulamalar
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/uygulamalarim" className="hover:text-white transition-colors">TektOn</Link></li>
              <li><Link href="/uygulamalarim" className="hover:text-white transition-colors">Zeka Küpü</Link></li>
              <li><Link href="/uygulamalarim" className="hover:text-white transition-colors">Kütüphane</Link></li>
              <li><Link href="/uygulamalarim" className="hover:text-white transition-colors">VocaPro</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              Bağlantılar
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/oyunlarim" className="hover:text-white transition-colors">Oyunlarım</Link></li>
              <li><Link href="/uygulamalarim" className="hover:text-white transition-colors">Uygulamalarım</Link></li>
              <li><Link href="/fotograflarim" className="hover:text-white transition-colors">Fotoğraflarım</Link></li>
              <li><Link href="/hakkimda" className="hover:text-white transition-colors">Hakkımda</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              İletişim
            </h3>
            <Link href="/yardim">
              <button className="px-6 py-2 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-sm">
                İletişim
              </button>
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-center text-white/60">
            © 2024 AYBERK TANRIVERDI. El emeği ile hazırlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}
