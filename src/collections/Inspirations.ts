import type { CollectionConfig } from 'payload'

const Inspirations: CollectionConfig = {
  slug: 'inspirations',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage Inspirations.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'briefDescription',
      type: 'textarea',
      required: false,
      admin: {
        description: 'A short description of the project.',
      },
    },
    {
      name: 'details',
      type: 'richText', // WYSIWYG editor
      required: false,
      admin: {
        description: 'Detailed information about the project.',
      },
    },
    {
      name: 'inspirationType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Commercial AV',
          value: 'commercial-av',
        },
        {
          label: 'Residential AV',
          value: 'residential-av',
        },
        {
          label: 'PRO AV',
          value: 'pro-av',
        },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media', // Assuming you have a 'media' collection for file uploads
      required: false,
      admin: {
        description: 'Upload a media file.',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { value: 'draft', label: 'Draft' },
        { value: 'published', label: 'Published' },
      ],
      defaultValue: 'published',
      admin: { position: 'sidebar' },
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}

export default Inspirations
