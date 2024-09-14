import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactBlock',
  title: 'Contact Block',
  type: 'document',
  fields: [
    {
      name: 'contactHeadline',
      title: 'Contact Headline',
      type: 'string',
    },
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
