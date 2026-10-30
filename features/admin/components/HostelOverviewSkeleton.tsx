import { Skeleton } from "../../../components/ui/Skeleton";
import FloorListSkeleton from "./FloorListSkeleton";

export default function HostelOverviewSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-md p-4 md:p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Hostel Overview</h2>

      <div className="flex gap-2 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <Skeleton key={n} className="h-10 w-24 shrink-0" />
        ))}
      </div>

      <div>
        <h3 className="text-lg">Floors</h3>
        <p className="text-text-secondary">
          Select a floor to view room details and availability
        </p>
      </div>

      <FloorListSkeleton />
    </div>
  );
}
