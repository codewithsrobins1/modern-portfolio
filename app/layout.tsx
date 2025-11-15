import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sean Robinson Portfolio',
  description:
    'A modern and minimal portfolio website made with nextjs',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
