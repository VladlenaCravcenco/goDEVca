// src/sanityClient.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4yokwa9c', // замени на свой ID
  dataset: 'production',
  apiVersion: '2025-05-18', // дата может быть любая, но не будущее
  useCdn: true, // true = кеш, false = свежие данные
})