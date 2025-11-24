import { NextResponse } from 'next/server'
import payload from 'payload'

export async function GET() {
  try {
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    const servicesCollection = await payload.find({
      collection: 'services',
      depth: 1,
      sort: 'createdAt',
    })

    return NextResponse.json(servicesCollection)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}
