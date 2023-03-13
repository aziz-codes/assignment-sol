import React from "react";
import { HiOutlineMail } from "react-icons/hi";
const MiniBar = () => {
  return (
    <div className="relative bg-black text-white w-full h-8 flex justify-center items-center">
      <div className="flex flex-row items-center h-full">
        <HiOutlineMail />
        <label className="text-xs">assignmentsol@gmail.com</label>
      </div>
    </div>
  );
};

export default MiniBar;
