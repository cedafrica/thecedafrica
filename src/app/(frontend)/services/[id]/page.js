export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import payload from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/legacy/image'
import BrandTab from '../../components/BrandTab'
import Drawing from '../../components/Drawing'
import TabMenu from '../../components/TabMenu'
import FadeInOnScroll from '../../components/FadeInOnScroll'

const RichTextRenderer = ({ content }) => {
  if (!content?.root?.children) return null

  const paragraphs = []
  let currentParagraph = []

  content.root.children[0]?.children?.forEach((child) => {
    if (child.type === 'text') {
      currentParagraph.push(child.text)
    } else if (child.type === 'linebreak' && currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.join(' '))
      currentParagraph = []
    }
  })

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(' '))
  }

  return (
    <div className="rich-text space-y-4 text-lg articulatcfLight">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  )
}

export default async function ServiceDetails({ params }) {
  const { id } = params

  try {
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    if (!payload) {
      console.error('Payload initialization failed')
      return notFound()
    }

    const result = await payload.find({
      collection: 'services',
      where: {
        id: { equals: id },
      },
    })

    if (!result?.docs?.length) {
      console.error(`Service with id "${id}" not found`)
      return notFound()
    }

    const { title, details, coverImage } = result.docs[0]

    const brandsCollection = await payload.find({
      collection: 'brands',
      depth: 1,
      sort: 'createdAt',
      limit: 0,
    })

    // Group brands by type
    const groupedBrands = brandsCollection.docs.reduce((acc, brand) => {
      const type = brand.brandType // Ensure this matches your field name
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(brand)
      return acc
    }, {})

    const types = Object.keys(groupedBrands)

    const drawingCollection = await payload.find({
      collection: 'drawings',
      depth: 1,
      sort: 'createdAt',
      limit: 0,
    })

    // Group brands by type
    const groupedDrawing = drawingCollection.docs.reduce((acc, brand) => {
      const type = brand.drawingType // Ensure this matches your field name
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(brand)
      return acc
    }, {})

    const typesd = Object.keys(groupedDrawing)

    return (
      <>
        <section className="bg-black py-10"></section>
        <div className="experience-details  bg-white text-black">
          <div className="w-full relative bg-white">
            <div className="container-fluid lg:pt-32 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
              <div className="flex items-center justify-center h-full">
                <div className="w-full lg:px-12 p-6">
                  <h3 className="articulatcf lg:text-4xl text-xl font-bold mb-2 py-2">{title}</h3>
                  <div className="text-lg articulatcfLight" style={{ color: 'grey' }}>
                    {details ? <RichTextRenderer content={details} /> : <p>No detail available.</p>}
                  </div>
                </div>
              </div>

              <div className="w-full lg:px-12 px-6">
                <Image
                  src={coverImage?.url}
                  alt="Contact"
                  width={1000} // Adjusted width to maintain aspect ratio
                  height={800} // Adjusted height to maintain aspect ratio
                  className="w-full h-auto object-cover contactFormImg  image-hover-effect"
                />
              </div>
            </div>
          </div>

          {id === '1' && (
            <>
              <section data-light>
                <div className="bg-white">
                  {/*  <div className="container-fluid py-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="flex justify-center w-full px-6">
                      <Image src="/engineering.jpg" alt="LinkedIn icon" width={300} height={300} />
                    </div>
                    <div className="w-full  px-6">
                      <h2 className="text-xl font-bold articulatcf">Engineering Packs</h2>
                      <p className="text-base articulatcfLight py-2" style={{ color: 'grey' }}>
                        Reduce project management, minimise problems during installation and have
                        fewer call outs after completion with precise thorough engineering drawings.
                        Our detailed rack drawings and colour coded connectivity schematics will
                        help demonstrate your engineering prowess to your clients.
                      </p>
                    </div>
                  </div>*/}

                  <div className="container-fluid pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="w-full lg:px-12 px-6">
                      <h2 className="text-xl font-bold articulatcf text-black uppercase py-2">
                        Site Packs
                      </h2>
                      <p className="text-base articulatcfLight py-2" style={{ color: 'grey' }}>
                        We can produce positional drawings, full wiring plans, and equipment
                        elevations for any system design, to suit your requirements. We can help you
                        look professional and experienced by getting time critical wiring plans
                        turned around efficiently and accurately. The inclusion of equipment
                        elevations clearly communicates exactly what is required on site. Our clear,
                        J-standard adherent wiring and positional plans allow you to communicate
                        clearly to all collaborators and stake holders on a project.
                      </p>
                    </div>
                    <div className="w-full lg:px-12 px-6">
                      <h2 className="text-xl font-bold articulatcf text-black uppercase py-2">
                        Engineering Packs
                      </h2>
                      <p className="text-base articulatcfLight py-2" style={{ color: 'grey' }}>
                        Reduce project management, minimise problems during installation and have
                        fewer call outs after completion with precise thorough engineering drawings.
                        Our detailed rack drawings and colour coded connectivity schematics will
                        help demonstrate your engineering prowess to your clients.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {(id === '2' || id === '1') && (
            <div>
              {id === '2' && <BrandTab types={types} groupedBrands={groupedBrands} />}
              {id === '1' && <Drawing types={typesd} groupedDrawing={groupedDrawing} />}
            </div>
          )}

          {id === '1' && (
            <>
              <section data-light>
                <div className="bg-white">
                  <FadeInOnScroll className="container-fluid pt-28 py-20">
                    {id === '1' && <TabMenu />}
                  </FadeInOnScroll>
                </div>
              </section>
            </>
          )}
        </div>
      </>
    )
  } catch (error) {
    console.error('Error fetching service:', error)
    return notFound()
  }
}
