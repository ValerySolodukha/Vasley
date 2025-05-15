"use client";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const img = searchParams.get('img');

  if (!img) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <p>לא נבחרה תמונה להצגה.</p>
        <Link href="/" className="mt-6 px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-bold">חזרה לדף הבית</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="relative w-full max-w-3xl h-[70vh] flex items-center justify-center">
        <Image src={img} alt="תצוגה מוגדלת" fill className="object-contain rounded-xl border border-[#F59E0B]/30 bg-[#111827]" />
      </div>
      <Link href="/" className="mt-8 px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-bold text-lg hover:bg-[#D97706] transition">חזרה לדף הבית</Link>
    </div>
  );
} 