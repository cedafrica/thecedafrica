export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import payload from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import FadeInOnScroll from '../../components/FadeInOnScroll'

export const metadata = {
  title:
    "AV Experience Centre in Nigeria | The Best AV Showroom in West Africa | CED Africa",

  description:
    "Visit CED Africa’s AV Experience Centre in Lagos, Nigeria — West Africa’s most advanced audiovisual showroom. Experience high-end home cinema, Hi-Fi listening rooms, smart home automation, commercial audio systems, acoustics and professional AV solutions from world-class brands.",

  keywords: [
    "AV experience centre Nigeria",
    "audio visual experience centre Lagos",
    "AV showroom Nigeria",
    "home cinema experience centre Nigeria",
    "Hi-Fi listening room Nigeria",
    "smart home experience centre Lagos",
    "commercial audio demo Nigeria",
    "AV demo centre West Africa",
    "audio visual showroom West Africa",
    "professional AV showroom Nigeria",
    "AV experience centre Lagos",
    "Sonos experience centre Nigeria",
    "K-array demo Nigeria",
    "Vicoustic experience centre",
    "high end audio Nigeria",
    "luxury home cinema Nigeria",
    "AV system demo Nigeria",
    "AV consulting experience centre",
    "AV distribution showroom Nigeria"
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
    canonical: "https://www.ced.africa/experiences",
  },

  openGraph: {
    title:
      "CED Africa AV Experience Centre | Nigeria’s Leading AV Showroom",
    description:
      "Step into West Africa’s most advanced AV Experience Centre. Explore immersive home cinema, Hi-Fi audio, smart home automation, acoustics and professional AV systems — all under one roof in Lagos, Nigeria.",
    url: "https://www.ced.africa/experiences",
    siteName: "CED Africa",
    images: [
      {
        url: "https://www.ced.africa/services/2",
        width: 1200,
        height: 630,
        alt: "CED Africa AV Experience Centre – Lagos, Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CED Africa AV Experience Centre | Nigeria & West Africa",
    description:
      "Experience world-class AV, home cinema, Hi-Fi audio, smart home and commercial systems at Nigeria’s leading AV Experience Centre.",
    images: ["https://www.ced.africa/services/2"],
    creator: "@cedafrica",
  },

  category: "Audio Visual Experience Centre",
};


export default async function ExperienceDetails({ params }) {
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
      collection: 'experiences',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!result?.docs?.length) {
      console.error(`Experience with slug "${slug}" not found`)
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
        <div className="rich-text space-y-4 text-base articulatcfLight">
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
        <div className="experience-details pb-28 bg-white text-black">
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
                  className="rounded-lg object-cover"
                />
              </FadeInOnScroll>
            )}

            <div className="text-lg text-black articulatcf text-center mt-10">
              {briefDescription}
            </div>

            <FadeInOnScroll className=" p-6 articulatcfLight text-center">
              {details ? (
                <RichTextRenderer content={details} />
              ) : (
                <p className="text-center text-base articulatcfLight ">
                  No info available yet for this experience.
                </p>
              )}
            </FadeInOnScroll>
          </div>

          {media?.url && (
            <FadeInOnScroll className="container-fluid py-20">
              <video controls width="600" className="rounded-2xl border w-full">
                <source src={media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
