import { Button } from '../../shared/ui/Button';
import { IgosCard } from './IgosCard';
import { PaymentAmountCard } from './PaymentAmountCard';
import { PaymentSuccessChart } from './PaymentSuccessChart';
import Plus from '../../shared/ui/icons/plus';
import { useState } from 'react';
import { ContactUs } from './ContactUs';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#D7BFFF_50%,#000000_100%)] bg-cover bg-center text-black flex flex-col">
      <div className="absolute inset-0 bg-[url('/assets/img/bg-illustration.svg')] bg-cover bg-center opacity-30"></div>
      <nav className="relative flex items-center justify-between px-4 md:px-8 md:py-8 py-4 z-10">

        <img src="/assets/icons/logo.svg" alt="IGOS Logo" className="w-28 md:w-44 h-auto" />

        <div className="lg:absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 text-sm font-normal">
          <a href="#solutions" className="hover:text-gray-700 transition">Solutions</a>
          <a href="#features" className="hover:text-gray-700 transition">Features</a>
          <a href="#" className="hover:text-gray-700 transition">Docs</a>
          <a href="#security" className="hover:text-gray-700 transition">Security</a>
        </div>

        <div className="md:hidden flex items-center">
          <button className="bg-white rounded-full flex flex-col items-center justify-center gap-[2px] p-3.5 hover:cursor-pointer">
            <span className="block w-3 h-[2px] bg-black"></span>
            <span className="block w-3 h-[2px] bg-black"></span>
            <span className="block w-3 h-[2px] bg-black"></span>
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center mt-14 md:mt-4 px-6 z-10">
        <h1 className="text-[40px] md:text-[78px] font-medium leading-tight">
          Making Online Payments <br /> Annoyingly Easy
        </h1>
        <p className="mt-4 text-sm md:text-[16px] tracking-wider text-[#020202] uppercase">
          Your go to for seamless transactions
        </p>
        <Button onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} variant="secondary" size="lg" className="mt-8">
          Contact us
        </Button>
      </div>

      <div className="relative mt-auto md:mt-16 mb-12 md:mb-0 flex justify-center">
        <div className="w-[268px] md:w-[700px] md:h-[400px] bg-black rounded-2xl shadow-lg relative">
          <img src="/assets/img/laptop.png" alt="Laptop Frame" className="w-[800px] h-auto" />
          <img src="/assets/img/dashboard.png" alt="Dashboard" className="w-[800px] h-[130px] md:h-[360px] object-cover absolute top-[10px] object-top" />
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

      {isModalOpen && (
        <ContactUs onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default HeroSection;
