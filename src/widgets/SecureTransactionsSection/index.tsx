import { motion } from "motion/react";
import { Parallax } from "../../shared/ui/Parallax";

export const SecureTransactionsSection = () => {
  return (
    <section className="bg-[#020202] text-white flex flex-col md:flex-row items-center justify-between px-[31px] py-[55px] md:px-[148px] md:py-[164px] relative overflow-hidden">

      <Parallax offset={120} className="w-full md:w-1/2 text-left space-y-6">
        <motion.h2
          className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Secure <br /> Transactions, <br /> Unwavering Trust
        </motion.h2>

        <motion.p
          className="text-[#CFCFCF] text-[16px]/[26px] md:text-[19px]/[30px] max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Designed to adapt to evolving needs of businesses, providing scalability,
          reliability, and security.
        </motion.p>
      </Parallax>

      <Parallax offset={180} className="w-full md:w-1/2 flex justify-center items-center relative mt-16 md:mt-0 scale-70">
        <motion.div
          className="relative min-w-[400px] min-h-[400px] bg-black flex items-center justify-center rounded-2xl scale-80 md:scale-100"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >

          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="0"
              y1="280"
              x2="400"
              y2="380"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -50 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />

            <motion.line
              x1="430"
              y1="380"
              x2="240"
              y2="0"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -50 }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
            />

            <motion.line
              x1="180"
              y1="0"
              x2="20"
              y2="260"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -50 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </svg>

          <motion.div
            className="absolute left-[-60px] bottom-[80px] w-[90px] h-[90px] bg-[#D7BFFF] rounded-md flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src="/assets/img/plus-group.png" className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute right-[-80px] bottom-0 w-[90px] h-[90px] bg-[#E8E8E8] rounded-md flex items-center justify-center"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          >
            <img src="/assets/img/plus-group.png" className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-[#FFEEAA] rounded-md flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
          >
            <img src="/assets/img/plus-group.png" className="w-10 h-10" />
          </motion.div>
        </motion.div>
      </Parallax>
    </section>
  );
};
