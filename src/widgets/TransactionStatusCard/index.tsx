const TransactionStatusCard = () => {
  const statuses = [
    { color: 'bg-green-500', label: 'Success', percent: '65.5%', total: 19 },
    { color: 'bg-blue-400', label: 'Scoring', percent: '65.5%', total: 0 },
    { color: 'bg-orange-400', label: 'Abandoned', percent: '65.5%', total: 7 },
    { color: 'bg-red-500', label: 'Failed', percent: '65.5%', total: 3 },
    { color: 'bg-yellow-400', label: 'Pending', percent: '65.5%', total: 0 },
  ];

  return (
    <div className="rounded-xl bg-[#F5F5F5] p-4 w-full h-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[16px] font-semibold text-gray-800">Transaction Status</h3>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          See all
        </a>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="p-2 text-[10px] font-normal bg-[#EFEDED] text-[#383838] rounded-full">
          Acceptance Rate
        </button>
        <button className="p-2 text-[10px] font-normal bg-[#D3D3D3] text-[#383838] rounded-full">
          Amount
        </button>
      </div>

      <div className="grid grid-cols-3 text-[10px] font-normal text-[#767070] mb-2">
        <span>Status</span>
        <span className="text-center">%</span>
        <span className="text-right">Total</span>
      </div>

      <div className="space-y-2">
        {statuses.map((item) => (
          <div key={item.label} className="grid grid-cols-3 items-center text-[10px] text-gray-700">
            <div className="flex items-center gap-2 w-[77px]">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
              {item.label}
            </div>

            <div className="flex justify-center items-center">
              <span
                className={`flex items-center flex-1 gap-1 px-2 py-1 bg-[#EBEBEB]  border-gray-200 rounded-md text-[10px]`}
              >
                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                {item.percent}
              </span>
            </div>

            <div className="flex justify-end items-center">
              <span
                className={`flex items-center flex-1 gap-1 px-2 py-1 bg-[#EBEBEB] border border-gray-200 rounded-md text-[10px]`}
              >
                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                {item.total}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionStatusCard;
