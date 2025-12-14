"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/legacy/image"
import FadeInOnScroll from "../components/FadeInOnScroll"
import { motion, AnimatePresence } from "framer-motion"

// Risks accordion content
const problems = [
  {
    title: "Poor Performance",
    description:
      "Speakers, microphones, and displays do not deliver as intended because room acoustics, placement, and system design were not considered.",
  },
  {
    title: "Design Conflicts",
    description:
      "Technology interferes with architecture, furniture layout, or interior finishes when AV is not coordinated early.",
  },
  {
    title: "Wasted Budget",
    description:
      "Expensive equipment gets installed incorrectly, duplicated, or placed where it never performs at its full potential.",
  },
  {
    title: "Project Delays",
    description:
      "Integrators improvise on-site, forcing redesigns and slowing construction because there’s no unified AV plan.",
  },
  {
    title: "No Future-Proofing",
    description:
      "Systems cannot expand or upgrade without heavy reconstruction when proper documentation and structured design are missing.",
  },
]

// Services + modal breakdown
const services = [
  {
    id: 1,
    title: "High-End Residential Apartments & Private Estates",
    description:
      "Bespoke residential home technology for luxury residences where performance, discretion, and architectural harmony are non-negotiable.",
    image: "/residential.jpeg",
    modalTitle: "High-End Residential Consulting",
    items: [
      "Private cinema & immersive media room design",
      "Multi-room audio, control & smart home infrastructure planning",
      "Architectural acoustic modelling & treatment guidance",
      "Hidden technology integration & interior coordination",
      "Structured wiring, rack architecture & equipment flow design"
    ]
  },

  {
    id: 2,
    title: "Large Experiential Venues",
    description:
      "World-class AV consulting for spaces designed to inspire. Houses of worship, stadiums, arenas, and event venues requiring scale, precision and emotional impact.",
    image: "/how.png",
    modalTitle: "Experiential Venue Consulting",
    items: [
      "Large-scale sound reinforcement design & coverage optimisation",
      "Acoustic clarity modelling for speech and live music",
      "Control room, stage audio and broadcast signal flow design",
      "LED, projection & venue-wide video distribution planning",
      "Technical documentation, tender packages & integrator alignment"
    ]
  },

  {
    id: 3,
    title: "Premium Hospitality & Lifestyle Spaces",
    description:
      "Atmosphere-driven AV experiences for ultra-modern lounges, nightclubs, restaurants, hotels, museums and lifestyle destinations.",
    image: "/kilala.jpg",
    modalTitle: "Hospitality & Lifestyle Consulting",
    items: [
      "Multi-zone BGM & foreground audio experience mapping",
      "Acoustic modelling for vibrant entertainment environments",
      "Networked AV architecture & equipment specification",
      "Lighting, ambiance & experience-led system integration planning",
      "Tender documentation & coordination with design partners"
    ]
  },

  {
    id: 4,
    title: "Tier-1 Enterprise & Institutional Environments",
    description:
      "We design High-reliability AV conferencing solutions and AV collaboration solutions for elite organisations—private universities, global banks, fintech giants, telecoms, and government institutions.",
    image: "/corporate.webp",
    modalTitle: "Enterprise & Institutional Consulting",
    items: [
      "Executive boardroom AV strategy & presentation intelligence",
      "Enterprise-wide video conferencing & collaboration ecosystems",
      "Lecture theatres, auditoriums & learning environment design",
      "Acoustic optimisation for corporate performance environments",
      "Full engineering documentation for seamless integration"
    ]
  }
];

