import { ArrowDownToLine } from "lucide-react";
import { Skeleton } from "../../../../components/ui/Skeleton";

export default function Loading() {
  return (
    <section className="flex flex-col min-w-0 gap-8 py-8">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">Room Management</h2>
          <p className="md:text-lg text-text-secondary">
            View, edit and manage hostel room configurations, allocations, and
            status.
          </p>
        </div>

        <button
          disabled
          className="hidden md:flex items-center gap-2 bg-button-selected text-white text-lg py-3 px-4 rounded-md opacity-60"
        >
          <ArrowDownToLine size={20} />
          Export
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-md p-4 md:p-0 shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-none">
        <div className="flex flex-col gap-3 md:flex-row">
          <Skeleton className="h-11 w-full md:w-40" />
          <Skeleton className="h-11 w-full md:w-40" />
          <Skeleton className="h-11 w-full md:w-40" />
          <Skeleton className="h-11 w-full md:flex-1" />
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {[1, 2, 3, 4, 5].map((n) => (
            <Skeleton key={n} className="h-20 w-full" />
          ))}
        </div>

        <div className="hidden md:flex md:gap-8">
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-11 w-full" />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Skeleton key={n} className="h-14 w-full" />
            ))}
          </div>

          <div className="hidden lg:block w-80">
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
