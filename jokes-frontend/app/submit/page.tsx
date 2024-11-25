'use client';

import { useState } from 'react';

export default function SubmitJoke() {
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // API call
      setMessage('Joke submitted successfully!');
    } catch {
      setMessage('Failed to submit joke.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit a Joke</h2>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1">Joke Content:</label>
        <textarea
          id="content"
          className="w-full p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block mb-1">Type:</label>
        <input
          id="type"
          type="text"
          className="w-full p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </form>
  );
}
