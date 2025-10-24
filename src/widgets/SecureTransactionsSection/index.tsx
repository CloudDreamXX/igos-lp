export const SecureTransactionsSection = () => {
  return (
    <section id="security" className="bg-[#020202] text-white flex flex-col md:flex-row items-center justify-between px-[31px] py-[55px] md:px-[148px] md:py-[164px] relative overflow-hidden">
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h2 className="text-[34px]/[40px] md:text-[56px]/[62px] font-medium">
          Secure <br /> Transactions, <br /> Unwavering Trust
        </h2>
        <p className="text-[#CFCFCF] text-[16px]/[26px] md:text-[19px]/[30px] max-w-md mx-auto md:mx-0">
          Designed to adapt to evolving needs of businesses, providing scalability, reliability, and
          security.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-16 md:mt-0 scale-70">
        <div className="relative min-w-[400px] min-h-[400px] bg-black flex items-center justify-center rounded-2xl scale-80 md:scale-100">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="280"
              x2="400"
              y2="380"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <line
              x1="430"
              y1="380"
              x2="240"
              y2="0"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <line
              x1="180"
              y1="0"
              x2="20"
              y2="260"
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="absolute left-[-60px] bottom-[80px] w-[90px] h-[90px] bg-[#D7BFFF] rounded-md flex items-center justify-center">
            <img src="/assets/img/plus-group.png" alt="Plus Icon" className="w-10 h-10" />
          </div>

          <div className="absolute right-[-80px] bottom-0 w-[90px] h-[90px] bg-[#E8E8E8] rounded-md flex items-center justify-center">
            <img src="/assets/img/plus-group.png" alt="Plus Icon" className="w-10 h-10" />
          </div>

          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2  w-[90px] h-[90px] bg-[#FFEEAA] rounded-md flex items-center justify-center">
            <img src="/assets/img/plus-group.png" alt="Plus Icon" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
