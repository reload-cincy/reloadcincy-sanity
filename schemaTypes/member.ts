import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instrument',
      title: 'Instrument',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Vocals', value: 'vocals' },
          { title: 'Horns', value: 'horns' },
          { title: 'Band', value: 'band' },
        ],
      },
    }),
  ],
});
