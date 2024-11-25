'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ModerateJokes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push('/moderate/login');
  }, [isLoggedIn, router]);

  return <div>{isLoggedIn ? 'Moderate Jokes Here' : 'Redirecting to login...'}</div>;
}
