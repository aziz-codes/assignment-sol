import React from "react";

const Banner = () => {
  return (
    <section className="flex justify-center mt-20">
      <div className="max-w-5xl bg-[#0b8d9f] w-3/4 px-2 flex flex-col gap-4 py-6">
        <h4 className="text-white font-semibold text-xl">
          Get Your Assignment In One Go!
        </h4>
        <p className="text-lg ">
          AssignmentSol will reduce your effort and time you just need to select
          course,select template and add your answer.
        </p>
        <button className="bg-black px-4 py-2 rounded-md shadow-md text-white w-[200px] mt-2">
          Generate Assignment
        </button>
      </div>
    </section>
  );
};

export default Banner;
