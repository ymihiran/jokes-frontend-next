'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetJoke() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [types, setTypes] = useState<string[]>([]);  
  const [selectedType, setSelectedType] = useState<string>(''); 


  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('http://localhost:3002/jokes/types');
        setTypes(response.data);  
      } catch (err) {
        setError('Failed to load joke types.');
      }
    };

    fetchTypes();
  }, []);

  const fetchJoke = async () => {
    if (!selectedType) {
      setError('Please select a joke type.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:3002/jokes/random', {
        params: { type: selectedType },
      });
      setJoke(response.data.content);  
    } catch (err) {
      setError('Failed to fetch a joke.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Get a Random Joke</h2>

      {/* Dropdown for selecting joke type */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="" disabled>
          Select a Joke Type
        </option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Button to fetch joke */}
      <button
        onClick={fetchJoke}
        className="p-2 bg-green-500 text-white rounded"
        disabled={loading || !selectedType}  // Disable if loading or no type selected
      >
        {loading ? 'Loading...' : 'Fetch Joke'}
      </button>

      {/* Display the joke */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {joke && <p className="mt-4 text-gray-700">{joke}</p>}
    </div>
  );
}
