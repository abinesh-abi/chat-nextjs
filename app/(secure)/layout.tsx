import type { Metadata } from "next";
import { Inter } from "next/font/google";
import OAuthAuthentication from '@/app/_components/OAuth/OAuthAuthentication'
import UserValidator from '@/app/_components/OAuth/UserValidator'

export const metadata: Metadata = {
  title: "Chat App",
  // description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OAuthAuthentication>
      <UserValidator>
        {children}
      </UserValidator>
    </OAuthAuthentication>
  );
}
