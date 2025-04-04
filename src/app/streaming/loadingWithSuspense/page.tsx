import React, { Suspense } from "react";
import ImportantData from "../_components/importantData";
import ImportantDataSkeleton from "../_components/importantDataSkeleton";
const Page = () => {
  return (
    <div className="flex flex-row w-full gap-x-4">
      <Suspense fallback={<ImportantDataSkeleton />}>
        <ImportantData color="bg-green-200" timeOut={1000} />
      </Suspense>
      <Suspense fallback={<ImportantDataSkeleton />}>
        <ImportantData color="bg-green-200" timeOut={5000} />
      </Suspense>
    </div>
  );
};

export default Page;
