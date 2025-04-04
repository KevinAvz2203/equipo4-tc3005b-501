import React from "react";
import ImportantDataSkeleton from "../_components/importantDataSkeleton";
const Loading = () => {
  return (
    <div className="flex flex-row w-full gap-x-4">
      <ImportantDataSkeleton />
      <ImportantDataSkeleton />
    </div>
  );
};

export default Loading;
