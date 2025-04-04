// app/@analytics/page.tsx
import { Suspense } from "react";
import AnalyticsLoader from "../_components/AnalyticsLoader";

export default function AnalyticsPage() {
  const visits = 24500;
  const progress = 75;

  return (
    <Suspense fallback={<AnalyticsLoader />}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-blue-600">Visitas este mes</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {visits.toLocaleString()}
          </span>
        </div>
        <div className="h-2 bg-blue-100 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </Suspense>
  );
}
