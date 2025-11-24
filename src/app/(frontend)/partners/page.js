export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import PartnerTabs from '../components/PartnerTabs'
import Image from 'next/legacy/image'

const Partners = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'partners' } },
    depth: 1,
    sort: 'createdAt',
  })

  const partnersCollection = await payload.find({
    collection: 'partners',
    depth: 1,
    sort: 'createdAt',
    limit: 0,
  })

  const groupedPartners = partnersCollection.docs.reduce((acc, partner) => {
    const type = partner.partnerType
    if (!acc[type]) {
      acc[type] = []
    }
    acc[type].push(partner)
    return acc
  }, {})

  const partnerTypes = Object.keys(groupedPartners)

  return (
    <div className="bg-white">
      <Carousel headers={headerCollection.docs} />
      <PartnerTabs types={partnerTypes} groupedPartners={groupedPartners} />
      <div className="relative w-full h-screen">
        {/* Background Media */}

        <Image
          src="/avimage.jpg"
          alt="avimage"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          blurDataURL="/blurIMG.jpg"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Overlay & Text Content */}
        <div className="container-fluid absolute inset-1 flex flex-col justify-center z-20">
          <div className="lg:py-2 py-10 flex lg:flex-row md:flex-col flex-col items-center lg:justify-between justify-center">
            <div className="lg:text-center lg:block hidden lg:w-1/2 w-full p-4 lg:px-20">
              {/* Content for homepage only */}
            </div>
            <div className={`lg:text-right text-right lg:w-1/2 w-full lg:pr-30 lg:p-6 p-6`}>
              <h1 className="text-3xl articulatcf lg:text-5xl text-white font-bold lg:mb-4">
                Become a Dealer, <br></br> Build with the Best.
              </h1>
              <p className="text-lg articulatcfLight py-4 font-extralight leading-6 text-white max-w-2xl ">
                Join our dealer network and access premium AV solutions, technical support, and
                growth opportunities.
              </p>
              <a
                href="https://forms.zohopublic.com/cedafrica1/form/CEDDEALER1/formperma/3pyzHRyCZW98J78vZjxeAocUNe6_joXLPloPsomk1wg"
                target="_blank"
                className="mt-8 group inline-flex items-center gap-4 rounded-full border border-white bg-transparent px-6 py-4 text-white transition-all duration-300 hover-btnw"
              >
                <span>Become a Dealer</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45 group-hover:invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
