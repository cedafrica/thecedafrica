'use client'

import { useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FadeInOnScroll from '../components/FadeInOnScroll'

export default function BrandspageTabs({ types, groupedBrands }) {
  const [activeType, setActiveType] = useState(types[0])
  const [modalContent, setModalContent] = useState(null)

  const closeModal = () => setModalContent(null)

  return (
    <div className="container-fluid ">
      <div className="sticky top-18 pt-4 bg-white z-50 border-b border-black">
        <div className="flex flex-wrap gap-4 justify-start  pt-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 text-sm uppercase font-semibold transition-all border-b-2 ${
                activeType === type ? 'border-black text-black' : 'border-transparent text-gray-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className=" gap-4 lg:pt-28 pt-20 px-6">
        {groupedBrands[activeType]?.map((brand) => (
          <FadeInOnScroll key={brand.id} className="inspire-card lg:w-full py-6">
            <div className="container-fluid  lg:flex justify-between ">
              <div className="lg:w-1/3 px-6">
                <a
                  href={brand.website}
                  target="_blank"
                  className=" flex w-full inline-flex bg-transparent cursor-grab text-black py-2 group   transition-all duration-300"
                >
                  <Image
                    src={brand.image.url}
                    alt={brand.title}
                    width={200}
                    height={200}
                    className="w-full image-hover-effect h-auto mb-4 object-cover filter brightness-0"
                  />
                </a>
              </div>

              <div className="lg:w-2/3 px-6 ">
                <p style={{ color: 'black' }} className="text-lg articulatcf">
                  {brand.title}
                </p>
                <p style={{ color: 'black' }} className="text-base articulatcfLight">
                  {brand.briefDescription}
                </p>
                <Link
                  href={brand.website}
                  target="_blank"
                  className="mt-8 text-xs group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-6 py-4 transition-all duration-300 hover:bg-gray-500 hover:text-black hover-btn"
                >
                  <span className="transition-all duration-300">{brand.title} website</span>
                  <Image
                    src="/blackarrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:-rotate-45  group-hover:invert"
                  />
                </Link>
              </div>
            </div>
            <div className="h-[1px] my-8 bg-gradient-to-r from-transparent via-black to-transparent animate-pulse [animation-duration:5s]"></div>
          </FadeInOnScroll>
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
  )
}
