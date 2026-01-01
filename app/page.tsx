export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b-2 border-cyan-500/30">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">
            AYBERK TANRIVERDI
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-all font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-400 pb-1">
              Ana Sayfa
            </a>
            <a href="#games" className="text-gray-300 hover:text-cyan-400 transition-all font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-400 pb-1">
              Oyunlarım
            </a>
            <a href="#apps" className="text-gray-300 hover:text-cyan-400 transition-all font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-400 pb-1">
              Uygulamalarım
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-400 pb-1">
              Hakkımda
            </a>
            <a href="#help" className="text-gray-300 hover:text-cyan-400 transition-all font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-400 pb-1">
              Yardım
            </a>
          </div>
          <a href="#games" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-wider text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border-2 border-cyan-400/50">
            Oyunları Keşfet
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto text-center mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-none tracking-tight">
              OYUN VE
              <br />
              <span className="text-white">UYGULAMA</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">GELİŞTİRİCİSİ</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Eğlenceli oyunlar ve kullanışlı uygulamalar geliştiriyorum.
              <br />
              <span className="text-cyan-400 font-bold">Yeni projelerimi keşfedin ve oynamaya başlayın!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#games" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-wider text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,1)] border-2 border-cyan-400/50 hover:scale-105">
                Oyunları Keşfet
              </a>
              <a href="#apps" className="px-10 py-4 bg-transparent text-white font-black uppercase tracking-wider text-lg border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all hover:scale-105">
                Uygulamaları Gör
              </a>
            </div>
          </div>
        </div>

        {/* Yeni Oyunlar Section */}
        <section id="games" className="mb-40 py-20 border-t-2 border-b-2 border-cyan-500/30">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight">
              Yeni Oyunlar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-wider">
              En Yeni Oyunlarımı Keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Marble 3D */}
            <div className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all transform hover:-translate-y-3 hover:scale-105">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-5 py-2 font-black text-xs uppercase tracking-wider shadow-lg z-20 border-2 border-black">
                YENİ!
              </div>
              <div className="relative bg-black p-8 border-2 border-cyan-500/30">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 border-2 border-cyan-400">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">Marble 3D</h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                  Fizik bilgilerinizi tazeleyecek ve size beyin egzersizi yaptıracak harika bir 3D oyun. Oyunun içinde biri özel olmak üzere 6 top bulunmakta, ayrıca hepsi birbirinden eğlenceli ve sinir bozucu olan 25 bölüm mevcut!
                </p>
                <div className="flex items-center gap-4 mb-6 text-cyan-400 text-sm font-bold uppercase tracking-wider">
                  <span className="border border-cyan-500 px-3 py-1">6 Top</span>
                  <span>•</span>
                  <span className="border border-cyan-500 px-3 py-1">25 Bölüm</span>
                </div>
                <a href="https://ayberktanriverdi.com/marble-3d" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-wider text-center hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border-2 border-cyan-400 hover:scale-105">
                  Şimdi Oyna
                </a>
                <p className="text-gray-400 text-xs mt-4 italic border-l-2 border-cyan-500 pl-3">
                  NOT: 25. bölüme kadar gelip sağ altta bulunan mesaj bölümünden bana ekran görüntüsü atarsanız bu beni çok mutlu eder!
                </p>
              </div>
            </div>

            {/* Flappy Bird 3D */}
            <div className="group relative bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 p-1 shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:shadow-[0_0_60px_rgba(34,197,94,0.8)] transition-all transform hover:-translate-y-3 hover:scale-105">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-5 py-2 font-black text-xs uppercase tracking-wider shadow-lg z-20 border-2 border-black">
                YENİ!
              </div>
              <div className="relative bg-black p-8 border-2 border-green-500/30">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 border-2 border-green-400">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">Flappy Bird 3D</h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                  El-göz koordinasyonunuzun sınırlarını zorlayacak, aynı zamanda size eski günlerinizi anımsatacak son derece zevkli bir oyun.
                </p>
                <a href="https://ayberktanriverdi.com/flappy-bird-3d" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black uppercase tracking-wider text-center hover:from-green-400 hover:to-emerald-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] border-2 border-green-400 hover:scale-105">
                  Şimdi Oyna
                </a>
              </div>
            </div>

            {/* Renkli Küpler Oyunu */}
            <div className="group relative bg-gradient-to-br from-pink-500 via-rose-600 to-red-600 p-1 shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.8)] transition-all transform hover:-translate-y-3 hover:scale-105">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-5 py-2 font-black text-xs uppercase tracking-wider shadow-lg z-20 border-2 border-black">
                YENİ!
              </div>
              <div className="relative bg-black p-8 border-2 border-pink-500/30">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 border-2 border-pink-400">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">Renkli Küpler</h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                  Renkli küplere kafasını takmış bir çocuğun odasında yine renkli küplerle kule yaparak havalandırmadan kaçmaya çalışan bir karakter.
                </p>
                <a href="https://ayberktanriverdi.com/renkli-kupler" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black uppercase tracking-wider text-center hover:from-pink-400 hover:to-rose-500 transition-all shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] border-2 border-pink-400 hover:scale-105">
                  ŞİMDİ OYNA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Yakında Gelecek Oyunlar */}
        <section className="mb-40 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight">
              Yakında Gelecek
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-wider">
              Geliştirme Aşamasındaki Projelerim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "TimeTwin", desc: "Sizinle aynı günde doğan kişileri öğrenin", color: "from-indigo-500 to-blue-600", border: "border-indigo-500/30" },
              { name: "Dedektif Oyunu", desc: "Şüphelileri sorgulayarak katili bulun", color: "from-gray-600 to-gray-800", border: "border-gray-500/30" },
              { name: "Car 3D", desc: "Arabanızı sürüp drift testi yapın", color: "from-red-500 to-orange-600", border: "border-red-500/30" },
              { name: "Penaltı Oyunu", desc: "Penaltı atarak yeni teklifler açın", color: "from-green-500 to-emerald-600", border: "border-green-500/30" },
            ].map((game, idx) => (
              <div key={idx} className="bg-black p-6 border-2 border-gray-800 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <div className={`w-16 h-16 bg-gradient-to-br ${game.color} flex items-center justify-center mb-4 border-2 border-white/20`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">{game.name}</h3>
                <p className="text-gray-400 text-sm mb-4 font-medium">{game.desc}</p>
                <span className="inline-block px-4 py-2 bg-gray-900 text-cyan-400 border-2 border-cyan-500/50 font-black text-xs uppercase tracking-wider">
                  YAKINDA...
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Uygulamalar Section */}
        <section id="apps" className="mb-40 py-20 border-t-2 border-b-2 border-purple-500/30">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight">
              Uygulamalarım
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 font-bold uppercase tracking-wider">
              Günlük Hayatınızı Kolaylaştıran Uygulamalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { name: "TektOn", desc: "Arkadaşlarınızla online mesajlaşıp resim paylaşın", icon: "💬", color: "from-blue-500 to-cyan-600", link: "https://ayberktanriverdi.com/tekon" },
              { name: "Zeka Küpü Süre Tutucu", desc: "Zeka küpü çözenler için özellik dolu süre tutma uygulaması", icon: "⏱️", color: "from-purple-500 to-pink-600", link: "https://ayberktanriverdi.com/zeka-kupu" },
              { name: "Kütüphane Otomasyonu", desc: "Etkili ve işinize yarayacak bir sürü özellik bulunur", icon: "📚", color: "from-amber-500 to-orange-600", link: "https://ayberktanriverdi.com/kutuphane" },
              { name: "VocaPro", desc: "İngilizce kelimelerinizi ezberlemenize yardımcı olacak uygulama", icon: "📖", color: "from-green-500 to-teal-600", link: "https://ayberktanriverdi.com/vocapro" },
              { name: "CarGame", desc: "Arabalardan kaçarak para kazandığınız oyunda 12 farklı araba mevcut", icon: "🚗", color: "from-red-500 to-rose-600", link: "https://ayberktanriverdi.com/cargame" },
              { name: "Kim Milyoner Olmak İster?", desc: "Çeşitli jokerleri kullanarak milyoner olabilir misiniz?", icon: "💰", color: "from-yellow-500 to-amber-600", link: "https://ayberktanriverdi.com/milyoner" },
            ].map((app, idx) => (
              <div key={idx} className="bg-black p-6 border-2 border-gray-800 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <div className={`w-16 h-16 bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 text-3xl border-2 border-white/20`}>
                  {app.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">{app.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">{app.desc}</p>
                <a href={app.link} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-wider text-sm text-center hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] border-2 border-cyan-400/50 hover:scale-105">
                  Detaylar
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Hakkımda Section */}
        <section id="about" className="mb-40 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 p-12 border-2 border-cyan-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center uppercase tracking-tight">
                  Hakkımda
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto font-medium">
                  Oyun ve uygulama geliştiricisiyim. Eğlenceli oyunlar ve kullanışlı uygulamalar geliştirerek 
                  kullanıcıların hayatlarını daha eğlenceli ve kolay hale getirmeyi hedefliyorum. 
                  <span className="text-cyan-400 font-bold"> Her projemde kullanıcı deneyimini ön planda tutuyorum.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Yardım Section */}
        <section id="help" className="mb-40 py-20 border-t-2 border-cyan-500/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black p-10 border-2 border-cyan-500/30">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight">
                Yardım ve Destek
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
              <p className="text-gray-400 text-center mb-10 text-lg font-medium">
                Oyunlar veya uygulamalar hakkında sorularınız mı var? Bize ulaşın!
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-gray-900 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <h3 className="font-black text-cyan-400 mb-3 uppercase tracking-wider text-lg">Sık Sorulan Sorular</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    Oyunlar ve uygulamalar hakkında sık sorulan soruların cevaplarını bulabilirsiniz.
                  </p>
                </div>
                <div className="p-6 bg-gray-900 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <h3 className="font-black text-cyan-400 mb-3 uppercase tracking-wider text-lg">Teknik Destek</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    Teknik sorunlarınız için destek ekibimizle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-cyan-500/30 bg-black">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <p className="mb-2 text-gray-400 font-bold">
              <span className="text-cyan-400">ayberktanriverdi.com</span>® tüm hakları saklıdır <strong className="text-white">2024</strong>
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Modern web teknolojileri ile geliştirilmiştir</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
