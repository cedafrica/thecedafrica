import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.scarletroute.com'],
  },
}

export default withPayload(nextConfig)
