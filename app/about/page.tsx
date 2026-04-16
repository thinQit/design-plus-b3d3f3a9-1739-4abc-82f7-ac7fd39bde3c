"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.div {...fadeUp}>
        <HeroMinimal
          headline="How we work"
          subheadline="A blueprint-first process built for clarity: fast concept alignment, clean iterations, and documentation that’s ready for real-world execution."
          primaryCta={{ label: "View portfolio", href: "/portfolio" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          imageUrl="/images/product-2.png"
        />
      </motion.div>

      <motion.section {...fadeUp} className="py-16 md:py-24 bg-[var(--secondary)]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-widest text-black/60">Process</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">From concept to construction</h2>
            <p className="mt-4 text-black/70">
              We keep the workflow minimal and decisive: fewer meetings, clearer deliverables, and a strong technical grid.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: "01 — Brief + constraints",
                  description:
                    "We map goals, budget, timeline, and site constraints. The output is a clear scope and direction."
                },
                {
                  title: "02 — Concept sprint",
                  description:
                    "Fast iterations to lock massing, layout logic, and the core architectural idea."
                },
                {
                  title: "03 — Design development",
                  description:
                    "Plans, elevations, materials, and lighting studies—refined until it feels inevitable."
                },
                {
                  title: "04 — Documentation",
                  description:
                    "Construction-ready drawings and specs to reduce ambiguity and keep the build aligned."
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.div {...fadeUp}>
        <StatsCounter
          bgColor="bg-[var(--foreground)] text-white"
          stats={[
            { label: "Typical concept sprint", value: "7–14d" },
            { label: "Revision cycles", value: "2–4" },
            { label: "Deliverables", value: "Plans + 3D" },
            { label: "Focus", value: "Build-ready" }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <TeamGrid
          headline="The visionaries"
          subheadline="A small, sharp team—design-led, documentation-obsessed."
          members={[
            {
              name: "Elena Rostov",
              title: "Architect / Creative Direction",
              bio: "Concept, composition, and the grid that holds everything together.",
              imageUrl: "/images/team-1.png"
            },
            {
              name: "Marcus Chen",
              title: "Visualization + Systems",
              bio: "3D studies, lighting, and material realism—fast and clean.",
              imageUrl: "/images/team-2.png"
            },
            {
              name: "Dina Wale",
              title: "Technical Documentation",
              bio: "Drawings and specs that reduce friction on site.",
              imageUrl: "/images/team-2.png"
            }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <FAQAccordion
          headline="FAQ"
          subheadline="Quick answers for a clean start."
          items={[
            {
              question: "Do you work with remote clients?",
              answer:
                "Yes. We run a tight async workflow with clear milestones, review links, and documented decisions."
            },
            {
              question: "What do you need to start?",
              answer:
                "A short brief, inspiration references, site info (if available), and your timeline/budget range."
            },
            {
              question: "Can you deliver construction-ready drawings?",
              answer:
                "Yes—depending on project scope and location requirements. We’ll confirm deliverables during discovery."
            }
          ]}
        />
      </motion.div>
    </div>
  );
}
