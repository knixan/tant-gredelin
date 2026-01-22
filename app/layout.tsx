import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tant Gredelin – Gårdsbutik",
  description: "Tant Gredelin är mer än en gårdsbutik – en levande mötesplats där landsbygdens charm möter lokal kvalitet, blommor, inredning och njutning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">

      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
