import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Joke App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/submit" className="p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
          Submit a Joke
        </Link>
        <Link href="/get" className="p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
          Get a Joke
        </Link>
        <Link href="/moderate" className="p-6 bg-red-500 text-white rounded-lg hover:bg-red-600 text-center">
          Moderate Jokes
        </Link>
      </div>
    </div>
  );
}
