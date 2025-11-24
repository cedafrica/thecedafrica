import React from 'react'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Carousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'
import JoinTeam from '../components/JoinTeam'
import FadeInOnScroll from '../components/FadeInOnScroll'

const Contact = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'contact' } },
    depth: 1,
    sort: 'createdAt',
  })

  return (
    <div className="bg-white">
      <Carousel headers={headerCollection.docs} />

      <div>
        <ContactUs />
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent animate-pulse [animation-duration:5s]"></div>

      {/* <div className="container-fluid py-20 border-b border-white">
        <FadeInOnScroll className="p-6 ">
          <h1 className="text-3xl articulatcf font-black">Free Project Estimate</h1>
          <p className="articulatcfLight text-sm">
            Explore our free project estimator while you determine if our services are right for
            you.
          </p>
        </FadeInOnScroll>
      </div> */}

      <section id="career" data-light>
        <div className="bg-white">
          <JoinTeam />
        </div>
      </section>
    </div>
  )
}

export default Contact
