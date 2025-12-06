export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { Server, Zap, Speaker, Home } from "lucide-react"; // Example icons
import FadeInOnScroll from '../components/FadeInOnScroll'
import {
  Package,
  ShieldCheck,
  Headphones,
  Users,
  Hotel,
  Music2,
  DollarSign,
  UserCheck,
  BadgePercent,
  Star,
  Church,
  Truck,
  Building2,
  Building,
  GraduationCap
} from "lucide-react";


const Distribution = async () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
  className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/nw.webp')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content wrapper */}
  <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 w-full h-full max-w-4xl">
    <FadeInOnScroll>
      <h1 className="text-3xl md:text-4xl lg:text-4xl articulatcf font-black mb-4 text-white">
        Premium AV & Smart Technology Distribution for Africa’s Leading Integrators
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
        Access globally trusted brands, certified technical support, and a distributor that puts your business growth first.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Become a Dealer */}
        <Link
          href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
          target="_blank"
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

        {/* Visit Experience Centre */}
        
      </div>
    </FadeInOnScroll>
  </div>
</section>

<section className="relative w-full py-24 bg-[#0A0A0A] text-white">
  {/* Subtle gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl articulatcf font-black mb-4">
        A Distribution Partner Built Exclusively for Professionals
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We empower Africa’s top professionals with industry-leading AV, smart home,
        networking, surveillance, and acoustic brands—curated for performance,
        reliability, and profitability.
      </p>
    </div>

    {/* Grid of audiences */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[
        "System Integrators",
        "Installers / Resellers",
        "Architects",
        "Interior Designers",
        "Developers & Contractors",
        "Hospitality & Enterprise Projects"
      ].map((item, index) => (
        <div
          key={index}
          className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md 
                     hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <h3 className="text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
            {item}
          </h3>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <Link
        href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
        target="_blank"
        className="group inline-flex items-center gap-4 rounded-full border border-white text-white 
                   bg-transparent px-10 py-4 transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span className="text-lg font-medium">Become a Dealer</span>
        <Image
          src="/whitearrow.svg"
          alt="arrow"
          width={18}
          height={18}
          className="transition-transform duration-300 group-hover:-rotate-45 group-hover:brightness-0"
        />
      </Link>
    </div>
  </div>
</section>

<section className="relative w-full py-28 bg-white text-black">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl articulatcf font-black mb-6 tracking-tight">
        Premium Brands That Elevate Every Project
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        From wireless audio to commercial sound, acoustics, smart living, and enterprise-grade
        networking—our portfolio is curated for integrators delivering exceptional performance.
      </p>
    </div>

    {/* ULTRA-MINIMAL SILVER GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Retail Wireless Audio",
          brands: ["Sonos", "Arylic", "Audioflow"],
        },
        {
          title: "Networking & WiFi",
          brands: ["Ubiquiti", "TP-Link Omada"],
        },
        {
          title: "Security & Surveillance",
          brands: ["Reolink", "Shelly"],
        },
        {
          title: "Commercial Audio",
          brands: ["Luhkee", "KGEAR / K-array"],
        },
        {
          title: "Acoustics & Panels",
          brands: ["Vicoustic"],
        },
        {
          title: "Lifestyle & Smart Living",
          brands: ["Shelly", "Smart Home Ecosystems"],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            group relative p-12 
            rounded-3xl border border-gray-200 
            bg-gradient-to-br from-white to-gray-50
            shadow-[0_0_20px_rgba(0,0,0,0.05)]
            hover:shadow-[0_0_40px_rgba(0,0,0,0.12)]
            transition-all duration-500 
            hover:-translate-y-2
            overflow-hidden
          "
        >

          {/* Chrome-style abstract shape */}
          <div
            className="
              absolute top-0 right-0 w-32 h-32 rounded-bl-[100px]
              bg-gradient-to-br from-gray-200/40 to-gray-300/20
              opacity-30 group-hover:opacity-50
              transition-all duration-500
              blur-sm
            "
          />

          {/* Text Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">
              {item.title}
            </h3>

            <ul className="space-y-2">
              {item.brands.map((brand, i) => (
                <li key={i} className="text-gray-700 text-base">
                  {brand}
                </li>
              ))}
            </ul>

            {/* SILVER underline */}
            <div className="
              mt-6 h-[2px] w-0 group-hover:w-24 
              bg-gradient-to-r from-gray-400 to-gray-500
              transition-all duration-700
            "></div>
          </div>

        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="flex justify-center mt-20">
      <Link
        href="/experiences" target='_blank'
        className="
          group inline-flex items-center gap-4 rounded-full 
          border border-black text-black bg-transparent 
          px-10 py-4 transition-all duration-300 
          hover:bg-black hover:text-white hover:shadow-xl
        "
      >
        <span className="text-lg font-semibold">Visit Our Experience Centre</span>
      </Link>
    </div>

  </div>
</section>


<section className="relative w-full py-32 bg-[#0B0B0C] text-white overflow-hidden">

  {/* Ambient Glow Accents */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl articulatcf font-black tracking-tight mb-6">
        Why Dealers Choose CED Distribution
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Your competitive advantage starts here.
      </p>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          icon: ShieldCheck,
          title: "Protected Dealer Margins",
          desc: "We ensure healthy, stable margins so your business grows sustainably."
        },
        {
          icon: Headphones,
          title: "Technical Guidance & Project Support",
          desc: "Our experts assist from planning to deployment, reducing errors and rework."
        },
        {
          icon: Truck,
          title: "Fast Local Availability",
          desc: "Strong supply chain ensures products are always within reach."
        },
        {
          icon: GraduationCap,
          title: "Training & Certification",
          desc: "Gain expertise with AVIXA-aligned training and brand-certified programs."
        },
        {
          icon: Building2,
          title: "Experience Centre Access",
          desc: "Show clients real demos across Hi-Fi, cinema, commercial AV and smart home."
        }
      ].map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                       shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
                       transition-all duration-500 hover:-translate-y-2 group"
          >
            {/* Icon */}
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl
                            bg-white/10 border border-white/10 shadow-inner
                            group-hover:bg-blue-500/20 transition-all">
              <Icon size={32} className="opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-100 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            {/* Decorative Line */}
            <div className="mt-6 w-0 group-hover:w-20 h-[1.5px] bg-gradient-to-r from-blue-400 to-blue-200 transition-all duration-500"></div>
          </div>
        );
      })}
    </div>

    {/* CTA */}
    <div className="flex justify-center mt-20">
      <Link
        href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
        target="_blank"
        className="group inline-flex items-center gap-4 rounded-full border border-white
                   text-white bg-transparent px-12 py-4 text-lg font-semibold
                   transition-all duration-300 hover:bg-white hover:text-black
                   hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
      >
        Become a Dealer
        <Image
          src="/whitearrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </Link>
    </div>

  </div>
