import { Skeleton } from "@/componentsUi/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-[50px] w-[100px]" />
      </div>
    </div>
  );
}
