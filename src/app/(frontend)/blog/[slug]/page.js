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
  Well-considered AV design protects architectural intent and prevents downstream compromise.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  As buildings across Africa become more complex and experience-driven, audiovisual systems have moved from being optional add-ons to essential infrastructure. AV now shapes how people communicate in corporate spaces, how brands are experienced in retail environments, how worship is delivered, and how luxury residences function day to day.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  Yet despite its growing influence on spatial experience, AV is still frequently misunderstood within the project lifecycle. It is often introduced late, treated as installation rather than design, and left to be resolved after key architectural decisions have already been made.
</p>

<p class="text-gray-900 text-xl leading-relaxed font-semibold mb-10">
  When this happens, AV does not fail because of technology — it fails because it was never properly designed.
</p>

<!-- ====================================== -->
<!-- SECTION 1 — WHY AV PROJECTS FAIL -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-6 tracking-tight">
  1. The Real Reasons AV Projects Fail
</h3>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.1 AV Is Treated as Installation, Not Engineering
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  One of the most common misconceptions in building projects is that AV simply involves installing equipment — speakers, screens, amplifiers, and cabling. In reality, AV is an engineering-led discipline that directly affects how a space performs.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-4">
  Proper AV design involves:
</p>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Acoustic modelling and reverberation control</li>
  <li>Sound pressure level and coverage prediction</li>
  <li>Sightline and viewing-angle analysis</li>
  <li>Control system logic and user experience</li>
  <li>Network and infrastructure planning</li>
</ul>

<img src="/engineering.jpg" class="w-full rounded-2xl mb-10 shadow" />

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  When these considerations are skipped, installation becomes reactive. Systems are forced into spaces that were never designed to support them.
  <strong class="text-black">AV performance cannot be improvised after construction.</strong>
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.2 AV Is Introduced Too Late in the Project
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  In many projects, AV specialists are only engaged once ceilings are closed, walls are finished, and interior layouts are fixed. At that point, AV decisions are no longer design-led — they are compromises.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  AV systems require space, power, ventilation, cable pathways, acoustic treatments, and coordination with other services.
  <strong class="text-black">Late AV involvement almost always results in higher costs and reduced performance.</strong>
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.3 Acoustics Are Often Overlooked
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  Sound quality is determined far more by the room than by the equipment within it. Even the most premium speakers will underperform in a space that has not been acoustically considered.
</p>

<ul class="list-disc list-inside text-gray-800 space-y-2 text-[1.1rem] mb-8">
  <li>Excessive reverberation</li>
  <li>Poor speech intelligibility</li>
  <li>Standing waves and bass buildup</li>
  <li>Sound leakage between spaces</li>
  <li>Uncontrolled reflections</li>
</ul>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  These are not technology failures — they are spatial and architectural coordination issues.
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.4 Equipment Is Selected Without System Design
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  When equipment selection is driven by sales rather than system design, mismatches occur — incorrect speaker types, underpowered amplification, poorly configured DSP, and inconsistent coverage.
</p>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-10">
  In many cases, these mismatches reduce overall system performance by more than half.
</p>

<h4 class="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1.5 Lack of Cross-Discipline Coordination
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
  AV intersects with architecture, lighting, HVAC, IT, interior design, and furniture planning. Without early coordination, ceiling congestion, visual clutter, and service conflicts become unavoidable.
</p>

<!-- ====================================== -->
<!-- SECTION 2 — WHAT CONSULTING DOES -->
<!-- ====================================== -->

<h3 class="text-3xl font-extrabold text-black mt-20 mb-6 tracking-tight">
  2. What Proper AV Consulting & Design Actually Achieve
