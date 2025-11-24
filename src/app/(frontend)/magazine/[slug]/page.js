export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FadeInOnScroll from '../../components/FadeInOnScroll'

const magazineArticles = {
  'okba-chabbi-crafting-conscience-digital-age': {
    title: 'Okba Chabbi: Crafting a Conscience for the Digital Age',
    category: 'Featured',
    date: '2025-11-20',
    image: '/bg.png',
    content: `
      <p>In an era where technology and humanity intersect more than ever, Okba Chabbi stands as a visionary leader crafting a conscience for the digital age. His innovative approach to business and technology has reshaped how we think about digital transformation.</p>
      <p>Through his leadership, Chabbi has demonstrated that success in the digital realm requires not just technical expertise, but a deep understanding of human values and ethical considerations.</p>
      <p>His journey serves as an inspiration for leaders across Africa and beyond, showing that business excellence and social responsibility can go hand in hand.</p>
    `,
  },
  'entrepreneurial-pulse-africa-youth': {
    title: "The Entrepreneurial Pulse: How Africa's Youth Are Rewriting Business Norms",
    category: 'Business',
    date: '2025-11-15',
    image: '/bg.png',
    content: `
      <p>Africa's youth are at the forefront of a business revolution, challenging traditional norms and creating innovative solutions that address local and global challenges.</p>
      <p>This new generation of entrepreneurs brings fresh perspectives, leveraging technology and creativity to build sustainable businesses that make a real impact.</p>
      <p>Their approach to business is rewriting the rules, proving that age is not a barrier to success, but rather an advantage in today's rapidly changing world.</p>
    `,
  },
  'new-economic-horizon-africa-trade': {
    title: 'The New Economic Horizon: How Africa is Redefining Global Trade Relationships',
    category: 'Economy',
    date: '2025-11-10',
    image: '/bg.png',
    content: `
      <p>Africa is emerging as a key player in global trade, redefining relationships and creating new economic opportunities that benefit the continent and its partners.</p>
      <p>Through strategic partnerships and innovative trade policies, African nations are positioning themselves as essential contributors to the global economy.</p>
      <p>This shift represents a new economic horizon, one where Africa's potential is finally being realized on the world stage.</p>
    `,
  },
  'top-finance-leaders': {
    title: 'Top Finance Leaders Redefining the Future of Business',
    category: 'Finance',
    date: '2025-11-05',
    image: '/bg.png',
    content: `
      <p>Finance leaders across Africa are redefining the future of business through innovative strategies and forward-thinking approaches.</p>
      <p>These visionaries are not just managing money—they're shaping the economic landscape and creating opportunities for growth and development.</p>
    `,
  },
  'empowering-women-business-2025': {
    title: 'Most Empowering Women in Business Everyone Should Know, 2025',
    category: 'Leadership',
    date: '2025-11-01',
    image: '/bg.png',
    content: `
      <p>2025 has seen remarkable women leaders emerge across Africa, breaking barriers and setting new standards in business excellence.</p>
      <p>These empowering women are not just succeeding in their fields—they're creating pathways for others to follow and inspiring the next generation of leaders.</p>
    `,
  },
  'visionary-indigenous-leader-2025': {
    title: 'Visionary Indigenous Leader Shaping Community and Opportunity, 2025',
    category: 'Community',
    date: '2025-10-28',
    image: '/bg.png',
    content: `
      <p>Indigenous leaders are playing a crucial role in shaping communities and creating opportunities that honor tradition while embracing innovation.</p>
      <p>These visionary leaders demonstrate that sustainable development comes from understanding and respecting local knowledge and culture.</p>
    `,
  },
}

export default async function MagazineArticle({ params }) {
  const { slug } = params

  const article = magazineArticles[slug]

  if (!article) {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="container-fluid px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInOnScroll>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm articulatcf font-black text-white uppercase border border-white px-4 py-2 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm articulatcfLight text-gray-300">
                  {formatDate(article.date)}
                </span>
              </div>
              <h1 className="text-3xl lg:text-6xl articulatcf font-black mb-6 leading-tight">
                {article.title}
              </h1>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section data-light className="bg-white">
        <div className="container-fluid px-6 py-10">
          <FadeInOnScroll>
            <div className="max-w-5xl mx-auto">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section data-light className="bg-white pb-20">
        <div className="container-fluid px-6 max-w-4xl mx-auto">
          <FadeInOnScroll>
            <div
              className="prose prose-lg max-w-none articulatcfLight text-gray-700 space-y-6 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </FadeInOnScroll>

          <FadeInOnScroll className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/magazine"
              className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-6 py-4 transition-all duration-300 hover:bg-black hover:text-white hover-btn"
            >
              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="transform transition-transform duration-300 group-hover:rotate-180 group-hover:invert"
              />
              <span className="articulatcf font-black uppercase">Back to Magazine</span>
            </Link>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
