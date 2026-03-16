import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wen's Design System",
  description: "Liquid Glass components and tokens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
