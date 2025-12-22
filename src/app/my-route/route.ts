import { NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const runtime = 'nodejs' // 🔥 THIS IS THE KEY FIX

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.find({
      collection: 'users',
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Payload API error:', error)

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
