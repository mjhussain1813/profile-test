import { getProfile } from '../../lib/contentful';
import Image from 'next/image';

export const revalidate = 10;

export default async function Home() {
  const profile: any = await getProfile();
  const { name, bio, profilePicture, github, email } = profile.fields;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 sm:p-16 text-center border border-gray-200">
        
        {/* Decorative Background Blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Profile Picture */}
        {profilePicture?.fields?.file?.url && (
          <div className="flex justify-center mb-6">
            <Image
              src={`https:${profilePicture.fields.file.url}`}
              alt={profilePicture.fields.title || 'Profile Picture'}
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-white"
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          {name}
        </h1>

        {/* Bio */}
        <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          {bio}
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-200"
          >
            📧 Email Me
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition duration-200"
          >
            🐙 GitHub Profile
          </a>
        </div>
      </div>
    </main>
  );
}
