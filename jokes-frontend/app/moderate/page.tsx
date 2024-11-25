'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Joke {
  id: string;       
  content: string;  
  type: string;     
}

export default function ModerateJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingJokes = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication required. Please log in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/jokes/pending', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJokes(response.data);
      } catch (err) {
        setError('Failed to fetch jokes. Please check your credentials.');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingJokes();
  }, []);

  const handleApprove = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`http://localhost:3003/jokes/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJokes(jokes.filter((joke) => joke.id !== id)); 
    } catch {
      alert('Failed to approve joke.');
    }
  };

  const handleReject = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:3003/jokes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJokes(jokes.filter((joke) => joke.id !== id)); 
    } catch {
      alert('Failed to reject joke.');
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Moderate Jokes</h2>
      {jokes.length === 0 ? (
        <p>No pending jokes available.</p>
      ) : (
        <ul className="w-full max-w-2xl">
          {jokes.map((joke) => (
            <li
              key={joke.id}
              className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow"
            >
              <div>
                <p className="font-medium">{joke.content}</p>
                <p className="text-sm text-gray-500">Type: {joke.type}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(joke.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(joke.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
