import { Skeleton } from "../../../components/ui/Skeleton";

export default function BlockOverviewSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <Skeleton className="h-6 w-36" />

      <div className="bg-container p-2 rounded-md flex flex-col gap-2">
        <Skeleton className="h-6 w-24" />

        <div className="flex gap-4">
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="bg-container p-2 rounded-md flex flex-col gap-4">
        <Skeleton className="h-6 w-48" />

        <div className="flex justify-center py-4">
          <Skeleton className="h-52 w-52 rounded-full" />
        </div>

        <div className="flex justify-center gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>

      <div className="bg-container flex items-center gap-2 p-2 rounded-md">
        <Skeleton className="h-8 w-8 rounded-full shrink-0" />
        <Skeleton className="h-8 flex-1" />
      </div>
    </div>
  );
}
