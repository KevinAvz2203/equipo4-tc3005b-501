import React from "react";
import ImportantData from "../_components/importantData";
const Page = () => {
  return (
    <div className="flex flex-row w-full gap-x-4">
      <ImportantData color="bg-yellow-100" timeOut={1000} />

      <ImportantData color="bg-yellow-100" timeOut={5000} />
    </div>
  );
};

export default Page;
