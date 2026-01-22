'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundIllustrations from './components/BackgroundIllustrations';

export default function Home() {
  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />

      <main className="relative z-10">
        {/* Hero Section - Urban Streetwear Style */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
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
          <div className="absolute inset-0 z-[1]">
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#DC2626] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1A1A1A] opacity-20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Hero Content with Overlap */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 
              className="text-8xl md:text-[12rem] font-bold mb-6 leading-[0.9] tracking-tighter text-white fade-in-up"
              style={{ 
                fontFamily: 'var(--font-oswald)', 
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textShadow: '0 0 60px rgba(220, 38, 38, 0.2)'
              }}
            >
              AYBERK
              <br />
              <span className="text-[#DC2626]">TANRIVERDI</span>
            </h1>
            <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] max-w-2xl mx-auto mb-8 fade-in-up" style={{ letterSpacing: '0.3em' }}>
              Oyun ve Uygulama Geliştiricisi
            </p>
          </div>
          
          {/* Curved Transition to Next Section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
        </section>

        {/* Featured Products Section - Layered Design */}
        <section id="games" className="relative bg-[#1A1A1A] py-24 overflow-hidden">
          {/* Curved Top Transition */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Overlapping Title */}
            <div className="mb-16 -mt-8">
              <h2 
                className="text-7xl md:text-9xl font-bold text-white/10 mb-4 uppercase tracking-tighter"
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
                className="text-3xl md:text-5xl font-bold text-white -mt-12 md:-mt-16 ml-4 uppercase tracking-tight"
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
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
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
                  <a href="https://play.unity.com/en/games/71fb7e8e-77a4-4e82-b5aa-022eca79aabb/marble3d" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors text-center text-xs uppercase tracking-wide">
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
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
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
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
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
        <section className="relative bg-[#0A0A0A] py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 
                className="text-6xl md:text-8xl font-bold mb-4 uppercase tracking-tight text-white/5"
                style={{ 
                  fontFamily: 'var(--font-oswald)', 
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                Diğer Oyunlar
              </h2>
              <h3 
                className="text-3xl md:text-5xl font-bold text-white -mt-12 md:-mt-16 ml-4 uppercase tracking-tight"
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" 
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
        <section id="apps" className="relative bg-[#1A1A1A] py-24 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 -mt-8">
              <h2 
                className="text-7xl md:text-9xl font-bold text-white/10 mb-4 uppercase tracking-tighter"
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
                className="text-3xl md:text-5xl font-bold text-white -mt-12 md:-mt-16 ml-4 uppercase tracking-tight"
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
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
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
          <div className="container mx-auto px-6 text-center relative z-10">
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
