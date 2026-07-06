'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  src: string
  alt: string
}

export default function ImageSlider({ images }: { images: Slide[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="aspect-video relative overflow-hidden bg-[#0d0d0d] border border-neutral-800/60 group">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          {/* Slide counter */}
          <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-600 bg-[#0a0a0a]/80 px-2 py-1 border border-neutral-800">
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0a0a0a]/80 border border-neutral-700 text-neutral-400 text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:border-green-500 hover:text-green-500"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0a0a0a]/80 border border-neutral-700 text-neutral-400 text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:border-green-500 hover:text-green-500"
            aria-label="Next"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                  i === current ? 'bg-green-500' : 'bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
