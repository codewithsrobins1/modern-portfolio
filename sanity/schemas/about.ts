import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'paragraphOne',
      title: 'Paragraph One',
      type: 'text',
    }),
    defineField({
      name: 'paragraphTwo',
      title: 'Paragraph Two',
      type: 'text',
    }),
  ],
});
