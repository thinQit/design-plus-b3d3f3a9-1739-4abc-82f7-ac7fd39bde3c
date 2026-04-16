"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { CTASplit } from "@/components/blocks/CTASplit";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.div {...fadeUp}>
        <HeroMinimal
          headline="Services"
          subheadline="Modular offerings—from concept to visualization to documentation. Pick what you need, keep it clean."
          primaryCta={{ label: "See pricing", href: "/pricing" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          imageUrl="/images/product-3.png"
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <FeaturesGrid
          badge="Core modules"
          headline="Choose a scope that fits your build."
          subheadline="We keep deliverables explicit so timelines stay predictable."
          features={[
            {
              icon: "Concept",
              title: "Concept + Schematic Design",
              description:
                "Massing, layout logic, and early plans/elevations to lock direction fast."
            },
            {
              icon: "Viz",
              title: "3D Visualization",
              description:
                "High-clarity renders and studies for stakeholder alignment and approvals."
            },
            {
              icon: "Interior",
              title: "Interior Architecture",
              description:
                "Material palettes, lighting intent, and minimal detailing with strong rhythm."
            },
            {
              icon: "Docs",
              title: "Construction Documentation",
              description:
                "Build-ready drawings and specs to reduce ambiguity and site friction."
            }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <LogoCloud
          headline="Tools we design with"
          logos={[
            { name: "Design Tool 1", imageUrl: "/images/logo-1.png" },
            { name: "Design Tool 2", imageUrl: "/images/logo-2.png" },
            { name: "Design Tool 3", imageUrl: "/images/logo-3.png" },
            { name: "Design Tool 4", imageUrl: "/images/logo-4.png" },
            { name: "Design Tool 5", imageUrl: "/images/logo-5.png" }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <CTASplit
          headline="Not sure what you need?"
          description="Send a quick brief. We’ll recommend the smallest scope that gets you to a confident decision."
          ctaLabel="Get a recommendation"
          ctaHref="/contact"
          secondaryCtaLabel="Browse portfolio"
          secondaryCtaHref="/portfolio"
          imageUrl="/images/product-3.png"
        />
      </motion.div>
    </div>
  );
}
