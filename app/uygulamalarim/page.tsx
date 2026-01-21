'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Uygulamalarim() {
  const apps = [
    {
      name: 'Zeka Küpü Süre Tutucu',
      description: 'Zeka küpü çözenler için içinde bir sürü özellik barındıran arayüzü kolay bir süre tutma uygulaması!',
      link: 'https://drive.google.com/file/d/1-m3hpVt1Wj5RL-1oo34wiNnFt9jlPef-/view',
      icon: '⏱️',
      image: '/images/rubikküpsüretutucu.png',
      color: 'bg-[#c97d60]'
    },
    {
      name: 'Kütüphane Otomasyonu',
      description: 'Kütüphane otomasyonu etkili ve işinize yarayacak bir sürü özellik bulunur ve kullanması oldukça kolaydır!',
      link: 'https://drive.google.com/file/d/1sKloSdAJAmEIer_Uf99byjAITXbreC7o/view',
      icon: '📚',
      image: '/images/kütüphaneotamasyonu.png',
      color: 'bg-[#e8a87c]'
    },
    {
      name: 'Kim Milyoner Olmak İster?',
      description: 'Çeşitli jokerleri kullanarak son soruya ulaşıp milyoner olabilir misiniz?',
      link: 'https://drive.google.com/file/d/1Y1fzCRBTJLjjMUEojSThKtxhGaUPyFL0/view',
      icon: '💰',
      image: '/images/kimmilyonerolmakister.png',
      color: 'bg-[#4a5d6b]'
    }
  ];

  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
            Uygulamalarım
          </h1>
          <p className="text-lg text-white/70">
            Günlük hayatınızı kolaylaştıran uygulamalar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="bg-[#2A2A2A] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {app.image ? (
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white/20">
                  <img src={app.image} alt={app.name} className="w-full h-full object-cover object-center" />
                </div>
              ) : (
                <div className="text-5xl mb-4 text-center">{app.icon}</div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 text-center" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
                {app.name}
              </h3>
              <p className="text-white text-sm mb-4 leading-relaxed text-center">{app.description}</p>
              <a href={app.link} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-2 bg-[#DC2626] text-white font-semibold text-sm rounded-full hover:bg-[#B91C1C] transition-colors text-center">
                İndir
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
