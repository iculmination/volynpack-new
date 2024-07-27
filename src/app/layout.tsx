import Header from "@/components/blocks/header-block";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Footer from "@/components/blocks/footer-block";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={comfortaa.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Volynpack",
  description:
    "Volynpack - Тут можна купити велику партію паперових пакетів оптом",
  openGraph: {
    title: "Volynpack - Магазин паперових пакетів 24/7",
    images: [
      {
        url: "og-thumbnail.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volynpack - Магазин паперових пакетів 24/7",
    description:
      "Volynpack - Тут можна купити велику партію паперових пакетів оптом_thumbnail",
    images: ["social-thumb.png"],
    creator: "@culmination",
  },
  creator: "@culmination",
  applicationName: "Volynpack",
  metadataBase: new URL(
    "https://volynpack-landing-nextjs-github-io.vercel.app/"
  ),
  robots: {
    index: false,
    follow: false,
  },
};
