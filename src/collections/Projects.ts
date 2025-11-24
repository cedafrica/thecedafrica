import type { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage projects by CED Africa.',
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from the title for use in the URL.',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title && !data.slug) {
              // Auto-generate slug from title
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-') // replace spaces and symbols with dashes
                .replace(/(^-|-$)+/g, '') // remove leading/trailing dashes
            }
            return data?.slug || '' // Fallback to empty string if data or slug is undefined
          },
        ],
      },
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
      name: 'ProjectType',
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
          label: 'PROFESSIONAL AV',
          value: 'professional-av',
        },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media', // Assuming you have a 'media' collection for file uploads
      required: true,
      admin: {
        description: 'Upload a cover image for the project.',
      },
    },
    {
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Upload a media file.',
          },
        },
      ],
      maxRows: 10, // optional: limit the number of uploads
      admin: {
        description: 'Upload one or more media files.',
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
      async ({ data, operation }) => {
        if (operation === 'create') {
          // Handle create operation logic here
        }
        // Return the data (optional if it's modified)
        return data
      },
    ],
  },
}

export default Projects
