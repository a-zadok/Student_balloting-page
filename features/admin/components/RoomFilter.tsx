import { ArrowDownToLine, Search, SlidersHorizontal, X } from "lucide-react";

export default function RoomFilter() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 md:p-6 md:shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <div className="hidden md:flex flex-col gap-2">
        <label htmlFor="block">Block</label>
        <select className="border border-border outline-none p-2 rounded-md cursor-pointer">
          <option value="1">Block 1</option>
          <option value="2">Block 2</option>
          <option value="3">Block 3</option>
          <option value="4">Block 4</option>
          <option value="5">Block 5</option>
        </select>
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <label htmlFor="block">Floor</label>
        <select className="border border-border outline-none p-2 rounded-md cursor-pointer">
          <option value="">All Floors</option>
          <option value="0">Ground Floor</option>
          <option value="1">First Floor</option>
          <option value="2">Second Floor</option>
          <option value="3">Third Floor</option>
        </select>
      </div>

      <div className="hidden md:flex flex-col gap-2">
        <label htmlFor="block">Status</label>
        <select className="border border-border outline-none p-2 rounded-md cursor-pointer">
          <option value="allocated">Allocated</option>
          <option value="available">Available</option>
          <option value="utility">Utility</option>
          <option value="restricted">Restricted</option>
        </select>
      </div>

      <div className="md:flex-1 md:max-w-sm md:flex md:items-end">
        <div className="w-full text-text-secondary focus-within:text-black flex items-center gap-2 p-2 border border-border focus-within:ring rounded-md">
          <Search size={20} />
          <input
            type="text"
            placeholder="search room number"
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-2">
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
    </div>
  );
}
