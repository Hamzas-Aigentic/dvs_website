import type { Metadata } from "next";
import { clashDisplay, generalSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Vault Solutions | AI Systems That Ship",
  description:
    "We don't just advise on AI — we build it. Production-grade AI systems, intelligent automation, and full-stack AI delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
