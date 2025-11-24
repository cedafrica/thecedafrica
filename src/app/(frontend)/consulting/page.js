export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'
import {
  PenTool,
  Layers,
  TrendingUp,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";


const Consulting = async () => {
  return (
    <div className="bg-white">
      <section
  className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/cc.jpg')", // Change to your image
    backgroundAttachment: "fixed",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

  <div className="relative container-fluid px-6 text-center">
    <FadeInOnScroll>
      <h1 className="text-3xl lg:text-5xl articulatcf font-black mb-6">
        We Are the Architects of AV
      </h1>

      <p className="text-base lg:text-lg articulatcfLight mb-10 max-w-3xl mx-auto text-gray-200">
        We empower architects, interior designers, and MEP consultants to integrate
        world-class AV and lighting seamlessly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
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
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full border border-white text-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
        >
          <span>Let&apos;s Design Your Next Project</span>
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

      {/* Why Designers Choose CED Consulting */}
      <section data-light className="relative bg-white py-24">
  <div className="container-fluid px-6">
    
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-5xl articulatcf font-black text-black text-center mb-20">
        Why Architects Choose CED Consulting
      </h2>
    </FadeInOnScroll>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {/* CARD 01 */}
      <FadeInOnScroll className="p-10 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <PenTool size={80} />
        </div>

        <div className="flex items-start gap-4">
          <PenTool size={36} className="text-black" />
          <div>
            <h3 className="text-2xl articulatcf font-black text-black mb-3">
              Design Comes First
            </h3>
            <p className="text-base articulatcfLight text-gray-700">
              Your vision always leads. AVL is engineered to enhance — not compete with — your design.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* CARD 02 */}
      <FadeInOnScroll className="p-10 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <Layers size={80} />
        </div>

        <div className="flex items-start gap-4">
          <Layers size={36} className="text-black" />
          <div>
            <h3 className="text-2xl articulatcf font-black text-black mb-3">
              Simplified Execution
            </h3>
            <p className="text-base articulatcfLight text-gray-700">
              No endless back-and-forth with integrators. We handle technical details, tender documentation, and oversight — so you stay focused on creativity.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* CARD 03 */}
      <FadeInOnScroll className="p-10 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <TrendingUp size={80} />
        </div>

        <div className="flex items-start gap-4">
          <TrendingUp size={36} className="text-black" />
          <div>
            <h3 className="text-2xl articulatcf font-black text-black mb-3">
              Higher Returns
            </h3>
            <p className="text-base articulatcfLight text-gray-700">
              Professional AVL integration increases project value — boosting margins and attracting premium clients.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* CARD 04 */}
      <FadeInOnScroll className="p-10 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <ShieldCheck size={80} />
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck size={36} className="text-black" />
          <div>
            <h3 className="text-2xl articulatcf font-black text-black mb-3">
              Exclusive Expertise
            </h3>
            <p className="text-base articulatcfLight text-gray-700">
              Access engineered designs, premium products, and specialist support that ensures flawless execution.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* WIDE CARD 05 */}
      <FadeInOnScroll className="p-10 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 relative overflow-hidden">
        <div className="absolute top-4 right-6 opacity-10">
          <ClipboardCheck size={100} />
        </div>

        <div className="flex items-start gap-4">
          <ClipboardCheck size={40} className="text-black" />
          <div>
            <h3 className="text-2xl articulatcf font-black text-black mb-3">
              Project Confidence
            </h3>
            <p className="text-base articulatcfLight text-gray-700 max-w-3xl">
              From engineering to oversight, we ensure every detail aligns with your design vision — delivering excellence your clients feel immediately.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

    </div>
  </div>
