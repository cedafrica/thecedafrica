"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'
import { PenTool, Layers, TrendingUp, ShieldCheck, ClipboardCheck } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

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
];

const Consulting = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }
  return (
    <div className="bg-white">
      <section
  className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/consult.webp')", // Change to your image
    backgroundAttachment: "",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

  <div className="relative container-fluid px-6 text-center">
    <FadeInOnScroll>
      {/* Caption */}
      <p className="text-base lg:text-lg articulatcfLight mb-10 max-w-3xl mx-auto text-gray-200">
        DESIGN FIRST. TECHNOLOGY PERFECTED.
      </p>
      <h1 className="text-3xl lg:text-5xl articulatcf font-black mb-6">
        Premium AV Consulting for Exceptional Spaces
      </h1>

      {/* Tagline / Description */}
      <p className="text-base lg:text-lg articulatcfLight mb-10 max-w-3xl mx-auto text-gray-200">
      We design world-class audio-visual and acoustic experiences for spaces where performance, aesthetics, and reliability matter.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Trade Partner CTA */}
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

        {/* Primary CTA */}
         <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
<section className="w-full py-20 bg-black text-white">
  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* IMAGE */}
    <FadeInOnScroll direction="left">
      <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/impacts.webp" // Change image
          alt="About CED"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700 ease-out"
        />
      </div>
    </FadeInOnScroll>

    {/* TEXT */}
    <FadeInOnScroll direction="right">
      <div>
        <h2 className="text-2xl lg:text-4xl articulatcf font-black mb-6">
          Nigeria’s First Independent AV Consultancy
        </h2>

        <p className="text-gray-300 articulatcfLight leading-relaxed mb-6">
          CED is Nigeria’s first dedicated AV consulting firm, guiding 
          ultra-high-end residential projects, enterprise powerhouses, 
          premium hospitality & lifestyle spaces, and large congregational venues.
        </p>

        <p className="text-gray-300 articulatcfLight leading-relaxed mb-6">
          We provide <span className="text-white font-semibold">consulting and design </span> 
           for the AV backbone of your space—from acoustics and structured wiring 
          to room optimization, technical documentation, and system standards—ensuring 
          every decision is informed, coordinated, and future-proof.
        </p>

        <div className="space-y-2 mb-8">
          <p className="text-gray-200">• We do not sell products.</p>
          <p className="text-gray-200">• We do not install systems.</p>
          <p className="text-gray-200">
            • We protect the design vision, eliminate project guesswork, and guarantee 
            flawless results for every stakeholder.
          </p>
        </div>

         <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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


