export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FadeInOnScroll from '../../components/FadeInOnScroll'

const blogPosts = [
  {
    id: 1,
    title:
      "Why Most AV Projects Fail — And How Proper AV Consulting & Design Prevents Them",
    category: "Automation",
    date: "2025-11-23",
    excerpt:
      "Explore why AV projects often underperform and how professional consulting and design ensure success, performance, and longevity.",
    image: "/pro.jpeg",

    content: `

<!-- =============================== -->
<!-- HERO IMAGE + OPTIONAL GALLERY -->
<!-- =============================== -->

<div class="w-full mb-10 space-y-4">
  

  

  <p class="text-center text-gray-500 text-sm italic pt-2">
    Precision-led AV design transforms how spaces perform and how people experience them.
  </p>
</div>


<p class="text-gray-700 text-lg leading-loose mb-8">
  Across Africa's rapidly evolving built environment, audio-visual technology has quietly become one of the most influential elements of modern architecture — driving communication in boardrooms, enabling immersive brand experiences in retail, elevating worship centers, and defining lifestyle in luxury homes.
</p>

<p class="text-gray-700 text-lg leading-loose mb-8">
  Yet despite its growing significance, AV remains one of the least understood and most underestimated disciplines in construction. The result? Far too many AV projects fail before they even begin.
</p>

<p class="text-gray-700 text-lg leading-loose mb-8">
  Projects underperform. Rooms do not sound right. Systems are unstable. Users complain. Expensive equipment delivers disappointing results. What should have been a premium experience becomes an operational burden.
</p>

<p class="text-gray-900 text-xl leading-loose mb-10 font-semibold">
  At the center of almost every failure is the absence of proper AV consulting and design.
</p>


<!-- ====================================== -->
<!-- SECTION 1 — WHY AV PROJECTS FAIL -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-16 mb-6 tracking-tight">
  1. The Real Reasons AV Projects Fail
</h3>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.1 AV Is Treated as Installation, Not Engineering
</h4>

<p class="text-gray-700 text-lg leading-loose mb-4">
  The biggest misunderstanding in the construction ecosystem is the belief that AV is simply equipment installation — speakers, displays, cables, amplifiers.
</p>

<p class="text-gray-700 text-lg leading-loose mb-4">
  In reality, AV is a design-driven engineering discipline involving:
</p>

<ul class="list-disc list-inside text-gray-700 text-lg space-y-2 mb-8">
  <li>Acoustic modeling</li>
  <li>SPL prediction</li>
  <li>Line-of-sight calculations</li>
  <li>Control system logic</li>
  <li>Network architecture</li>
</ul>

<img src="/engineering.jpg" class="w-full rounded-xl mb-10" />

<p class="text-gray-700 text-lg leading-loose mb-10">
  When projects skip the design stage and go straight to installation, the entire system rests on improvisation.
  <strong class="font-semibold text-black">You cannot guess your way into a world-class AV space.</strong>
</p>


<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.2 AV Enters the Project Too Late
</h4>

<p class="text-gray-700 text-lg leading-loose mb-10">
  By the time AV shows up, ceilings are closed, walls are finished, and interior design decisions have been locked in.
</p>

<p class="text-gray-700 text-lg leading-loose mb-6">
  When AV enters late, the system becomes a compromise instead of a design.  
  <span class="font-semibold text-black">The result is predictable: increased cost, redesigns, and disappointing performance.</span>
</p>
<p class="text-gray-700 text-lg leading-loose mb-10">But AV requires infrastructure:</p> 
<ul class="list-disc list-inside text-gray-700 text-gray-700 text-lg leading-loose mb-10 space-y-1 mb-6"> 
<li class="text-gray-700 text-lg leading-loose mb-10">Correct ceiling cavities</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Proper wall backing</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Electrical power positions</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Acoustic isolation materials</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Cable pathways</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Ventilation for equipment racks</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Conduit sizing and routing</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Screen throw distances</li> 
<li class="text-gray-700 text-lg leading-loose mb-10">Projector beam clearances</li> 
</ul> 
<p class="text-gray-700 text-lg leading-loose mb-10"> When AV enters late, the system becomes a compromise instead of a design. <span class="font-semibold text-black">The result is predictable: increased cost, redesigns, and disappointing performance.</span> </p> 





<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.3 The Missing Piece: Acoustics
</h4>


<p class="text-gray-700 leading-relaxed mb-6 text-[1.15rem]">
  AV performance is shaped far more by the room than by the equipment.  
  <span class="font-semibold text-black">60–70% of what you hear is dictated by the space itself.</span>
</p>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  When the room works against the system, even the most premium equipment cannot save it.  
  Common symptoms include:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Echo that washes out detail</li>
  <li>Flutter that makes voices feel harsh</li>
  <li>Standing waves that distort bass</li>
  <li>Uncontrolled reverberation</li>
  <li>Sound spilling into adjacent rooms</li>
  <li>Poor speech intelligibility</li>
  <li>Inconsistent low-frequency response</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-8 text-[1.15rem]">
  Most AV failures are not equipment failures —  
  <span class="font-semibold text-black">they are architectural oversights.</span>  
  Acoustics must be designed early, or the entire experience suffers.
</p>

<h4 class="text-2xl font-semibold text-gray-900 mt-12 mb-4 tracking-tight">
  1.4 Mismatched Equipment Caused by Sales-Driven Decisions
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  When system design is controlled by vendors, decisions often follow convenience, not performance:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Whatever is currently in stock</li>
  <li>Equipment that’s easiest to sell</li>
  <li>Solutions that are fastest to install</li>
  <li>Lowest-cost options to win a bid</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6 text-[1.15rem]">
  The result is mismatched components that never reach their potential.
</p>

<p class="text-gray-700 leading-relaxed mb-10 text-[1.15rem]">
  <strong class="font-semibold text-black">Example:</strong>
  Pairing architectural speakers with the wrong amplifier or DSP can reduce performance by as much as <strong>60%.</strong>
</p>

<h4 class="text-2xl font-semibold text-gray-900 mt-12 mb-4 tracking-tight">
  1.5 Lack of Cross-Discipline Coordination
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  AV interacts with every discipline in a project. Without early coordination, conflicts become inevitable:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>HVAC blocking speaker positions</li>
  <li>Lighting washing out displays</li>
  <li>Electrical instability</li>
  <li>Furniture altering audio dispersion</li>
  <li>Carpentry hiding cable access</li>
  <li>Doors failing isolation requirements</li>
  <li>Networking bottlenecks</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-10 text-[1.15rem]">
  AV design is not just technical —  
  <span class="font-semibold text-black">it is a managerial discipline that protects architectural intent.</span>
</p>





<!-- ====================================== -->
<!-- SECTION 2 — WHAT CONSULTING DOES -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-8 tracking-tight">
  2. What Proper AV Consulting and Design Actually Do
</h3>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.1 Project Discovery & Needs Assessment
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  Every successful AV system begins with clarity — understanding:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Client goals</li>
  <li>Space functionality</li>
  <li>User expectations</li>
  <li>Operational realities</li>
  <li>Budget boundaries</li>
  <li>Future expansion needs</li>
</ul>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.2 Engineering-Led AV Design Documentation
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  Proper AV design produces the documents that guarantee predictable performance:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>System schematics</li>
  <li>Signal-flow diagrams</li>
  <li>Conduit & cable routing plans</li>
  <li>Rack & heat-load layouts</li>
  <li>SPL & speaker placement modeling</li>
  <li>Acoustic treatment plans</li>
  <li>Wiring schedules</li>
  <li>Power requirements</li>
  <li>Network topology / VLAN design</li>
  <li>Control logic</li>
  <li>BoQs and tender packs</li>
</ul>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.3 Architectural & MEP Coordination
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  Consultants collaborate directly with:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Architects</li>
  <li>MEP engineers</li>
  <li>IT teams</li>
  <li>Interior designers</li>
  <li>Contractors</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-10 text-[1.15rem]">
  This alignment ensures AV is integrated cleanly —  
  <span class="font-semibold text-black">not forced into the project at the end.</span>
</p>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.4 Acoustic & Room Design
</h4>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Reverberation control</li>
  <li>Sound isolation</li>
  <li>Bass management</li>
  <li>Material selection</li>
  <li>Dispersion mapping</li>
</ul>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.5 Vendor-Neutral Equipment Selection
</h4>

<p class="text-gray-700 leading-relaxed mb-4 text-[1.1rem]">
  Recommendations are based on engineering needs — not sales targets:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 text-[1.05rem]">
  <li>Sonance</li>
  <li>K-array</li>
  <li>Focal / Naim</li>
  <li>Trinnov</li>
  <li>Sonos</li>
  <li>Vicoustic</li>
</ul>

<h4 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">
  2.6 Tender Evaluation & Quality Control
</h4>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-12 text-[1.05rem]">
  <li>Tender evaluation</li>
  <li>Contractor vetting</li>
  <li>Supervision & oversight</li>
  <li>System testing</li>
  <li>Commissioning</li>
  <li>Training & documentation</li>
</ul>

<!-- ====================================== -->
<!-- SECTION 3 — PROTECTING INVESTMENT -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-8 tracking-tight">
  3. How AV Consulting Protects Your Investment
</h3>

<ul class="list-disc list-inside text-gray-700 space-y-2 mb-10 text-[1.1rem]">
  <li>Eliminates redesign and rework</li>
  <li>Extends system lifespan</li>
  <li>Predictable, consistent performance</li>
  <li>Lower maintenance costs</li>
  <li>Architectural harmony</li>
  <li>Future-ready scalability</li>
  <li>Better user experience</li>
  <li>Reduced technical failure</li>
</ul>

<h3 class="text-3xl font-bold text-black mt-16 mb-6 tracking-tight">
  4. The Leadership Perspective
</h3>

<p class="text-gray-700 leading-relaxed mb-6 text-[1.15rem]">
  Africa is moving toward global standards — LEED, WELL, ISO, AVIXA.  
  Clients expect smart offices, immersive boardrooms, hybrid collaboration, luxury homes, premium hospitality, and world-class worship spaces.
</p>

<p class="text-gray-700 leading-relaxed mb-6 text-[1.15rem]">
  The projects that thrive will be those that treat AV as engineering, not equipment.
</p>

<p class="text-gray-800 font-semibold leading-relaxed mb-10 text-[1.2rem]">
  This is the gap we fill — delivering design-first, standards-driven consulting that elevates the entire project.
</p>


<!-- ====================================== -->
<!-- SOFT CTA -->
<!-- ====================================== -->

<div class="mt-20 mb-10 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-center shadow-md">
  <h3 class="text-2xl font-bold text-gray-900 mb-4">Work With a Design-First AV Partner</h3>
  <p class="text-gray-700 text-lg mb-6">
    Whether you're an architect, interior designer, or contractor, our consulting team ensures your project delivers the performance, aesthetics, and reliability your clients expect.
  </p>

  <div class="flex justify-center gap-4">
    <a href="https://forms.zohopublic.com/cedafrica1/form/CEDAFRICATRADEPARTNERREGISTRATION/formperma/GjW-gerRT7hXlJQd4HTw7SzZo9YZkQ4nIuC9Yapk-q8"  target="_blank" class="text-black font-semibold underline underline-offset-4">
      Become a Trade Partner →
    </a>
    <a href="/projects" class="text-black font-semibold underline underline-offset-4">
      View Our Projects →
    </a>
    <a href="/contact" class="text-black font-semibold underline underline-offset-4">
      Start a Project →
    </a>
  </div>
</div>

`,
  },
];

