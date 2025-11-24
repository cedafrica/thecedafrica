export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import CarouselRetail from '../components/CarouselRetail'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../components/FadeInOnScroll'

const Services = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'retail' } },
    depth: 1,
    sort: 'createdAt',
  })

  return (
    <div>
      <CarouselRetail headers={headerCollection.docs} />

      <section data-light>
        <div className="bg-white py-20">
          <div className="container-fluid px-6 gap-8">
            {headerCollection.docs.map((header) => (
              <>
                <FadeInOnScroll className="lg:text-center articulatcf w-full p-4 lg:px-20 ">
                  <p className="text-2xl  text-center articulatcf py-4 leading-7 text-black lg:px-38">
                    While CED Africa proudly operates its own store, we are always open to expanding
                    our reach through trusted third-party retail partners. If you are a retailer
                    looking to offer top-tier AV solutions, we will love to hear from you.
                  </p>
                  {header.buttonTitle && header.buttonLink && (
                    <a
                      href={header.buttonLink}
                      target="_blank"
                      className="articulatcfLight mt-8 group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300 hover-btn"
                    >
                      <span>{header.buttonTitle}</span>
                      <Image
                        src="/blackarrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        className="transition-transform duration-300 group-hover:-rotate-45 group-hover:invert"
                      />
                    </a>
                  )}
                </FadeInOnScroll>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