</h3>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.1 Early Project Understanding
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  Effective AV consulting begins with understanding how a space is intended to function — not just technically, but experientially.
</p>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>User behaviour and occupancy patterns</li>
  <li>Functional intent of each space</li>
  <li>Budget alignment</li>
  <li>Long-term flexibility and scalability</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.2 Engineering-Led Documentation
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  AV consultants translate intent into clear, buildable documentation that integrates seamlessly into architectural and MEP drawings.
</p>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>System architecture and signal flow</li>
  <li>Cable routing and infrastructure planning</li>
  <li>Rack layouts and equipment schedules</li>
  <li>Acoustic strategies</li>
  <li>Clear scopes and BoQs</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.3 Coordination Across Disciplines
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-10">
  <li>Architectural teams</li>
  <li>MEP consultants</li>
  <li>Interior designers</li>
  <li>IT and smart systems teams</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.4 Acoustic and Room Performance Design
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Reverberation control strategies</li>
  <li>Material selection support</li>
  <li>Bass and low-frequency management</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.5 Vendor-Neutral Equipment Specification
</h4>

<p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  Independent AV consulting ensures that equipment is selected based on performance and suitability — not brand bias.
</p>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-10">
  <li>System-appropriate loudspeakers</li>
  <li>Correct amplification and DSP</li>
  <li>Long-term serviceability</li>
</ul>

<h4 class="text-2xl font-bold text-gray-900 mt-10 mb-4">
  2.6 Tender Review and Quality Control
</h4>

<ul class="list-disc list-inside space-y-2 text-gray-800 text-[1.1rem] mb-8">
  <li>Technical tender evaluation</li>
  <li>Contractor capability review</li>
  <li>Commissioning and verification</li>
</ul>

<!-- ====================================== -->
<!-- CTA BOX -->
<!-- ====================================== -->

<div class="mt-20 p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg text-center">
  <h3 class="text-2xl font-extrabold text-gray-900 mb-4">
    A Better Way to Integrate AV
  </h3>
  <p class="text-gray-700 text-[1.15rem] leading-relaxed mb-6">
    For architects, AV consulting is not about adding complexity. It is about protecting design intent, reducing coordination risk, and delivering spaces that perform as beautifully as they look.
  </p>

  <div class="flex justify-center gap-6">
    <a href="/contact" class="text-black font-semibold underline underline-offset-4">
      Start a Conversation →
    </a>
    <a href="/projects" class="text-black font-semibold underline underline-offset-4">
      View Our Projects →
    </a>
  </div>
