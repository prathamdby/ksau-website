import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

import Script from "next/script";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "ksau - Lightning-Fast CLI File Uploads",
  description:
    "ksau: Terminal-native file uploads. Lightning-fast, secure, and effortless. Built for developers who live in the command line.",
  keywords: ["file upload", "CLI", "terminal", "developer tools", "command line"],
  authors: [{ name: "Sauraj" }, { name: "Hakimi" }, { name: "Pratham" }],
  openGraph: {
    title: "ksau - Lightning-Fast CLI File Uploads",
    description: "Terminal-native file uploads for developers who live in the command line.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={`${jetbrainsMono.variable} font-mono scanlines vignette`}>
        {children}
      </body>
    </html>
  );
}
