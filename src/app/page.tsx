'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const MemeCard = dynamic(() => import('@/components/MemeCard'), { ssr: false });
interface Meme {
  id: number;
  imageSrc: string;
  title: string;
  alt: string;
}
const defaultMemes = [
  {
    id: 1,
    imageSrc: 'https://picsum.photos/300/300?random=1',
    title: 'Distracted Boyfriend',
    alt: 'Distracted Boyfriend meme',
  },
  {
    id: 2,
    imageSrc: 'https://picsum.photos/300/300?random=2',
    title: 'This is Fine',
    alt: 'This is Fine meme',
  },
  {
    id: 3,
    imageSrc: 'https://picsum.photos/300/300?random=3',
    title: 'Expanding Brain',
    alt: 'Expanding Brain meme',
  },
  {
    id: 4,
    imageSrc: 'https://picsum.photos/300/300?random=4',
    title: 'Developer Life',
    alt: 'Developer working late meme',
  },
];

export default function Home() {
  const [memes, setMemes] = useState<Meme[]>(() => {
    if (typeof window !== 'undefined') {
      const storedMemes = localStorage.getItem('memes');
      return storedMemes ? JSON.parse(storedMemes) : defaultMemes;
    }
    return defaultMemes;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Meme Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {memes.map((meme) => (
            <MemeCard
              key={meme.id}
              imageSrc={meme.imageSrc}
              title={meme.title}
              alt={meme.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
