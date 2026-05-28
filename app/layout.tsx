import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { FloatingHeader } from "@/components/FloatingHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeScript } from "@/components/ThemeScript";
import { clinic, siteName, tagline } from "@/content/site";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: clinic.description,
  openGraph: {
    title: siteName,
    description: tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={ubuntu.variable}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <FloatingHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
