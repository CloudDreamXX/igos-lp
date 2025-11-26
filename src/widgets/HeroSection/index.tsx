import { IgosCard } from "./IgosCard";
import { PaymentAmountCard } from "./PaymentAmountCard";
import { PaymentSuccessChart } from "./PaymentSuccessChart";
import Plus from "../../shared/ui/icons/plus";
import { ContactUs } from "./ContactUs";
import { motion, useScroll, useTransform } from "motion/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/animate-ui/components/radix/dropdown-menu";
import { Button } from "../../components/animate-ui/components/buttons/button";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, easing: "ease-out" } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      easing: "ease-in-out",
    },
  },
};

const HeroSection = () => {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, -120]);

  const contentY = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <div className="relative h-[693px] md:h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#D7BFFF_50%,#000000_100%)] bg-cover bg-center text-black flex flex-col overflow-hidden">

      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('/assets/img/bg-illustration.svg')] bg-cover bg-center opacity-30"
      />

      <nav className="relative flex items-center justify-between px-4 md:px-8 md:py-8 py-4 z-10">
        <motion.img
          src="/assets/icons/logo.svg"
          alt="IGOS Logo"
          className="w-28 md:w-44 h-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="lg:absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10 text-sm font-normal">
          {["Solutions", "Features", "Docs", "Security"].map((item, i) => (
            <motion.a
              key={item}
              href={item === "Docs" ? "#" : `#${item.toLowerCase()}`}
              className="hover:scale-[1.1] transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full p-3.5 h-[40px] w-[40px] flex flex-col items-center justify-center gap-[3px] bg-white text-black hover:bg-gray-100">
                <span className="block w-3 h-[2px] bg-black" />
                <span className="block w-3 h-[2px] bg-black" />
                <span className="block w-3 h-[2px] bg-black" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-xl p-2">
              {["Solutions", "Features", "Docs", "Security"].map((item, i) => (
                <DropdownMenuItem key={item} onSelect={(e) => e.preventDefault()}>
                  <motion.a
                    href={item === "Docs" ? "#" : `#${item.toLowerCase()}`}
                    className="w-full cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.5 }}
                  >
                    {item}
                  </motion.a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <motion.div
        style={{ y: contentY }}
        className="flex flex-col items-center text-center mt-14 md:mt-4 px-6 z-10"
        {...fadeInUp}
      >
        <motion.h1
          className="text-[40px] md:text-[78px] font-medium leading-tight"
          transition={{ delay: 0.2 }}
        >
          Making Online Payments <br /> Annoyingly Easy
        </motion.h1>

        <motion.p
          className="mt-4 text-sm md:text-[16px] tracking-wider text-[#020202] uppercase"
          transition={{ delay: 0.4 }}
        >
          Your go to for seamless transactions
        </motion.p>

        <motion.div transition={{ delay: 0.6 }}>
          <ContactUs />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative mt-auto md:mt-16 mb-12 md:mb-0 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-[268px] md:w-[700px] md:h-[400px] bg-black rounded-2xl shadow-lg relative">
          <img src="/assets/img/laptop.png" className="w-[800px] h-auto" />
          <img
            src="/assets/img/dashboard.png"
            className="w-[800px] h-[130px] md:h-[360px] object-cover absolute top-[10px] object-top"
          />

          <motion.div
            className="absolute z-20 -top-24 lg:-top-28 -left-32 lg:-left-48 scale-30 lg:scale-100"
            animate={float.animate}
            whileHover={{
              scale: [null, 1.4],
              transition: {
                duration: 0.5,
                times: [0, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
          >
            <IgosCard />
          </motion.div>

          <motion.div
            className="absolute z-20 lg:-left-20 left-1/2 -translate-x-1/2 lg:translate-0 bottom-0 lg:bottom-[50px] scale-30 lg:scale-100"
            animate={float.animate}
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
            transition={{ delay: 0.3 }}
          >
            <PaymentAmountCard />
          </motion.div>

          <motion.div
            className="absolute z-20 w-[324px] -right-36 lg:-right-40 bottom-0 lg:bottom-[120px] scale-30 lg:scale-100"
            animate={float.animate}
            transition={{ delay: 0.6 }}
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
          >
            <PaymentSuccessChart />
          </motion.div>

          <motion.div
            className="absolute z-20 -left-16 lg:-left-[257px] top-1/2 -translate-y-1/2 text-[#FFEEAA] scale-30 lg:scale-100"
            animate={float.animate}
          >
            <Plus />
          </motion.div>

          <motion.div
            className="absolute z-20 -right-12 -top-14 lg:-right-[100px] lg:-top-20 text-white scale-30 lg:scale-100"
            animate={float.animate}
            transition={{ delay: 0.3 }}
          >
            <Plus />
          </motion.div>

          <motion.div
            className="absolute z-20 -right-16 bottom-0 lg:-right-[260px] lg:bottom-10 scale-30 lg:scale-100"
            animate={float.animate}
            transition={{ delay: 0.5 }}
          >
            <Plus />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
