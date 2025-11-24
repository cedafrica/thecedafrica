import type { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage services offered by the CED Africa.',
  },
  access: {
    read: () => true,
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
      required: true,
      admin: {
        description: 'A short description of the service.',
      },
    },
    {
      name: 'details',
      type: 'richText', // WYSIWYG editor
      required: true,
      admin: {
        description: 'Detailed information about the service.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media', // Assuming you have a 'media' collection for file uploads
      required: true,
      admin: {
        description: 'Upload a cover image for the service.',
      },
    },
  ],
}

export default Services
