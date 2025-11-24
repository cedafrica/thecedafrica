import type { CollectionConfig } from 'payload'

const Drawings: CollectionConfig = {
  slug: 'drawings',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage Drawings.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Drawing Title',
    },
    {
      name: 'briefDescription',
      type: 'textarea',
      required: false,
      label: 'Brief Description',
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for images
      required: false,
      label: 'Drawing cover',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for images
      required: true,
      label: 'Drawing File',
    },
    {
      name: 'drawingType',
      type: 'select',
      required: true,
      label: 'Drawing Type',
      options: [
        {
          label: 'PROFESSIONAL AV',
          value: 'professional-av',
        },
        {
          label: 'Commercial',
          value: 'commercial',
        },
        {
          label: 'Residential',
          value: 'residential',
        },
      ],
    },
    {
      name: 'drawingService',
      type: 'select',
      required: false,
      label: 'Drawing Service',
      options: [
        {
          label: 'Site Packs',
          value: 'site-packs',
        },
        {
          label: 'Engineering Drawings',
          value: 'engineering-drawings',
        },
        {
          label: 'Schedules & Checklists',
          value: 'schedules-&-checklists',
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

export default Drawings
