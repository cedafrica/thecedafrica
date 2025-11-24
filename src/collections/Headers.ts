import type { CollectionConfig } from 'payload'

const Headers: CollectionConfig = {
  slug: 'headers',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage headers for each page. Click on a page to view its headers.',
    defaultColumns: ['page', 'title', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'page',
      type: 'select',
      required: true,
      options: [
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Services', value: 'services' },
        { label: 'Experiences', value: 'experiences' },
        { label: 'Inspirations', value: 'inspirations' },
        { label: 'Partners', value: 'partners' },
        { label: 'Retail', value: 'retail' },
        { label: 'Contact', value: 'contact' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'buttonTitle',
      type: 'text',
      required: false,
      admin: {
        description: 'Title for the button that will be displayed on the page.',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      admin: {
        description: 'URL for the button link.',
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
  hooks: {
    beforeChange: [
      async ({ operation }) => {
        if (operation === 'create') {
          // No need to check for existing headers since we allow multiple
        }
      },
    ],
  },
}

export default Headers
