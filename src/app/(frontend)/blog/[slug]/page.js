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
  title: 'Why Most AV Projects Fail — And How Proper AV Consulting & Design Prevents Them',
  category: 'Automation',
  date: '2025-11-23',
  excerpt:
    'Explore why AV projects often underperform and how professional consulting and design ensure success, performance, and longevity.',
  image: '/cc.jpg',
  content: `
    <p class="text-gray-700 leading-relaxed mb-6">
  Across Africa's rapidly evolving built environment, audio-visual technology has quietly become one of the most influential elements of modern architecture — driving communication in boardrooms, enabling immersive brand experiences in retail, elevating worship centers, and defining lifestyle in luxury homes.
</p>

<p class="text-gray-700 leading-relaxed mb-6">
  Yet despite its growing significance, AV remains one of the least understood and most underestimated disciplines in construction. The result? Far too many AV projects fail before they even begin.
</p>

<p class="text-gray-700 leading-relaxed mb-6">
  Projects underperform. Rooms do not sound right. Systems are unstable. Users complain. Expensive equipment delivers disappointing results. What should have been a premium experience becomes an operational burden.
</p>

<p class="text-gray-700 leading-relaxed mb-8 font-medium">
  At the center of almost every failure is the absence of proper AV consulting and design.
</p>

<h3 class="text-2xl font-bold text-black mt-12 mb-4 tracking-tight">
  1. The Real Reasons AV Projects Fail
</h3>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  1.1 AV Is Treated as Installation, Not Engineering
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  The biggest misunderstanding in the construction ecosystem is the belief that AV is simply equipment installation — speakers, displays, cables, amplifiers.
</p>

<p class="text-gray-700 leading-relaxed mb-4">
  In reality, AV is a design-driven engineering discipline involving:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Acoustic modeling</li>
  <li>SPL prediction</li>
  <li>Line-of-sight calculations</li>
  <li>Projection geometry</li>
  <li>Control system logic</li>
  <li>Network architecture</li>
  <li>Heat load calculations</li>
  <li>Cable routing and electrical planning</li>
  <li>Environmental noise management</li>
  <li>User experience design</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6">
  When projects skip the design stage and go straight to installation, the entire system rests on improvisation. <strong class="font-semibold text-black">You cannot guess your way into a world-class AV space.</strong>
</p>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  1.2 AV Enters the Project Too Late
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  By the time AV shows up, ceilings are closed, walls are finished, and interior design decisions have been locked in.
</p>

<p class="text-gray-700 leading-relaxed mb-4">But AV requires infrastructure:</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Correct ceiling cavities</li>
  <li>Proper wall backing</li>
  <li>Electrical power positions</li>
  <li>Acoustic isolation materials</li>
  <li>Cable pathways</li>
  <li>Ventilation for equipment racks</li>
  <li>Conduit sizing and routing</li>
  <li>Screen throw distances</li>
  <li>Projector beam clearances</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6">
  When AV enters late, the system becomes a compromise instead of a design.  
  <span class="font-semibold text-black">The result is predictable: increased cost, redesigns, and disappointing performance.</span>
</p>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  1.3 The Missing Piece: Acoustics
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  AV system performance is 60–70% dependent on the room, not the equipment.
</p>

<p class="text-gray-700 leading-relaxed mb-4">Common issues include:</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Echo</li>
  <li>Flutter</li>
  <li>Standing waves</li>
  <li>Poor reverberation</li>
  <li>Sound leaking into adjacent spaces</li>
  <li>Speech intelligibility problems</li>
  <li>Inconsistent bass response</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6">
  Most AV failures have nothing to do with the equipment — they are failures of acoustic design that should have been addressed at the architectural stage.
</p>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  1.4 Mismatched Equipment Due to Sales-Driven Decisions
</h4>

<p class="text-gray-700 leading-relaxed mb-4">When vendors drive system design, recommendations often follow what is:</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>In stock</li>
  <li>Easiest to sell</li>
  <li>Easiest to install</li>
  <li>Cheapest to win the bid</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6">
  This leads to mismatched components that compromise the system.
</p>

<p class="text-gray-700 leading-relaxed mb-6">
  <strong class="text-black font-semibold">Example:</strong>  
  Pairing premium architectural speakers with the wrong amplifier or DSP can reduce performance by up to 60%.
</p>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  1.5 No Cross-Discipline Coordination
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  AV interacts with every discipline in building design. Without coordination:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>HVAC blocks speaker locations</li>
  <li>Lights create display reflections</li>
  <li>Electrical loads become unstable</li>
  <li>Furniture interferes with audio dispersion</li>
  <li>Carpentry hides cable access</li>
  <li>Doors compromise sound isolation</li>
  <li>Networking becomes a bottleneck</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-8">
  This is why AV design is not just technical — <strong class="text-black">it is managerial.</strong>
</p>

<h3 class="text-2xl font-bold text-black mt-12 mb-4 tracking-tight">
  2. What Proper AV Consulting and Design Actually Do
</h3>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.1 Project Discovery and Needs Assessment
</h4>

<p class="text-gray-700 leading-relaxed mb-4">Consulting begins with understanding:</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>The client's goals</li>
  <li>The space's purpose</li>
  <li>User experience expectations</li>
  <li>Operational realities</li>
  <li>Budget constraints</li>
  <li>Future expansion</li>
</ul>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.2 Engineering-Led AV Design Documentation
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  AV design produces documents that guarantee performance:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>System schematics</li>
  <li>Signal-flow diagrams</li>
  <li>Conduit & cable routing drawings</li>
  <li>Rack layouts & heat management</li>
  <li>SPL modeling & speaker placement</li>
  <li>Acoustic treatment layouts</li>
  <li>Wiring schedules</li>
  <li>Power requirements</li>
  <li>Network topology & VLAN design</li>
  <li>Control logic</li>
  <li>BoQs & tender specifications</li>
</ul>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.3 Architectural & MEP Coordination
</h4>

<p class="text-gray-700 leading-relaxed mb-4">Consultants align with:</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Architects</li>
  <li>MEP teams</li>
  <li>IT departments</li>
  <li>Interior designers</li>
  <li>Contractors</li>
</ul>

<p class="text-gray-700 leading-relaxed mb-6">
  This ensures AV becomes part of the building's DNA — <strong class="text-black">not an afterthought.</strong>
</p>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.4 Acoustic and Room Design
</h4>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Reverberation control</li>
  <li>Sound isolation</li>
  <li>Bass management</li>
  <li>Material selection</li>
  <li>Speaker dispersion mapping</li>
</ul>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.5 Vendor-Neutral Equipment Selection
</h4>

<p class="text-gray-700 leading-relaxed mb-4">
  Consultants choose equipment based solely on engineering requirements:
</p>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
  <li>Sonance</li>
  <li>K-array</li>
  <li>Focal/Naim</li>
  <li>Trinnov</li>
  <li>Sonos</li>
  <li>Vicoustic</li>
</ul>

<h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">
  2.6 Tender Evaluation and Quality Control
</h4>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-10">
  <li>Tender evaluation</li>
  <li>Contractor vetting</li>
  <li>Installation supervision</li>
  <li>System testing</li>
  <li>Commissioning</li>
  <li>Training documentation</li>
</ul>

<h3 class="text-2xl font-bold text-black mt-12 mb-4 tracking-tight">
  3. How AV Consulting Protects Your Investment
</h3>

<ul class="list-disc list-inside text-gray-700 space-y-1 mb-8">
  <li>Eliminates redesign</li>
  <li>Extends system lifespan</li>
  <li>Predictable performance</li>
  <li>Lower maintenance costs</li>
  <li>Architectural harmony</li>
  <li>Future scalability</li>
  <li>Better user experience</li>
  <li>Prevents technical failure</li>
</ul>

<h3 class="text-2xl font-bold text-black mt-12 mb-4 tracking-tight">
  4. The Leadership Perspective
</h3>

<p class="text-gray-700 leading-relaxed mb-6">
  Africa is moving toward international standards such as LEED, WELL, ISO, and AVIXA. Clients now demand modern offices, immersive boardrooms, hybrid collaboration, smart homes, premium hospitality experiences, and cinematic worship spaces.
</p>

<p class="text-gray-700 leading-relaxed mb-6">
  The buildings that excel will be those that treat AV with the same seriousness as electrical, MEP, lighting, and acoustic engineering.
</p>

<p class="text-gray-800 font-semibold leading-relaxed mb-6">
  This is the gap CED Africa is filling — elevating the AV industry with global standards, engineering discipline, and a design-first consulting philosophy.
</p>

  `,
},

  
 
]

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
