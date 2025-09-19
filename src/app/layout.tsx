
// Next
import type { Metadata } from "next";

// Fonts
import { Geist, Geist_Mono, Barlow, Poppins, Bokor } from "next/font/google";


// Theme provider
import { ThemeProvider } from "next-themes";

// global css
import "./globals.css";
import { Dropdown } from "@/components/my-test-components/dropdown";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const barlow = Barlow({
//   variable: "--font-barlow",
//   weight: ['500', '700'],
//   subsets: ['latin']
// })

// const poppins = Poppins({
//   variable: '--font-poppins',
//   weight: ['400', '600']
// })

const bocorFont = Bokor({
  variable: "--font-bokor",
  subsets: ['latin'],
  weight: ['400']
})
// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShop, your ultimate destination for seamless on line shopping! Discover a vast and experience the joy of hassle-free online shopping. Start exploring today!",
};

// Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      {/* className={`${bocorFont.variable}`} */}
      <body
        // className={`${geistSans.className} ${barlow.variable} antialiased`}
        className={`antialiased dark:`}
      >
        <Dropdown />
        <ThemeProvider
          attribute={'class'}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
