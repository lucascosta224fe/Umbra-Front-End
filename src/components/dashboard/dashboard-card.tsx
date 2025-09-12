import type { ReactNode } from "react";

type DashboardCardProps = {
  icon?: ReactNode;
  title: string;
  number: string;
};

export const DashboardCard = ({ icon, title, number }: DashboardCardProps) => {
  return (
    <div className="bg-card px-8 py-6 w-fit rounded-[16px] flex items-center justify-center gap-4">
      <div className="bg-white rounded-full size-[40px] p-1 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-[20px] font-bold text-text leading-4">{number}</p>
        <p className="text-[16px] text-accent font-semibold">{title}</p>
      </div>
    </div>
  );
};
