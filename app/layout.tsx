import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { AskProdvestor } from "@/components/ask-prodvestor";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.prodvestor.com"),
  title: {
    default: "Prodvestor — Your ambition. Our infrastructure.",
    template: "%s | Prodvestor",
  },
  description:
    "Websites, custom software, institutional systems, AI and automation. From your first business website to connected systems for established organizations.",
  openGraph: {
    type: "website",
    siteName: "Prodvestor Network",
    locale: "en_US",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <AskProdvestor />
      </body>
    </html>
  );
}
