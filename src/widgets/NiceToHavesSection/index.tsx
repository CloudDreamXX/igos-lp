import { motion } from 'motion/react';
import { NiceToHaveCard } from '../../shared/ui/NiceToHaveCard';

export const NiceToHavesSection = () => {
  return (
    <section className="bg-[#1B1B1B] text-white pt-[68px] px-[31px] md:px-[148px] pb-5 md:pb-[93px] flex flex-col ">
      <motion.p
        className="text-[#FFEEAA] text-[16px] tracking-[0.48px] uppercase mb-md:12 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >More to the deal</motion.p>
      <motion.h2
        className="text-[#ECECEC] text-[34px]/[40px] md:text-[56px]/[62px] font-medium  mb-8 md:mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3 }}
      >Your essential <br />
        <span>nice-to-haves</span></motion.h2>
      <motion.p
        className="text-[#ECECEC] max-w-xl text-[16px]/[26px] md:text-[19px]/[30px] mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1.2, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >Designed to adapt to evolving needs of businesses, providing scalability reliability and
        security</motion.p>

      <motion.div
        className="flex overflow-x-auto gap-4 px-4
    sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    sm:overflow-visible
    md:gap-4
    scrollbar-hide"
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
        <motion.div
          className="rounded-[8px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 },
          }}
        >        <NiceToHaveCard
            title="Reporting & Data"
            description="Customize your reporting views and easily export data for in-depth analysis."
          /></motion.div>
        <motion.div
          className="rounded-[8px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 },
          }}
        ><NiceToHaveCard
            title="Transparency"
            description="Access detailed logs that provide insights into the decision-making process of payment routing."
          /></motion.div>
        <motion.div
          className="rounded-[8px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 },
          }}
        ><NiceToHaveCard
            title="Webhook System"
            description="Stay updated with real-time notifications for various events and triggers within the payment process."
          /></motion.div>
        <motion.div
          className="rounded-[8px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 },
          }}
        ><NiceToHaveCard
            title="Card Blocking"
            description="Enhance security by blocking specific cards to prevent fraud."
          /></motion.div>
        <motion.div
          className="rounded-[8px]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 },
          }}
        ><NiceToHaveCard
            title="Data Sharing"
            description="Leverage partnership merchant data to enhance First Time Deposit (FTD) prediction models."
          /></motion.div>
      </motion.div>
    </section>
  );
};
