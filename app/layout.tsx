import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/ui/SmoothScroll";
import { AOSInit } from "./components/AOSInit";
import Header from "./components/layout/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOCIÉTÉ M NOUR – Fourniture & Distribution à Bangui",
  description:
    "ETS M NOUR est une entreprise spécialisée dans la fourniture et la distribution de produits et équipements divers à Bangui, République Centrafricaine.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${figtree.variable} ${figtree.className} leading-tight! tracking-tight! antialiased w-full overflow-x-hidden! bg-white!`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header />
            <AOSInit />
            {children}
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
