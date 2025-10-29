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
  title: "Kickstart Your Startup | Next School",
  description: "Build a real software product that solves real problems for real users. A hands-on product workshop at Next School for Grade 5+ students. Led by Ulhas Mandrawadkar.",
  openGraph: {
    title: "Kickstart Your Startup | Next School",
    description: "Build a real software product that solves real problems for real users. Launch it. Get real users. Think like a founder. A hands-on product workshop for Grade 5+ students at Next School.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kickstart Your Startup | Next School",
    description: "Build a real software product that solves real problems for real users. Launch it. Get real users. Think like a founder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
