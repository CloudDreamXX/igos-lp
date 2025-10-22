interface NiceToHaveCardProps {
  title: string;
  description: string;
}

export const NiceToHaveCard = ({ title, description }: NiceToHaveCardProps) => (
  <div className="border min-h-[309px] border-[#6D7073] rounded-md p-6 flex flex-col justify-between min-w-[206px] w-full bg-transparent hover:scale-[1.02] hover:cursor-pointer transition-colors duration-300">
    <div>
      <h4 className="text-[#D9D9D9] text-[16px] font-normal mb-2">{title}</h4>
      <p className="text-[#8E9193] text-[14px] leading-[20px]">{description}</p>
    </div>
    <div className="mt-4 w-[45px] h-[45px] bg-[#D7BFFF] rounded-md flex items-center justify-center">
      <img src="assets/img/plus-group.png" alt="Plus Icon" />
    </div>
  </div>
);
