import {
  ArrowDownToLine,
  ChevronRight,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function RoomManagement() {
  return (
    <section className="flex flex-col min-w-0 gap-8 py-8">
      <div>
        <h2 className="text-xl font-bold md:text-2xl">Room Management</h2>
        <p className="md:text-lg text-text-secondary">
          View, edit and manage hostel room configurations, allocations, and
          status.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-md p-4 md:p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 p-2 border border-border focus-within:ring rounded-md">
          <Search size={20} />
          <input
            type="text"
            placeholder="search room number"
            className="w-full outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-4">
            <button className="flex-1 flex items-center gap-2 text-start border border-border p-2 rounded-md cursor-pointer">
              <SlidersHorizontal size={20} />
              Filter
            </button>
            <button className="flex items-center gap-2 bg-button-selected text-white p-2 rounded-md cursor-pointer">
              <ArrowDownToLine size={20} />
              Export
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-button-selected text-white flex items-center gap-1 shrink-0 border border-button-selected px-2 rounded-full cursor-pointer">
              Block 1
              <X size={16} />
            </button>
            <button className="shrink-0 border border-border px-2 rounded-full cursor-pointer">
              All
            </button>
            <button className="shrink-0 border border-border px-2 rounded-full cursor-pointer">
              Available
            </button>
            <button className="shrink-0 border border-border px-2 rounded-full cursor-pointer">
              Full
            </button>
          </div>
        </div>

        <ul className="flex flex-col gap-4">
          <li className="border border-border p-2 rounded-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg">Room 107</h3>
              <div className="flex items-center gap-2">
                <p className="text-text-secondary text-sm">Available</p>

                <button className="cursor-pointer">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              Block 1 &middot; 1st Floor &middot; Common Room
            </p>
            <div className="flex items-center gap-4 text-text-secondary text-sm">
              <p>Allocated 3/4</p>
              <p>Available 1</p>
            </div>
          </li>
          <li className="border border-border p-2 rounded-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg">Room 107</h3>
              <div className="flex items-center gap-2">
                <p className="text-text-secondary text-sm">Available</p>

                <button className="cursor-pointer">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              Block 1 &middot; 1st Floor &middot; Common Room
            </p>
            <div className="flex items-center gap-4 text-text-secondary text-sm">
              <p>Allocated 3/4</p>
              <p>Available 1</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
