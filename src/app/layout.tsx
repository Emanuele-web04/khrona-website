import type { Metadata } from "next";
import { Urbanist, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const geistSans = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khrona | The iOS App",
  description: "Get Your Life Together",
  keywords: "life tracking app, goal tracking, daily journal, mood tracker, self-awareness app, iOS app, personal development",
  openGraph: {
    title: "Khrona | Track Your Life & Daily Goals",
    description: "Track your days, mood, goals, and reflections — all in one place. Gain clarity, one day at a time.",
    type: "website",
    url: "https://khrona-website.vercel.app/",
    images: [
      {
        url: "https://khrona-website.vercel.app/k3dblack.png",
        width: 1200,
        height: 630,
        alt: "Khrona App Preview",
      },
    ],
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
        className={`${geistSans.variable} ${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
