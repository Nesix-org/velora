import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/context/AuthContext";
import { Providers } from "@/components/providers";


const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velora",
  description: "An e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-bgWhite font-sans dark:bg-black overflow-x-hidden`}
      >
        <AuthProvider>
        {/* <Navbar />
        {children}
        <Toaster position="top-right" richColors />   */}
        <Providers>
          <Navbar />
          <main className="">
            {children}
          </main>
        

        <Toaster position="top-right" richColors />
        <Footer />
        </Providers>
        </AuthProvider>
        
      </body>
    </html>
  );
}
