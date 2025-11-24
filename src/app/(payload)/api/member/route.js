import { NextResponse } from 'next/server'
import payload from 'payload'
import { createZohoLead } from '../../../lib/zoho' // Ensure path is correct

export async function POST(req) {
  try {
    const { name, email, phone, avCareerPath, qualification, experience } = await req.json()

    // Initialize PayloadCMS
    if (!payload.__initialized) {
      const { default: config } = await import('@payload-config')
      await payload.init({ config })
      payload.__initialized = true
    }

    // Save the message in PayloadCMS
    const savedMember = await payload.create({
      collection: 'members',
      data: { name, email, phone, avCareerPath, qualification, experience },
    })

    // Prepare data for Zoho CRM
    const zohoLeadData = {
      Last_Name: name || 'Unknown', // REQUIRED by Zoho
      Email: email,
      Phone: phone,
      Form_Source: 'Team Member Form', // Custom field in Zoho
      Description: `Career Path: ${avCareerPath}\nQualification: ${qualification}\nExperience: ${experience}`,
    }

    console.log(
      '➡️ Attempting to send team member data to Zoho CRM:',
      JSON.stringify(zohoLeadData, null, 2),
    )

    const zohoResponse = await createZohoLead(zohoLeadData)

    console.log('✅ Zoho lead created:', JSON.stringify(zohoResponse, null, 2))

    return NextResponse.json({ success: true, data: savedMember }, { status: 201 })
  } catch (error) {
    console.error('❌ Team member form error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
