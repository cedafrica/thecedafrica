export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import payload from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import GalleryModalViewer from '../../components/GalleryModalViewer'
import FadeInOnScroll from '../../components/FadeInOnScroll'

export default async function ExperienceGalleryDetails({ params }) {
  const { id } = params

  try {
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    if (!payload) {
      console.error('Payload initialization failed')
      notFound()
    }

    const result = await payload.find({
      collection: 'experience-gallery',
      where: {
        id: {
          equals: id,
        },
      },
    })

    if (!result?.docs?.length) {
      console.error(`Experience Gallery with id "${id}" not found`)
      notFound()
    }

    const gallery = result.docs[0]

    return (
      <div className="container-fluid py-28">
        <div className="border-b border-white pb-12">
          <div className="container-fluid py-20">
            <h1 className="text-center text-xl articulatcfLight uppercase">{gallery.title}</h1>
          </div>

          {gallery.coverImage?.url && (
            <FadeInOnScroll className="mb-6 flex justify-center">
              <Image
                src={gallery.coverImage.url}
                alt={gallery.title}
                width={800}
                height={600}
                priority={true}
                className="rounded-lg object-cover"
              />
            </FadeInOnScroll>
          )}
        </div>

        <FadeInOnScroll>
          <GalleryModalViewer images={gallery.imageGallery} />
        </FadeInOnScroll>
      </div>
    )
  } catch (error) {
    console.error('Error fetching gallery:', error)
    notFound()
  }
}
