export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'
import {
  Package,
  ShieldCheck,
  Headphones,
  Users,
  Building,
  GraduationCap
} from "lucide-react";


const Distribution = async () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
  className="relative min-h-screen w-full flex items-center justify-center bg-fixed bg-cover bg-center"
  style={{ backgroundImage: "url('/dist.jpeg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content wrapper */}
  <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 w-full h-full max-w-4xl">
    <FadeInOnScroll>
      <h1 className="text-3xl md:text-4xl lg:text-4xl articulatcf font-black mb-4 text-white">
        Premium AV Distribution for Africa&apos;s Finest Spaces
      </h1>
      <p className="text-base md:text-lg lg:text-l articulatcfLight mb-8 text-white">
        We supply world-leading audio, video, and lighting solutions, and empower integrators
        and contractors to deliver unforgettable experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full border border-white text-white px-6 py-3 transition-all duration-300 hover:bg-transparent hover:text-white"
        >
          <span>Become a Dealer</span>
          <Image
            src="/whitearrow.svg"
            alt="arrow"
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </Link>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full border border-white bg-black text-white px-6 py-3 transition-all duration-300 hover:bg-transparent hover:text-white"
        >
          <span>Request a Consultation</span>
          <Image
            src="/whitearrow.svg"
            alt="arrow"
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </Link>
      </div>
    </FadeInOnScroll>
  </div>
</section>

      {/* Why CED Africa */}
      <section data-light className="bg-white py-20">
        <div className="container-fluid px-6">
          <FadeInOnScroll className="text-center max-w-4xl mx-auto">
            <h2 className="text-s lg:text-s articulatcf font-black text-black mb-6">
              Why CED Africa
            </h2>
            <p className="text-5xl articulatcfLight text-black mb-6">
              The Best Brands. The Best Support. The Best Projects.
            </p>
            <p className="text-lg articulatcfLight text-gray-700">
              We distribute only premium AV technologies, supported by certified engineers,
              training, and a world-class experience centre in Lagos.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* What You Get as a Dealer */}
      <section data-light className="bg-gray-100 py-20">
  <div className="container-fluid px-6">
    <FadeInOnScroll>
      <p className="text-4xl md:text-5xl articulatcfLight text-black text-center mb-12">
        What You Get as a CED Africa Dealer
      </p>
    </FadeInOnScroll>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD 01 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        

        <div className="mb-6">
          <Package className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          Exclusive Products
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          Access elite AV brands selected for performance, reliability, and design excellence.
        </p>
      </FadeInOnScroll>

      {/* CARD 02 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        

        <div className="mb-6">
          <ShieldCheck className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          Protected Margins
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          Structured pricing that secures your profit and protects your business.
        </p>
      </FadeInOnScroll>

      {/* CARD 03 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
       

        <div className="mb-6">
          <Headphones className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          Technical Support
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          Our engineering team guides you from system design to installation.
        </p>
      </FadeInOnScroll>

      {/* CARD 04 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        

        <div className="mb-6">
          <Users className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          Dealer Visibility
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          Your company gets promoted to architects, designers, builders & high-end clients.
        </p>
      </FadeInOnScroll>

      {/* CARD 05 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        

        <div className="mb-6">
          <Building className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          More High-End Projects
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          We connect dealers with premium residential, commercial, and hospitality opportunities.
        </p>
      </FadeInOnScroll>

      {/* CARD 06 */}
      <FadeInOnScroll className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        

        <div className="mb-6">
          <GraduationCap className="w-12 h-12 text-black" />
        </div>

        <h3 className="text-2xl articulatcf font-black text-black mb-4">
          Training & Certification
        </h3>
        <p className="text-base articulatcfLight text-gray-700">
          Stay ahead with professional brand certifications & hands-on workshops.
        </p>
      </FadeInOnScroll>

    </div>
  </div>
</section>


      {/* Who We Partner With */}
      <section
  data-light
  className="relative py-28 bg-black text-white bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/av1.jpg')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

  <div className="relative container-fluid px-6">
    <FadeInOnScroll className="text-center max-w-4xl mx-auto">

      <h2 className="text-4xl lg:text-5xl articulatcf font-black text-white mb-12">
        Who We Partner With
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg">
          <h3 className="text-xl articulatcf font-black text-white mb-2">
            System Integrators
          </h3>
          <p className="text-sm articulatcfLight text-gray-300">
            Professionals designing and deploying AV systems at scale.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg">
          <h3 className="text-xl articulatcf font-black text-white mb-2">
            Electrical Contractors
          </h3>
          <p className="text-sm articulatcfLight text-gray-300">
            Teams bringing modern electrical and low-voltage plans to life.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg">
          <h3 className="text-xl articulatcf font-black text-white mb-2">
            AV Specialists
          </h3>
          <p className="text-sm articulatcfLight text-gray-300">
            Experts crafting immersive audio, video, and lighting experiences.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg">
          <h3 className="text-xl articulatcf font-black text-white mb-2">
            Luxury Builders & Designers
          </h3>
          <p className="text-sm articulatcfLight text-gray-300">
            Creators of refined residences, hospitality spaces, and show-stopping interiors.
          </p>
        </div>

      </div>

      <p className="text-lg articulatcfLight text-gray-300 max-w-2xl mx-auto">
        If you craft premium environments, we help you elevate them—so you can deliver better and win bigger.
      </p>

    </FadeInOnScroll>
  </div>
</section>


      {/* CTA Section */}
      <section className="relative overflow-hidden py-28 bg-black text-white">
        <div className="container-fluid px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl lg:text-5xl articulatcf font-black mb-6">
              Your Edge Starts Here
            </h2>
            <p className="text-xl articulatcfLight mb-12 max-w-2xl mx-auto">
              Join the network trusted by Africa&apos;s most ambitious AV professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Become a Dealer</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Request a Consultation</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}

export default Distribution
