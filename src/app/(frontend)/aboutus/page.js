export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FadeInOnScroll from '../components/FadeInOnScroll'

const AboutUs = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'about' } },
    depth: 1,
    sort: 'createdAt',
  })

  // Fetch the team data
  const teamCollection = await payload.find({
    collection: 'team',
    depth: 1,
  })

  // Assuming there's only one team record
  const teamData = teamCollection.docs[0]

  const RichTextRenderer = ({ content }) => {
    if (!content || !content.root || !content.root.children) return null

    // Extract all paragraphs
    const paragraphs = content.root.children
      .filter((child) => child.type === 'paragraph' && child.children)
      .map((paragraph) =>
        paragraph.children
          .filter((child) => child.type === 'text')
          .map((child) => child.text)
          .join(' '),
      )

    return (
      <div style={{ color: 'grey' }} className="rich-text space-y-4 text-base articulatcfLight">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white">
      <Carousel headers={headerCollection.docs} />

      <section data-light>
        <div className="bg-white">
          {/*<FadeInOnScroll className="container-fluid lg:flex justify-between py-20 text-black">
            <div className="lg:w-1/3 px-6 py-2">
              <h1 className="text-3xl articulatcf font-black pb-4">OUR BELIEF</h1>
            </div>

            <div className="lg:w-2/3 px-6 lg:px-0 articulatcfLight py-2">
              <p className="text-lg">
                Our vision is to reshape the technological terrain by equipping our System
                Integrators and Consultants with the tools and expertise necessary to deliver world
                class solutions and projects.
              </p>
              <p className="text-lg pt-4">
                We are committed to pioneering a future where our partners not only compete but lead
                in the delivery of exceptional audiovisual and automation experiences, setting a
                global benchmark right from the heart of West Africa.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent animate-pulse [animation-duration:5s]"></div>
          */}

          <FadeInOnScroll className="container-fluid py-28 text-black">
            <h1 style={{ color: 'black' }} className="text-center articulatcfLight">
              Our Vision Statement
            </h1>
            <h1
              style={{ color: 'black' }}
              className="text-4xl  articulatcf text-center lg:px-46 pt-6 mx-auto w-3/4"
            >
              To become the cornerstone of audiovisual excellence in Nigeria and across West Africa.
            </h1>
          </FadeInOnScroll>
        </div>
      </section>

      <div className=" bg-gray-100">
        <div className="container-fluid py-20 ">
          <div className="lg:flex justify-between px-6 gap-8">
            <FadeInOnScroll className="service-card lg:w-1/2 relative py-10">
              <div className="lg:px-6 lg:py-0 px-0 bg-opacity-50 rounded-tr-3xl">
                <h1 style={{ color: 'black' }} className="text-2xl pt-4 articulatcf ">
                  OUR VISION
                </h1>
                <p className="text-base pb-4 articulatcfLight" style={{ color: 'grey' }}>
                  To redefine the audiovisual landscape by equipping System Integrators,
                  Consultants, and partners with the tools and expertise to deliver world-class
                  solutions. From the heart of West Africa, we aim to set a global standard in
                  immersive AV and automation experiences.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll className="service-card lg:w-1/2  relative py-10">
              <div className="lg:px-6 lg:py-0 px-0 bg-opacity-50 rounded-tr-3xl">
                <h1 style={{ color: 'black' }} className="text-2xl pt-4 articulatcf ">
                  OUR STRATEGY
                </h1>
                <p style={{ color: 'grey' }} className="text-base pb-4 articulatcfLight pt-1">
                  We empower a strong network of System Integrators and Consultants while delivering
                  world class AV solutions curated AV solutions affording our customers access to
                  industry leading brands.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <section data-light>
          <FadeInOnScroll className="container-fluid pt-20">
            <h1 style={{ color: 'black' }} className="text-center articulatcfLight ">
              Our Business Subsidiaries
            </h1>
          </FadeInOnScroll>

          <div className="container-fluid lg:py-20 pb-20 pt-0 ">
            <div className="lg:flex justify-between px-6 gap-8">
              <FadeInOnScroll className="service-card lg:pt-0 pt-10 lg:grid grid-cols-2 justify-between">
                <a href="https://www.soundhous.com" target="_blank">
                  <Image
                    src="/sh.jpg"
                    alt=""
                    width={1000}
                    height={600}
                    className="w-full h-auto mb-4 object-cover image-hover-effect invert"
                  />
                </a>

                <div className="w-full lg:px-12 px-6 border-l border-black flex flex-col justify-center align-center">
                  <h2 className="text-xl font-bold articulatcf  py-4">
                    Soundhouse Experience Center
                  </h2>

                  <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
                    A pioneer audiovisual retail store in Nigeria and West Africa where consumers
                    can walk-in, experience the solutions and buy instantly. We also have the online
                    store www.soundhous.com support 100% digital purchase and fulfillment. Soundhous
                    is expanding across Nigeria and West Africa at large.
                  </p>
                  <a
                    href="https://www.soundhous.com"
                    target="_blank"
                    className="w-full inline-flex bg-transparent text-black py-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                  >
                    <h2 className="text-sm font-bold articulatcf">www.soundhous.com</h2>
                    <Image
                      src="/blackarrow.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      className="transform transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </a>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll className=" hidden service-card lg:w-1/2 lg:pt-0 pt-10">
                <a href="https://www.savl.pro" target="_blank">
                  <Image
                    src="/spectra.jpg"
                    alt=""
                    width={1000}
                    height={600}
                    className="w-full h-auto mb-4 object-cover image-hover-effect invert"
                  />
                </a>

                <div className="w-full lg:px-12 px-6 border-l border-black ">
                  <h2 className="text-xl font-bold articulatcf py-4">Spectra</h2>

                  <p className="text-base articulatcfLight" style={{ color: 'grey' }}>
                    A foremost commercial Audiovisual System integration company in Nigeria.
                    Offering the best-in-class AV brands and integrating the most challenging
                    audiovisual projects in large venues for House of worship, Arenas, stadiums,
                    Auditoriums, Exhibition centres, Parks & resorts, High-end restaurants & lounges
                    and Night Clubs.
                  </p>
                  <Link
                    href="https://www.savl.pro"
                    target="_blank"
                    className="w-full  inline-flex bg-transparent text-black py-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                  >
                    <h2 className="text-sm font-bold articulatcf">www.savl.pro</h2>
                    <Image
                      src="/blackarrow.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      className="transform transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </Link>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden py-28">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <FadeInOnScroll className="relative z-20">
            <h1 className="text-center articulatcfLight text-white">Who We Work For</h1>
            <h1 className="text-4xl articulatcf text-center lg:px-46 px-6 pt-6 mx-auto lg:w-3/4 text-white">
              Dreamers seeking an unmatched audiovisual experience in their homes, work, and leisure
              spaces.
            </h1>
            <div className="flex justify-center mt-10">
              <Link
                href="/partners"
                className="bg-transparent border-white border text-white py-4 px-6 rounded-full group flex items-center gap-4 hover:gap-4 transition-all duration-300 hover-btnw"
              >
                <span>See Partners</span>
                <Image
                  src="/whitearrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transform transition-transform duration-300 group-hover:-rotate-45 group-hover:invert"
                />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      {/*
      <div className="container-fluid py-16 bg-white">
        <h1 style={{ color: 'black' }} className="text-center articulatcfLight ">
          About The Founder
        </h1>
      </div>

      <div className="bg-white container-fluid pb-20">
        {teamData && (
          <div className="flex flex-col lg:flex-row items-start">
            <FadeInOnScroll className="lg:w-1/2 px-6 lg:py-0 py-6" style={{ color: 'black' }}>
              <Image
                src={teamData.founder.image.url} // Access the founder's image
                alt={teamData.founder.name}
                width={400}
                height={400}
                className=" mb-4 object-cover image-hover-effect"
              />
              <h2 style={{ color: 'black' }} className="text-xl articulatcf pt-4">
                {teamData.founder.name}
              </h2>
              <h3 style={{ color: 'black' }} className="text-lg articulatcfLight">
                {teamData.founder.position}
              </h3>
              <div className="flex space-x-4 mt-6">
                {teamData.founder.socialLinks.instagram && (
                  <a
                    href={teamData.founder.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/insta.svg"
                      alt="Instagram icon"
                      width={16}
                      height={16}
                      className="invert"
                    />
                  </a>
                )}
                {teamData.founder.socialLinks.linkedin && (
                  <a
                    href={teamData.founder.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn icon"
                      width={16}
                      height={16}
                      className="invert"
                    />
                  </a>
                )}
                {teamData.founder.socialLinks.twitter && (
                  <a
                    href={teamData.founder.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/x.png"
                      alt="LinkedIn icon"
                      width={16}
                      height={16}
                      className="invert"
                    />
                  </a>
                )}
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll className="lg:w-1/2 px-6 lg:py-0 py-6">
              {teamData.bio ? (
                <RichTextRenderer content={teamData.bio} />
              ) : (
                <p>No bio available.</p>
              )}
            </FadeInOnScroll>
          </div>
        )}
      </div>
  
      <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent animate-pulse [animation-duration:5s]"></div>

      <div className=" bg-white container-fluid py-16">
        <h1 style={{ color: 'black' }} className="text-center articulatcfLight ">
          Meet The Team
        </h1>
        <div className="grid grid-cols-1 pt-16 lg:grid-cols-4 gap-8 px-6">
          {teamData &&
            teamData.members &&
            teamData.members.map((member, index) => (
              <FadeInOnScroll key={index} className="w-full lg:w-full p-4">
                <Image
                  src={member.image.url} // Access the member's image
                  alt={member.name}
                  width={300}
                  height={300}
                  className=" mb-4 object-cover"
                />

                <div className="w-full px-2 border-l border-white ">
                  <h3 style={{ color: 'black' }} className="text-xl font-semibold pt-4">
                    {member.name}
                  </h3>
                  <h4 style={{ color: 'black' }} className="text-lg italic">
                    {member.position}
                  </h4>
                  <div className="flex space-x-4 mt-2">
                    {member.socialLinks.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/insta.svg"
                          alt="Instagram icon"
                          width={16}
                          height={16}
                          className="invert"
                        />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/linkedin.svg"
                          alt="LinkedIn icon"
                          width={16}
                          height={16}
                          className="invert"
                        />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/x.png"
                          alt="LinkedIn icon"
                          width={16}
                          height={16}
                          className="invert"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
        </div>
      </div>
       */}
    </div>
  )
}

export default AboutUs
