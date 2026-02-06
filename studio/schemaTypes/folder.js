export default {
  name: 'folder',
  title: 'Folder',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },

    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    },

    {
      name: 'color',
      title: 'Folder color',
      type: 'string',
      options: {
        list: [
          { title: 'Green', value: '#B9C6A6' },
          { title: 'Olive', value: '#A9B894' },
          { title: 'Gray', value: '#C9C9C9' },
          { title: 'Orange', value: '#FF5C00' },
        ],
        layout: 'radio',
      },
      initialValue: '#B9C6A6',
    },

    {
      name: 'stickerText',
      title: 'Sticker text',
      type: 'string',
      description: 'Надпись как наклейка на папке (например: Fitness One)',
    },

    {
      name: 'stickerStyle',
      title: 'Sticker style',
      type: 'string',
      options: {
        list: [
          { title: 'Clean', value: 'clean' },
          { title: 'Handwritten', value: 'hand' },
          { title: 'Label', value: 'label' },
        ],
      },
      initialValue: 'label',
    },

    {
      name: 'cover',
      title: 'Cover image (optional)',
      type: 'image',
      options: { hotspot: true },
    },

    {
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Чем меньше — тем выше в списке',
      initialValue: 0,
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'cover',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Year: ${subtitle}` : '',
        media,
      };
    },
  },
};