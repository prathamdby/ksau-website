import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ksau - Revolutionary File Upload Tool",
  description:
    "ksau: Lightning-fast, secure, and effortless file uploads for everyone. Created by Sauraj, Hakimi, and Pratham.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
