import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/providers/provider";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "AnimeZ";
const APP_DEFAULT_TITLE = "Watch anime online";
const APP_TITLE_TEMPLATE = "%s - AnimeZ";
const APP_DESCRIPTION = "Watch anime online free with no add on AnimeZ";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://zanime.vercel.app"),
  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
          <main className="min-h-screen overflow-x-hidden">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
