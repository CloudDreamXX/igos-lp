const AcceptanceRateCard = () => {
  const percentage = 68.4;

  return (
    <div className="rounded-xl bg-[#F5F5F5] p-4 w-full max-w-[320px] flex flex-col gap-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[14px] font-bold text-gray-900">Acceptance Rate</h3>
        <a href="#" className="text-[10px] text-[#121212] ">
          See all
        </a>
      </div>

      <div className="flex gap-2 mb-6">
        <button className="p-2 text-[10px] font-normal bg-[#D3D3D3] text-[#383838] rounded-full">
          Transactions
        </button>
        <button className="p-2 text-[10px] font-normal bg-[#EFEDED] text-[#383838] rounded-full">
          Requests
        </button>
        <button className="p-2 text-[10px] font-normal bg-[#EFEDED] text-[#383838] rounded-full">
          All Tx by Request
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-[48px] font-semibold leading-none mt-1">{percentage}%</p>

          <div className="mt-4 space-y-1">
            <p className="text-[10px] text-gray-500">Settled Value</p>
            <p className="text-[16px] font-medium text-[#8C52FF]">€ 845,81</p>

            <p className="text-[10px] text-gray-500 mt-3">Revenue today</p>
            <p className="text-[16px] font-medium text-gray-800">€ 4545,50</p>
          </div>
        </div>

        <div className="relative w-[132px] h-[132px]">
          <svg
            className="transform -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E5E5"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#8C52FF"
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceRateCard;
