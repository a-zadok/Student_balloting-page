import { Skeleton } from "../../../components/ui/Skeleton";

export default function RoomTableSkeleton() {
  return (
    <div className="p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex gap-6 px-3">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
        {Array.from({ length: 8 }, (_, n) => (
          <Skeleton key={n} className="h-12 w-full" />
        ))}
      </div>
    </div>
  );
}
