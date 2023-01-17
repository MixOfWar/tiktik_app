export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName', 
      title: 'User Name', 
      type: 'string'
    },
    // Stores a url
    {
      name: 'image', 
      title: 'Image',
      type: 'string'
    }
  ]
}