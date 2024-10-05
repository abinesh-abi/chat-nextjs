import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OAuthAuthentication from '@/components/OAuth/OAuthAuthentication'
import UserValidator from '@/components/OAuth/UserValidator'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OAuthAuthentication>
          <UserValidator>
            {children}
          </UserValidator>
        </OAuthAuthentication>
      </body>
    </html>
  );
}
