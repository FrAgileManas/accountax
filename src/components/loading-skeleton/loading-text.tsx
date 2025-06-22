import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingText = () => {
  return (
    <div className="w-full">
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </div>
  );
};

export default LoadingText;
