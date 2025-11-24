export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import Image from 'next/legacy/image'
import Link from 'next/link'
import BookTour from '../components/BookTour'
import FadeInOnScroll from '../components/FadeInOnScroll'

const Experiences = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'experiences' } },
    depth: 1,
    sort: 'createdAt',
  })

  const experiencesCollection = await payload.find({
    collection: 'experiences',
    depth: 1,
    limit: 0,
  })

  const experienceGalleryCollection = await payload.find({
    collection: 'experience-gallery',
    depth: 1,
    limit: 0,
  })

  return (
    <div className=" bg-white">
      <Carousel headers={headerCollection.docs} />

      <section data-light>
        <div className="bg-white">
          <div className="container-fluid lg:flex justify-between pt-20 pb-0 text-black">
            <FadeInOnScroll className="lg:w-1/2 px-6">
              <h1 className="text-2xl articulatcf font-black lg:pr-20">
                Welcome To CED Africa Experience Centre
              </h1>
              <p className="py-4 articulatcfLight">Home of Premium AV</p>
            </FadeInOnScroll>

            <FadeInOnScroll className="lg:w-1/2 px-6 articulatcfLight">
              <p className="text-base">
                Experience it. Don’t just imagine it. At CED Africa, we design world-class
                audiovisual and lifestyle automation that you can truly feel. Our spaces are built
                to immerse, to go beyond expectation. See it. Hear it. Live it.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/*<FadeInOnScroll className="container-fluid bg-white">
        <h1 style={{ color: 'black' }} className="text-center articulatcfLight uppercase">
          EXPERIENCES
        </h1>
      </FadeInOnScroll>*/}

      <div className="container-fluid py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
          {experiencesCollection.docs.map((experience) => (
            <FadeInOnScroll key={experience.id} className="service-card lg:w-full py-6 ">
              <Image
                src={experience.coverImage.url}
                alt={experience.title}
                width={600}
                height={400}
                className="w-full h-auto mb-4 object-cover image-hover-effect"
              />

              <div className="w-full lg:px-12 px-6 border-l border-black ">
                <Link
                  href={`/experiences/${experience.slug}`}
                  className="w-full  inline-flex bg-transparent text-white pt-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                >
                  <h2
                    style={{ color: 'black' }}
                    className="text-base articulatcf font-bold uppercase"
                  >
                    {experience.title}
                  </h2>
                  <Image
                    src="/blackarrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </Link>

                <p style={{ color: 'black' }} className="text-sm lowercase articulatcfLight">
                  {experience.briefDescription}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      <FadeInOnScroll className="container-fluid">
        <h1 style={{ color: 'black' }} className="text-center articulatcfLight ">
          Book a Tour | Rent An Experience
        </h1>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <BookTour />
      </FadeInOnScroll>

      {experienceGalleryCollection?.docs?.length > 0 && (
        <div className="bg-white text-black">
          <div className="container-fluid">
            <h1 style={{ color: 'black' }} className="text-center articulatcfLight uppercase">
              EXPERIENCE GALLERY
            </h1>
          </div>

          <div className="container-fluid py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
              {experienceGalleryCollection.docs.map((experienceG) => (
                <FadeInOnScroll key={experienceG.id} className="service-card py-6">
                  <Image
                    src={experienceG.coverImage.url}
                    alt={experienceG.title}
                    width={600}
                    height={400}
                    className="w-full h-auto mb-4 object-cover image-hover-effect"
                  />

                  <div className="w-full lg:px-12 px-6 border-l border-black">
                    <Link
                      href={`/experienceGallery/${experienceG.id}`}
                      className="w-full inline-flex bg-transparent text-black pt-4 group flex justify-between items-center gap-4 hover:gap-4 transition-all duration-300"
                    >
                      <h2 className="text-base articulatcf font-bold uppercase">
                        {experienceG.title}
                      </h2>
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
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Experiences
