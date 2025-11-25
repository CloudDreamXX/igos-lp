import Plus from '../../shared/ui/icons/plus';
import { motion } from "motion/react";
import { Parallax } from '../../shared/ui/Parallax';

const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      easing: "ease-in-out",
    },
  },
};

const smoothImageAnim = {
  initial: { opacity: 0, y: 60, rotateX: -8, scale: 0.9 },
  whileInView: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
  },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 1,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
};

export const PaymentsSection = () => {
  return (
    <section id="solutions" className="relative bg-[#020202] text-white py-20 px-[30px] md:px-16 overflow-hidden">
      <Parallax offset={60}>
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_40%,#A58BFF_0%,transparent_60%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3 }}
        />
      </Parallax>

      <Parallax offset={80} className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-44 relative">
          <motion.p
            className="uppercase tracking-widest text-[#FFEEAA] text-sm mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >What we do</motion.p>
          <motion.h2
            className="text-[40px] md:text-[56px] font-medium mb-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
          >Each Payment Counts!</motion.h2>
          <motion.p
            className="text-[#ECECEC] w-[304px] text-[16px]/[26px] md:text-[19px]/[27px] md:w-[670px] mx-auto font-normal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.2, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >Discover how IGOS aggregates various Payment Service Providers (PSPs) under one roof,
            offering unparalleled flexibility and efficiency in managing online transactions.</motion.p>
        </div>
      </Parallax>
      <motion.div
        className="absolute z-20 left-2 md:left-20 top-[450px] md:top-80 transform text-white scale-50 md:scale-80"
        animate={float.animate}
      >
        <Plus />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32 pt-[72px]">
        <div className="flex-1  md:text-left md:ml-[80px] ">
          <motion.h3
            className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium mb-4 text-[#ECECEC] max-w-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
          >Clear overview of your payments</motion.h3>
          <motion.p
            className="text-[#ECECEC] leading-relaxed max-w-md mt-8 text-[16px]/[26px] md:text-[19px]/[30px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >Designed to adapt to evolving needs of businesses, providing scalability, reliability
            and security.</motion.p>
        </div>

        <Parallax offset={120} className="flex-1">
          <div className="flex-1 relative">
            <img
              src={'assets/img/bg_vector-1.png'}
              alt="Line decor"
              className="absolute left-0 top-0 w-full pointer-events-none z-10"
            />
            <motion.img
              src="assets/img/dashboard.jpg"
              alt="Payments dashboard"
              className="relative rounded-xl shadow-2xl mx-auto md:ml-auto w-full max-w-[509px] h-[316px] md:h-[472px] object-cover object-center z-20"
              {...smoothImageAnim}
              transition={{
                ...smoothImageAnim.transition,
                delay: 0.15,
              }}
            />
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-32 px-0 md:px-[80px] py-10 md:py-[150px]">
        <div className="w-full md:w-1/2 text-left mx-auto">
          <motion.h3
            className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium mb-4 text-[#ECECEC]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
          >Data Enrichment</motion.h3>
          <motion.p
            className="text-[#ECECEC] leading-relaxed max-w-md mt-8 text-[16px]/[26px] md:text-[19px]/[30px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >Player data insights are a secure and compliant way to access and interpret player bank
            data, turning it into actionable spending patterns.</motion.p>
        </div>

        <Parallax className="w-full" offset={160}>
          <div className="relative w-full md:w-1/2 flex justify-center items-center py-10 overflow-visible perspective-[1000px]">
            <img
              src={'assets/img/bg_vector-1.png'}
              alt="Line decor"
              className="absolute left-1/2 top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 scale-x-[-1]"
            />

            {/* Far left card (deepest layer) */}
            <motion.img
              src="assets/img/card.png"
              className="absolute left-[-180px] top-1/2 -translate-y-1/2 rounded-xl shadow-2xl w-56 md:w-[360px] transform scale-75 translate-z-[-160px] blur-md opacity-40"
              initial={{ opacity: 0, y: 80, rotateX: -12, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 0.75 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, delay: 0.3 }}
            />

            {/* Mid left card */}
            <motion.img
              src="assets/img/card.png"
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 rounded-xl shadow-2xl w-64 md:w-[420px] transform scale-90 translate-z-[-100px] blur-sm opacity-70"
              initial={{ opacity: 0, y: 70, rotateX: -8, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Center card (main focus) */}
            <motion.img
              src="assets/img/card.png"
              className="relative z-20 rounded-xl shadow-2xl w-72 md:w-[520px]"
              initial={{ opacity: 0, y: 60, rotateX: -5, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
            />

            {/* Mid right card */}
            <motion.img
              src="assets/img/card.png"
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 rounded-xl shadow-2xl w-64 md:w-[420px] transform scale-90 translate-z-[-100px] blur-sm opacity-70"
              initial={{ opacity: 0, y: 70, rotateX: -8, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Far right card (deepest layer) */}
            <motion.img
              src="assets/img/card.png"
              className="absolute right-[-180px] top-1/2 -translate-y-1/2 rounded-xl shadow-2xl w-56 md:w-[360px] transform scale-75 translate-z-[-160px] blur-md opacity-40"
              initial={{ opacity: 0, y: 80, rotateX: -12, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 0.75 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, delay: 0.3 }}
            />

          </div>
        </Parallax>
      </div>
    </section>
  );
};
