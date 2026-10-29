import { Skeleton } from "../../../../components/ui/Skeleton";
import StatCardSkeleton from "../../../../components/ui/StatCardSkeleton";

export default function Loading() {
  return (
    <section className="flex min-w-0 gap-8 py-8">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <Skeleton className="h-8 w-72 max-w-full" />
        <Skeleton className="h-5 w-96 max-w-full" />
        <div className="flex flex-col gap-2 lg:hidden">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
        <Skeleton className="h-100 w-full" />
      </div>

      <aside className="hidden w-80 shrink-0 flex-col gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
        <Skeleton className="h-64 w-full" />
      </aside>
    </section>
  );
}
