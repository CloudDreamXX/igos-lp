import Igos from '../../shared/ui/icons/igos';
import Payment from '../../shared/ui/icons/payment_system';
import PlusRoundedMidle from '../../shared/ui/icons/plus-rounded-midle';

export const IgosCard = () => {
  return (
    <div className="relative w-[275px] h-[170px] rounded-xl bg-[#1B1B1B] flex flex-col justify-between p-5 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Igos className="text-[#D0CBCB]" />
          <PlusRoundedMidle />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <PlusRoundedMidle />

        <Payment />
      </div>

      <div className="absolute inset-0 rounded-xl border border-[#CBBEFF]/20 pointer-events-none"></div>
    </div>
  );
};
