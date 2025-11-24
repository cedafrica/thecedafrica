import { NextResponse } from 'next/server'
import payload from 'payload'
import { createZohoLead } from '../../../lib/zoho' // make sure this path is correct

export async function POST(req) {
  try {
    const { name, email, message, proposedDate, proposedTime } = await req.json()

    // Combine date + time into Zoho DateTime format (ISO 8601)
    const visitSchedule = `Visit Schedule: ${proposedDate}T${proposedTime}:00+01:00`

    // Initialize PayloadCMS
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    // Save in Payload CMS
    const savedMessage = await payload.create({
      collection: 'book-tour',
      data: { name, email, message, proposedDate, proposedTime },
    })

    // Prepare data for Zoho
    const zohoLeadData = {
      Last_Name: name || 'Unknown', // Zoho requires Last_Name
      Email: email,
      Description: message,
      Date: visitSchedule, // 👈 Your custom DateTime field in Zoho
      Form_Source: 'Book a Tour', // 👈 Your custom field in Zoho (use correct API name)
    }

    console.log('📤 Sending tour lead to Zoho:', JSON.stringify(zohoLeadData, null, 2))
    const zohoResponse = await createZohoLead(zohoLeadData)
    console.log('✅ Zoho lead created:', JSON.stringify(zohoResponse, null, 2))

    return NextResponse.json({ success: true, data: savedMessage }, { status: 201 })
  } catch (error) {
    console.error('❌ Tour form error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
