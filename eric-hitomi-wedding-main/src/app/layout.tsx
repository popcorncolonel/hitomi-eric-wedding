import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "The wedding site of Hitomi and Eric",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>The Wedding Site of Hitomi and Eric</title>
      </head>
      <body className={` bg-black`}>{children}</body>
    </html>
  );
}
