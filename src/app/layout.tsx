"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from "@/widgets/header/header";
import Footer from "@/widgets/footer";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}>
          <QueryClientProvider client={queryClient}>
              <Header/>
              {children}
              <Footer/>
          </QueryClientProvider>
      </body>
    </html>
  );
}
