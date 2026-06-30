'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="relative z-10">
        {/* Hero Section - Urban Streetwear Style */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-x-hidden bg-[#0A0A0A] pt-20 pb-12 md:pt-0 md:pb-0">
          {/* Background Image with Grayscale Filter */}
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{ 
              backgroundImage: 'url(/images/arkaplan.png?v=2)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center center', 
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) brightness(0.4)'
            }}
          />
          
          {/* Abstract Shape Overlay */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <div className="absolute top-20 -right-10 md:right-10 w-48 h-48 md:w-96 md:h-96 bg-[#DC2626] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -left-10 md:left-10 w-40 h-40 md:w-80 md:h-80 bg-[#1A1A1A] opacity-20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Hero Content with Overlap */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center w-full max-w-full">
            <h1 
              className="font-bold mb-6 leading-[0.95] text-white fade-in-up w-full max-w-full break-words"
              style={{ 
                fontFamily: 'var(--font-oswald)', 
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 11vw, 12rem)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 60px rgba(220, 38, 38, 0.2)'
              }}
            >
              AYBERK
              <br />
              <span className="text-[#DC2626]">TANRIVERDI</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-[0.15em] sm:tracking-[0.2em] max-w-2xl mx-auto mb-8 fade-in-up px-2" style={{ letterSpacing: '0.2em' }}>
              Oyun ve Uygulama Geliştiricisi
            </p>
            <Link
              href="/fotograflarim"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-xs sm:text-sm fade-in-up"
              style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}
            >
              Fotoğraflarım
              <span aria-hidden>→</span>
            </Link>
            <div className="mt-6 flex items-center justify-center gap-4 fade-in-up">
              <a
                href="https://www.instagram.com/ayberk.tnr52?igsh=MWE5enBocTAwZGNidw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profilim"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/70 hover:text-[#DC2626] hover:border-[#DC2626] transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ayberk-tanr%C4%B1verdi-036661330/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profilim"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/70 hover:text-[#DC2626] hover:border-[#DC2626] transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Curved Transition to Next Section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
        </section>

        {/* Flagship project — dedicated monument block */}
        <section
          id="latest-project"
          aria-label="Öne çıkan proje"
          className="relative bg-[#0C0C0C] pt-20 pb-24 md:pt-36 md:pb-44 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 -left-20 md:left-[10%] w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-[#DC2626]/[0.07] blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-full md:w-[60%] h-48 md:h-64 bg-gradient-to-tl from-[#1A1A1A] to-transparent opacity-90" />
            <div
              className="hidden md:block absolute left-1/2 top-24 -translate-x-1/2 text-[clamp(4.5rem,22vw,18rem)] font-bold uppercase leading-none text-white/[0.04] whitespace-nowrap select-none"
              style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, letterSpacing: '-0.04em' }}
            >
              BLUEBOOK
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-12 lg:gap-16">
                <div className="hidden lg:block w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#DC2626] via-[#DC2626]/40 to-transparent opacity-90" aria-hidden />

                <div className="flex-1 space-y-10">
                  <div className="text-center lg:text-left space-y-4">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/45">
                      <span className="inline-flex items-center gap-3">
                        <span className="h-px w-10 bg-[#DC2626]" />
                        My Latest Project
                        <span className="h-px w-10 bg-[#DC2626]" />
                      </span>
                    </div>
                    <div className="relative">
                      <h2
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.95]"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700, letterSpacing: '-0.02em' }}
                      >
                        Bluebook
                        <span className="text-[#DC2626]"> Online</span>
                      </h2>
                      <p className="mt-4 text-xs sm:text-sm md:text-base text-[#DC2626]/90 uppercase tracking-[0.12em] sm:tracking-[0.2em] font-medium text-center lg:text-left">
                        AP sınav pratiği · Bluebook deneyimi · Ücretsiz
                      </p>
                    </div>
                  </div>

                    <div className="relative rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-br from-white/25 via-white/[0.06] to-white/[0.02] shadow-[0_0_80px_-20px_rgba(220,38,38,0.35)]">
                    <div className="relative rounded-[15px] md:rounded-[22px] bg-[#141414]/95 backdrop-blur-sm border border-white/[0.08] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 overflow-hidden">
                      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px bg-gradient-to-r from-transparent via-[#DC2626]/60 to-transparent" aria-hidden />
                      <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto lg:mx-0 text-center lg:text-left pt-2">
                        College Board&apos;un gerçek Bluebook dijital sınav arayüzüne benzeyen bir ortamda AP&apos;ye hazırlan. Yirmi dört derste deneme, PDF&apos;den otomatik soru çıkarma, topluluk testleri ve yapay zekâ ile puanlama — hangi konuda eksik kaldığını anında gör. Tamamen eğitim amaçlı; dünyadaki öğrenciler için ücretsiz.
                      </p>
                      <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                        <a
                          href="https://apbluebookonline.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#DC2626] text-white font-bold rounded-full hover:bg-[#B91C1C] transition-all duration-300 hover:scale-[1.02] uppercase tracking-wider text-sm shadow-lg shadow-[#DC2626]/25"
                          style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}
                        >
                          Siteye git
                          <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                            →
                          </span>
                        </a>
                        <span className="text-white/35 text-xs uppercase tracking-widest">apbluebookonline.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                    {['24 AP dersi', 'AI puanlama', 'PDF yükle', 'Topluluk testleri'].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs md:text-sm text-white/55 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
        </section>

        {/* Featured Products Section - Layered Design */}
        <section id="games" className="relative bg-[#1A1A1A] py-16 md:py-24 overflow-hidden">
          {/* Curved Top Transition */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0C0C0C] to-[#1A1A1A]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Overlapping Title */}
            <div className="mb-12 md:mb-16 md:-mt-8">
              <h2 
                className="hidden md:block text-7xl md:text-9xl font-bold text-white/10 mb-4 uppercase tracking-tighter"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  transform: 'translateY(-20px)'
                }}
              >
                Oyunlarım
              </h2>
              <h3 
                className="text-3xl md:text-5xl font-bold text-white md:-mt-12 lg:-mt-16 md:ml-4 uppercase tracking-tight text-center md:text-left"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Oyunlarım
              </h3>
            </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marble 3D */}
            <div className="group bg-[#2A2A2A] rounded-2xl overflow-hidden hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#DC2626]/10">
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src="/images/marble3d.png" 
                  alt="Marble 3D" 
                  className="w-full h-full object-cover object-center md:grayscale md:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                />
                {/* Red Badge */}
                <div className="absolute top-4 right-4 bg-[#DC2626] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Yeni
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold text-white mb-3 uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                  Marble 3D
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Fizik bilgilerinizi tazeleyecek ve size beyin egzersizi yaptıracak harika bir 3D oyun. 
                  6 top ve 25 eğlenceli bölüm ile sizi bekliyor!
                </p>
                <div className="flex gap-3">
                  <a href="https://play.unity.com/en/games/71fb7e8e-77a4-4e82-b5aa-022eca79aabb/marble3d" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-center text-xs uppercase tracking-wide">
                    Oyna
                  </a>
                  <a href="https://drive.google.com/file/d/1XMSXYB9meoTmbfslsbA1QxeUrq1X9xYE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors text-center text-xs uppercase tracking-wide">
                    İndir
                  </a>
                </div>
              </div>
            </div>

            {/* Flappy Bird 3D */}
            <div className="group bg-[#2A2A2A] rounded-2xl overflow-hidden hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#DC2626]/10">
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src="/images/flappybird3d.png" 
                  alt="Flappy Bird 3D" 
                  className="w-full h-full object-cover object-center md:grayscale md:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold text-white mb-3 uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                  Flappy Bird 3D
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  El-göz koordinasyonunuzun sınırlarını zorlayacak, aynı zamanda size eski günlerinizi anımsatacak 
                  son derece zevkli bir oyun.
                </p>
                <div className="flex gap-3">
                  <a href="https://play.unity.com/en/games/9dbeace2-e356-4125-99ae-852ed7b36ef2/flappybird3d" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-center text-xs uppercase tracking-wide">
                    Oyna
                  </a>
                  <a href="https://drive.google.com/file/d/1haMRq6F0lv_vCs8RvUt1LD8ko56s1bqn/view" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors text-center text-xs uppercase tracking-wide">
                    İndir
                  </a>
                </div>
              </div>
            </div>

            {/* BalanceTower 3D */}
            <div className="group bg-[#2A2A2A] rounded-2xl overflow-hidden hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#DC2626]/10">
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src="/images/BalanceTower3D.png" 
                  alt="BalanceTower 3D" 
                  className="w-full h-full object-cover object-center md:grayscale md:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold text-white mb-3 uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                  Balance Tower 3D
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Renkli küplere kafasını takmış bir çocuğun odasında yine renkli küplerle kule yaparak 
                  havalandırmadan kaçmaya çalışan bir karakter.
                </p>
                <div className="flex gap-3">
                  <a href="https://play.unity.com/en/games/00fae635-3b90-4d6f-ac81-4f82cc6c298a/balancetower" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-center text-xs uppercase tracking-wide">
                    Oyna
                  </a>
                  <a href="https://drive.google.com/file/d/1kRFEj-topMsVyMMaInysEdXZilCkWtsP/view" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors text-center text-xs uppercase tracking-wide">
                    İndir
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* Curved Bottom Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]"></div>
        </section>


        {/* More Games Section - Dark Background */}
        <section className="relative bg-[#0A0A0A] py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
              <h2 
                className="hidden md:block text-6xl md:text-8xl font-bold mb-4 uppercase tracking-tight text-white/5"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                Diğer Oyunlar
              </h2>
              <h3 
                className="text-3xl md:text-5xl font-bold text-white md:-mt-12 lg:-mt-16 md:ml-4 uppercase tracking-tight text-center md:text-left"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Diğer Oyunlar
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Car 3D", image: "/images/cargame3d.png", desc: "Arabanızı sürüp drift testi yap", link: "https://drive.google.com/file/d/1-6HS6-lnETUSBv7wIF5HcEgQXCvx8Ela/view?usp=drive_link" },
                { name: "Penaltı Oyunu", image: "/images/futboloyunu.png", desc: "Penaltı atarak yeni teklifler aç", link: "https://drive.google.com/file/d/1O195lwElO4AoaPvP6VfJKZu4taVWFLBo/view" },
                { name: "Dedektif Oyunu", image: "/images/dedektifoyunu.png", desc: "Şüphelileri sorgulayarak katili bul", link: "https://drive.google.com/file/d/1CYAmgq_o_yPDICOmSzoh_ro2M__LoFxl/view" },
                { name: "Car Game", image: "/images/arabaoyunu.png", desc: "Arabalardan kaçarak para kazan", link: "https://drive.google.com/file/d/1O8xIcqvZC1_Ghr2U48eEADVPT4_grHkc/view" },
              ].map((game, idx) => (
                <div key={idx} className="group bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 md:grayscale md:group-hover:grayscale-0" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 
                      className="text-lg font-bold mb-2 uppercase tracking-tight text-white"
                      style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                      {game.name}
                    </h3>
                    <p className="text-xs text-white/60 mb-4 leading-relaxed">{game.desc}</p>
                    <a 
                      href={game.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full px-4 py-2 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-center text-xs uppercase tracking-wide"
                    >
                      İndir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section - Layered Gray */}
        <section id="apps" className="relative bg-[#1A1A1A] py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-12 md:mb-16 md:-mt-8">
              <h2 
                className="hidden md:block text-7xl md:text-9xl font-bold text-white/10 mb-4 uppercase tracking-tighter"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  transform: 'translateY(-20px)'
                }}
              >
                Uygulamalarım
              </h2>
              <h3 
                className="text-3xl md:text-5xl font-bold text-white md:-mt-12 lg:-mt-16 md:ml-4 uppercase tracking-tight text-center md:text-left"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Uygulamalarım
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Zeka Küpü", icon: "⏱️", image: "/images/rubikküpsüretutucu.png", desc: "Cube timer app", link: "https://drive.google.com/file/d/1-m3hpVt1Wj5RL-1oo34wiNnFt9jlPef-/view" },
                { name: "Kütüphane", icon: "📚", image: "/images/kütüphaneotamasyonu.png", desc: "Library automation", link: "https://drive.google.com/file/d/1sKloSdAJAmEIer_Uf99byjAITXbreC7o/view" },
                { name: "Kim Milyoner", icon: "💰", image: "/images/kimmilyonerolmakister.png", desc: "Quiz game", link: "https://drive.google.com/file/d/1Y1fzCRBTJLjjMUEojSThKtxhGaUPyFL0/view" },
              ].map((app, idx) => (
                <div key={idx} className="group bg-[#2A2A2A] rounded-2xl overflow-hidden hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#DC2626]/10">
                  {app.image ? (
                    <div className="relative w-full h-64 overflow-hidden">
                      <img 
                        src={app.image} 
                        alt={app.name} 
                        className="w-full h-full object-cover object-center md:grayscale md:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                      />
                    </div>
                  ) : (
                    <div className="text-5xl mb-4 text-center p-8 bg-[#1A1A1A]">{app.icon}</div>
                  )}
                  <div className="p-6">
                    <h3 
                      className="text-2xl font-bold text-white mb-3 uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                      {app.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">{app.desc}</p>
                    <a 
                      href={app.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full px-4 py-2.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors text-center text-xs uppercase tracking-wide"
                    >
                      İndir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A]"></div>
        </section>

        {/* Call-to-Action Area - Red Accent */}
        <section className="relative bg-[#0A0A0A] py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/5 via-transparent to-[#DC2626]/5"></div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/oyunlarim" 
                className="px-10 py-4 bg-[#DC2626] text-white font-bold rounded-full hover:bg-[#B91C1C] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm shadow-lg shadow-[#DC2626]/20"
                style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}
              >
                Tüm Oyunlar
              </a>
              <a 
                href="/uygulamalarim" 
                className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-white/40 transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
                style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}
              >
                Tüm Uygulamalar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
