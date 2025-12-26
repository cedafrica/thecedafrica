'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'

const blogPosts = [
  
  {
    id: 1,
    title: 'Why Most AV Projects Fail — And How Proper AV Consulting & Design Prevent Them',
    category: 'AV-Consulting',
    date: '2025-11-23',
    excerpt:
      'AV failures are rarely about bad equipment. They are strategic mistakes made too late. This insight from CED Consulting explains why AV should never be an afterthought — and how early AV consulting protects design intent, performance, and long-term value.',
    image: '/pro.jpeg',

    seo: {
      metaTitle:
        'Why Most AV Projects Fail | AV Consulting & AV Design Explained',
      metaDescription:
        'Most AV projects fail due to late decisions, poor planning, and lack of AV consulting. Learn how professional AV design prevents costly rework, poor acoustics, and underperforming systems.',
      keywords: [
        'AV consulting',
        'audiovisual consulting',
        'AV design',
        'why AV projects fail',
        'AV planning',
        'integrated AV systems',
        'AV for architects',
        'AV for luxury homes',
        'commercial AV consulting',
      ],
      ogTitle:
        'Why Most AV Projects Fail — And How Proper AV Consulting Prevents It',
      ogDescription:
        'AV failures are strategic, not technical. Discover how early AV consulting and design protect performance, budgets, and architectural intent.',
      ogImage: '/pro.jpeg',
      canonical: 'https://www.ced.africa/blog/why-most-av-projects-fail',
    },
  },

  {
  id: 2,
  title: "The AV Problem Architects Only Discover When It’s Too Late",
  category: "AV-Consulting",
  date: "2025-12-25",
  excerpt:
    "Across decades of real projects, the most expensive AV mistakes were never technical. This article explains why late AV decisions quietly compromise architecture, design intent, and spatial experience, and how early AV consulting prevents it.",

  image: "/phc.jpg",

  seo: {
    metaTitle:
      "The AV Problem Architects Only Discover When It’s Too Late",
    metaDescription:
      "Most architectural compromises blamed on technology are caused by late AV decisions. Learn why architects who integrate AV early protect design intent, reduce rework, and deliver better spaces.",
    keywords: [
      "AV consulting for architects",
      "architectural AV design",
      "AV coordination in buildings",
      "early stage AV planning",
      "AV consulting Nigeria",
      "audiovisual design for architecture",
      "AV and MEP coordination",
      "smart building AV consulting",
      "luxury residential AV design",
    ],
    ogTitle:
      "The AV Problem Architects Only Discover When It’s Too Late",
    ogDescription:
      "Late AV decisions quietly compromise architecture. Discover why early AV consulting helps architects protect design intent and deliver better spatial experiences.",
    ogImage: "/pa.webp",
    canonical:
      "https://www.ced.africa/blog/the-av-problem-architects-discover-too-late",
  },
}

]


const categories = ['All', 'Audio', 'AV-Consulting', 'Lighting', 'Video', 'Control']

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

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
      {/* Hero (animation is OK here) */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/pa.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container-fluid px-6 text-center">
          <FadeInOnScroll>
            <p className="text-5xl articulatcf font-black mb-6">BLOG</p>
            <p className="text-xl articulatcfLight max-w-4xl mx-auto" />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container-fluid px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border articulatcf font-black text-sm uppercase transition ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid (NO animation wrapper here) */}
      <section className="bg-white py-20">
        <div className="container-fluid px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
               <Link
  key={post.id}
  href={`/blog/${post.id}`}
  className="block group text-black no-underline"
>

                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  <div className="px-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs articulatcf font-black uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs articulatcfLight text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h2 className="text-xl articulatcf font-black mb-3 group-hover:underline">
                      {post.title}
                    </h2>

                    <p className="text-sm articulatcfLight text-gray-700 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 group-hover:gap-4 transition-all">
                      <span className="text-sm articulatcf font-black uppercase">
                        Read More
                      </span>
                      <Image
                        src="/blackarrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        className="group-hover:-rotate-45 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg articulatcfLight text-gray-700 py-20">
              No posts found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
