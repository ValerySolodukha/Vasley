import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="he" dir="rtl">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
