'use client';

import { useState } from 'react';

interface Photo {
  name: string;
  url: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-white/60 text-lg">Bu koleksiyonda henüz fotoğraf yok.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.02] group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img 
                src={photo.url} 
                alt={photo.name} 
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos[selectedPhoto].url} 
              alt={photos[selectedPhoto].name} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-[#DC2626] transition-colors text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-10"
              aria-label="Kapat"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
