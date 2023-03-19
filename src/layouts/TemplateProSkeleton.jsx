import React from "react";

const TemplateProSkeleton = () => {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="w-24 h-2 bg-gray-400 rounded-md animate-pulse"></div>
      <div className="h-44 w-44 bg-gray-400 animate-pulse"></div>
      <div className="w-24 h-2 bg-gray-400 rounded-md animate-pulse"></div>
      <div className="w-full h-1 bg-gray-400 rounded-md animate-pulse"></div>
    </section>
  );
};

export default TemplateProSkeleton;
