import ChartUp from '../../shared/ui/icons/chart-up';

export const PaymentAmountCard = () => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 w-full max-w-[303px]">
      <div className="flex items-center gap-2 mb-4">
        <ChartUp />
        <span className="text-[#E3E3E3] text-[9px] font-normal">Payment amount</span>
      </div>

      <div className="text-[#E3E3E3] text-[42px] font-medium tracking-tight">
        <span className="text-[#E3E3E3] mr-2">€</span>
        12.478.12
      </div>
    </div>
  );
};
