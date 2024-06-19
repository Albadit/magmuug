import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magmuug",
  description: "Hydration on the Go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-secondary text-textPrimary">{children}</body>
    </html>
  );
}
