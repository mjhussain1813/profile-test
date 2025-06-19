import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProfile() {
  const res = await client.getEntries({
    content_type: 'profile', // or your actual content type ID
    include: 2, // 👈 this is the key part
  });

  return res.items[0]; // assuming single profile
}
