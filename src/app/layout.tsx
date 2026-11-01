import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balloting System - College of Medicine, University of Lagos",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
