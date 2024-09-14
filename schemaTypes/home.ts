import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'firstSectionHeadline',
      title: 'First Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'firstSectionText',
      title: 'First Section Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'membersSectionHeadline',
      title: 'Members Section Headline',
      type: 'string',
    }),
  ],
})
