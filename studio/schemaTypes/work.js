export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title (optional)', type: 'string' },

    {
      name: 'folder',
      title: 'Folder',
      type: 'reference',
      to: [{ type: 'folder' }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },

    { name: 'caption', title: 'Caption (optional)', type: 'string' },

    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: 'web' },
          { title: 'Graphic Design', value: 'graphic' },
          { title: '3D / Motion', value: '3d' },
          { title: 'Ads / Creatives', value: 'ads' },
        ],
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },

    { name: 'link', title: 'Link (optional)', type: 'url' },

    {
      name: 'date',
      title: 'Date (optional)',
      type: 'datetime',
    },

    {
      name: 'sortOrder',
      title: 'Sort order in folder',
      type: 'number',
      initialValue: 0,
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      folderTitle: 'folder.title',
    },
    prepare({ title, media, folderTitle }) {
      return {
        title: title || 'Untitled work',
        subtitle: folderTitle ? `Folder: ${folderTitle}` : '',
        media,
      };
    },
  },
};