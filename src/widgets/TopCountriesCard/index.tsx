const TopCountriesCard = () => {
  const countries = [
    { flag: '🇩🇪', name: 'Germany', success: '65.5%', failed: 3, pending: 0 },
    { flag: '🇮🇹', name: 'Italy', success: '65.5%', failed: 3, pending: 0 },
    { flag: '🇦🇺', name: 'Australia', success: '65.5%', failed: 3, pending: 0 },
    { flag: '🇵🇱', name: 'Poland', success: '65.5%', failed: 3, pending: 0 },
    { flag: '🇪🇸', name: 'Spain', success: '65.5%', failed: 3, pending: 0 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 w-full max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[16px] font-semibold text-gray-900">Top Countries</h3>
        <a href="#" className="text-sm text-gray-700 hover:underline">
          See all
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        <button className="px-3 py-1.5 text-xs font-medium bg-gray-200 text-gray-800 rounded-full">
          All
        </button>
        <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
          Acceptance Rate
        </button>
        <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
          Amount
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-sm font-medium text-gray-500 mb-2">
        <span>Country</span>
        <span className="text-center">Success</span>
        <span className="text-center">Failed</span>
        <span className="text-center">Pending</span>
      </div>

      {/* Rows */}
      <div className="space-y-2">
        {countries.map((item) => (
          <div key={item.name} className="grid grid-cols-4 items-center text-sm text-gray-700">
            {/* Country */}
            <div className="flex items-center gap-2">
              <span className="text-lg">{item.flag}</span>
              <span>{item.name}</span>
            </div>

            {/* Success */}
            <div className="flex justify-center">
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {item.success}
              </span>
            </div>

            {/* Failed */}
            <div className="flex justify-center">
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {item.failed}
              </span>
            </div>

            {/* Pending */}
            <div className="flex justify-center">
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                {item.pending}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountriesCard;
