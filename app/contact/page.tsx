"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)]">
      <motion.div {...fadeUp}>
        <HeroMinimal
          headline="Contact"
          subheadline="Send your brief. We’ll respond with next steps, timeline, and a clean scope."
          primaryCta={{ label: "See pricing", href: "/pricing" }}
          secondaryCta={{ label: "View portfolio", href: "/portfolio" }}
          imageUrl="/images/product-1.png"
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <ContactForm
          headline="Start your blueprint"
          subheadline="Tell us what you’re building—location, timeline, and what you need (concept, visualization, docs)."
          contactInfo={[
            { icon: "Mail", label: "Email", value: "hello@designplus.studio" },
            { icon: "Clock", label: "Response time", value: "1–2 business days" },
            { icon: "Scope", label: "Typical start", value: "Concept sprint → Design → Docs" }
          ]}
        />
      </motion.div>

      <motion.div {...fadeUp}>
        <FAQAccordion
          headline="Before you send"
          subheadline="A few details that help us quote accurately."
          items={[
            {
              question: "What should I include in my message?",
              answer:
                "Project type, approximate size, location, timeline, budget range, and any inspiration links."
            },
            {
              question: "Do you do site visits?",
              answer:
                "Depending on location and scope. Remote-first is standard; in-person can be arranged."
            },
            {
              question: "Can you collaborate with my contractor or engineer?",
              answer:
                "Yes. We can coordinate deliverables and checkpoints to keep everyone aligned."
            }
          ]}
        />
      </motion.div>
    </div>
  );
}
