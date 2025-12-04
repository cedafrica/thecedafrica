'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'

const blogPosts = [
  {
    id: 1,
    title: 'Why Most AV Projects Fail — And How Proper AV Consulting & Design Prevent Them',
    category: 'Automation',
    date: '2025-11-23',
    excerpt:
      'A CED Africa Insight Report',
    image: '/pro.jpeg',
  },
  
]

const categories = ['All', 'Audio', 'Automation', 'Lighting', 'Video']

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
      <section
  className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/pa.webp')" }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative container-fluid px-6 text-center">
    <FadeInOnScroll>
      <p className="text-5xl lg:text-5xl articulatcf font-black mb-6">BLOG</p>
      <p className="text-xl articulatcfLight max-w-4xl mx-auto">
        
      </p>
    </FadeInOnScroll>
  </div>
</section>

      <section data-light className="bg-white py-8 border-b border-gray-200">
        <div className="container-fluid px-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 articulatcf font-black text-sm uppercase ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-black hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section data-light className="bg-white py-20">
        <div className="container-fluid px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <FadeInOnScroll key={post.id} className="bg-white">
                <Link href={`/blog/${post.id}`} className="block group">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover image-hover-effect transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs articulatcf font-black text-black uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs articulatcfLight text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="text-xl articulatcf font-black text-black mb-3 group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-sm articulatcfLight text-gray-700 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-black group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm articulatcf font-black uppercase">Read More</span>
                      <Image
                        src="/blackarrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        className="transform transition-transform duration-300 group-hover:-rotate-45"
                      />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>

          {filteredPosts.length > 0 && (
            <FadeInOnScroll className="text-center mt-12">
              <button className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-8 py-4 transition-all duration-300 hover:bg-black hover:text-white hover-btn">
                <span className="articulatcf font-black uppercase">See More</span>
                <Image
                  src="/blackarrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transform transition-transform duration-300 group-hover:-rotate-45 group-hover:invert"
                />
              </button>
            </FadeInOnScroll>
          )}

          {filteredPosts.length === 0 && (
            <FadeInOnScroll className="text-center py-20">
              <p className="text-lg articulatcfLight text-gray-700">
                No posts found in this category.
              </p>
            </FadeInOnScroll>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
