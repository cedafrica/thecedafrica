import type { CollectionConfig } from 'payload'

const ContactMessages: CollectionConfig = {
  slug: 'contactMessages',
  admin: { useAsTitle: 'name' },
  access: {
    read: () => true, 
    update: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone', 
      type: 'text',
      required: false,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}

export default ContactMessages
