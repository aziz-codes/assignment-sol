import React from "react";

const ResultSkeleton = () => {
  return (
    <div className="relative flex flex-col w-full gap-2">
      <div className="h-2 bg-gray-400 rounded-md animate-pulse"></div>
      <div className="h-2 bg-gray-400 rounded-md animate-pulse"></div>
      <div className="h-2 bg-gray-400 rounded-md animate-pulse"></div>
      <div className="h-2 bg-gray-400 rounded-md animate-pulse"></div>
    </div>
  );
};

export default ResultSkeleton;
