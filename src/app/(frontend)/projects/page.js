export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import Carousel from '../components/Carousel'
import InspirationsTabs from '../components/InspirationsTabs'
import FadeInOnScroll from '../components/FadeInOnScroll'

const Inspirations = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

  const headerCollection = await payload.find({
    collection: 'headers',
    where: { page: { equals: 'inspirations' } },
    depth: 1,
    sort: 'createdAt',
  })

  const inspirationsCollection = await payload.find({
    collection: 'projects',
    depth: 1,
    sort: 'createdAt',
    limit: 0,
  })

  // Group inspirations by type
  const groupedInspirations = inspirationsCollection.docs.reduce((acc, item) => {
    const type = item.ProjectType || 'Uncategorized'
    if (!acc[type]) acc[type] = []
    acc[type].push(item)
    return acc
  }, {})

  const types = Object.keys(groupedInspirations)

  return (
    <div className="bg-white">
      <Carousel headers={headerCollection.docs} />
      <div>
        <InspirationsTabs types={types} groupedInspirations={groupedInspirations} />
      </div>
    </div>
  )
}

export default Inspirations
