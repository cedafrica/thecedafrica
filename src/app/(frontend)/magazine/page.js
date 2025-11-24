export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'

const magazineData = {
  title: "CED AFRICA AV MAGAZINE",
  edition: 'Nov, 2025',
  description:
    'Where Innovation Meets Audiovisual Excellence',
  coverImage: '/bg.png',
  featuredArticle: {
    title: 'Okba Chabbi: Crafting a Conscience for the Digital Age',
    image: '/bg.png',
    slug: 'okba-chabbi-crafting-conscience-digital-age',
  },
  articles: [
    {
      id: 1,
      title: "Redefining Africa’s Audiovisual Future",
      category: 'Business',
      date: '2025-11-15',
      image: '/vol1.webp',
      slug: 'entrepreneurial-pulse-africa-youth',
    },
   
    
  ],
  additionalSections: [
    {
      title: 'Top Finance Leaders Redefining the Future of Business',
      slug: 'top-finance-leaders',
    },
    {
      title: 'Most Empowering Women in Business Everyone Should Know, 2025',
      slug: 'empowering-women-business-2025',
    },
    {
      title: 'Visionary Indigenous Leader Shaping Community and Opportunity, 2025',
      slug: 'visionary-indigenous-leader-2025',
    },
  ],
}

const Magazine = async () => {
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
  className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/magaz.webp')" }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative container-fluid px-6 py-20">
    <div className="max-w-5xl mx-auto text-center">
      <FadeInOnScroll>
        <div className="mb-6">
          <span className="text-sm articulatcf font-black text-white uppercase tracking-wider">
            Edition: {magazineData.edition}
          </span>
        </div>

        <h1 className="text-4xl lg:text-7xl articulatcf font-black mb-8 leading-tight">
          {magazineData.title}
        </h1>

        <p className="text-lg lg:text-xl articulatcfLight text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {magazineData.description}
        </p>

        <div className="flex justify-center">
          <Link
            href="#read-magazine"
            className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
          >
            <span className="articulatcf font-black uppercase">Read Digital Magazine</span>
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
  </div>
</section>

      

      <section data-light className="bg-gray-100 py-20">
        <div className="container-fluid px-6">
          <FadeInOnScroll>
            <h2 className="text-4xl lg:text-5xl articulatcf font-black text-black text-center mb-16">
              MAGAZINE
            </h2>
          </FadeInOnScroll>

          <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {magazineData.articles.map((article) => (
      <FadeInOnScroll key={article.id} className="group">
        <Link href={`/magazine/${article.slug}`} className="block">

          {/* Magazine Image */}
          <div className="flex justify-center">
            <Image
              src={article.image}
              alt={article.title}
              width={400}    // medium size
              height={567}   // scaled proportionally (400/793*1123)
              className="w-auto h-auto object-contain"
            />
          </div>

          {/* Text underneath */}
          <div className="mt-4 text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs articulatcf font-black uppercase text-gray-800">
                {article.category}
              </span>
              <span className="text-xs articulatcfLight text-gray-500">
                {formatDate(article.date)}
              </span>
            </div>

            <h3 className="text-sm md:text-base articulatcf font-black text-black mb-2">
              {article.title}
            </h3>

            <div className="flex items-center gap-2 text-black">
              <span className="text-xs articulatcf font-black uppercase">
                Read More
              </span>
              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={12}
                height={12}
              />
            </div>
          </div>

        </Link>
      </FadeInOnScroll>
    ))}
  </div>
</div>

        </div>
      </section>

      
      <section className="relative overflow-hidden py-28 bg-black text-white">
        <div className="container-fluid px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-3xl lg:text-4xl articulatcf font-black mb-6">
              There&apos;s More for You
            </h2>
            <p className="text-lg articulatcfLight text-gray-300 mb-8 max-w-2xl mx-auto">
              Share your inspirational story with our community! Get featured in our magazine to
              showcase your journey and showcase your story to the world.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full border border-white text-white bg-transparent px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover-btn"
            >
              <span className="articulatcf font-black uppercase">Talk to Us</span>
              <Image
                src="/whitearrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:-rotate-45"
              />
            </Link>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}

export default Magazine
