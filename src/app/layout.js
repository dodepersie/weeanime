import Navbar from "@/components/Navbar";
import "./globals.css";
import { Gabarito } from "next/font/google";

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
          <div className="space-y-10 py-4 px-0 md:px-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
