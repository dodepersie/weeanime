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
