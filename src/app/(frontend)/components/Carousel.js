'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

const Carousel = ({ headers }) => {
  const swiperRef = useRef(null) // Ref to control Swiper instance
  const [scrollOffset, setScrollOffset] = useState(0)

  const pathname = usePathname()
  const isHomePage = pathname === '/'

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
        modules={[EffectFade, Navigation]} // Include the Navigation module
        slidesPerView={1}
        loop={true}
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
            <div className="relative w-full h-screen overflow-hidden">
              {/* Background Media with Parallax */}
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
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

              {/* Overlay & Text Content */}
              <div className="container-fluid absolute inset-1 flex flex-col justify-center z-20">
                <div className="lg:mt-20 lgp:py-2 py-10 flex lg:flex-row md:flex-col flex-col items-center lg:justify-between justify-center">
                  <div
                    className={`lg:text-left text-left lg:w-1/2 w-full ${isHomePage ? 'lg:pr-30' : ''} lg:p-6 p-6`}
                  >
                    <h1 className="text-3xl articulatcf lg:text-5xl text-white font-bold lg:mb-4">
                      {header.title}
                    </h1>
                    <p className="text-lg articulatcfLight py-4 font-extralight leading-6 text-white max-w-2xl md:pr-10">
                      {header.description}
                    </p>

                    {header.buttonTitle && header.buttonLink && (
                      <a
                        href={header.buttonLink}
                        target="_blank"
                        className="mt-8 group inline-flex items-center gap-4 rounded-full border border-white bg-transparent px-6 py-4 text-white transition-all duration-300 hover-btnw"
                      >
                        <span>{header.buttonTitle}</span>
                        <Image
                          src="/whitearrow.svg"
                          alt="arrow"
                          width={16}
                          height={16}
                          className="transition-transform duration-300 group-hover:-rotate-45 group-hover:invert"
                        />
                      </a>
                    )}
                  </div>

                  {!isHomePage && (
                    <div className="lg:text-center lg:block hidden lg:w-1/2 w-full p-4 lg:px-20">
                      {/* Content for homepage only */}
                    </div>
                  )}
                  {isHomePage && (
                    <div className="lg:text-center lg:block hidden lg:w-1/2 w-full p-4 lg:px-20">
                      <div className="flex justify-around py-6 articulatcf">
                        <Link href="/services">
                          <div className="flex flex-col gap-6">
                            <Image src="/CEDHOME.svg" alt="AV Design" width={70} height={70} />
                            <p className="text-sm" style={{ color: 'white' }}>
                              AV DESIGN CONSULTANCY
                            </p>
                          </div>
                        </Link>

                        <Link href="/services">
                          <div className="flex flex-col gap-6">
                            <Image src="/shake.svg" alt="AV Distribution" width={70} height={70} />
                            <p className="text-sm" style={{ color: 'white' }}>
                              AV DISTRIBUTION
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="flex justify-around py-4 articulatcf">
                        <Link href="/experiences">
                          <div className="flex flex-col gap-6">
                            <Image
                              src="/CEDEXP.svg"
                              alt="Experience Center"
                              width={70}
                              height={70}
                            />
                            <p className="text-sm" style={{ color: 'white' }}>
                              EXPERIENCE CENTER
                            </p>
                          </div>
                        </Link>
                        <a href="/retail">
                          <div className="flex flex-col gap-6">
                            <Image src="/retail.png" alt="AV Distribution" width={70} height={70} />
                            <p className="text-sm" style={{ color: 'white' }}>
                              AV RETAIL
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
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
        <div className="container-fluid absolute cursor-grab  bottom-0 right-0 gap-6  z-20  flex  justify-end p-12">
          <a
            className="swiper-prev text-white  rounded-full cursor-grab transition-all duration-300 hover:bg-white h-[60px] "
            onClick={() => swiperRef.current.swiper.slidePrev()} // Go to previous slide
          >
            <Image
              src="/prev.svg"
              alt="Previous Slide"
              width={60}
              height={60}
              className="transition-all duration-300 hover:invert"
            />
          </a>
          <a
            className="swiper-next text-white rounded-full cursor-grab transition-all duration-300 hover:bg-white h-[60px] "
            onClick={() => swiperRef.current.swiper.slideNext()} // Go to next slide
          >
            <Image
              src="/nextB.svg"
              alt="Previous Slide"
              width={60}
              height={60}
              className="transition-all duration-300 hover:invert"
            />
          </a>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel
