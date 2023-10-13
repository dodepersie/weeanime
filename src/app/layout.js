import Navbar from "@/components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";
import Footer from "@/components/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "WeeAnime",
  description: "Dapatkan informasi Anime terbaru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={gabarito.className}>
        <div className="container mx-auto max-w-[600px] p-4 space-y-4">
          <Navbar />
          <main className="space-y-4 py-2 px-0 md:px-3">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
