import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'listenFile',
  title: 'File (for Listen page)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.mp3',
      },
      validation: (Rule) =>
        Rule.custom((file) => {
          if (!file) return true; // Don't show error if no file
          const maxSize = 10 * 1024 * 1024; // 10MB
          const fileSize = file.asset._ref.split('-')[2]; // Extract file size from asset ref
          if (parseInt(fileSize) > maxSize) {
            return `File size too large. Maximum allowed is 10MB. Please delete, compress, and re-upload.`;
          }
          return true;
        }),
    }),
  ],
});
