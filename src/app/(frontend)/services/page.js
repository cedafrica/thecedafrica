export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FadeInOnScroll from '../components/FadeInOnScroll'

const Services = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'services' } },
    depth: 1,
    sort: 'createdAt',
  })

  const servicesCollection = await payload.find({
    collection: 'services',
    depth: 1,
    sort: 'createdAt',
  })

  return (
    <div className="bg-white">
      <Carousel headers={headerCollection.docs} />

      <div className="container-fluid py-20 bg-white">
        <div className="lg:flex justify-between px-6 gap-8">
          {servicesCollection.docs.map((service) => (
            <FadeInOnScroll key={service.id} className="service-card lg:w-1/2 py-6 ">
              <Link href={`/services/${service.id}`}>
                <Image
                  src={service.coverImage.url}
                  alt={service.title}
                  width={1000}
                  height={600}
                  className="w-full h-auto image-hover-effect  mb-4 object-cover"
                />
              </Link>

              <div className="w-full lg:px-12 px-6 border-l border-black ">
                <Link
                  href={`/services/${service.id}`}
                  className="w-full  inline-flex bg-transparent text-white py-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                >
                  <h2 style={{ color: 'black' }} className="text-xl font-bold articulatcf">
                    {service.title}
                  </h2>
                  <Image
                    src="/blackarrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>

                <p style={{ color: 'black' }} className="text-lg  articulatcfLight">
                  {service.briefDescription}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
