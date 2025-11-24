import { NextResponse } from 'next/server'
import payload from 'payload'
import { createZohoLead } from '../../../lib/zoho' // make sure this path is correct

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()

    // Initialize PayloadCMS
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    // Save the message in PayloadCMS
    const savedMessage = await payload.create({
      collection: 'contactMessages',
      data: { name, email, phone, message },
    })

    // Prepare data for Zoho CRM
    const zohoLeadData = {
      Last_Name: name || 'Unknown', // REQUIRED by Zoho
      Email: email,
      Phone: phone,
      Description: message,
      Form_Source: 'Website Contact Form', // <-- Use your Zoho API field name!
    }

    console.log('➡️ Attempting to send data to Zoho CRM:', JSON.stringify(zohoLeadData, null, 2))
    // Send to Zoho CRM and log the response
    const zohoResponse = await createZohoLead(zohoLeadData)
    console.log('✅ Zoho lead created:', JSON.stringify(zohoResponse, null, 2))

    return NextResponse.json({ success: true, data: savedMessage }, { status: 201 })
  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
