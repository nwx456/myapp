'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Oyunlarim() {
  const games = [
    {
      id: 'marble-3d',
      name: 'Marble 3D',
      description: 'Fizik bilgilerinizi tazeliyecek ve size beyin egzersizi yaptıracak harika bir 3D oyun. Oyunun içinde biri özel olmak üzere 6 top bulunmakta, ayrıca hepsi birbirinden eğlenceli ve sinir bozucu olan 25 bölüm mevcut. Siz bu oyunu bitirebilir misiniz? Öğrenmenin tek yolu oynamak!!!',
      playLink: 'https://play.unity.com/en/games/71fb7e8e-77a4-4e82-b5aa-022eca79aabb/marble3d',
      downloadLink: 'https://play.unity.com/en/games/71fb7e8e-77a4-4e82-b5aa-022eca79aabb/marble3d',
      note: 'NOT: Eğer 25. bölüme kadar gelip sağ altta bulunan mesaj bölümünden bana ekran görüntüsü atarsanız bu beni çok mutlu eder, oyun hakkında görüşlerinizi merakla bekliyorum.',
      hasPlayButton: true,
      color: 'bg-[#c99d6a]',
      image: '/images/marble3d.png'
    },
    {
      id: 'flappy-bird-3d',
      name: 'Flappy Bird 3D',
      description: 'El-göz koordinasyonunuzun sınırlarını zorlayacak, aynı zamanda size eski günlerinizi anımsatacak son derece zevkli bir oyun.',
      playLink: 'https://play.unity.com/en/games/9dbeace2-e356-4125-99ae-852ed7b36ef2/flappybird3d',
      downloadLink: 'https://drive.google.com/file/d/1haMRq6F0lv_vCs8RvUt1LD8ko56s1bqn/view',
      hasPlayButton: true,
      color: 'bg-[#8b9a7a]',
      image: '/images/flappybird3d.png'
    },
    {
      id: 'balance-tower-3d',
      name: 'Renkli Küpler',
      description: 'Renkli küplere kafasını takmış bir çocuğun odasında yine renkli küplerle kule yaparak havalandırmadan kaçmaya çalışan bir karakter.',
      playLink: 'https://play.unity.com/en/games/00fae635-3b90-4d6f-ac81-4f82cc6c298a/balancetower',
      downloadLink: 'https://drive.google.com/file/d/1kRFEj-topMsVyMMaInysEdXZilCkWtsP/view',
      hasPlayButton: true,
      color: 'bg-[#e8a87c]',
      image: '/images/BalanceTower3D.png'
    },
    {
      id: 'car-3d',
      name: 'Car 3D',
      description: 'Küçük bir haritada arabanızı dilediğiniz gibi sürüp drift ve slalom testi yapabilirsiniz. Ayrıca yaptığım ilk 3D oyun!',
      link: 'https://drive.google.com/file/d/1-6HS6-lnETUSBv7wIF5HcEgQXCvx8Ela/view?usp=drive_link',
      hasPlayButton: false,
      color: 'bg-[#c99d6a]',
      image: '/images/cargame3d.png'
    },
    {
      id: 'penalti',
      name: 'Penaltı Oyunu',
      description: 'Penaltı atarak yeni teklifler ve geliştirmeler açabileceğiniz çevrimdışı bir oyun! Kalecinin zayıf noktalarını bulun ve gol atın.',
      link: 'https://drive.google.com/file/d/1O195lwElO4AoaPvP6VfJKZu4taVWFLBo/view',
      hasPlayButton: false,
      color: 'bg-[#8b9a7a]',
      image: '/images/futboloyunu.png'
    },
    {
      id: 'dedektif',
      name: 'Dedektif Oyunu',
      description: 'Şüphelileri sorgulayarak, dosyalarını inceleyerek ve çeşitli ipuçları toplayarak katili bulmaya çalıştığınız bir oyun! Her detay önemli, dikkatli olun.',
      link: 'https://drive.google.com/file/d/1CYAmgq_o_yPDICOmSzoh_ro2M__LoFxl/view',
      hasPlayButton: false,
      color: 'bg-[#e8a87c]',
      image: '/images/dedektifoyunu.png'
    },
    {
      id: 'cargame',
      name: 'Car Game',
      description: 'Arabalardan kaçarak para kazandığımız bu oyunda 12 farklı araba mevcut! Hızla ilerleyin, engellerden kaçının ve mümkün olduğunca uzun süre hayatta kalın.',
      link: 'https://drive.google.com/file/d/1O8xIcqvZC1_Ghr2U48eEADVPT4_grHkc/view',
      hasPlayButton: false,
      color: 'bg-[#8b6f47]',
      image: '/images/arabaoyunu.png'
    },
    {
      id: 'milyoner',
      name: 'Kim Milyoner Olmak İster?',
      description: 'Çeşitli jokerleri kullanarak son soruya ulaşıp milyoner olabilir misiniz? Bilginizi test edin ve büyük ödülü kazanın!',
      link: 'https://drive.google.com/file/d/1Y1fzCRBTJLjjMUEojSThKtxhGaUPyFL0/view',
      hasPlayButton: false,
      color: 'bg-[#4a5d6b]',
      image: '/images/kimmilyonerolmakister.png'
    }
  ];

  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
            Oyunlarım
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-[#2A2A2A] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {game.image && (
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white/20">
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover object-center" />
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
                {game.name}
              </h3>
              <p className="text-white text-sm mb-4 leading-relaxed">{game.description}</p>
              {game.note && (
                <p className="text-xs text-white/60 mb-4 italic border-l-2 border-[#DC2626] pl-3 opacity-75">
                  {game.note}
                </p>
              )}
              <div className="flex gap-2">
                {game.hasPlayButton ? (
                  <>
                    <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-[#DC2626] text-white font-semibold text-sm rounded-full hover:bg-[#B91C1C] transition-colors text-center">
                      Oyna
                    </a>
                    <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-[#DC2626] text-white font-semibold text-sm rounded-full hover:bg-[#B91C1C] transition-colors text-center">
                      İndir
                    </a>
                  </>
                ) : (
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-2 bg-[#DC2626] text-white font-semibold text-sm rounded-full hover:bg-[#B91C1C] transition-colors text-center">
                    İndir
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
