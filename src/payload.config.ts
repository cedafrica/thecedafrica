import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Headers from './collections/Headers'
import Services from './collections/Services'
import Experiences from './collections/Experiences'
import Projects from './collections/Projects'
import ContactMessages from './collections/ContactMessages'
import Team from './collections/Team'
import BookTour from './collections/BookTour'
import ExperienceGallery from './collections/ExperienceGallery'
import Members from './collections/Members'
import Brands from './collections/Brands'
import Drawings from './collections/Drawings'
import Partners from './collections/Partners'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Headers,
    Services,
    Experiences,
    Projects,
    ContactMessages,
    Team,
    BookTour,
    ExperienceGallery,
    Members,
    Brands,
    Drawings,
    Partners,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID!,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
        endpoint: process.env.R2_ENDPOINT,
        region: 'auto',
      },
    }),
  ],
})