export default async function BlogPost({ params }) {
  const { slug } = params
  const postId = parseInt(slug)

  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-white">
      <section
  className="
    relative 
    min-h-screen 
    w-full
    flex 
    items-center 
    justify-center 
    text-white 
    bg-black
    bg-fixed 
    bg-cover 
    bg-center
    bg-no-repeat
    bg-[url('/.jpg')]
  "
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

  {/* Content */}
  <div className="relative z-10 container-fluid px-6 py-20 text-center max-w-4xl mx-auto">
    <FadeInOnScroll>
      {/* Category & Date */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-xs lg:text-sm articulatcf font-black text-white uppercase border border-white/40 px-4 py-2 rounded-full tracking-wide">
          {post.category}
        </span>
        <span className="text-xs lg:text-sm articulatcfLight text-gray-300">
          {formatDate(post.date)}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl lg:text-6xl xl:text-7xl articulatcf font-black leading-tight drop-shadow-xl">
        {post.title}
      </h1>
    </FadeInOnScroll>
  </div>
</section>

      <section data-light className="bg-white">
        <div className="container-fluid px-6 py-10">
          <FadeInOnScroll>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </FadeInOnScroll>
        </div>
      </section>

      <section data-light className="bg-white pb-20">
        <div className="container-fluid px-6 max-w-4xl mx-auto">
          
            <div
              className="prose prose-lg max-w-none articulatcfLight text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          

          <FadeInOnScroll className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-6 py-4 transition-all duration-300 hover:bg-black hover:text-white hover-btn"
            >
              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="transform transition-transform duration-300 group-hover:rotate-180 group-hover:invert"
              />
              <span className="articulatcf font-black uppercase">Back to Blog</span>
            </Link>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
