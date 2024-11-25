'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Joke App</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/submit">Submit Joke</Link>
        <Link href="/get">Get Joke</Link>
        <Link href="/moderate">Moderate Jokes</Link>
      </div>
    </nav>
  );
}
