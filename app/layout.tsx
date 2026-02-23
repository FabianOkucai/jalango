import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalang'o | The Life of Felix Odiwour",
  description: "The official biography of Felix Odiwour, popularly known as Jalang'o—from fisherman to Member of Parliament for Lang'ata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
