import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { NavbarReveal } from "@/components/blocks/NavbarReveal";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "DESIGN PLUS — Architectural Studio",
  description:
    "Design Plus is a Gen Z–minimal architectural studio crafting precise, modern spaces with a blueprint-first process."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarReveal
            logo="/images/logo.png"
            navItems={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            ctaLabel="Start a project"
            ctaHref="/contact"
          />
        </div>

        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="DESIGN PLUS"
          description="Architectural precision with a Gen Z minimal edge. We design spaces that feel inevitable—clean lines, strong concepts, and build-ready documentation."
          logoUrl="/images/logo.png"
          columns={[
            {
              title: "Pages",
              links: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Services",
              links: [
                { label: "Concept + Schematic", href: "/services" },
                { label: "3D Visualization", href: "/services" },
                { label: "Construction Docs", href: "/services" },
                { label: "Pricing", href: "/pricing" }
              ]
            },
            {
              title: "Get in touch",
              links: [
                { label: "Project inquiry", href: "/contact" },
                { label: "Request a quote", href: "/pricing" }
              ]
            }
          ]}
          copyright="© 2026 Design Plus. All rights reserved."
        />
      </body>
    </html>
  );
}
