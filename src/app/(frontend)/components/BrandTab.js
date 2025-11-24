'use client'

import { useState } from 'react'
import Image from 'next/legacy/image'

export default function BrandTabs({ types, groupedBrands }) {
  const [activeType, setActiveType] = useState(types[0])
  const [modalContent, setModalContent] = useState(null)

  const closeModal = () => setModalContent(null)

  return (
    <section className="bg-white">
      <div className="py-10">
        <div className="container-fluid ">
          <div className="sticky top-18 pt-4 bg-white z-50 border-b border-black">
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

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 pt-12 px-2">
            {groupedBrands[activeType]?.map((brand) => (
              <div key={brand.id} className="service-card lg:w-full py-4 px-4">
                <a
                  href={brand.website}
                  target="_blank"
                  className=" flex w-full inline-flex bg-transparent cursor-pointer text-white py-2 group   transition-all duration-300"
                >
                  <Image
                    src={brand.image.url}
                    alt={brand.title}
                    width={1000}
                    height={800}
                    className="w-full h-auto mb-4 object-cover filter brightness-0"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Modal Section */}
          {modalContent && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-1000 flex items-center justify-center"
              onClick={closeModal}
            >
              <div
                className="relative p-4 max-w-3xl w-full bg-black rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={modalContent.image.url}
                  alt={modalContent.title}
                  width={1000}
                  height={700}
                  className="w-full h-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-bold mb-4">{modalContent.title}</h2>
                <p className="text-sm">{modalContent.details}</p>

                {/* Close Button */}
                <button onClick={closeModal} className="absolute top-2 right-4 text-white text-3xl">
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
