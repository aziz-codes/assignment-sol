import React from "react";

const PricingTable = () => {
  const prices = [
    {
      type: "Easy",
      price: "Free",
    },
    {
      type: "Medium",
      price: "Free",
    },
    {
      type: "Complex",
      price: "Free",
    },
  ];
  return (
    <section className="mt-20 flex flex-col gap-6 items-center">
      <h2 className="text-2xl font-bold ">Assignment Prices</h2>
      <div className="w-full bg-[#f0f4fa] h-80 flex justify-center gap-10 items-center ">
        {prices.map((item, i) => (
          <div className="flex flex-col h-56 border w-52 group" key={i}>
            <div className=" w-full  bg-[#e1e4e1] flex flex-row justify-center items-center text-gray-500 cursor-pointer  p-3 hover:bg-[#0b8d9f]  hover:text-white">
              <h4 className="uppercase text-xl ">{item.type}</h4>
            </div>
            <div className="w-full flex-1 bg-[#f4f6f3] flex justify-center items-center">
              <h4 className="text-5xl uppercase">{item.price}</h4>
            </div>
            <div className="w-full flex-1 bg-[#fcfffc] flex justify-center items-center">
              <button className="border border-sky-500 rounded-2xl text-sky-500 px-2 text-sm py-1 w-auto uppercase group-hover:bg-[#0b8d9f] group-hover:text-white">
                generate assignment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
