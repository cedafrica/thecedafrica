import payload from 'payload'

let initialized = false

export async function getPayload() {
  if (!initialized) {
    const { default: config } = await import('@payload-config')
    await payload.init({ config })
    initialized = true
  }

  return payload
}