</section>
      {/* Our Professional Process */}
      <section data-light className="bg-gray-100 py-24 relative">
  <div className="container-fluid px-6">
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-5xl articulatcf font-black text-black text-center mb-20">
        Our Professional Process
      </h2>
    </FadeInOnScroll>

    {/* Timeline */}
    <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:bg-gray-300">

      {[ 
        {
          number: "1",
          title: "Client Discovery & Briefing",
          description: "We understand your vision, project goals, and client expectations."
        },
        {
          number: "2",
          title: "Consulting & Strategy",
          description: "We define the AVL scope, tender requirements, and integration approach tailored to your project."
        },
        {
          number: "3",
          title: "Engineered Design",
          description: "We produce detailed technical designs, schematics, and specifications — fully coordinated with your architectural and interior plans."
        },
        {
          number: "4",
          title: "Tender & Partner Selection",
          description: "We identify the right certified trade partners to execute flawlessly, keeping your design central."
        },
        {
          number: "5",
          title: "Project Oversight & Execution",
          description: "We supervise installation, commissioning, and fine-tuning, ensuring every system performs to perfection."
        },
        {
          number: "6",
          title: "Delivery & Handover",
          description: "The project is completed to premium standards, enhancing client satisfaction and protecting your professional reputation."
        }
      ].map((step, index) => (
        <FadeInOnScroll key={step.number} className="relative mb-12">
          <div className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            
            {/* Step Circle */}
            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center articulatcf font-black text-xl z-10">
              {step.number}
            </div>

            {/* Card */}
            <div className={`bg-white p-6 rounded-lg shadow-md max-w-md md:mx-8 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
              <h3 className="text-2xl articulatcf font-black text-black mb-2">{step.title}</h3>
              <p className="text-base articulatcfLight text-gray-700">{step.description}</p>
            </div>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  </div>
</section>

      {/* Who We Work With */}
      <section
  data-light
  className="relative min-h-screen flex items-center"
  style={{
    backgroundImage: "url('/av3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative container-fluid px-6 py-20 text-center max-w-4xl mx-auto">
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-5xl articulatcf font-black text-white mb-12">
        Who We Work With
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl articulatcf font-black text-white mb-3">Architects</h3>
          <p className="text-base articulatcfLight text-gray-200">
            Designing luxury residential, commercial, and hospitality spaces with seamless AV integration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl articulatcf font-black text-white mb-3">Interior Designers</h3>
          <p className="text-base articulatcfLight text-gray-200">
            Seeking seamless AVL integration without compromising aesthetics or design vision.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl articulatcf font-black text-white mb-3">MEP Consultants</h3>
          <p className="text-base articulatcfLight text-gray-200">
            Needing precise, engineered AV and lighting coordination for flawless execution.
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  </div>
</section>

      {/* The Impact for You */}
      <section data-light className="relative py-20 bg-gray-50">
  <div className="container-fluid px-6">
    <FadeInOnScroll>
      <h2 className="text-4xl lg:text-5xl articulatcf font-black text-black text-center mb-16">
        The Impact for You
      </h2>
    </FadeInOnScroll>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      
      {/* Card 01 */}
      <FadeInOnScroll className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 articulatcf font-black text-lg">
          01
        </div>
        <h3 className="text-xl articulatcf font-black text-black mb-3">
          Keep design integrity intact
        </h3>
        <p className="text-gray-700 text-sm">
          Seamlessly integrate AV and lighting while preserving your architectural and interior design vision.
        </p>
      </FadeInOnScroll>

      {/* Card 02 */}
      <FadeInOnScroll className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 articulatcf font-black text-lg">
          02
        </div>
        <h3 className="text-xl articulatcf font-black text-black mb-3">
          Reduce stress and project complexity
        </h3>
        <p className="text-gray-700 text-sm">
          Technical coordination, tender processes, and execution handled by experts, letting you focus on creativity.
        </p>
      </FadeInOnScroll>

      {/* Card 03 */}
      <FadeInOnScroll className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 articulatcf font-black text-lg">
          03
        </div>
        <h3 className="text-xl articulatcf font-black text-black mb-3">
          Increase profitability & client satisfaction
        </h3>
        <p className="text-gray-700 text-sm">
          Professional AVL integration elevates your projects’ value, margins, and client delight.
        </p>
      </FadeInOnScroll>

      {/* Card 04 */}
      <FadeInOnScroll className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 articulatcf font-black text-lg">
          04
        </div>
        <h3 className="text-xl articulatcf font-black text-black mb-3">
          Access exclusive AV & lighting expertise
        </h3>
        <p className="text-gray-700 text-sm">
          Gain access to engineered solutions, premium products, and hands-on consulting for flawless results.
        </p>
      </FadeInOnScroll>

      {/* Card 05 */}
      <FadeInOnScroll className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2">
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 articulatcf font-black text-lg">
          05
        </div>
        <h3 className="text-xl articulatcf font-black text-black mb-3">
          Position your firm as a premium leader
        </h3>
        <p className="text-gray-700 text-sm">
          Stand out in high-end residential, commercial, and hospitality projects with unmatched AV and lighting expertise.
        </p>
      </FadeInOnScroll>

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-28 bg-black text-white">
  <div className="container-fluid px-6 text-center">
    <FadeInOnScroll>
      {/* Tagline */}
      <h2 className="text-4xl lg:text-4xl articulatcfLight mb-8 max-w-3xl mx-auto">
        Partner with us and bring world-class AV and lighting experiences to your projects.
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
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
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
        >
          <span>Let&apos;s Design Your Next Project</span>
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

export default Consulting
