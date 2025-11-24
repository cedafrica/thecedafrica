import type { CollectionConfig } from 'payload'

const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage Brands.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Brand Title',
    },
    {
      name: 'briefDescription',
      type: 'textarea',
      required: true,
      label: 'Brief Description',
    },
    {
      name: 'website',
      type: 'text',
      required: true,
      label: 'Brand Website',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for images
      required: true,
      label: 'Brand Image',
    },
    {
      name: 'brandType',
      type: 'select',
      required: true,
      label: 'Brand Type',
      options: [
        {
          label: 'Audio',
          value: 'audio',
        },
        {
          label: 'Video',
          value: 'video',
        },
        {
          label: 'Lighting & Control',
          value: 'lighting-control',
        },
        {
          label: 'Security & Communication',
          value: 'security-communication',
        },
        {
          label: 'Acoustics',
          value: 'acoustics',
        },
      ],
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}

export default Brands
