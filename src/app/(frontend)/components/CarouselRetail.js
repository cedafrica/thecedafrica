'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const CarouselRetail = ({ headers }) => {
  const swiperRef = useRef(null) // Ref to control Swiper instance
  const [scrollOffset, setScrollOffset] = useState(0)

  // Parallax effect with throttling for better performance
  useEffect(() => {
    let ticking = false
    let scrollOffset = 0

    const handleScroll = () => {
      scrollOffset = window.pageYOffset
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollOffset(scrollOffset)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef} // Attach ref to the Swiper component
        modules={[Autoplay, EffectFade, Navigation]} // Include the Navigation module
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }} // Link buttons to navigation
        className="w-full h-full"
      >
        {headers.map((header) => (
          <SwiperSlide key={header.id}>
            <div className="relative w-full h-screen">
              {/* Background Media */}

              {header.media?.url?.endsWith('.mp4') ? (
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: `translateY(${scrollOffset * 0.3}px)`,
                    willChange: 'transform',
                  }}
                >
                  <video
                    src={header.media.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/avimage.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: `translateY(${scrollOffset * 0.3}px)`,
                    willChange: 'transform',
                  }}
                >
                  <Image
                    src={header.media.url}
                    alt={header.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    placeholder="blur"
                    blurDataURL="/blurIMG.jpg"
                  />
                </div>
              )}

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

              {/* Overlay & Text Content */}
              <div className="container-fluid absolute inset-1 flex flex-col justify-center z-20">
                <div className="lg:mt-20 lgp:py-2 py-10 flex lg:flex-row md:flex-col flex-col items-center lg:justify-between justify-center">
                  <div className=" lg:text-left text-left w-full  lg:p-6 p-6 ">
                    <h1 className="text-3xl articulatcf lg:text-5xl text-white font-bold lg:mb-4">
                      {header.title}
                    </h1>
                    <p className="text-base articulatcfLight py-4  leading-6 text-white max-w-3xl ">
                      {header.description}
                    </p>
                  </div>
                </div>

                {/* Logos */}
                <div className="gap-4 flex  justify-start px-6 z-20">
                  <Image src="/avixa.svg" alt="Avixa Logo" width={80} height={53} />
                  <Image src="/cedia.svg" alt="Cedia Logo" width={90} height={38} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Next/Prev Buttons */}
        <div className="container-fluid absolute cursor-pointer  bottom-0 right-0   z-20  flex  justify-end p-6">
          <button
            className="swiper-prev text-white p-2 rounded-full cursor-pointer"
            onClick={() => swiperRef.current.swiper.slidePrev()} // Go to previous slide
          >
            <Image src="/prev.svg" alt="Previous Slide" width={50} height={50} />
          </button>
          <button
            className="swiper-next  text-white p-2 rounded-full cursor-pointer"
            onClick={() => swiperRef.current.swiper.slideNext()} // Go to next slide
          >
            <Image src="/nextB.svg" alt="Previous Slide" width={50} height={50} />
          </button>
        </div>
      </Swiper>
    </div>
  )
}

export default CarouselRetail
