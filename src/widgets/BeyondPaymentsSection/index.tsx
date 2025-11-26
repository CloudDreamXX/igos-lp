import { motion } from "motion/react";
import { Parallax } from "../../shared/ui/Parallax";
import { FeatureSmallCard } from "../../shared/ui/FeatureSmallCard";

export const BeyondPaymentsSection = () => {
  return (
    <section
      id="features"
      className="bg-[#1B1B1B] text-white pt-[68px] pb-[119px] flex flex-col items-center text-center px-[31px] py-[55px] overflow-hidden"
    >

      <Parallax offset={40}>
        <motion.p
          className="text-[#FFEEAA] text-[16px] tracking-[0.48px] uppercase mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Features
        </motion.p>

        <motion.h2
          className="text-[34px]/[40px] md:text-[56px]/[64px] font-medium mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Beyond payments
        </motion.h2>

        <motion.p
          className="text-[#ECECEC] max-w-2xl text-[16px]/[26px] md:text-[19px]/[30px] mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1.2, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Take advantage of our <strong>payment orchestration features</strong> like Save Card
          Functionality, Enhanced Customer Profiling, and Real-time Transaction Success Metrics
          for comprehensive payment management.
        </motion.p>
      </Parallax>

      <Parallax offset={140} className="w-full">
        <motion.div
          className="flex w-full justify-between px-0 md:px-[148px] flex-wrap md:gap-10 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            {
              title: "Save card",
              description:
                "Simplify recurring transactions for merchant and customer ease.",
            },
            {
              title: "Centralized Management",
              description:
                "Centralize multiple merchant management in one account for streamlined operations.",
            },
            {
              title: "Transaction Success Metrics",
              description:
                "Track transaction success rates in real time for insightful optimization.",
            },
            {
              title: "Elevated Customer Profiling",
              description:
                "Detailed cardholder activity tracking for improved engagement insights.",
            },
          ].map((feature, i) => (
            <motion.div
              className="rounded-[8px]"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
              whileHover={{
                scale: [null, 1.1, 1.4],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
            >
              <FeatureSmallCard
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Parallax>
    </section>
  );
};
