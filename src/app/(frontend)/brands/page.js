export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import React from 'react'
import payload from 'payload'
import BrandspageTabs from '../components/BrandspageTabs'

const Brands = async () => {
  if (!payload.__initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    payload.__initialized = true
  }

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

  return (
    <div>
      <section className="bg-black py-10"></section>
      <section className="bg-white">
        <div>
          <BrandspageTabs types={types} groupedBrands={groupedBrands} />
        </div>
      </section>
    </div>
  )
}

export default Brands
