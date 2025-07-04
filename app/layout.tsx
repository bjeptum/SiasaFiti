import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SiasaFiti - Interactive Civic Education for Kenyan Students",
  description: "Learn about Kenyan governance, rights, and civic responsibilities through interactive quizzes, budget simulations, and personalized content.",
  keywords: "Kenya, civic education, governance, constitution, students, democracy",
  authors: [{ name: "SiasaFiti Team" }],
  openGraph: {
    title: "SiasaFiti - Interactive Civic Education",
    description: "Interactive civic education platform for Kenyan students",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased font-nunito`}>
        {children}
      </body>
    </html>
  );
}