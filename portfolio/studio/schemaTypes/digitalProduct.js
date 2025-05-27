export default {
  name: 'digitalProduct',
  title: 'Digital Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'previewImage', title: 'Preview Image', type: 'image' },
    { name: 'file', title: 'Download File', type: 'file' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'isFree', title: 'Is Free?', type: 'boolean' }
  ]
};