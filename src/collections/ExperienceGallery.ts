import type { CollectionConfig } from 'payload'

const ExperienceGallery: CollectionConfig = {
  slug: 'experience-gallery',
  labels: {
    singular: 'Experience Gallery',
    plural: 'Experience Galleries',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'coverImage',
      type: 'upload',
      required: true,
      label: 'Cover Image',
      relationTo: 'media', // Assuming you have a media collection for uploads
    },
    {
      name: 'imageGallery',
      type: 'array',
      required: false,
      label: 'Image Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          required: true,
          label: 'Image',
          relationTo: 'media', // Assuming you have a media collection for uploads
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
        },
      ],
    },
  ],
  access: {
    read: () => true, // Publicly readable
    create: () => true, // Allow creation
    update: () => true, // Allow updates
    delete: () => true, // Prevent deletion
  },
}

export default ExperienceGallery
