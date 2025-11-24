import type { CollectionConfig } from 'payload'

const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'name',
    description: 'Manage Team requests.',
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
      required: true,
    },
    {
      name: 'avCareerPath',
      type: 'select',
      required: true,
      options: [
        { label: 'System Integrator', value: 'system-integrator' },
        { label: 'System Designer', value: 'system-designer' },
      ],
    },
    {
      name: 'qualification',
      type: 'select',
      required: true,
      options: [
        { label: 'B. Eng Electrical Electronics', value: 'b-eng-electrical-electronics' },
        { label: 'B. Eng Electrical Engineering', value: 'b-eng-electrical-engineering' },
        { label: 'B. Eng Computer Science', value: 'b-eng-computer-science' },
      ],
    },
    {
      name: 'experience',
      type: 'select',
      required: true,
      options: [
        { label: 'Undergraduate', value: 'undergraduate' },
        { label: 'Pre-NYSC', value: 'pre-nysc' },
        { label: 'Post-NYSC (1 Year)', value: 'post-nysc' },
      ],
    },
  ],
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}

export default Members
