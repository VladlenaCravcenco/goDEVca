export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'formats', title: 'Formats', type: 'array', of: [{ type: 'string' }] },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'link', title: 'Live Link', type: 'url' },
    { name: 'date', title: 'Date', type: 'datetime' }
  ]
};