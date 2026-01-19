import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'remoteVideo',
  title: 'Video (for Listen page)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'url',
      type: 'url',
      title: 'YouTube embed URL',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          })
          .custom((url) => {
            // Simple regex to check for youtube.com or youtu.be
            const youtubeRegex =
              /^(https?:\/\/)?(www\.)?(youtube\.com)\/embed\/.+$/;
            return youtubeRegex.test(url) ? true : 'Not a valid YouTube URL';
          }),
    },
  ],
});
