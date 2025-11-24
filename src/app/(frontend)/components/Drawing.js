'use client'

import { useState } from 'react'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'

export default function Drawing({ types, groupedDrawing }) {
  const [activeType, setActiveType] = useState(types[0])
  const [modalContent, setModalContent] = useState(null)
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 })
  const [isZoomed, setIsZoomed] = useState(false)

  const openModal = (inspire) => setModalContent(inspire)
  const closeModal = () => setModalContent(null)

  // Helper function to check if file is a PDF
  const isPDF = (file) => {
    return file?.mimeType === 'application/pdf' || file?.filename?.toLowerCase().endsWith('.pdf')
  }

  // Component to render file preview
  const FilePreview = ({ cover, file, title, className = '' }) => {
    // Helper to check if file is a PDF
    const isPDF = (file) =>
      file?.mimeType === 'application/pdf' || file?.filename?.toLowerCase().endsWith('.pdf')

    return (
      <div
        className={`${className} bg-gray-100 overflow-hidden cursor-pointer mb-0`}
        onClick={() => file && window.open(file.url, '_blank')}
      >
        <Image
          src={cover?.url}
          alt={title}
          width={1000}
          height={800}
          className="object-cover image-hover-effect w-full h-64"
        />
      </div>
    )
  }

  return (
    <section data-light>
      <div className="bg-gray-100 py-10">
        <div className="container-fluid">
          <div className="sticky top-18 pt-4 bg-gray-100  z-50 border-b border-black">
            <div className="flex flex-wrap gap-4 justify-start pt-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 text-sm uppercase font-semibold transition-all border-b-2 ${
                    activeType === type
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-12 px-6 space-y-16">
            {Object.entries(
              groupedDrawing[activeType]?.reduce((acc, draw) => {
                const service = draw.drawingService || 'Other'
                acc[service] = acc[service] || []
                acc[service].push(draw)
                return acc
              }, {}),
            ).map(([service, drawings]) => (
              <div key={service}>
                <FadeInOnScroll>
                  <h1 className="text-center articulatcf uppercase mb-6" style={{ color: 'black' }}>
                    {service}
                  </h1>
                </FadeInOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {drawings.map((draw) => (
                    <FadeInOnScroll key={draw.id} className="inspire-card lg:w-full py-6">
                      <FilePreview
                        cover={draw.cover}
                        file={draw.file}
                        title={draw.title}
                        className="w-full h-auto mb-4"
                      />
                      <div className="w-full lg:px-6 px-4 border-l border-black">
                        <a
                          onClick={() => {
                            if (isPDF(draw.file)) {
                              window.open(draw.file.url, '_blank')
                            } else {
                              openModal(draw)
                            }
                          }}
                          className="w-full inline-flex bg-transparent cursor-pointer text-black pt-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                        >
                          <h2 className="text-sm leading-none font-bold">{draw.title}</h2>
                          <Image
                            src="/blackarrow.svg"
                            alt="arrow"
                            width={16}
                            height={16}
                            className="transform transition-transform duration-300 group-hover:-rotate-45"
                          />
                        </a>
                        <p className="text-xs py-2 text-black articulatcfLight">
                          {draw.briefDescription}
                        </p>
                      </div>
                    </FadeInOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Modal Section */}
          {modalContent && (
            <div
              className="fixed inset-0 bg-white bg-opacity-80 z-[1000] flex items-center justify-center"
              onClick={closeModal}
            >
              <div
                className="relative w-full h-full flex items-center justify-center group"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="w-full h-full flex items-center justify-center overflow-hidden group"
                  onMouseMove={
                    !isPDF(modalContent.image)
                      ? (e) => {
                          const rect = e.currentTarget.getBoundingClientRect()
                          const x = ((e.clientX - rect.left) / rect.width) * 100
                          const y = ((e.clientY - rect.top) / rect.height) * 100
                          setZoomOrigin({ x, y })
                        }
                      : undefined
                  }
                  onMouseEnter={!isPDF(modalContent.image) ? () => setIsZoomed(true) : undefined}
                  onMouseLeave={!isPDF(modalContent.image) ? () => setIsZoomed(false) : undefined}
                >
                  {isPDF(modalContent.image) ? (
                    <iframe
                      src={modalContent.image.url}
                      title={modalContent.title}
                      className="w-full h-full border-0"
                      style={{ minHeight: '80vh' }}
                    />
                  ) : (
                    <Image
                      src={modalContent.image.url}
                      alt={modalContent.title}
                      width={1920}
                      height={1080}
                      className="max-w-full max-h-full transition-transform duration-300 cursor-zoom-in object-contain"
                      style={{
                        transform: isZoomed ? `scale(2)` : 'scale(1)',
                        transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                      }}
                    />
                  )}
                </div>
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-10 text-black text-4xl z-10 bg-white bg-opacity-60 rounded-full px-3 py-1"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
