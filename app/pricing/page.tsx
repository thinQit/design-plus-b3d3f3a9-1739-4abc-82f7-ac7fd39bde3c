"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASplit } from "@/components/blocks/CTASplit";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PricingPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.div {...fadeUp}>
        <HeroMinimal
          headline="Pricing"
          subheadline="Clear tiers for clean outcomes. Choose a package, then we tailor the deliverables to your site and timeline."
          primaryCta={{ label: "Start a project", href: "/contact" }}
          secondaryCta={{ label: "View portfolio", href: "/portfolio" }}
          imageUrl="/images/product-3.png"
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <PricingTable
          headline="Pick your scope"
          subheadline="All tiers include a kickoff call, a shared review board, and a defined revision cadence."
          tiers={[
            {
              name: "Concept",
              price: "$1,250",
              period: "starting",
              description: "Fast direction-setting for early decisions.",
              features: [
                "Brief + constraints mapping",
                "2 concept options",
                "1 revision cycle",
                "Basic plans + massing",
                "Next-step roadmap"
              ],
              ctaLabel: "Choose Concept",
              ctaHref: "/contact"
            },
            {
              name: "Design",
              price: "$3,900",
              period: "starting",
              description: "Refined design with visuals for alignment.",
              features: [
                "Schematic plans + elevations",
                "Material + lighting intent",
                "3D views / renders (set)",
                "2–3 revision cycles",
                "Presentation-ready export"
              ],
              ctaLabel: "Choose Design",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Build",
              price: "Custom",
              period: "",
              description: "Documentation for execution and handoff.",
              features: [
                "Construction-ready drawing set",
                "Specs + schedules (as needed)",
                "Coordination checkpoints",
                "Handoff package for contractor",
                "Optional visualization add-on"
              ],
              ctaLabel: "Request a quote",
              ctaHref: "/contact"
            }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <FAQAccordion
          headline="Pricing FAQ"
          subheadline="No surprises—just scope clarity."
          items={[
            {
              question: "Are these fixed prices?",
              answer:
                "They’re starting points. Final pricing depends on size, complexity, and required deliverables."
            },
            {
              question: "Do you offer add-ons?",
              answer:
                "Yes—extra render sets, additional revision cycles, and documentation expansions can be added."
            },
            {
              question: "How do payments work?",
              answer:
                "Typically a deposit to start, then milestone-based payments aligned to deliverables."
            }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <CTASplit
          headline="Want the cleanest scope for your budget?"
          description="Send your project details and we’ll propose a minimal, effective package."
          ctaLabel="Contact Design Plus"
          ctaHref="/contact"
          secondaryCtaLabel="See services"
          secondaryCtaHref="/services"
          imageUrl="/images/product-2.png"
        />
      </motion.div>
    </div>
  );
}
