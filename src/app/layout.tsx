import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thit Lwin | Senior Software Engineer",
  description:
    "Portfolio of Thit Lwin — Senior Software Engineer with 12+ years of experience across mobile, web, and backend.",
  openGraph: {
    title: "Thit Lwin | Senior Software Engineer",
    description:
      "12+ years building and shipping software — mobile, web, and backend — from architecture through release.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink bg-mist">
        {children}
      </body>
    </html>
  );
}
