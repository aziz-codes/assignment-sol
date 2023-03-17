import React from "react";

const ProgressBar = () => {
  const items = [
    {
      label: "Assignment Achieved",
      color: "#0291f9",
    },
    {
      label: "75%",
      color: "#ffb400",
    },
    {
      label: "Happy Customer",
      color: "#0aa99a",
    },
    {
      label: "Satisfacation",
      color: "#0aa99a",
    },
  ];
  return (
    <>
      {items.map((item, index) => (
        <div
          className={`flex justify-center items-center rounded-full h-32 w-32 border-[8px] bg-slate-900 text-white`}
          key={index}
          style={{ borderColor: item.color }}
        >
          <p className="text-xs whitespace-nowrap">{item.label}</p>
        </div>
      ))}
    </>
  );
};

export default ProgressBar;
