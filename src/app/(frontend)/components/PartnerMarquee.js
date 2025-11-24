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

const PartnerMarquee = ({ brands }) => {
  return (
    <div className="brands-marquee lg:pt-18 pt-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={40}
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
            slidesPerView: 3, // <== for very small screens (like phones)
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
          <SwiperSlide key={index} className="brand-slide  flex items-center justify-center">
            <a
              href={brand.website}
              target="_blank"
              className="flex cursor-grab items-center justify-center w-full h-full"
            >
              <Image
                src={brand.image.url}
                alt={brand.title}
                width={200}
                height={100}
                className="w-full h-auto object-contain  filter brightness-0"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PartnerMarquee
