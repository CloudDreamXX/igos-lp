import { useNavigate } from "react-router-dom";
import { Button } from "../../components/animate-ui/components/buttons/button";
import { motion } from "motion/react";

export const Footer = () => {
  const nav = useNavigate();

  return (
    <footer
      id="security"
      className="bg-[#1B1B1B] px-[27px] md:px-[36px] py-[34px] md:py-[50px]"
    >
      <motion.div
        className="bg-[#FFEEAA] px-8 py-10 rounded-3xl md:h-[448px] flex flex-col justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mr-24 pb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="w-full max-w-[332px] md:text-left"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <motion.img
              src="assets/icons/logo.svg"
              alt="IGOS Logo"
              className="mb-6 h-[37px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            />

            <p className="max-w-[332px] text-[16px] leading-[26px] font-normal text-[#040404]">
              Unifying Payment Service Providers for Seamless Transactions
            </p>
          </motion.div>

          <motion.div
            className="w-fit md:text-left"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <h4 className="text-[12px] font-normal uppercase mb-8 tracking-wide">
              Company
            </h4>
            <ul className="text-[16px] space-y-2">
              <motion.li whileHover={{ x: 4 }}>
                <Button
                  variant="link"
                  onClick={() => nav("/terms-of-use")}
                  className="text-[16px] font-normal p-0 cursor-pointer"
                >
                  Terms and Conditions
                </Button>
              </motion.li>

              <motion.li whileHover={{ x: 4 }}>
                <Button
                  variant="link"
                  onClick={() => nav("#")}
                  className="text-[16px] font-normal p-0 cursor-pointer"
                >
                  Documentation
                </Button>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="w-fit md:text-left"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <h4 className="text-[12px] font-normal uppercase mb-8 tracking-wide">
              Follow Us
            </h4>

            <motion.div whileHover={{ x: 4 }}>
              <Button
                variant="link"
                onClick={() => nav("#")}
                className="text-[16px] font-normal p-0 cursor-pointer"
              >
                Instagram
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-px bg-black mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        <motion.div
          className="text-center text-[16px] font-normal text-[#040404]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          ©2025 IGOS. All rights reserved
        </motion.div>
      </motion.div>
    </footer>
  );
};
