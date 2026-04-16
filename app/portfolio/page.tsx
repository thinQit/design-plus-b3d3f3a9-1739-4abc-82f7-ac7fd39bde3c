"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTASplit } from "@/components/blocks/CTASplit";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.div {...fadeUp}>
        <HeroMinimal
          headline="Portfolio"
          subheadline="Curated work from Design Plus—architectural studies, interiors, and concept systems. Minimal, but never neutral."
          primaryCta={{ label: "Start a project", href: "/contact" }}
          secondaryCta={{ label: "Services", href: "/services" }}
          imageUrl="/images/hero.png"
        />
      </motion.div>

      <motion.section {...fadeUp} className="py-16 md:py-24 bg-[var(--secondary)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-widest text-black/60">Collections</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Browse by intent</h2>
            <p className="mt-4 text-black/70">
              Pick a direction—then we’ll tailor the blueprint to your site, budget, and timeline.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                { title: "Residential minimal", description: "Clean interiors, strong rhythm, warm materials.", link: "/contact" },
                { title: "Commercial clarity", description: "Brand-forward spaces with efficient circulation.", link: "/contact" },
                { title: "Facade studies", description: "Brutalist grids, glass layers, and shadow control.", link: "/contact" },
                { title: "Visualization sets", description: "High-clarity renders for approvals and alignment.", link: "/services" }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.div {...fadeUp}>
        <GalleryMasonry
          headline="Selected work"
          subheadline="A mix of studies and deliverables. (Includes a playful post-modern nod.)"
          images={[
            { url: "/images/product-1.png", alt: "Project image 1", caption: "Massing + grid" },
            { url: "/images/product-2.png", alt: "Project image 2", caption: "Interior minimal" },
            { url: "/images/product-3.png", alt: "Project image 3", caption: "Signal accent" },
            { url: "/images/product-2.png", alt: "Project image 4", caption: "Light study" },
            { url: "/images/product-3.png", alt: "Project image 5", caption: "Facade rhythm" },
            { url: "/images/product-1.png", alt: "Project image 6", caption: "Material palette" },

            { url: "/images/kermit.jpg", alt: "Playful post-modern nod", caption: "Post-modern nod (asset)" }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <CTASplit
          headline="Want your project to look this clean?"
          description="We’ll help you choose a direction, then document it so it can be built."
          ctaLabel="Book a consult"
          ctaHref="/contact"
          secondaryCtaLabel="See pricing"
          secondaryCtaHref="/pricing"
          imageUrl="/images/product-2.png"
        />
      </motion.div>
    </div>
  );
}
