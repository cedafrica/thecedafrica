'use client'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css' // Import Swiper styles
import Image from 'next/legacy/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'

const ExperienceCarousel = ({ experiences }) => {
  return (
    <div className="container-fluid rounded-full relative lg:pb-28 pb-6">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.id} className="relative w-full">
            <div className="relative w-full">
              {/* Small screens: height 700px */}
              <div className="w-full relative lg:hidden">
                <Image
                  src={experience.coverImage.url}
                  alt={experience.title}
                  layout="responsive" // Changed layout to responsive for full width
                  width={1000} // Set a high width for responsive layout
                  height={700} // Maintain aspect ratio
                  objectFit="cover"
                  priority
                  className="z-0 expImage object-cover rounded-3xl"
                />
              </div>

              {/* Large screens: height 500px */}
              <div className="w-full relative hidden lg:block">
                <Image
                  src={experience.coverImage.url}
                  alt={experience.title}
                  layout="responsive" // Changed layout to responsive for full width
                  width={1000} // Set a high width for responsive layout
                  height={500} // Maintain aspect ratio
                  objectFit="cover"
                  priority
                  className="z-0 expImage object-cover rounded-3xl"
                />
              </div>

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-10 rounded-3xl"></div>

              {/* Overlay & Text Content */}
              <div className="container-fluid absolute cursor-pointer  top-0 left-0  z-20  flex flex-col justify-end lg:p-12 p-6">
                <div className="flex items-center gap-4">
                  <Image src="/CEDEXP.svg" alt="Phone icon" width={70} height={70} />
                  <h3 className="articulatcf lg:text-4xl text-base text-white font-bold mb-2 capitalize">
                    {experience.title}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Next/Prev Buttons */}

        <div className="container-fluid absolute  cursor-pointer  bottom-0 left-0  z-20  flex lg:flex-col justify-end lg:p-6 px-6 py-0">
          <a className="swiper-prev text-white  rounded-full cursor-grab transition-all duration-300 hover:bg-white h-[60px] m-2">
            <Image
              src="/prev.svg"
              alt="Previous Slide"
              width={60}
              height={60}
              className="transition-all duration-300 hover:invert"
            />
          </a>
          <a className="swiper-next text-white rounded-full cursor-grab transition-all duration-300 hover:bg-white h-[60px] m-2">
            <Image
              src="/nextB.svg"
              alt="Previous Slide"
              width={60}
              height={60}
              className="transition-all duration-300 hover:invert"
            />
          </a>
        </div>
        <div className="container-fluid lg:absolute relative lg:flex hidden cursor-pointer bg-white rounded-tl-4xl bottom-0 right-0  z-20  flex flex-col justify-center  pt-6 pb-4 px-6">
          <Link
            href="/experiences"
            className=" group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300 hover:bg-gray-500 hover:text-black hover-btn"
          >
            <span>Discover Our Experience Center</span>
            <Image
              src="/blackarrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:-rotate-45  group-hover:invert"
            />
          </Link>
        </div>
      </Swiper>
      <div className="container-fluid lg:absolute relative lg:hidden cursor-pointer bg-white rounded-tl-4xl bottom-0 right-0  z-20  flex flex-col justify-center  pt-6 pb-4 px-2">
        <Link
          href="/experiences"
          className="group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300  hover-btn"
        >
          <span>Discover Our Experience Center</span>
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
  )
}

export default ExperienceCarousel
