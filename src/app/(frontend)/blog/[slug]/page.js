export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import React from "react"
import { notFound } from "next/navigation"
import Image from "next/legacy/image"
import Link from "next/link"
import FadeInOnScroll from "../../components/FadeInOnScroll"

/* ========================================================= */
/*  BLOG DATA — YOU CAN ADD MULTIPLE POSTS HERE              */
/* ========================================================= */

const blogPosts = [
  {
    id: 1,
    title:
      "Why Most AV Projects Fail — And How Proper AV Consulting & Design Prevents Them",
    category: "Automation & AV Strategy",
    date: "2025-11-23",
    excerpt:
      "Explore why AV projects often underperform and how professional consulting and design ensure success, performance, and longevity.",
    image: "/pro.jpeg",

    content: `
    
<!-- =============================== -->
<!-- OPTIONAL HEADER SUBTEXT -->
<!-- =============================== -->

<p class="text-center text-gray-500 text-sm italic pt-2 mb-10">
  Precision-led AV design transforms how spaces perform and how people experience them.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  Across Africa’s rapidly evolving built environment, audio-visual technology has quietly become one of the most influential elements of modern architecture — powering communication in boardrooms, creating immersive brand experiences in retail, elevating worship centers, and defining lifestyle in luxury homes.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  Yet despite its growing significance, AV remains one of the least understood and most underestimated disciplines in construction. The result? Far too many AV projects fail before they even begin.
</p>

<p class="text-gray-900 text-xl leading-relaxed font-semibold mb-10">
  At the center of almost every failure is the absence of proper AV consulting and design.
</p>

<!-- ====================================== -->
<!-- SECTION 1 — WHY AV PROJECTS FAIL -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-6 tracking-tight">
  1. The Real Reasons AV Projects Fail
</h3>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.1 AV Is Treated as Installation — Not Engineering
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-4">
  The biggest misunderstanding in the construction ecosystem is the belief that AV simply means installation — speakers, displays, amplifiers, cables.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-4">
  In reality, AV is an engineering-driven discipline requiring:
</p>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Acoustic modeling</li>
  <li>SPL prediction</li>
  <li>Line-of-sight calculations</li>
  <li>Control system logic</li>
  <li>Network topology</li>
</ul>

<img src="/engineering.jpg" class="w-full rounded-2xl mb-10 shadow" />

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  When projects skip the design phase and jump straight to installation, the entire system rests on improvisation.  
  <strong class="text-black">You cannot guess your way into a world-class AV experience.</strong>
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.2 AV Enters the Project Too Late
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  By the time AV teams are involved, ceilings have closed, walls finished, and interior layouts locked. The system becomes a compromise, not a design.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  AV requires infrastructure — conduits, power locations, acoustics, ventilation, cable routes.  
  <strong class="text-black">When AV enters late, cost increases and performance drops.</strong>
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.3 The Missing Piece: Acoustics
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  60–70% of what you hear is determined by the room, not the speaker.  
  <span class="font-semibold">Even premium equipment fails inside a poorly designed space.</span>
</p>

<ul class="list-disc list-inside text-gray-800 space-y-2 text-[1.1rem] mb-8">
  <li>Echo</li>
  <li>Standing waves</li>
  <li>Poor speech intelligibility</li>
  <li>Flutter echo</li>
  <li>Sound leakage</li>
</ul>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  Most AV failures are not equipment issues — they are architectural oversights.
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.4 Mismatched Equipment Due to Sales-Driven Decisions
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  Sales-led decisions lead to mismatched systems — wrong amps, wrong speakers, poor DSP logic.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  A mismatch can reduce performance by up to <strong>60%.</strong>
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.5 Lack of Cross-Discipline Coordination
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  AV interacts with architecture, MEP, lighting, IT, interior design, furniture, HVAC — without early coordination, conflicts are guaranteed.
</p>

<!-- ====================================== -->
<!-- SECTION 2 — WHAT CONSULTING DOES -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-6 tracking-tight">
  2. What Proper AV Consulting & Design Actually Accomplish
</h3>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.1 Project Discovery & Needs Assessment
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Client goals</li>
  <li>Space functionality</li>
  <li>User behavior</li>
  <li>Budget boundaries</li>
  <li>Future expansion</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.2 Engineering-Led AV Documentation
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Signal flow</li>
  <li>Topologies</li>
  <li>Cable routing</li>
  <li>Rack layouts</li>
  <li>Acoustic plans</li>
  <li>BoQs</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.3 Architectural & MEP Coordination
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-10">
  <li>Architects</li>
  <li>MEP</li>
  <li>IT teams</li>
  <li>Interior designers</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.4 Acoustic & Room Design
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Reverberation control</li>
  <li>Bass management</li>
  <li>Material selection</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.5 Vendor-Neutral Equipment Selection
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-10">
  <li>Sonance</li>
  <li>K-array</li>
  <li>Focal / Naim</li>
  <li>Vicoustic</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.6 Tender Evaluation & Quality Control
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Evaluation</li>
  <li>Contractor vetting</li>
  <li>Commissioning</li>
</ul>

<!-- ====================================== -->
<!-- CTA BOX -->
<!-- ====================================== -->

<div class="mt-20 p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg text-center">
  <h3 class="text-2xl font-extrabold text-gray-900 mb-4">
    Work With a Design-First AV Partner
  </h3>
  <p class="text-gray-700 text-[1.15rem] leading-relaxed mb-6">
    Architects, integrators, and homeowners trust our consulting team to deliver
    predictable, premium AV experiences every time.
  </p>

  <div class="flex justify-center gap-6">
    <a href="/contact" class="text-black font-semibold underline underline-offset-4">
      Start a Project →
    </a>

    <a href="/projects" class="text-black font-semibold underline underline-offset-4">
      View Our Projects →
    </a>

    <a href="https://forms.zohopublic.com/cedafrica1/form/CEDAFRICATRADEPARTNERREGISTRATION/formperma/GjW-gerRT7hXlJQd4HTw7SzZo9YZkQ4nIuC9Yapk-q8"
       target="_blank"
       class="text-black font-semibold underline underline-offset-4">
      Become a Trade Partner →
    </a>
  </div>
</div>

    `,
  },
]

