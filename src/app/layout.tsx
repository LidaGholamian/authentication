import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Header } from "./_components/header/header";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vazirmatn.className} suppressHydrationWarning>
      <body
        className={`min-h-screen max-h-screen grid grid-rows-[80px_1fr_auto] ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
