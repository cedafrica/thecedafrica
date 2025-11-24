import type { CollectionConfig } from 'payload'

const BookTour: CollectionConfig = {
  slug: 'book-tour',
  labels: {
    singular: 'Book Tour',
    plural: 'Book Tours',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'proposedDate',
      type: 'date',
      required: true,
      label: 'Proposed Date',
    },
    {
      name: 'proposedTime',
      type: 'text',
      required: true,
      label: 'Proposed Time',
    },
  ],
  access: {
    read: () => true, // Publicly readable
    create: () => true, // Allow creation
    update: () => false, // Prevent updates
    delete: () => true, // Prevent deletion
  },
}

export default BookTour