/* ========================================================= */
/*   PAGE COMPONENT                                           */
/* ========================================================= */

export default async function BlogPost({ params }) {
  const { slug } = params
  const post = blogPosts.find((p) => p.id === parseInt(slug))

  if (!post) notFound()

  const formatDate = (d) => {
    const date = new Date(d)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="bg-white">

      {/* =============================== */}
      {/* PREMIUM HERO */}
      {/* =============================== */}
      <section
        className="relative min-h-[60vh] bg-black bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

        <div className="relative z-10 px-10 md:px-20 py-24 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs md:text-sm font-bold uppercase border border-white/40 px-4 py-1.5 rounded-full tracking-wide text-white">
              {post.category}
            </span>
            <span className="text-xs md:text-sm text-gray-300">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* =============================== */}
      {/* FEATURE IMAGE */}
      {/* =============================== */}
      <section className="bg-white py-14">
        <FadeInOnScroll>
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={post.image}
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </FadeInOnScroll>
      </section>

      {/* =============================== */}
      {/* CONTENT */}
      {/* =============================== */}
      <section className="bg-white pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <article
            className="
              prose 
              prose-lg 
              max-w-none 
              leading-relaxed 
              text-gray-900
              prose-headings:font-bold 
              prose-headings:text-gray-900 
              prose-h3:text-3xl 
              prose-h4:text-2xl
              prose-p:text-[1.15rem]
              prose-li:text-[1.15rem]
              prose-img:rounded-2xl 
              prose-img:shadow-md
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* =============================== */}
          {/* BACK CTA */}
          {/* =============================== */}
          <FadeInOnScroll>
            <div className="mt-20 pt-10 border-t border-gray-200 flex justify-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-black text-white font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-black border border-black"
              >
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                  className="transition-transform duration-300 group-hover:-rotate-180 group-hover:invert"
                />
                <span>Back to Blog</span>
              </Link>
            </div>
          </FadeInOnScroll>

        </div>
      </section>

    </div>
  )
}
