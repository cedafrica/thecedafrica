'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import React from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const BrandsMarquee = ({ brands }) => {
  return (
    <div className="brands-marquee">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={6}
        speed={3000} // how fast the slides move
        autoplay={{
          delay: 0, // ⛔️ no delay between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={false}
        allowTouchMove={false} // ❌ prevents manual swiping
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2, // <== for very small screens (like phones)
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {/* repeat the brands twice for seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <SwiperSlide key={index} className="brand-slide">
            <a href={brand.website} target="_blank">
              <Image
                src={brand.image.url}
                alt={brand.title}
                width={350}
                height={200}
                className="w-full h-auto object-contain filter brightness-0"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BrandsMarquee
