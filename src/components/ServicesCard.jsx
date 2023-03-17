import React from "react";

const ServicesCard = () => {
  const items = [
    {
      title: "Complete Assignment",
      desc: "Assignmentsol provides you assignment against your question just with a few clicks",
    },
    {
      title: "Templated Assignment",
      desc: "Assignmentsol provides multiple templates which you can choose according to your need",
    },
    {
      title: "Multiple Course",
      desc: "AssignmentSol provides multiple course of computer",
    },
    {
      title: "Achieve Your target",
      desc: "Keep track of your assignments on AssignmentSol",
    },
  ];
  return (
    <div className="flex flex-wrap flex-row max-w-4xl justify-center gap-4 mt-6">
      {items.map((item, index) => (
        <div
          className="flex w-96 flex-col gap-2 p-2 px-4 py-3 border shadow-md rounded-md"
          key={index}
        >
          <h4 className="text-sm font-bold">{item.title}</h4>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
