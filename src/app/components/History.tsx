"use client";

export default function History() {
  return (
    <div className="text-[18px] flex flex-col gap-3 mt-[40px]">
      <div className="border-b-2 border-slate-500 pb-[10px] mb-[10px]">
        История
      </div>
      <div className="flex flex-col gap-5">
        <div className="relative [&_button]:hover:opacity-100">
          <div className="border-r-4 w-full border-b-slate-500 border-b-2 py-[10px] px-[15px] items-center  border-green-500 flex justify-between">
            <div className="">Phone</div>
            <div className="">$46000</div>
          </div>
          <button className="absolute top-0 -right-[35px] opacity-0  transition duration-500 py-[10.3px] px-3 bg-green-500">
            X
          </button>
        </div>
        <div className="relative [&_button]:hover:opacity-100">
          <div className="border-r-4 w-full border-b-slate-500 border-b-2 py-[10px] px-[15px] items-center  border-red-500 flex justify-between">
            <div className="">TV</div>
            <div className="">-$400</div>
          </div>
          <button className="absolute top-0 -right-[35px] opacity-0  transition duration-500 py-[10.3px] px-3 bg-red-500">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
