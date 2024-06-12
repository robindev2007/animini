import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animez",
  description: "Watch animes sub or dub for free on Animez",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://zanime.vercel.app"),
  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Provider>
          <main className="min-h-screen">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
