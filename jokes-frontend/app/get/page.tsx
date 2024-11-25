'use client';

import { useState } from 'react';

export default function GetJoke() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      // API call
      setJoke('Why don’t skeletons fight each other? They don’t have the guts.');
    } catch {
      setJoke('Failed to fetch a joke.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Get a Random Joke</h2>
      <button onClick={fetchJoke} className="p-2 bg-green-500 text-white rounded">Fetch Joke</button>
      {joke && <p className="mt-4 text-gray-700">{joke}</p>}
    </div>
  );
}
