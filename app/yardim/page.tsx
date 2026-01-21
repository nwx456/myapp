'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Yardim() {
  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              Yardım ve Destek
            </h1>
          </div>

          <div className="space-y-6">
            <div className="bg-[#2A2A2A] rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
                İletişim
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Sayfamdan indirdiğiniz herhangi bir uygulamada sıkıntı mı yaşıyorsunuz? LinkedIn'den bana ulaşabilirsiniz (:
              </p>
              <a href="https://www.linkedin.com/in/ayberk-tanrıverdi-036661330/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors">
                LinkedIn Profilim
              </a>
            </div>

            <div className="bg-[#2A2A2A] rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
                Nasıl İndirilir?
              </h2>
              
              <div className="space-y-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 600 }}>
                    İlk Adım
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    "İndir" butonuna tıkladıktan sonra karşınıza gelen ekranda "İndir" seçeneğine tıklayın.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 600 }}>
                    İkinci Adım
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Setup dosyasını çalıştırdıktan sonra muhtemelen bu ekranla karşılaşacaksınız. Bir şirkete bağlı olmadığımız için yayıncı belirtemiyoruz, bu yüzden Windows virüs olarak algılıyor. Burada "Yine de indir" kısmına tıklayın.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 600 }}>
                    Üçüncü Adım
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Setup dosyası indikten sonra açılan pencerede "Ek bilgi" kısmına tıklayın.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 600 }}>
                    Dördüncü Adım
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Açılan pencerede "Yine de çalıştır" butonuna tıklayın.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 600 }}>
                    Son Adım
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Açılan pencerede sonuna kadar "Next" butonuna tıklayın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
