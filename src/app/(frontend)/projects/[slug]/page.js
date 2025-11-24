export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import payload from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../../components/FadeInOnScroll'

export default async function ProjectDetails({ params }) {
  const { slug } = params

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
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result?.docs?.length) {
      console.error(`Projects with slug "${slug}" not found`)
      notFound()
    }

    const experience = result.docs[0]

    const RichTextRenderer = ({ content }) => {
      // Check if content has a root property
      if (!content || !content.root || !content.root.children) return null

      // Get the first paragraph (assuming there's only one based on your console log)
      const paragraph = content.root.children[0]
      if (!paragraph || !paragraph.children) return null

      // Group text nodes into paragraphs based on linebreaks
      const paragraphs = []
      let currentParagraph = []

      paragraph.children.forEach((child) => {
        if (child.type === 'text') {
          currentParagraph.push(child.text)
        } else if (child.type === 'linebreak' && currentParagraph.length > 0) {
          // If we have multiple linebreaks in a row, treat it as a paragraph break
          if (paragraphs.length > 0 && paragraphs[paragraphs.length - 1].length === 0) {
            // Skip adding empty paragraphs
          } else {
            paragraphs.push(currentParagraph.join(' '))
            currentParagraph = []
          }
        }
      })

      // Add the last paragraph if it's not empty
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph.join(' '))
      }

      return (
        <div style={{ color: 'grey' }} className="rich-text space-y-4 text-base articulatcfLight">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )
    }

    const { title, briefDescription, details, media, coverImage } = experience

    return (
      <>
        <section className="bg-black py-10"></section>
        <div className="experience-details bg-white text-black">
          <div className="container-fluid py-14">
            <h1 className="text-center text-xl articulatcf uppercase">{title}</h1>
          </div>
          <div className="container-fluid mx-auto border-b border-black">
            {coverImage?.url && (
              <FadeInOnScroll className="mb-6 flex justify-center">
                <Image
                  src={coverImage.url}
                  alt={title}
                  width={800}
                  height={600}
                  priority={true}
                  className=" object-cover"
                />
              </FadeInOnScroll>
            )}

            <div className="text-base text-black articulatcf text-center mt-10">
              {briefDescription}
            </div>

            <FadeInOnScroll className=" p-6 articulatcfLight text-center">
              {details ? (
                <RichTextRenderer content={details} />
              ) : (
                <p style={{ color: 'grey' }} className="text-center text-base articulatcfLight ">
                  No info available yet for this project.
                </p>
              )}
            </FadeInOnScroll>
          </div>

          {Array.isArray(media) && media.length > 0 && (
            <FadeInOnScroll className="container-fluid py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {media.map((item, idx) => (
                <div key={item.id || idx} className="px-6">
                  {item?.file?.mimeType?.startsWith('video') ? (
                    <video controls width="600" className="rounded-2xl border w-full">
                      <source src={item.file.url} type={item.file.mimeType || 'video/mp4'} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={item.file.url}
                      alt={title}
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </FadeInOnScroll>
          )}
        </div>
      </>
    )
  } catch (error) {
    console.error('Error fetching experience:', error)
    notFound()
  }
}