{/* WHY YOU NEED AN AV CONSULTANT SECTION */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/avdesign.jpg"
              alt="AV Design Blueprint"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          {/* TEXT RIGHT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
            >
            The risks of skipping AV consulting.
            </motion.h2>
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 border-l-4 border-gray-900 pl-4 my-6 text-gray-800 italic text-sm"
            >
              At CED, we prevent these issues before they happen—protecting your investment, your space, and your experience.
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
                    <span className="text-2xl font-bold text-gray-800">{openIndex === i ? "×" : "+"}</span>
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
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      
     <section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-12">
      Our Services – Consulting & Design Only
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Service 1 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src="/pro.jpeg"
          alt="Ultra High-End Residential Consulting"
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Ultra High-End Residential Consulting</h3>
          <p className="text-gray-700 mb-2">
            We provide expert AV consulting and design for luxury homes and estates:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Home cinemas & media rooms</li>
            <li>Whole-home audio & smart integration planning</li>
            <li>Acoustic analysis & treatment recommendations</li>
            <li>Structured wiring & rack layout design</li>
            <li>Interior coordination to ensure technology is visually invisible</li>
          </ul>
          <p className="text-gray-500 italic mb-4">
            Note: We do not install equipment—we design it for flawless execution by your chosen integrators.
          </p>
           <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
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

      {/* Service 2 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src="/corporate.webp"
          alt="Enterprise & Corporate Powerhouses"
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Enterprise & Corporate Powerhouses</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Boardroom audio & video planning</li>
            <li>Large meeting & collaboration room design</li>
            <li>Video conferencing system specifications</li>
            <li>Acoustic planning & sound isolation recommendations</li>
            <li>Detailed technical documentation for integrators</li>
          </ul>
          <p className="text-gray-500 italic mb-4">
            Note: All designs are for consulting purposes; installation is managed by others.
          </p>
           <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
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

      {/* Service 3 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src="/rest.webp"
          alt="Premium Hospitality & Lifestyle Spaces"
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Premium Hospitality & Lifestyle Spaces</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Multi-zone audio & video system planning</li>
            <li>Acoustic design for entertainment & event spaces</li>
            <li>Networked AV system specifications</li>
            <li>Tender documentation and integrator coordination</li>
          </ul>
          <p className="text-gray-500 italic mb-4">
            Note: We provide design and consulting only, no installation.
          </p>
           <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
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

      {/* Service 4 */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src="/avimage.jpg"
          alt="High-End Religious & Large Congregational Spaces"
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">High-End Religious & Large Congregational Spaces</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Sound reinforcement & coverage planning</li>
            <li>Speech intelligibility and acoustic clarity analysis</li>
            <li>Multi-microphone & speaker layout recommendations</li>
            <li>Technical documentation for integrators</li>
          </ul>
          <p className="text-gray-500 italic mb-4">
            Note: We focus purely on design and consultancy, not installation.
          </p>
          <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
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
    </div>
  </div>
</section>

<section
  className="relative w-full bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('/pa.webp')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto px-6 py-32 text-center text-white z-10">
    <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
      Collaborate With Technical Confidence
    </h2>
    <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
      Your design deserves flawless execution. We bridge the gap between aesthetics, functionality, and engineering—ensuring your projects avoid redesigns, clashes, and performance issues.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="bg-black bg-opacity-40 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
        <h3 className="text-xl font-semibold mb-3">For Architects</h3>
        <p className="text-gray-300">
          Early-stage coordination and precise technical drawings protect your spatial vision.
        </p>
      </div>
      <div className="bg-black bg-opacity-40 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
        <h3 className="text-xl font-semibold mb-3">For Interior Designers</h3>
        <p className="text-gray-300">
          Technology blends seamlessly with your aesthetic intent—clean, minimal, beautiful.
        </p>
      </div>
      <div className="bg-black bg-opacity-40 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
        <h3 className="text-xl font-semibold mb-3">For MEP Consultants</h3>
        <p className="text-gray-300">
          Accurate load calculations, conduit sizing, ceiling coordination, and network-ready documentation.
        </p>
      </div>
    </div>

    <a
      href="https://forms.zohopublic.com/cedafrica1/form/CEDAFRICATRADEPARTNERREGISTRATION/formperma/GjW-gerRT7hXlJQd4HTw7SzZo9YZkQ4nIuC9Yapk-q8" target='_blank'
      className="inline-flex items-center gap-3 text-white font-semibold border border-white rounded-full px-8 py-3 transition hover:bg-white hover:text-gray-900"
    >
      Become a Trade Partner
      <img src="/whitearrow.svg" alt="arrow" className="w-4 h-4" />
    </a>
  </div>
</section>


      
      {/* Our Professional Process */}
      <section data-light className="bg-gray-100 py-24 relative">
  <div className="container-fluid px-6">
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-3xl articulatcf font-black text-black text-center mb-20">
        Our Methodology
      </h2>
    </FadeInOnScroll>

    {/* Timeline */}
    <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:bg-gray-200">

      {[
        {
          number: "1",
          title: "Client Discovery",
          description:
            "We begin by understanding the project vision, functional requirements, and client expectations."
        },
        {
          number: "2",
          title: "AV Design",
          description:
            "Our team develops a tailored AV concept, defining system architecture, performance goals, and integration pathways."
        },
        {
          number: "3",
          title: "Tender Document Proposal",
          description:
            "We prepare structured tender documents, equipment lists, and specifications to guide accurate quoting and partner alignment."
        },
        {
          number: "4",
          title: "Engineered Drawings",
          description:
            "We produce complete engineering drawings coordinated with MEP, architectural layouts, and interior design requirements."
        }
      ].map((step, index) => (
        <FadeInOnScroll key={step.number} className="relative mb-12">
          <div
            className={`flex flex-col md:flex-row items-center md:items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Step Circle */}
            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center articulatcf font-black text-xl z-10">
              {step.number}
            </div>

            {/* Card */}
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

      

      {/* CTA Section */}
      <section className="relative overflow-hidden py-28 bg-black text-white">
  <div className="container-fluid px-6 text-center">
    <FadeInOnScroll>
      {/* Tagline */}
      <h2 className="text-4xl lg:text-4xl articulatcfLight mb-8 max-w-3xl mx-auto">
        Ready to Create an Exceptional Space?
      </h2>
      <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Let’s design AV that elevates the experience—not complicates it.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link
          href="/experiences" target='_blank~'
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
    e.preventDefault();
    const element = document.getElementById("ctas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
<section className="relative bg-gray-50 py-28" id='ctas'>
  <div className="container mx-auto px-6 max-w-5xl text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
      Ready to Design Your AV Project?
    </h2>
    <p className="text-gray-600 mb-12">
      Fill out the form below and let’s collaborate to create a flawless AV experience for your space.
    </p>

    {/* Form Card */}
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
