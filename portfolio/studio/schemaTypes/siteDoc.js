export default {
  name: 'siteDoc',
  title: 'Site Document',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'type', title: 'Type', type: 'string' },
    { name: 'file', title: 'Document File', type: 'file' },
    { name: 'description', title: 'Description', type: 'text' }
  ]
};