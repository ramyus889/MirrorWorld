"use client";

export default function Footer() {
  return (
    <div className="text-[18px] flex flex-col gap-3 mt-[40px]">
      <div className="border-b-2 border-slate-500 pb-[10px] mb-[10px]">
        Добавить новую транзакцию
      </div>
      <div className="">
        <label htmlFor="" className="ps-2 pb-2">
          Напишите текст
        </label>
        <input
          type="text"
          placeholder="Text..."
          className="w-full outline-none px-3 py-2 rounded-xl"
        />
      </div>
      <div className="">
        <label htmlFor="" className="ps-2 pb-2">
          Напишите сумму
        </label>
        <input
          type="text"
          placeholder="$0.00"
          className="w-full outline-none px-3 py-2 rounded-xl"
        />
      </div>
      <div className="mt-2">
        <button className="py-2 w-full rounded-xl bg-[#06462b]">
          Добавить
        </button>
      </div>
    </div>
  );
}
