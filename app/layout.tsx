import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ayberk Tanrıverdi - Oyun ve Uygulama Geliştiricisi",
  description: "Eğlenceli oyunlar ve kullanışlı uygulamalar. Marble 3D, Flappy Bird 3D ve daha fazlası!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${crimson.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
