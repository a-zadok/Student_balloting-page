import { Skeleton } from "../../../components/ui/Skeleton";

export default function FloorListSkeleton() {
  return (
    <ul className="flex flex-col gap-4 md:gap-6">
      {[1, 2, 3, 4].map((n) => (
        <li
          key={n}
          className="flex items-center justify-between gap-2 border border-border p-2 md:p-4 rounded-md"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <Skeleton className="h-9 w-9" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <Skeleton className="h-5 w-8" />
        </li>
      ))}
    </ul>
  );
}
