export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import Carousel from './components/Carousel' // Import the Swiper component
import Link from 'next/link'
import Image from 'next/legacy/image'
import ExperienceCarousel from './components/ExperienceCarousel'
import ContactForm from './components/ContactForm'
import BrandsMarquee from './components/BrandsMarquee'
import PartnerMarquee from './components/PartnerMarquee'
import FadeInOnScroll from './components/FadeInOnScroll'
import Services from './components/Services'

const Home = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'home' } },
    depth: 1,
    sort: 'createdAt',
  })

  const servicesCollection = await payload.find({
    collection: 'services',
    depth: 1,
    sort: 'createdAt',
  })

  const experiencesCollection = await payload.find({
    collection: 'experiences',
    depth: 1,
    limit: 100,
  })

  const docs = experiencesCollection.docs

  function getTwoRandomExperiences(arr) {
    if (arr.length <= 2) return arr
    const shuffled = arr.slice().sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }

  const randomExperiences = getTwoRandomExperiences(docs)

  const inspirationCollection = await payload.find({
    collection: 'projects',
    depth: 1,
    sort: 'createdAt',
    limit: 2,
  })

  const experiencessCollection = await payload.find({
    collection: 'experiences',
    depth: 1,
    sort: 'createdAt',
    limit: 2,
  })

  const brandsCollection = await payload.find({
    collection: 'brands',
    depth: 1,
    sort: 'createdAt',
    limit: 0,
  })

  const partnersCollection = await payload.find({
    collection: 'partners',
    depth: 1,
    sort: 'createdAt',
    limit: 0,
  })

  return (
    <div>
      <Carousel headers={headerCollection.docs} />

      <section data-light>
        <div className=" w-full  bg-white text-black py-20 z-100">
          <FadeInOnScroll className="container-fluid  lg:flex justify-between ">
            <div className="lg:w-1/3 px-6">
              <h1 className="text-4xl articulatcf font-black pb-4">Our Belief</h1>
            </div>

            <div className="lg:w-2/3 px-6 articulatcfLight">
              <p className="text-base">
                Our vision is to redefine the audiovisual technology landscape by empowering System
                Integrators, Consultants, and industry partners with the knowledge, tools, and
                support they need to deliver world-class solutions.
              </p>
              <p className="text-base pt-4">
                We are committed to building a future where our partners don&apos;t just compete;
                they lead. Together, we will set a new global standard for exceptional audiovisual
                and automation experiences, starting from the heart of West Africa.
              </p>
              <Link
                href="/aboutus"
                className="mt-14 group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-6 py-4 transition-all duration-300 hover:bg-gray-500 hover:text-black hover-btn"
              >
                <span className="transition-all duration-300">Learn More</span>
                <Image
                  src="/blackarrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45  group-hover:invert"
                />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <Services services={servicesCollection.docs} />

      {/* Experiences Carousel */}

      <section data-light className="bg-white">
        <div className="container-fluid relative lg:p-12 lg:pb-6 flex lg:flex-row flex-col items-center">
          <FadeInOnScroll className="lg:w-1/2 relative ">
            <Image
              src="/Rectangle44.png" // Replace with your image path
              alt="Contact"
              width={1000} // Adjusted width to maintain aspect ratio
              height={600} // Adjusted height to maintain aspect ratio
              className="w-full image-hover-effect  h-auto object-cover contactFormImg"
            />
          </FadeInOnScroll>
          <FadeInOnScroll className="lg:w-1/2 w-full lg:p-12 p-6 text-black flex flex-col items-start text-left">
            <p className="text-3xl articulatcf lg:pr-20 py-8">
              Exclusive Access <br /> for Our Partners
            </p>
            <div>
              <Link
                href="/partners"
                className="group inline-flex items-center gap-4 rounded-full border border-black text-black bg-transparent px-6 py-4 transition-all duration-300 hover:bg-gray-500 hover:text-black hover-btn"
              >
                <span className="transition-all duration-300">Partners</span>
                <Image
                  src="/blackarrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:-rotate-45  group-hover:invert"
                />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>

        <PartnerMarquee brands={partnersCollection.docs} />

        <FadeInOnScroll className="container-fluid  lg:py-28 py-20">
          <h1 className="text-center lg:text-6xl text-4xl  text-black articulatcf text-left px-4 ">
            <span>Some things can&apos;t be described. Immersive AV is one of them.</span>
            <br />
            Welcome to our curated Experience Centre — Lagos, Nigeria.
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll className="px-4">
          <ExperienceCarousel experiences={randomExperiences} />
        </FadeInOnScroll>
      </section>

      <section className=" py-20 bg-gray-100">
        <div className="container-fluid">
          <FadeInOnScroll>
            <h1 className="text-center articulatcfLight" style={{ color: 'black' }}>
              Projects
            </h1>
          </FadeInOnScroll>

          <div className="lg:flex justify-between px-6 gap-8">
            {inspirationCollection.docs.map((inspiration) => (
              <FadeInOnScroll
                key={inspiration.id}
                className="service-card lg:w-1/2 mt-20 relative rounded-2xl"
              >
                <Image
                  src={inspiration.coverImage.url}
                  alt={inspiration.title}
                  width={1000}
                  height={800}
                  className="w-full image-hover-effect h-auto rounded-2xl mb-4 object-cover transition-all duration-300"
                />

                <div className="absolute bottom-0 left-0 lg:w-64 w-52 lg:px-6 lg:py-2 px-2 bg-gray-100 bg-opacity-50 rounded-tr-3xl">
                  <h1 className="text-sm py-4 articulatcf" style={{ color: 'black' }}>
                    {inspiration.title}
                  </h1>

                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300  hover-btn"
                  >
                    <h2 className="text-sm articulatcfLight">Get Inspired</h2>
                    <Image
                      src="/blackarrow.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      className="transform transition-transform duration-300 rounded-xl group-hover:-rotate-45"
                    />
                  </Link>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <FadeInOnScroll className="pb-20 ">
          <h1 className="text-center articulatcfLight py-20" style={{ color: 'black' }}>
            Our Brands
          </h1>
          <BrandsMarquee brands={brandsCollection.docs} />
          <div className="flex justify-center pt-16">
            <Link
              href="/brands"
              className="group inline-flex items-center gap-4 rounded-full border border-black bg-transparent px-6 py-4 text-black transition-all duration-300  hover-btn"
            >
              <span>See all</span>

              <Image
                src="/blackarrow.svg"
                alt="arrow"
                width={16}
                height={16}
                className="transform transition-transform duration-300  group-hover:-rotate-45 group-hover:invert"
              />
            </Link>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="bg-white">
        <FadeInOnScroll>
          <ContactForm />
        </FadeInOnScroll>
      </section>
    </div>
  )
}

export default Home
