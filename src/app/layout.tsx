import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import BooksProvider from "@/context/BooksContext";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: {
    default: "Book Vibe | Discover Your Next Favorite Book",
    template: "%s | Book Vibe",
  },

  description:
    "Book Vibe is a modern platform to discover, explore, and find your next favorite books.",

  keywords: [
    "Book Vibe",
    "books",
    "book collection",
    "book discovery",
    "best books",
    "online books",
    "book recommendations",
  ],

  authors: [
    {
      name: "Fuad Al Maimun",
    },
  ],

  creator: "Fuad Al Maimun",

  openGraph: {
    title: "Book Vibe | Discover Your Next Favorite Book",
    description:
      "Explore books, discover new stories, and find your next favorite book with Book Vibe.",
    type: "website",
    siteName: "Book Vibe",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <BooksProvider>
          <Navbar />
          <main>{children}</main>

          <ToastContainer />
        </BooksProvider>
        
      </body>
    </html>
  );
}
