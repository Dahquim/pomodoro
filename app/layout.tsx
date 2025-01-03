import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

const nunito = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "Manage your time with Pomodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body className={`${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
