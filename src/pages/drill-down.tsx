export const DrillDown = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-text text-[40px] font-bold">Drill-Down</h1>
      </div>
      <div className="px-10 py-5">
        <div className="grid grid-cols-[1fr_400px] gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold">Computador 1</h2>
              <div className="bg-card rounded-[16px] h-[560px]"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[20px] font-bold">
                Sessões Ativas
              </h2>
              <div className="bg-card rounded-[16px] h-[500px]"></div>
            </div>
          </div>
          <div className="bg-card rounded-[16px] h-[750px] mt-[38px]"></div>
        </div>
      </div>
    </div>
  );
};
