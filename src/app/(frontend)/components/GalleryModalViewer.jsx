'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import { useState, useEffect } from 'react'
import Image from 'next/legacy/image'

export default function GalleryModalViewer({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  const openModal = (index) => setCurrentIndex(index)
  const closeModal = () => setCurrentIndex(null)

  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === 'ArrowRight') showNext()
        if (e.key === 'ArrowLeft') showPrev()
        if (e.key === 'Escape') closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const modalImage = currentIndex !== null ? images[currentIndex] : null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
        {images.map((item, index) => (
          <div key={index} className="relative p-6 cursor-pointer" onClick={() => openModal(index)}>
            <Image
              src={item.image.url}
              alt={item.caption || `Image ${index + 1}`}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative p-4 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-50 z-100 cursor-pointer right-6 text-white text-3xl font-bold"
            >
              ✕
            </button>

            <Image
              src={modalImage.image.url}
              alt={modalImage.caption || 'Gallery image'}
              width={1200}
              height={800}
              className="rounded-lg w-full h-auto object-contain"
            />

            {/* Nav buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-3 py-1 bg-opacity-30 rounded-full hover:bg-opacity-50"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-4  cursor-pointer top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-3 py-1  bg-opacity-30 rounded-full hover:bg-opacity-50"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  )
}
