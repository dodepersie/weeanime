import Navbar from "@/components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";
import Footer from "@/components/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "WeeAnime",
    template: "WeeAnime: %s",
  },
  description: "See all Anime information for FREE and EASY!",
  referrer: 'origin-when-cross-origin',
  keywords: ['Anime', 'Information', 'Anime Information'],
  authors: { name: 'Mahadi Saputra', url: 'https://mahadisaputra.my.id' },
  creator: "Mahadi Saputra",
  manifest: "./manifest.json",
  icons: { apple: '/icon.png' },
  themeColor: "#fff",
  openGraph: {
    title: {
      default: "WeeAnime",
      template: "WeeAnime: %s",
    },
    description: 'See all Anime information for FREE and EASY!',
    url: 'https://weeanime.vercel.app/',
    siteName: 'WeeAnime',
    images: [
      {
        url: '/icon-256x256.png',
        width: 256,
        height: 256,
      },
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'WeeAnime',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cmyk">
      <body className={gabarito.className}>
        <div className="container mx-auto max-w-[600px] p-4 space-y-3">
          <Navbar />
          <main className="space-y-5 py-2 px-0 md:px-3">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
