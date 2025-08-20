import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const siteUrl = "https://sohankarfa.me"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sohan Karfa | Full-Stack Developer | AI & Web Expert',
  description: 'Portfolio of Sohan Karfa, a proficient Full-Stack Developer specializing in Next.js, React, TypeScript, Python, and Genkit AI. Explore my projects and skills.',
  keywords: [
    'Full-Stack Developer',
    'Sohan Karfa',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'Genkit AI',
    'Firebase',
    'PostgreSQL',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Sohan Karfa', url: siteUrl }],
  creator: 'Sohan Karfa',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sohan Karfa | Full-Stack Developer Portfolio',
    description: 'Explore the work of Sohan Karfa, a developer skilled in creating modern web applications with AI integration.',
    url: siteUrl,
    siteName: 'Sohan Karfa Portfolio',
    images: [
      {
        url: `${siteUrl}/preview.png`, // now points to /public/preview.png
        width: 400,
        height: 400,
        alt: 'Portfolio Preview - Sohan Karfa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // large banner preview
    title: 'Sohan Karfa - Full-Stack Developer',
    description: 'Check out my portfolio of projects in Next.js, AI, and more.',
    creator: '@SohanKarfa',
    images: [`${siteUrl}/preview.png`], // absolute path to preview.png
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
