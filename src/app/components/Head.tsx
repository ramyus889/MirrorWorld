"use client";

export default function Head() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[27px]">Отслеживание расходов</div>
      <div className="text-[18px]">ВАШ БАЛАНС</div>
      <div className="text-[32px]">$45900</div>

      <div className="text-[18px] flex">
        <div className="flex place-content-center border gap-10 w-full py-[30px] px-[20px]">
          <div className="flex flex-col gap-1 border-r-2 text-center pe-10 border-slate-500">
            <div className="">Доход</div>
            <div className="text-[20px] text-green-500">+$46000</div>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <div className="">Расход</div>
            <div className="text-[20px] text-red-500">-$400</div>
          </div>
        </div>
      </div>
    </div>
  );
}