</div>

    `,
  },
   /* ========================================================= */
  /*  BLOG 2                                                   */
  /* ========================================================= */

  {
  id: 2,
  title: "The AV Problem Architects Only Discover When It’s Too Late",
  category: "Architecture & AV Consulting",
  date: "2025-12-25",
  excerpt:
    "After decades of working on buildings across residential, commercial, hospitality, and public spaces, one truth has never changed. Most architectural compromises blamed on technology are caused by when AV decisions are made.",
  image: "/phc.jpg",

  content: `
    <p class="text-center text-gray-500 text-sm italic pt-2 mb-12">
      When technology is designed early, it disappears into the architecture.
      When it arrives late, it competes with it.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      After decades of working on buildings across residential, commercial,
      hospitality, and public spaces, one truth has never changed.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      No architect ever intends to compromise their design.
      It usually happens quietly, much later, because of AV.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      Not because the architect lacked vision.
      Not because the technology was poor.
      But because the technology arrived after the architecture had already made
      its most important decisions.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      By the time AV enters the conversation, the ceiling is already defined.
      The lighting concept is locked.
      The MEP routes are coordinated.
      And the architecture is no longer flexible.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      That is when good buildings begin to negotiate with technology instead of
      commanding it.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      The Moment Things Start Going Wrong
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      It usually begins innocently.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      A screen is requested.
      A sound system is “needed.”
      Someone asks, “Can we just add speakers here?”
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      On paper, it looks simple.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      In reality, this is where architecture begins to lose leverage.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      Because AV is not decorative.
      It is spatial, acoustic, electrical, thermal, and experiential, all at once.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      When introduced late, it does not adapt quietly.
      It demands space, and space must come from somewhere.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      So ceilings are lowered.
      Lines are interrupted.
      Symmetry is sacrificed.
      Acoustics are “corrected” instead of designed.
      Technology becomes visible, not by intention, but by necessity.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      At this point, the building still functions.
      But it no longer feels resolved.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      What Most People Misunderstand About AV
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      After many years in this industry, I can say this confidently.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      Most AV problems have nothing to do with equipment.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      They are problems of timing.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      When AV is treated as a late stage addition, it behaves like an intruder.
      When it is considered early, it behaves like a collaborator.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      Good AV consulting is not about choosing brands.
      It is not about selling devices.
      And it is certainly not about filling spaces with technology.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      At its best, AV consulting is about preserving architectural intent while
      ensuring spaces perform the way people actually use them.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      Why Architects Feel the Pain More Than Anyone Else
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      When AV is added late, the consequences rarely land on the AV contractor.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      They land on the architect.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      Clients don’t say, “The AV consultant failed.”
      They say, “The design doesn’t feel as clean as the render.”
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      They don’t complain about cable routes.
      They complain about visual clutter.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      They don’t talk about acoustics in technical terms.
      They say, “The room doesn’t sound right.”
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      And slowly, architecture is blamed for compromises it never created,
      but was forced to absorb.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      The Rule That Has Saved More Projects Than Any Specification
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      There is a rule I have seen save time, money, and design integrity again
      and again.
    </p>

    <p class="text-2xl font-bold text-black mb-12 text-center">
      If it affects the ceiling, it must be discussed early.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      Speakers.
      Microphones.
      Cameras.
      Screens.
      Sensors.
      Acoustic treatments.
      Control interfaces.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      These are not accessories.
      They are spatial decisions.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      When architects engage AV early, something powerful happens.
    </p>

    <ul class="list-disc list-inside space-y-3 text-gray-800 text-[1.1rem] mb-12">
      <li>Ceilings stay clean.</li>
      <li>Acoustics are designed, not corrected.</li>
      <li>Technology aligns with proportions and sightlines.</li>
      <li>Control feels intuitive, not intrusive.</li>
      <li>The building feels intentional all the way through.</li>
    </ul>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      Most importantly, technology disappears into the architecture.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      What Early AV Collaboration Really Gives Architects
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      When AV consulting is brought in early, not to dominate, but to listen,
      architecture gains.
    </p>

    <ul class="list-disc list-inside space-y-3 text-gray-800 text-[1.1rem] mb-12">
      <li>Freedom, not restriction.</li>
      <li>Fewer redesign cycles.</li>
      <li>Cleaner detailing.</li>
      <li>Better coordination with MEP.</li>
      <li>Fewer “on site surprises.”</li>
      <li>A final space that feels resolved, not negotiated.</li>
    </ul>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-12">
      This is not about adding more consultants.
      It is about removing future compromises.
    </p>

    <h3 class="text-3xl font-extrabold text-black mt-20 mb-6">
      A Final Thought From Experience
    </h3>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
  Across decades of real projects, the most expensive AV mistakes were never technical.
</p>


    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-6">
      They were strategic.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      They happened when AV was treated as something to “fit in later,” instead
      of something to design alongside architecture.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed mb-8">
      Great buildings are not just seen.
      They are heard, felt, and experienced.
    </p>

    <p class="text-gray-800 text-[1.15rem] leading-relaxed">
      And those experiences must be designed early.
    </p>
    <!-- ====================================== -->
<!-- CTA BOX -->
<!-- ====================================== -->

<div class="mt-20 p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg text-center">
  <h3 class="text-2xl font-extrabold text-gray-900 mb-4">
    A Better Way to Integrate AV
  </h3>
  <p class="text-gray-700 text-[1.15rem] leading-relaxed mb-6">
    For architects, AV consulting is not about adding complexity. It is about protecting design intent, reducing coordination risk, and delivering spaces that perform as beautifully as they look.
  </p>

  <div class="flex justify-center gap-6">
    <a href="/consulting" class="text-black font-semibold underline underline-offset-4">
      Start a Conversation →
    </a>
    <a href="/projects" class="text-black font-semibold underline underline-offset-4">
      View Our Projects →
    </a>
  </div>
</div>
  `,
}

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

          <h1 className="text-3xl md:text-2xl lg:text-2xl font-black leading-tight text-white drop-shadow-xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* =============================== */}
      {/* FEATURE IMAGE */}
      {/* =============================== */}
      <section className="bg-white py-14">
      
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={post.image}
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
       
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
