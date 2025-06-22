import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ImageSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full h-48 rounded-lg" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
};

export default ImageSkeleton;
