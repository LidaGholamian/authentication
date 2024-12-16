import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer";

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
    <html dir="rtl" className={vazirmatn.className} suppressHydrationWarning>
      <body
        className={`min-h-screen max-h-screen grid grid-rows-[80px_1fr_auto] container dark:bg-base-100 dark:text-base-content ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
