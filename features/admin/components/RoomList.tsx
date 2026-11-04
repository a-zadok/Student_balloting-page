import { ChevronRight } from "lucide-react";
import { getRooms } from "@/lib/rooms";
import { ordinal, roomKind } from "@/lib/format";
import RoomPagination from "./RoomPagination";

export default async function RoomList({ query }: { query: string }) {
  const result = await getRooms(query);

  if (result.data.length === 0) {
    return (
      <p className="py-8 text-center text-text-secondary">
        No rooms match these filters.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        {result.data.map((r) => {
          const hasBeds = r.room_type !== "Other";

          return (
            <li key={r.room_id} className="border border-border p-2 rounded-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg">Room {r.room_number}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-text-secondary text-sm">{r.room_status}</p>

                  <button
                    className="cursor-pointer"
                    aria-label={`View room ${r.room_number}`}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                Block {r.block_number} &middot; {ordinal(r.floor_number)} Floor
                &middot; {roomKind(r)}
              </p>
              {hasBeds && (
                <div className="flex items-center gap-4 text-text-secondary text-sm">
                  <p>
                    Allocated {r.allocated_beds}/{r.capacity}
                  </p>
                  <p>Available {r.available_beds}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <RoomPagination result={result} query={query} />
    </div>
  );
}
