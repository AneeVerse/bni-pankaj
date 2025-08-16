import type { Metadata } from "next";
import { Poppins, Comfortaa } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pankaj J. Harwansh - Awareness is Everything",
  description: "Make sure all the choices you make in life come from a point of awareness and not ignorance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${comfortaa.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