const Consulting = () => {

  // Existing state
  const [openIndex, setOpenIndex] = useState(null)
  const [activeService, setActiveService] = useState(null)

  // ⭐ SLIDER HOOKS MUST BE HERE INSIDE THE COMPONENT
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0))
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const sliderImages = [
    { src: "/residential.jpeg", caption: "Space With AV Consulting" },
    { src: "/noav.png", caption: "Space Without AV Consulting" }
  ]

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/consult.webp')",
          backgroundAttachment: "",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative container-fluid px-6 text-center">
          <FadeInOnScroll>
            <p className="text-base lg:text-lg articulatcfLight mb-10 max-w-3xl mx-auto text-gray-200">
              DESIGN FIRST. TECHNOLOGY PERFECTED.
            </p>
            <h1 className="text-3xl lg:text-5xl articulatcf font-black mb-6">
            Architects of AV Excellence
            </h1>

            <p className="text-base lg:text-lg articulatcfLight mb-10 max-w-3xl mx-auto text-gray-200">
              We design world-class audio-visual experiences for spaces where performance,
              aesthetics, and reliability matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://forms.zohopublic.com/cedafrica1/form/CEDAFRICATRADEPARTNERREGISTRATION/formperma/GjW-gerRT7hXlJQd4HTw7SzZo9YZkQ4nIuC9Yapk-q8"
                target="_blank"
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Become a Trade Partner</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </Link>

              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("ctas")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Let’s Design Your Next Project</span>
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
      {/* MODAL – Fade + Zoom from Center */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-3 right-4 text-2xl leading-none text-gray-500 hover:text-black"
                  aria-label="Close"
                >
                  ×
                </button>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  {activeService.modalTitle || activeService.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  A deeper breakdown of what this service covers:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-6 text-sm md:text-base">
                  {activeService.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveService(null)}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100"
                  >
                    Close
                  </button>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveService(null)
                      const element = document.getElementById("ctas")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-black bg-black text-white px-5 py-2 text-sm md:text-base hover:bg-white hover:text-black transition-all"
                  >
                    Discuss This Service
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* 🔹 SERVICES SECTION WITH MODALS (JUST AFTER HERO) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
            CED Consulting Services
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Designing Audiovisual Experiences That Shape Moments        </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="w-full h-72 overflow-hidden">
                  {/* You can replace <img> with <Image> later if you like */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-500 italic text-sm mb-6">
                    We provide concept design, technical documentation, and system performance verification. Installation is handled by your chosen integrators.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {/* Scroll CTA */}
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("ctas")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="group inline-flex items-center gap-2 rounded-full border border-black text-black bg-transparent px-5 py-2.5 text-sm md:text-base transition-all duration-300 hover:bg-black hover:text-white hover-btn"
                    >
                      <span>Let’s Design Your Next Project</span>
                      <Image
                        src="/blackarrow.svg"
                        alt="arrow"
                        width={14}
                        height={14}
                        className="transition-transform duration-300 group-hover:-rotate-45"
                      />
                    </Link>

                    {/* Modal trigger */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>

      {/* ABOUT CED SECTION */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInOnScroll direction="left">
            <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/dist.jpeg"
                alt="About CED"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700 ease-out"
              />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="right">
            <div>
              <h2 className="text-2xl lg:text-4xl articulatcf font-black mb-6">
                Nigeria’s First Independent AV Consultancy
              </h2>

              <p className="text-gray-300 articulatcfLight leading-relaxed mb-6">
                CED is Nigeria’s first dedicated AV consulting firm, guiding ultra-high-end
                residential projects, enterprise powerhouses, premium hospitality & lifestyle
                spaces, and large congregational venues.
              </p>

              <p className="text-gray-300 articulatcfLight leading-relaxed mb-6">
                We provide <span className="text-white font-semibold">consulting and design</span>{" "}
                for the AV backbone of your space—from acoustics and structured wiring to room
                optimization, technical documentation, and system standards—ensuring every decision
                is informed, coordinated, and future-proof.
              </p>

             

              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("ctas")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Let’s Design Your Next Project</span>
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

      {/* WHY YOU NEED AN AV CONSULTANT */}
      
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-xl"
>
  {sliderImages.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: currentSlide === index ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full"
    >
      <Image
        src={item.src}
        alt={item.caption}
        layout="fill"
        objectFit="cover"
      />

      {/* Luxury Caption */}
      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg">
        {item.caption}
      </div>
    </motion.div>
  ))}
</motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
            >
              The risks of Ignoring AV consulting.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 border-l-4 border-gray-900 pl-4 my-6 text-gray-800 italic text-sm"
            >
              At CED, we prevent these issues before they happen—protecting your investment, your
              space, and your experience.
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all bg-white"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                    <span className="text-2xl font-bold text-gray-800">
                      {openIndex === i ? "×" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 mt-3"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("ctas")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group my-6 inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
            >
              <span>Let’s Design Your Next Project</span>
              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:-rotate-45"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section
        className="relative w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/pa.webp')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center text-white z-10">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            Designed Together. Delivered Perfectly.
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
           We align with architects, interior designers, and MEP teams to ensure clean coordination, invisible technology, and engineering accuracy—so the final space performs as beautifully as it looks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold mb-3">For Architects</h3>
              <p className="text-gray-300">
                Early-stage coordination and precise technical drawings protect your spatial vision.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold mb-3">For Interior Designers</h3>
              <p className="text-gray-300">
                Technology blends seamlessly with your aesthetic intent—clean, minimal, beautiful.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold mb-3">For MEP Consultants</h3>
              <p className="text-gray-300">
                Accurate load calculations, conduit sizing, ceiling coordination, and
                network-ready documentation.
              </p>
            </div>
          </div>

          <a
            href="https://forms.zohopublic.com/cedafrica1/form/CEDAFRICATRADEPARTNERREGISTRATION/formperma/GjW-gerRT7hXlJQd4HTw7SzZo9YZkQ4nIuC9Yapk-q8"
            target="_blank"
            className="inline-flex items-center gap-3 text-white font-semibold border border-white rounded-full px-8 py-3 transition hover:bg-white hover:text-gray-900"
          >
            Become a Trade Partner
            <img src="/whitearrow.svg" alt="arrow" className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* METHODOLOGY / PROCESS */}
      <section data-light className="bg-gray-100 py-24 relative">
  <div className="container-fluid px-6">
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-3xl articulatcf font-black text-black text-center mb-20">
        Our Methodology
      </h2>
    </FadeInOnScroll>

    <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:bg-gray-200">
      {[
        {
          number: "1",
          title: "Client Discovery",
          description:
            "We begin by understanding the client’s vision, lifestyle needs, functional requirements, and project expectations.",
        },
        {
          number: "2",
          title: "Conceptual Design",
          description:
            "We develop a clear AV concept—outlining system architecture, experience flow, equipment direction, and coordination requirements.",
        },
        {
          number: "3",
          title: "Technical Documentation",
          description:
            "We produce detailed drawings, schematics, specifications, and structured plans that guide integrators and design partners.",
        },
        {
          number: "4",
          title: "System Performance Verification",
          description:
            "We ensure every system performs as designed through validation, calibration oversight, and project sign-off checks.",
        },
      ].map((step, index) => (
        <FadeInOnScroll key={step.number} className="relative mb-12">
          <div
            className={`flex flex-col md:flex-row items-center md:items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center articulatcf font-black text-xl z-10">
              {step.number}
            </div>

            <div
              className={`bg-white p-6 rounded-lg shadow-md max-w-md md:mx-8 ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              <h3 className="text-xl articulatcf font-black text-black mb-2">
                {step.title}
              </h3>
              <p className="text-base articulatcfLight text-gray-700">
                {step.description}
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  </div>
</section>

<section className="w-full bg-white py-24">
  <div className="container mx-auto px-6 text-center">

    {/* Header */}
    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 articulatcf">
      Explore Our Featured Projects
    </h2>

    {/* Short Description */}
    <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto articulatcfLight mb-10">
      From ultra-luxury residences to high-performance commercial spaces, our AV designs
      are crafted to elevate architecture, enhance lifestyle, and deliver uncompromising
      technical excellence.
    </p>

    {/* CTA Button */}
    <Link
      href="/projects"
      target="_blank"
      className="inline-flex  items-center gap-3 rounded-full border border-black text-black px-8 py-3 transition-all duration-300 hover:bg-black hover:text-white hover-btn"
    >
      <span>View Projects</span>
      <Image
        src="/blackarrow.svg"
        alt="arrow"
        width={16}
        height={16}
        className="transition-transform duration-300 group-hover:-rotate-45"
      />
    </Link>

  </div>
</section>


      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-28 bg-black text-white">
        <div className="container-fluid px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl lg:text-4xl articulatcfLight mb-8 max-w-3xl mx-auto">
              Ready to Create an Exceptional Space?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let’s design AV that elevates the experience—not complicates it.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/experiences"
                target="_blank"
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Visit Our Experience Centre</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("ctas")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
              >
                <span>Let’s Design Your Next Projects</span>
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

      {/* FORM SECTION */}
      <section className="relative bg-gray-50 py-28" id="ctas">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Ready to Design Your AV Project?
          </h2>
          <p className="text-gray-600 mb-12">
            Fill out the form below and let’s collaborate to create a flawless AV experience for your space.
          </p>

          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden p-6 md:p-12">
            <iframe
              aria-label="CED Africa - AV Consulting Project Discovery Form"
              frameBorder="0"
              style={{ height: "2200px", width: "100%", border: "none" }}
              src="https://forms.zohopublic.com/cedafrica1/form/CEDAfricaDesignAVProjectDiscoveryForm/formperma/f29U0ZV7f1pUBsJ-PJJ6CIUciqzV2UoYsM50Shy7yOc"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consulting
