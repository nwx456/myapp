import { readdir } from 'fs/promises';
import { join } from 'path';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

function photoUrl(collectionName: string, fileName: string) {
  const base = '/Koleksiyonlar(Site)';
  return `${base}/${encodeURIComponent(collectionName)}/${encodeURIComponent(fileName)}`;
}

async function getCollections() {
  try {
    const koleksiyonlarPath = join(process.cwd(), 'public', 'Koleksiyonlar(Site)');
    const collections = await readdir(koleksiyonlarPath, { withFileTypes: true });
    
    const collectionList = await Promise.all(
      collections
        .filter(item => item.isDirectory())
        .map(async (item) => {
          const collectionPath = join(koleksiyonlarPath, item.name);
          const files = await readdir(collectionPath);
          const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.JPG', '.JPEG', '.PNG'];
          const photoCount = files.filter(file => {
            // Nokta ile başlayan dosyaları (ör: .JPG) filtrele
            if (file.startsWith('.')) return false;
            const ext = file.substring(file.lastIndexOf('.'));
            return imageExtensions.includes(ext);
          }).length;
          
          // İlk fotoğrafı kapak olarak al
          const firstPhoto = files.find(file => {
            // Nokta ile başlayan dosyaları (ör: .JPG) filtrele
            if (file.startsWith('.')) return false;
            const ext = file.substring(file.lastIndexOf('.'));
            return imageExtensions.includes(ext);
          });
          
          return {
            name: item.name,
            slug: encodeURIComponent(item.name),
            photoCount,
            coverImage: firstPhoto ? photoUrl(item.name, firstPhoto) : null
          };
        })
    );
    
    return collectionList;
  } catch (error) {
    return [];
  }
}

export default async function Fotograflarim() {
  const collections = await getCollections();

  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
            Fotoğraflarım
          </h1>
          <p className="text-lg text-white/70">
            Çektiğim fotoğraflar ve anılarım
          </p>
        </div>

        {collections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link 
                key={collection.name} 
                href={`/fotograflarim/${collection.slug}`}
                className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.02] group"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  {collection.coverImage ? (
                    <Image 
                      src={collection.coverImage} 
                      alt={collection.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                      <span className="text-white/40 text-4xl">📷</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
                    {collection.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {collection.photoCount} fotoğraf
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">Henüz koleksiyon eklenmemiş.</p>
            <p className="text-white/40 text-sm mt-2">public/Koleksiyonlar/ klasörüne klasörler ekleyin</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
