'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'

export default function InspirationsTabs({ types, groupedInspirations }) {
  const [activeType, setActiveType] = useState(types[0])
  const [modalContent, setModalContent] = useState(null)

  const openModal = (inspire) => setModalContent(inspire)
  const closeModal = () => setModalContent(null)

  return (
    <div className="container-fluid py-20">
      <div className="sticky top-18 pt-4 bg-white z-50 border-b-1 border-black">
        <div className="flex flex-wrap gap-4 justify-start ">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-6 pt-2 py-6 cursor-pointer text-sm uppercase font-semibold transition-all border-b-2 ${
                activeType === type ? 'border-black text-black' : 'border-transparent text-gray-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 px-6">
        {groupedInspirations[activeType]?.map((inspire) => (
          <div key={inspire.id} className="inspire-card w-full py-6">
            <Image
              src={inspire.coverImage.url}
              alt={inspire.title}
              width={1000}
              height={700}
              className="w-full h-auto mb-4 object-cover image-hover-effect"
            />

            <div className="w-full lg:px-12 px-6 border-l border-black">
              <Link
                href={`/projects/${inspire.slug}`}
                className="w-full inline-flex bg-transparent text-black pt-4 pb-2 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
              >
                <h2 style={{ color: 'black' }} className="text-sm text-left articulatcf lg:w-2/3">
                  {inspire.title}
                </h2>
                <Image
                  src="/blackarrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transform transition-transform duration-300 group-hover:-rotate-45"
                />
              </Link>
              <p style={{ color: 'black' }} className="text-sm lowercase articulatcfLight">
                {inspire.briefDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-1000 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative p-4 max-w-3xl w-full bg-white rounded-lg overflow-y-auto"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalContent.coverImage.url}
              alt={modalContent.title}
              width={1000}
              height={700}
              className="w-full h-auto mb-4 object-cover"
            />
            <h2 style={{ color: 'black' }} className="text-lg font-bold mb-4">
              {modalContent.title}
            </h2>
            <p style={{ color: 'black' }} className="text-sm">
              {modalContent.details}
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-black text-3xl bg-white px-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
