interface FeatureSmallCardProps {
  title: string;
  description: string;
}

export const FeatureSmallCard = ({ title, description }: FeatureSmallCardProps) => {
  return (
    <div className="bg-transparent text-white w-[145px] md:w-[240px] flex flex-col gap-1 items-start">
      <div className="w-[45px] h-[45px] bg-[#D7BFFF] rounded-md flex items-center justify-center">
        <img src="assets/img/plus-group.png" alt="Plus Icon" />
      </div>

      <h4 className="text-[16px] font-normal text-[#D9D9D9]">{title}</h4>

      <p className="text-[#8E9193] text-[14px] leading-[25px] text-left">{description}</p>
    </div>
  );
};
