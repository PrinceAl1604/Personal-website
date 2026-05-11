import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Njonkoua — Senior UI/UX & Brand Designer",
  description:
    "Senior product & brand designer crafting digital experiences that move brands forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
