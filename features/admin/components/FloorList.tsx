import { ArrowUpFromDot, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";
import { BlockSummary } from "@/lib/types";

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default async function FloorList({
  blockNumber,
}: {
  blockNumber: number;
}) {
  const summary = await api<BlockSummary>(`/blocks/${blockNumber}/floors`);

  return (
    <ul className="flex flex-col gap-4 md:gap-6">
      {summary.floors.map((f) => (
        <li
          key={f.floor_number}
          className="flex gap-2 justify-between items-center border border-border p-2 md:p-4 rounded-md"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p className="md:text-lg">{ordinal(f.floor_number)} Floor</p>
              <p className="md:hidden text-text-secondary text-sm">
                {f.small_rooms} small &middot; {f.large_rooms} large
              </p>
              <p className="hidden md:block text-text-secondary">
                {f.available_rooms} rooms available
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Small Rooms</p>
            <p className="text-text-secondary">{f.small_rooms} rooms</p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Large Rooms</p>
            <p className="text-text-secondary">{f.large_rooms} rooms</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <p className="text-end">{f.available_rooms}</p>
              <p className="text-text-secondary text-sm">rooms available</p>
            </div>
            <button
              className="cursor-pointer"
              aria-label={`View ${ordinal(f.floor_number)} floor`}
            >
              <ChevronRight />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
