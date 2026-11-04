import { Skeleton } from "../../../components/ui/Skeleton";

export default function RoomFilterSkeleton() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:p-6 md:shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <div className="hidden md:flex flex-col gap-2">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-10 w-36" />
      </div>
      <div className="hidden md:flex flex-col gap-2">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-10 w-36" />
      </div>
      <div className="hidden md:flex flex-col gap-2">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-10 w-36" />
      </div>

      <div className="md:flex-1 md:max-w-sm md:flex md:items-end">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="flex md:hidden flex-col gap-2">
        <div className="flex justify-between gap-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}
