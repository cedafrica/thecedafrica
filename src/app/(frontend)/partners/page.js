export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import PartnerTabs from '../components/PartnerTabs'
import Image from 'next/legacy/image'

export const metadata = {
  title:
    "AV Dealers & Partners in Nigeria | Become an Authorized AV Dealer | CED Africa",

  description:
    "Join CED Africa’s authorized AV dealer and partner network in Nigeria and West Africa. Access premium audiovisual brands, protected margins, technical support, training, and project opportunities for system integrators, contractors, and developers.",

  keywords: [
    "AV dealers in Nigeria",
    "AV distribution partners Nigeria",
    "audio visual dealers Lagos",
    "authorized AV dealer Nigeria",
    "AV partner network Nigeria",
    "become an AV dealer Nigeria",
    "AV system integrators Nigeria",
    "AV installers Nigeria",
    "professional AV distributors Nigeria",
    "commercial AV partners West Africa",
    "home automation dealers Nigeria",
    "smart home AV dealers Lagos",
    "CED Africa partners",
    "CED Africa dealers",
    "AV brands distribution Nigeria",
    "AV reseller Nigeria"
  ],

  authors: [{ name: "CED Africa" }],
  creator: "CED Africa",
  publisher: "CED Africa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.ced.africa/partners",
  },

  openGraph: {
    title:
      "Become an Authorized AV Dealer in Nigeria | CED Africa Partner Network",
    description:
      "Partner with CED Africa and gain access to world-class AV brands, dealer protection, technical support, and growth opportunities across Nigeria and West Africa.",
    url: "https://www.ced.africa/partners",
    siteName: "CED Africa",
    images: [
      {
        url: "https://www.ced.africa/services/2",
        width: 1200,
        height: 630,
        alt: "CED Africa AV Dealer & Partner Network – Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AV Dealer Network Nigeria | Partner with CED Africa",
    description:
      "Join Nigeria’s leading AV distribution partner network. Premium brands, dealer protection, and expert support.",
    images: ["https://www.ced.africa/services/2"],
    creator: "@cedafrica",
  },

  category: "AV Distribution & Dealer Network",
};


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
