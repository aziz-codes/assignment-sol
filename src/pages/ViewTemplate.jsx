import React from "react";
import template from "../assets/template.png";
import TemplateCard from "../layouts/TemplateCard";
const ViewTemplate = () => {
  return (
    <section className="flex flex-col justify-center items-center my-10 gap-5 ">
      <h2 className="text-2xl font-semibold">View Template</h2>
      <img src={template} className="h-36 w-36" alt="template" />
      <TemplateCard />
    </section>
  );
};

export default ViewTemplate;
