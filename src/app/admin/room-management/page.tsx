import { ArrowDownToLine } from "lucide-react";
import RoomFilter from "../../../../features/admin/components/RoomFilter";
import RoomList from "../../../../features/admin/components/RoomList";
import RoomTable from "../../../../features/admin/components/RoomTable";
import RoomSummary from "../../../../features/admin/components/RoomSummary";

export default async function RoomManagement({
  searchParams,
}: {
  searchParams: Promise<{ block?: string }>;
}) {
  const { block } = await searchParams;
  const requested = Number(block) || undefined;

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
        <RoomFilter />

        <div className="md:hidden">
          <RoomList />
        </div>

        <div className="hidden md:flex md:gap-8">
          <div className="flex-1">
            <RoomTable />
          </div>
          <div className="hidden lg:block w-80">
            <RoomSummary requested={requested} />
          </div>
        </div>
      </div>
    </section>
  );
}
