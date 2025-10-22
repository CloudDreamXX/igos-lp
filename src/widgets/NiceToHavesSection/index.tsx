import { NiceToHaveCard } from '../../shared/ui/NiceToHaveCard';

export const NiceToHavesSection = () => {
  return (
    <section className="bg-[#1B1B1B] text-white pt-[68px] px-[31px] md:px-[148px] pb-5 md:pb-[93px] flex flex-col ">
      <p className="text-[#FFEEAA] text-[16px] tracking-[0.48px] uppercase mb-md:12 mb-6">
        More to the deal
      </p>

      <h2 className="text-[#ECECEC] text-[34px]/[40px] md:text-[56px]/[62px] font-medium  mb-8 md:mb-12">
        Your essential <br />
        <span>nice-to-haves</span>
      </h2>

      <p className="text-[#ECECEC] max-w-xl text-[16px]/[26px] md:text-[18px]/[30px] mb-24">
        Designed to adapt to evolving needs of businesses, providing scalability reliability and
        security
      </p>

      <div
        className=" flex overflow-x-auto gap-4 px-4
    sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    sm:overflow-visible
    md:gap-4
    scrollbar-hide"
      >
        <NiceToHaveCard
          title="Reporting & Data"
          description="Customize your reporting views and easily export data for in-depth analysis."
        />
        <NiceToHaveCard
          title="Transparency"
          description="Access detailed logs that provide insights into the decision-making process of payment routing."
        />
        <NiceToHaveCard
          title="Webhook System"
          description="Stay updated with real-time notifications for various events and triggers within the payment process."
        />
        <NiceToHaveCard
          title="Card Blocking"
          description="Enhance security by blocking specific cards to prevent fraud."
        />
        <NiceToHaveCard
          title="Data Sharing"
          description="Leverage partnership merchant data to enhance First Time Deposit (FTD) prediction models."
        />
      </div>
    </section>
  );
};
