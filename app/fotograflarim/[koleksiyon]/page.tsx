import { readdir } from 'fs/promises';
import { join } from 'path';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhotoGallery from './PhotoGallery';

async function getPhotos(koleksiyonName: string) {
  try {
    const koleksiyonlarPath = join(process.cwd(), 'public', 'Koleksiyonlar(Site)');
    const collectionPath = join(koleksiyonlarPath, koleksiyonName);
    const files = await readdir(collectionPath);
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.JPG', '.JPEG', '.PNG'];
    const photos = files
      .filter(file => {
        // Nokta ile başlayan dosyaları (ör: .JPG) filtrele
        if (file.startsWith('.')) return false;
        const ext = file.substring(file.lastIndexOf('.'));
        return imageExtensions.includes(ext);
      })
      .map(file => ({
        name: file,
        url: `/Koleksiyonlar(Site)/${koleksiyonName}/${file}`
      }));
    
    return photos;
  } catch (error) {
    return null;
  }
}

export default async function KoleksiyonPage({ params }: { params: Promise<{ koleksiyon: string }> }) {
  const { koleksiyon } = await params;
  const koleksiyonName = decodeURIComponent(koleksiyon);
  const photos = await getPhotos(koleksiyonName);
  
  if (!photos) {
    notFound();
  }
  
  return (
    <div className="min-h-screen relative z-0 bg-[#0A0A0A]">
      <Header />
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="mb-8">
          <Link 
            href="/fotograflarim" 
            className="text-white/70 hover:text-[#DC2626] transition-colors inline-flex items-center gap-2 mb-4"
          >
            ← Fotoğraflarım
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-caveat)', fontWeight: 700 }}>
            {koleksiyonName}
          </h1>
          <p className="text-lg text-white/70">
            {photos.length} fotoğraf
          </p>
        </div>
        
        <PhotoGallery photos={photos} />
      </main>
      <Footer />
    </div>
  );
}
