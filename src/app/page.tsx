// src/app/page.tsx
import { getProfile } from '../../lib/contentful';
import Image from 'next/image';

export const revalidate = 10; // <-- ISR: regenerate page every 10s in background

export default async function Home() {
  const profile: any = await getProfile();
  const { name, bio, profilePicture, github, email } = profile.fields;

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{name}</h1>

      {profilePicture?.fields?.file?.url && (
        <Image
          src={`https:${profilePicture.fields.file.url}`}
          alt={profilePicture.fields.title || 'Profile Picture'}
          width={200}
          height={200}
          className="rounded-full"
        />
      )}

      <div className="prose prose-neutral">{bio}</div>

      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${email}`} className="text-blue-600 underline">
          {email}
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>{' '}
        <a href={github} target="_blank" className="text-blue-600 underline">
          {github}
        </a>
      </p>
    </main>
  );
}
