'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import 'swiper/swiper-bundle.css'
import Image from 'next/legacy/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import FadeInOnScroll from '../components/FadeInOnScroll'
import './fireflies.css'

const Services = ({ services }) => {
  return (
    <div className="relative overflow-hidden py-20 w-full text-black">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-fixed bg-center bg-cover z-0 grayscale">
        <div className="absolute inset-0 bg-gray-100 "></div>
      </div>

      {/* Foreground Content */}
      <div className="container-fluid relative z-20">
        <FadeInOnScroll>
          <h1 className="text-center articulatcfLight pb-6">Our Services</h1>
        </FadeInOnScroll>

        <div className="lg:flex justify-between px-6 gap-8">
          {services.map((service) => (
            <FadeInOnScroll key={service.id} className="service-card lg:w-1/2 mt-16">
              <a href={`/services/${service.id}`}>
                <Image
                  src={service.coverImage.url}
                  alt={service.title}
                  width={1000}
                  height={600}
                  className="w-full image-hover-effect h-auto mb-4 object-cover"
                />
              </a>

              <div className="w-full px-6 border-l border-black">
                <Link
                  href={`/services/${service.id}`}
                  className="w-full inline-flex bg-transparent text-black py-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                >
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <Image
                    src="/blackarrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>

                <p style={{ color: 'grey' }} className="text-base articulatcfLight">
                  {service.briefDescription}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
