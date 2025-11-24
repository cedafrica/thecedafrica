'use client'

import { useState } from 'react'
import Image from 'next/legacy/image'
import FadeInOnScroll from './FadeInOnScroll'
import Link from 'next/link'

export default function PartnerTabs({ types, groupedPartners }) {
  const [activeType, setActiveType] = useState(types[0])

  return (
    <div className="bg-gray-100">
      <div className="container-fluid py-10">
        <div className="sticky top-18 pt-4 bg-gray-100 z-50 border-b border-black">
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

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 pt-12 px-6">
          {groupedPartners[activeType]?.map((partner) => (
            <FadeInOnScroll key={partner.id} className="service-card lg:w-full lg:py-6 py-2 px-4">
              <a href={partner.website} target="_blank">
                <Image
                  src={partner.image.url}
                  alt={partner.title}
                  width={1000}
                  height={900}
                  className="w-full h-auto mb-4 object-contain  filter brightness-0"
                />
              </a>

              {/* <div className="w-full px-6 border-l border-white">
                <Link
                  href={partner.website}
                  target="_blank"
                  className="w-full inline-flex bg-transparent text-white py-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                >
                <h2 className="text-sm articulatcfLight">{partner.title}</h2> 
                </Link>
              </div>*/}
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}
