export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3d3d3d] grain-texture">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#6b9a8a]/95 backdrop-blur-sm border-b border-[#6b9a8a]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-caveat)' }}>
              <span className="text-[#c97d60]">Ayberk</span> Tanrıverdi
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-[#5a5a5a] hover:text-[#c97d60] transition-colors font-medium text-lg">
                Ana Sayfa
              </a>
              <a href="#games" className="text-[#5a5a5a] hover:text-[#c97d60] transition-colors font-medium text-lg">
                Oyunlarım
              </a>
              <a href="#apps" className="text-[#5a5a5a] hover:text-[#c97d60] transition-colors font-medium text-lg">
                Uygulamalarım
              </a>
              <a href="#about" className="text-[#5a5a5a] hover:text-[#c97d60] transition-colors font-medium text-lg">
                Hakkımda
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-[#6b9a8a]/20 hover:bg-[#6b9a8a]/30 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-[#6b9a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="relative">
        {/* Illustration Background */}
        <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#faf8f3] to-[#f5f1e8]">
          {/* Mountains Background */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3">
            <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,400 L200,300 L400,320 L600,280 L800,300 L1000,260 L1200,280 L1200,400 Z" 
                    fill="#8fa68e" opacity="0.3" />
              <path d="M0,400 L300,250 L600,270 L900,220 L1200,240 L1200,400 Z" 
                    fill="#6b9a8a" opacity="0.4" />
            </svg>
          </div>

          {/* Sea and Boats */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#6b9a8a]/20">
            <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,150 Q300,100 600,120 T1200,110 L1200,200 L0,200 Z" fill="#6b9a8a" opacity="0.3" />
              {/* Small sailboats */}
              <g opacity="0.6">
                <path d="M200,120 L220,100 L240,120 Z" fill="#c97d60" />
                <path d="M220,100 L220,120 L200,120 L240,120 Z" fill="#f5f1e8" />
                <path d="M500,110 L520,90 L540,110 Z" fill="#c97d60" />
                <path d="M520,90 L520,110 L500,110 L540,110 Z" fill="#f5f1e8" />
                <path d="M800,115 L820,95 L840,115 Z" fill="#c97d60" />
                <path d="M820,95 L820,115 L800,115 L840,115 Z" fill="#f5f1e8" />
              </g>
            </svg>
          </div>

          {/* Tower/Structure on Right */}
          <div className="absolute right-10 bottom-1/4 w-32 h-64 opacity-20">
            <svg viewBox="0 0 100 200" className="w-full h-full">
              <rect x="20" y="0" width="60" height="200" fill="#c97d60" rx="5" />
              <rect x="30" y="20" width="20" height="30" fill="#f5f1e8" rx="2" />
              <rect x="50" y="20" width="20" height="30" fill="#f5f1e8" rx="2" />
              <rect x="30" y="60" width="20" height="30" fill="#f5f1e8" rx="2" />
              <rect x="50" y="60" width="20" height="30" fill="#f5f1e8" rx="2" />
              <circle cx="50" cy="180" r="8" fill="#6b9a8a" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#c97d60] leading-tight" 
                  style={{ fontFamily: 'var(--font-playfair)' }}>
                Connect with
                <br />
                <span className="text-[#6b9a8a]">our Artisans</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#5a5a5a] mb-8 leading-relaxed max-w-xl">
                Eğlenceli oyunlar ve kullanışlı uygulamalar geliştiriyorum. 
                Her proje, el emeği gibi özenle hazırlanmış.
              </p>
              <a href="#games" 
                 className="inline-block px-8 py-4 bg-[#6b9a8a] text-white rounded-full hover:bg-[#4a7c6a] transition-colors font-medium text-lg shadow-lg">
                Keşfetmeye Başla
              </a>
            </div>
          </div>
        </div>

        {/* Yeni Oyunlar Section */}
        <section id="games" className="py-20 bg-[#f5f1e8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#c97d60]" 
                  style={{ fontFamily: 'var(--font-playfair)' }}>
                Yeni Oyunlar
              </h2>
              <div className="w-24 h-1 bg-[#6b9a8a] mx-auto mb-6"></div>
              <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
                El emeği ile hazırlanmış, özenle tasarlanmış oyunlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Marble 3D */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#6b9a8a]/20">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -right-2 bg-[#c97d60] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Yeni
                  </div>
                  <div className="w-20 h-20 bg-[#6b9a8a]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#6b9a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#3d3d3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Marble 3D
                </h3>
                <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                  Fizik bilgilerinizi tazeleyecek ve size beyin egzersizi yaptıracak harika bir 3D oyun. 
                  Oyunun içinde biri özel olmak üzere 6 top bulunmakta, ayrıca hepsi birbirinden eğlenceli 
                  ve sinir bozucu olan 25 bölüm mevcut!
                </p>
                <div className="flex items-center gap-4 mb-6 text-[#6b9a8a] text-sm">
                  <span className="px-3 py-1 bg-[#6b9a8a]/10 rounded-full">6 Top</span>
                  <span>•</span>
                  <span className="px-3 py-1 bg-[#6b9a8a]/10 rounded-full">25 Bölüm</span>
                </div>
                <a href="https://ayberktanriverdi.com/marble-3d" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="block w-full px-6 py-3 bg-[#c97d60] text-white rounded-full hover:bg-[#a85d45] transition-colors text-center font-medium">
                  Şimdi Oyna
                </a>
                <p className="text-[#5a5a5a] text-sm mt-4 italic border-l-2 border-[#c97d60]/30 pl-3">
                  NOT: 25. bölüme kadar gelip sağ altta bulunan mesaj bölümünden bana ekran görüntüsü atarsanız bu beni çok mutlu eder!
                </p>
              </div>

              {/* Flappy Bird 3D */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#6b9a8a]/20">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -right-2 bg-[#c97d60] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Yeni
                  </div>
                  <div className="w-20 h-20 bg-[#8fa68e]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#8fa68e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#3d3d3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Flappy Bird 3D
                </h3>
                <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                  El-göz koordinasyonunuzun sınırlarını zorlayacak, aynı zamanda size eski günlerinizi 
                  anımsatacak son derece zevkli bir oyun.
                </p>
                <a href="https://ayberktanriverdi.com/flappy-bird-3d" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="block w-full px-6 py-3 bg-[#6b9a8a] text-white rounded-full hover:bg-[#4a7c6a] transition-colors text-center font-medium">
                  Şimdi Oyna
                </a>
              </div>

              {/* Renkli Küpler */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#6b9a8a]/20">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -right-2 bg-[#c97d60] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Yeni
                  </div>
                  <div className="w-20 h-20 bg-[#c97d60]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#c97d60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#3d3d3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Renkli Küpler
                </h3>
                <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                  Renkli küplere kafasını takmış bir çocuğun odasında yine renkli küplerle kule yaparak 
                  havalandırmadan kaçmaya çalışan bir karakter.
                </p>
                <a href="https://ayberktanriverdi.com/renkli-kupler" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="block w-full px-6 py-3 bg-[#c97d60] text-white rounded-full hover:bg-[#a85d45] transition-colors text-center font-medium">
                  Şimdi Oyna
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Yakında Gelecek Oyunlar */}
        <section className="py-20 bg-[#faf8f3]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#6b9a8a]" 
                  style={{ fontFamily: 'var(--font-playfair)' }}>
                Yakında Gelecek
              </h2>
              <div className="w-24 h-1 bg-[#c97d60] mx-auto mb-6"></div>
              <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
                Geliştirme aşamasındaki projelerim
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { name: "TimeTwin", desc: "Sizinle aynı günde doğan kişileri öğrenin" },
                { name: "Dedektif Oyunu", desc: "Şüphelileri sorgulayarak katili bulun" },
                { name: "Car 3D", desc: "Arabanızı sürüp drift testi yapın" },
                { name: "Penaltı Oyunu", desc: "Penaltı atarak yeni teklifler açın" },
              ].map((game, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-[#6b9a8a]/20">
                  <div className="w-14 h-14 bg-[#6b9a8a]/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#6b9a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#3d3d3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {game.name}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm mb-4">{game.desc}</p>
                  <span className="inline-block px-3 py-1 bg-[#f5f1e8] text-[#6b9a8a] rounded-full text-xs font-medium">
                    Yakında...
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uygulamalar Section */}
        <section id="apps" className="py-20 bg-[#f5f1e8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#c97d60]" 
                  style={{ fontFamily: 'var(--font-playfair)' }}>
                Uygulamalarım
              </h2>
              <div className="w-24 h-1 bg-[#6b9a8a] mx-auto mb-6"></div>
              <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
                Günlük hayatınızı kolaylaştıran uygulamalar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                { name: "TektOn", desc: "Arkadaşlarınızla online mesajlaşıp resim paylaşın", icon: "💬", link: "https://ayberktanriverdi.com/tekon" },
                { name: "Zeka Küpü Süre Tutucu", desc: "Zeka küpü çözenler için özellik dolu süre tutma uygulaması", icon: "⏱️", link: "https://ayberktanriverdi.com/zeka-kupu" },
                { name: "Kütüphane Otomasyonu", desc: "Etkili ve işinize yarayacak bir sürü özellik bulunur", icon: "📚", link: "https://ayberktanriverdi.com/kutuphane" },
                { name: "VocaPro", desc: "İngilizce kelimelerinizi ezberlemenize yardımcı olacak uygulama", icon: "📖", link: "https://ayberktanriverdi.com/vocapro" },
                { name: "CarGame", desc: "Arabalardan kaçarak para kazandığınız oyunda 12 farklı araba mevcut", icon: "🚗", link: "https://ayberktanriverdi.com/cargame" },
                { name: "Kim Milyoner Olmak İster?", desc: "Çeşitli jokerleri kullanarak milyoner olabilir misiniz?", icon: "💰", link: "https://ayberktanriverdi.com/milyoner" },
              ].map((app, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-[#6b9a8a]/20">
                  <div className="w-14 h-14 bg-[#c97d60]/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#3d3d3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {app.name}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed mb-4">{app.desc}</p>
                  <a href={app.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="block w-full px-4 py-2 bg-[#6b9a8a]/10 text-[#6b9a8a] rounded-full hover:bg-[#6b9a8a]/20 transition-colors text-center font-medium text-sm">
                    Detaylar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hakkımda Section */}
        <section id="about" className="py-20 bg-[#faf8f3]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#6b9a8a]/20">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-[#c97d60]" 
                    style={{ fontFamily: 'var(--font-playfair)' }}>
                  Hakkımda
                </h2>
                <div className="w-32 h-1 bg-[#6b9a8a] mx-auto mb-8"></div>
                <p className="text-xl text-[#5a5a5a] leading-relaxed text-center max-w-2xl mx-auto">
                  Oyun ve uygulama geliştiricisiyim. Eğlenceli oyunlar ve kullanışlı uygulamalar geliştirerek 
                  kullanıcıların hayatlarını daha eğlenceli ve kolay hale getirmeyi hedefliyorum. 
                  <span className="text-[#c97d60] font-semibold"> Her projemde kullanıcı deneyimini ön planda tutuyorum.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#6b9a8a]/20 bg-[#f5f1e8]">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <p className="mb-2 text-[#5a5a5a] font-medium">
              <span className="text-[#c97d60]">ayberktanriverdi.com</span>® tüm hakları saklıdır <strong className="text-[#3d3d3d]">2024</strong>
            </p>
            <p className="text-sm text-[#5a5a5a]">El emeği ile hazırlanmıştır</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
