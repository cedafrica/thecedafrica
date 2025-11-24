import type { CollectionConfig } from 'payload'

const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    group: 'Content',
    description: 'Manage CED Africa team.',
  },
  fields: [
    {
      name: 'founder',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'instagram',
              type: 'text',
              required: false,
            },
            {
              name: 'linkedin',
              type: 'text',
              required: false,
            },
            {
              name: 'twitter',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
    },
    {
      name: 'members',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'instagram',
              type: 'text',
              required: false,
            },
            {
              name: 'linkedin',
              type: 'text',
              required: false,
            },
            {
              name: 'twitter',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}

export default Team
