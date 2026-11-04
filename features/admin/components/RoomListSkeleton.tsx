import { Skeleton } from "../../../components/ui/Skeleton";

export default function RoomListSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 5 }, (_, n) => (
        <li
          key={n}
          className="flex flex-col gap-2 border border-border p-2 rounded-md"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-56 max-w-full" />
          <Skeleton className="h-4 w-40" />
        </li>
      ))}
    </ul>
  );
}
