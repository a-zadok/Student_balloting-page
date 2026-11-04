import { Suspense } from "react";
import { ArrowDownToLine } from "lucide-react";
import { requireRole } from "@/lib/session";
import { roomQueryString } from "@/lib/rooms";
import RoomFilter from "../../../../features/admin/components/RoomFilter";
import RoomFilterSkeleton from "../../../../features/admin/components/RoomFilterSkeleton";
import RoomList from "../../../../features/admin/components/RoomList";
import RoomListSkeleton from "../../../../features/admin/components/RoomListSkeleton";
import RoomTable from "../../../../features/admin/components/RoomTable";
import RoomTableSkeleton from "../../../../features/admin/components/RoomTableSkeleton";
import RoomSummary from "../../../../features/admin/components/RoomSummary";

export const instant = false;

export default async function RoomManagement({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  await requireRole("admin");

  const params = await searchParams;
  const query = roomQueryString(params);

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

        <button className="hidden md:flex items-center gap-2 bg-button-selected text-white text-lg py-3 px-4 rounded-md cursor-pointer">
          <ArrowDownToLine size={20} />
          Export
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-md p-4 md:p-0 shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-none">
        <Suspense fallback={<RoomFilterSkeleton />}>
          <RoomFilter params={params} />
        </Suspense>

        <div className="md:hidden">
          <Suspense key={query} fallback={<RoomListSkeleton />}>
            <RoomList query={query} />
          </Suspense>
        </div>

        <div className="hidden md:flex md:gap-8">
          <div className="min-w-0 flex-1">
            <Suspense key={query} fallback={<RoomTableSkeleton />}>
              <RoomTable query={query} />
            </Suspense>
          </div>
          <div className="hidden lg:block w-80">
            <RoomSummary requested={Number(params.block) || undefined} />
          </div>
        </div>
      </div>
    </section>
  );
}
