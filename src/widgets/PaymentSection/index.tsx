import Plus from '../../shared/ui/icons/plus';

export const PaymentsSection = () => {
  return (
    <section className="relative bg-[#020202] text-white py-20 px-[30px] md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_40%,#A58BFF_0%,transparent_60%)]"></div>

      <div className="text-center max-w-3xl mx-auto mb-44 relative">
        <p className="uppercase tracking-widest text-[#FFEEAA] text-sm mb-6">What we do</p>
        <h2 className="text-[40px] md:text-[56px] font-medium mb-7">Each Payment Counts!</h2>
        <p className="text-[#ECECEC] w-[304px] text-[16px]/[26px] md:text-[19px]/[27px] md:w-[670px] mx-auto font-normal">
          Discover how IGOS aggregates various Payment Service Providers (PSPs) under one roof,
          offering unparalleled flexibility and efficiency in managing online transactions.
        </p>
      </div>
      <Plus className="absolute z-20 left-2 md:left-20 top-[450px] md:top-80 transform text-white scale-50 md:scale-80" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32 pt-[72px]">
        <div className="flex-1  md:text-left md:ml-[80px] ">
          <h3 className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium mb-4 text-[#ECECEC] max-w-md">
            Clear overview of your payments
          </h3>
          <p className="text-[#ECECEC] leading-relaxed max-w-md mt-8 text-[16px]/[26px] md:text-[19px]/[30px]">
            Designed to adapt to evolving needs of businesses, providing scalability, reliability
            and security.
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src={'assets/img/bg_vector-1.png'}
            alt="Line decor"
            className="absolute left-0 top-0 w-full pointer-events-none z-10"
          />
          <img
            src={'assets/img/dashboard.jpg'}
            alt="Payments dashboard"
            className="relative rounded-xl shadow-2xl mx-auto md:ml-auto w-full max-w-[509px] h-[316px] md:h-[472px] object-cover object-center z-20"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-32 px-0 md:px-[80px] py-10 md:py-[150px]">
        <div className="w-full md:w-1/2 text-left mx-auto">
          <h3 className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium mb-4 text-[#ECECEC]">
            Data Enrichment
          </h3>
          <p className="text-[#ECECEC] leading-relaxed max-w-md mt-8 text-[16px]/[26px] md:text-[19px]/[30px]">
            Player data insights are a secure and compliant way to access and interpret player bank
            data, turning it into actionable spending patterns.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center items-center py-10 overflow-visible perspective-[1000px]">
          <img
            src={'assets/img/bg_vector-1.png'}
            alt="Line decor"
            className="absolute left-1/2 top-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 scale-x-[-1]"
          />

          {/* Far left card (deepest layer) */}
          <img
            src="assets/img/card.png"
            alt="Far Left card"
            className="
            absolute left-[-180px] top-1/2 -translate-y-1/2
            rounded-xl shadow-2xl w-56 md:w-[360px]
            transform scale-75 translate-z-[-160px] blur-md opacity-40
          "
          />

          {/* Mid left card */}
          <img
            src="assets/img/card.png"
            alt="Left card"
            className="
            absolute left-[-60px] top-1/2 -translate-y-1/2
            rounded-xl shadow-2xl w-64 md:w-[420px]
            transform scale-90 translate-z-[-100px] blur-sm opacity-70
          "
          />

          {/* Center card (main focus) */}
          <img
            src="assets/img/card.png"
            alt="Center card"
            className="
            relative z-20 rounded-xl shadow-2xl w-72 md:w-[520px]
            transform scale-100 translate-z-[0px]
          "
          />

          {/* Mid right card */}
          <img
            src="assets/img/card.png"
            alt="Right card"
            className="
            absolute right-[-60px] top-1/2 -translate-y-1/2
            rounded-xl shadow-2xl w-64 md:w-[420px]
            transform scale-90 translate-z-[-100px] blur-sm opacity-70
          "
          />

          {/* Far right card (deepest layer) */}
          <img
            src="assets/img/card.png"
            alt="Far Right card"
            className="
            absolute right-[-180px] top-1/2 -translate-y-1/2
            rounded-xl shadow-2xl w-56 md:w-[360px]
            transform scale-75 translate-z-[-160px] blur-md opacity-40
          "
          />
        </div>
      </div>
    </section>
  );
};
