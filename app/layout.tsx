import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZonePark - NBDevs",
  description: "Created with v0",
  generator: "v0.app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
