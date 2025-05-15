'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h2 className="text-2xl font-bold mb-4">משהו השתבש!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-bold hover:bg-[#D97706] transition"
      >
        נסה שוב
      </button>
    </div>
  );
} 