</section>


<section className="relative w-full py-28 bg-white text-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl articulatcf font-black mb-6 tracking-tight">
        Solutions for Every Project Type
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Built for today’s demands across multiple industries.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

      {[
        {
          icon: Home,
          title: "Luxury Homes & Smart Residences",
          desc: "Multiroom audio, architectural speakers, networking, surveillance, and automation."
        },
        {
          icon: Building,
          title: "Enterprise & Corporate Spaces",
          desc: "Boardrooms, training rooms, townhall spaces, distributed audio."
        },
        {
          icon: Hotel,
          title: "Hotels & Hospitality",
          desc: "Ambient audio, zone control, video distribution."
        },
        {
          icon: Music2,
          title: "Bars, Lounges & Clubs",
          desc: "High-SPL commercial audio with sleek Italian design."
        },
        {
          icon: Church,
          title: "Worship Centers & Large Venues",
          desc: "Acoustics, audio distribution, speech intelligibility, and PA systems."
        }
      ].map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="p-10 rounded-3xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.08)]
                       hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]
                       border border-gray-100 transition-all duration-300
                       hover:-translate-y-2 group"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-8 rounded-2xl bg-black/5 flex items-center justify-center 
                            group-hover:bg-black group-hover:text-white transition-all duration-300">
              <Icon size={34} className="text-black group-hover:text-white transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-black transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            {/* Gold Accent Line */}
            <div className="mt-6 w-0 group-hover:w-24 h-[2px] bg-gradient-to-r from-gray-500 to-black-300 transition-all duration-500"></div>
          </div>
        );
      })}
    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <Link
        href="/experiences" target='_blank'
        className="group inline-flex items-center gap-4 rounded-full border border-black
                   text-black bg-transparent px-12 py-4 text-lg font-semibold
                   transition-all duration-300 hover:bg-black hover:text-white
                   hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]"
      >
        Visit the Experience Centre
        <Image
          src="/blackarrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </Link>
    </div>

  </div>
</section>



