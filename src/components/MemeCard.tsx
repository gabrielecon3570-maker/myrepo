'use client';

import Image from 'next/image';

interface MemeCardProps {
  imageSrc: string;
  title: string;
  alt: string;
}

export default function MemeCard({ imageSrc, title, alt }: MemeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
        loading="eager"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </div>
  );
}