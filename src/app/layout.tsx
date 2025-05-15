import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'VASLY STUDIO - אתרי תדמית לעסקים',
  description: 'בניית אתרי תדמית מודרניים לעסקים קטנים, בעיצוב יוקרתי ומותאם אישית.',
  openGraph: {
    title: 'VASLY STUDIO - אתרי תדמית לעסקים',
    description: 'בניית אתרי תדמית מודרניים לעסקים קטנים, בעיצוב יוקרתי ומותאם אישית.',
    images: [
      {
        url: '/screenshots/f790f3e3-043a-4508-b800-74bd70f0b694.PNG',
        width: 1200,
        height: 630,
        alt: 'VASLY STUDIO דוגמה לאתר תדמית',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