<section className="relative w-full py-28 bg-white text-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl articulatcf font-black tracking-tight mb-6">
        Dealer Program Overview
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Grow faster with the CED Distribution Dealer Program.
      </p>
    </div>

    {/* Two-column luxury layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left — clean stacked list */}
      <div className="space-y-10">

        {[
          {
            icon: DollarSign,
            title: "Exclusive Dealer Pricing",
            desc: "Preferential margins designed to grow your business sustainably."
          },
          {
            icon: Package,
            title: "Priority Stock Access",
            desc: "Secure inventory faster and avoid project delays."
          },
          {
            icon: ShieldCheck,
            title: "Extended Warranties",
            desc: "Longer protection for select brands and product categories."
          },
          {
            icon: UserCheck,
            title: "Dedicated Account Manager",
            desc: "Personalized support for projects, pricing, and logistics."
          },
          {
            icon: BadgePercent,
            title: "Project-Based Discounts",
            desc: "Special pricing for large home, commercial, and enterprise projects."
          },
          {
            icon: Star,
            title: "Access to Premium Brands",
            desc: "Sonos, Luhkee, KGEAR, Vicoustic, and more high-demand brands."
          },
          {
            icon: Building,
            title: "Experience Centre Access",
            desc: "Use the Soundhous Experience Centre for client demos and closings."
          }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex gap-6 items-start p-6 rounded-3xl border border-gray-200 bg-white
                         shadow-[0_0_15px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(0,0,0,0.10)]
                         transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl 
                              bg-black/5 group-hover:bg-black transition-all duration-300">
                <Icon size={32} className="text-black group-hover:text-white transition-colors" />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right — Luxury highlight panel */}
      <div className="relative p-14 bg-black text-white rounded-[2.5rem] overflow-hidden shadow-xl">

        {/* Glow Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
            A Partnership Built for Growth
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Join a growing network of elite system integrators and installers who rely 
            on CED Distribution for premium products, guaranteed availability, and world-class support.
          </p>

          {/* CTA */}
          <Link
            href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
            target="_blank"
            className="group inline-flex items-center gap-4 rounded-full border border-white
                       text-white bg-transparent px-10 py-4 text-lg font-semibold
                       transition-all duration-300 hover:bg-white hover:text-black
                       hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            Become a Dealer
            <Image
              src="/whitearrow.svg"
              alt="arrow"
              width={20}
              height={20}
              className="transition-transform duration-300 group-hover:-rotate-45"
            />
          </Link>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="relative w-full py-28 bg-white text-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl articulatcf font-black tracking-tight mb-6">
        Step Into Nigeria’s Most Advanced AV Experience Centre
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Located in Victoria Island, Lagos, our experience centre features immersive rooms tailored 
        for real-world demos. Invite clients, close bigger deals, and convert faster with spaces 
        designed to sell themselves.
      </p>
    </div>

    {/* GRID SHOWCASE — Premium Room Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

      {[
        {
          title: "Hi-Fi Listening Room",
          desc: "Experience pure, precise, high-fidelity sound in a dedicated acoustic environment.",
          img: "/hifi.jpeg"
        },
        {
          title: "Outdoor Soundscape",
          desc: "Hear powerful, weatherproof audio crafted for gardens, pools, and outdoor luxury.",
          img: "/ods.jpg"
        },
        {
          title: "Private Home Cinema",
          desc: "A cinematic environment tuned for Dolby Atmos demonstrations and private screenings.",
          img: "/phc.jpg"
        },
        {
          title: "Smart Home Automation",
          desc: "Lighting, audio, and automation working together for seamless living experiences.",
          img: "/shh.jpg"
        },
        {
          title: "Commercial Audio Zones",
          desc: "Premium commercial sound solutions for hospitality, retail, lounges, and enterprise spaces.",
          img: "/ca.jpg"
        }
      ].map((item, index) => (
        <div key={index} className="group overflow-hidden rounded-3xl bg-white border border-gray-200
                                   shadow-[0_0_15px_rgba(0,0,0,0.06)]
                                   hover:shadow-[0_0_40px_rgba(0,0,0,0.12)]
                                   transition-all duration-500 hover:-translate-y-2 flex flex-col">

          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <img 
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Text */}
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p classname="text-gray-600 flex-1 leading-relaxed">
              {item.desc}
            </p>

            {/* Gold accent */}
            <div className="mt-6 w-0 group-hover:w-24 h-[2px] bg-gradient-to-r from-gray-500 to-black-300 transition-all duration-500"></div>
          </div>

        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <Link
        href="/experiences" target='_blank'
        className="group inline-flex items-center gap-4 rounded-full border border-black
                   text-black bg-transparent px-12 py-4 text-lg font-semibold
                   transition-all duration-300 hover:bg-black hover:text-white
                   hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]"
      >
        Book a Visit
        <Image
          src="/blackarrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </Link>
    </div>

  </div>
</section>

<section className="relative w-full py-32 bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">

  {/* Soft Glow Accents */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    {/* Headline */}
    <h2 className="text-3xl md:text-6xl articulatcf font-black tracking-tight mb-6 leading-tight">
      Ready to Elevate Your Projects<br />and Grow Your Business?
    </h2>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed">
      Let’s partner and build Africa’s next generation of AV excellence.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row justify-center gap-6">

      {/* Become a Dealer */}
      <Link
        href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
        target="_blank"
        className="group inline-flex items-center gap-4 px-10 py-4 rounded-full 
                   bg-white text-black font-semibold text-lg border border-white
                   transition-all duration-300 hover:bg-transparent hover:text-white"
      >
        Become a Dealer
        <Image
          src="/blackarrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-rotate-45 group-hover:brightness-200"
        />
      </Link>

      {/* Visit Experience Centre */}
      <Link
        href="/experiences" target='_blank'
        className="group inline-flex items-center gap-4 px-10 py-4 rounded-full 
                   border border-white text-white font-semibold text-lg
                   transition-all duration-300 hover:bg-white hover:text-black"
      >
        Visit Our Experience Centre
        <Image
          src="/whitearrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </Link>

    </div>

  </div>
</section>
    </div>
  )
}

export default Distribution
