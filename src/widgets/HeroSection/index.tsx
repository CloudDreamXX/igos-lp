import { IgosCard } from "./IgosCard";
import { PaymentAmountCard } from "./PaymentAmountCard";
import { PaymentSuccessChart } from "./PaymentSuccessChart";
import Plus from "../../shared/ui/icons/plus";
import { ContactUs } from "./ContactUs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/animate-ui/components/radix/dropdown-menu";
import { Button } from "../../components/animate-ui/components/buttons/button";

const HeroSection = () => {
  return (
    <div className="relative h-[693px] md:h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#D7BFFF_50%,#000000_100%)] bg-cover bg-center text-black flex flex-col">
      <div className="absolute inset-0 bg-[url('/assets/img/bg-illustration.svg')] bg-cover bg-center opacity-30"></div>

      <nav className="relative flex items-center justify-between px-4 md:px-8 md:py-8 py-4 z-10">
        <img
          src="/assets/icons/logo.svg"
          alt="IGOS Logo"
          className="w-28 md:w-44 h-auto"
        />

        <div className="lg:absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 text-sm font-normal">
          <a
            href="#solutions"
            className="hover:text-gray-700 transition-colors"
          >
            Solutions
          </a>
          <a href="#features" className="hover:text-gray-700 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Docs
          </a>
          <a href="#security" className="hover:text-gray-700 transition-colors">
            Security
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full p-3.5 h-[40px] w-[40px] flex flex-col items-center justify-center gap-[3px] bg-white text-black hover:bg-gray-100"
              >
                <span className="block w-3 h-[2px] bg-black" />
                <span className="block w-3 h-[2px] bg-black" />
                <span className="block w-3 h-[2px] bg-black" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-48 bg-white shadow-lg rounded-xl p-2"
            >
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <a href="#solutions" className="w-full cursor-pointer">
                  Solutions
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <a href="#features" className="w-full cursor-pointer">
                  Features
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <a href="#" className="w-full cursor-pointer">
                  Docs
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <a href="#security" className="w-full cursor-pointer">
                  Security
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center mt-14 md:mt-4 px-6 z-10">
        <h1 className="text-[40px] md:text-[78px] font-medium leading-tight">
          Making Online Payments <br /> Annoyingly Easy
        </h1>
        <p className="mt-4 text-sm md:text-[16px] tracking-wider text-[#020202] uppercase">
          Your go to for seamless transactions
        </p>
        <ContactUs />
      </div>

      <div className="relative mt-auto md:mt-16 mb-12 md:mb-0 flex justify-center">
        <div className="w-[268px] md:w-[700px] md:h-[400px] bg-black rounded-2xl shadow-lg relative">
          <img
            src="/assets/img/laptop.png"
            alt="Laptop Frame"
            className="w-[800px] h-auto"
          />
          <img
            src="/assets/img/dashboard.png"
            alt="Dashboard"
            className="w-[800px] h-[130px] md:h-[360px] object-cover absolute top-[10px] object-top"
          />
          <div className="absolute z-20 -top-24 lg:-top-28 -left-32 lg:-left-48 scale-30 lg:scale-100">
            <IgosCard />
          </div>
          <div className="absolute z-20 lg:-left-20 left-1/2 transform -translate-x-1/2 lg:translate-0 bottom-0 lg:bottom-[50px] scale-30 lg:scale-100">
            <PaymentAmountCard />
          </div>
          <div className="absolute z-20 w-[324px] -right-36 lg:-right-40 bottom-0 lg:bottom-[120px] scale-30 lg:scale-100">
            <PaymentSuccessChart />
          </div>

          <Plus className="absolute z-20 -left-16 lg:-left-[257px] top-1/2 transform -translate-y-1/2 text-[#FFEEAA] scale-30 lg:scale-100" />
          <Plus className="absolute z-20 -right-12 -top-14 lg:-right-[100px] lg:-top-20 text-white scale-30 lg:scale-100" />
          <Plus className="absolute z-20 -right-16 bottom-0 lg:-right-[260px] lg:bottom-10 scale-30 lg:scale-100" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
