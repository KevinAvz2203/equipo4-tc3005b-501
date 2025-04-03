import React, { Suspense } from "react";
import ImportantData from "../_components/importantData";
const Page = () => {
  return (
    <div className="flex flex-row w-full gap-x-4">
      <ImportantData color="bg-red-300" timeOut={1000} />

      <ImportantData color="bg-red-300" timeOut={5000} />
    </div>
  );
};

export default Page;
