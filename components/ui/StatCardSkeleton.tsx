import { Skeleton } from "./Skeleton";

export default function StatCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-white/20 p-4">
      <Skeleton className="h-8 w-16" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}
