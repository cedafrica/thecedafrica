import { NextResponse } from 'next/server'
import { getPayload } from '../../../lib/payloadServer'


export async function GET() {
  try {
    const payload = await getPayload()

    const servicesCollection = await payload.find({
      collection: 'services',
      depth: 1,
      sort: 'createdAt',
    })

    return NextResponse.json({
      docs: servicesCollection.docs ?? [],
    })
  } catch (error) {
    console.error('Error fetching services:', error)

    return NextResponse.json(
      { docs: [], error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
