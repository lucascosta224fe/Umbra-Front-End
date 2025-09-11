type DashboardCardProps = {
  icon?: any;
  title: string;
  number: string;
};

export const DashboardCard = ({ icon, title, number }: DashboardCardProps) => {
  return (
    <div className="bg-[#1B1A3F] px-8 py-6 w-fit rounded-[16px] flex items-center justify-center gap-4">
      <div className="bg-white rounded-full size-[40px] gap-[5px] flex items-center justify-center"></div>
      <div className="flex flex-col">
        <p className="text-white text-lg font-bold">{number}</p>
        <p className="text-[#A3A1D7] text-sm">{title}</p>
      </div>
    </div>
  );
};
