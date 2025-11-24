import type { CollectionConfig } from 'payload'

const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage Partners.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Partner Title',
    },
    {
      name: 'briefDescription',
      type: 'textarea',
      required: false,
      label: 'Brief Description',
    },
    {
      name: 'website',
      type: 'text',
      required: false,
      label: 'Partner website',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for images
      required: true,
      label: 'Partner Image',
    },
    {
      name: 'partnerType',
      type: 'select',
      required: true,
      label: 'Partner Type',
      options: [
        {
          label: 'System Integrators',
          value: 'system-integrators',
        },
        {
          label: 'Electrical Consultants',
          value: 'electrical-consultants',
        },
        {
          label: 'Electrical Contractors',
          value: 'electrical-contractors',
        },
        {
          label: 'Architects',
          value: 'architects',
        },
        {
          label: 'MEP Consultants',
          value: 'mep-consultants',
        },
        {
          label: 'Interior Designers',
          value: 'interior-designers',
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

export default Partners
