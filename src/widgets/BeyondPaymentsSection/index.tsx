import { FeatureSmallCard } from '../../shared/ui/FeatureSmallCard';

export const BeyondPaymentsSection = () => {
  return (
    <section className="bg-[#1B1B1B] text-white pt-[68px] pb-[119px] flex flex-col items-center text-center px-[31px] py-[55px]">
      {/* ====== Section Header ====== */}
      <p className="text-[#FFEEAA] text-[16px] tracking-[0.48px] uppercase mb-12">Features</p>

      <h2 className="text-[34px]/[40px] md:text-[56px]/[64px] font-medium mb-10">
        Beyond payments
      </h2>

      <p className="text-[#ECECEC] max-w-2xl text-[16px]/[26px] md:text-[19px]/[30px] mb-24 ">
        Take advantage of our **payment orchestration features** like Save Card Functionality,
        Enhanced Customer Profiling, and Real-time Transaction Success Metrics for comprehensive
        payment management.
      </p>

      <div className="flex w-full justify-between px-0 md:px-[148px] flex-wrap md:gap-10 gap-5">
        <FeatureSmallCard
          title="Save card"
          description="Simplify recurring transactions for merchant and customer ease."
        />
        <FeatureSmallCard
          title="Centralized Management"
          description="Centralize multiple merchant management in one account for streamlined operations."
        />
        <FeatureSmallCard
          title="Transaction Success Metrics"
          description="Track transaction success rates in real time for insightful optimization."
        />
        <FeatureSmallCard
          title="Elevated Customer Profiling"
          description="Detailed cardholder activity tracking for improved engagement insights."
        />
      </div>
    </section>
  );
};
