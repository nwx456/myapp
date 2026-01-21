'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Hakkimda() {
  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
              Hakkımda
            </h1>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-2xl p-8 md:p-12 shadow-md border border-white/10 backdrop-blur-sm">
            <p className="text-lg text-white/80 leading-relaxed text-center mb-6">
              Ben Ayberk Tanrıverdi 15 yaşındayım ve yazılım geliştiriyorum. Bana anı kalması için ve projelerimin toplu bir halde durması için bu siteyi kurdum, ilginizi çekerse uygulamalarımı ve oyunlarıma göz atmanız beni çok mutlu eder :)
            </p>
            <div className="text-center mt-8">
              <a 
                href="https://www.linkedin.com/in/ayberk-tanrıverdi-036661330/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-[#B91C1C] transition-colors shadow-md"
              >
                LinkedIn Profilim
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
