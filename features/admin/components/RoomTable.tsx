import { ChevronRight } from "lucide-react";
import { getRooms } from "@/lib/rooms";
import { ordinal, roomKind, statusLabel } from "@/lib/format";
import RoomPagination from "./RoomPagination";
import Link from "next/link";

const cell =
  "p-3 border-y border-border first:border-l first:rounded-l-md last:border-r last:rounded-r-md";

export default async function RoomTable({ query }: { query: string }) {
  const result = await getRooms(query);

  if (result.data.length === 0) {
    return (
      <div className="p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
        <p className="py-8 text-center text-text-secondary">
          No rooms match these filters.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3 text-start">
          <thead>
            <tr className="text-start">
              <th className="px-3 font-medium text-start">Room No</th>
              <th className="px-3 font-medium text-start">Block/Floor</th>
              <th className="px-3 font-medium text-start">Allocated</th>
              <th className="px-3 font-medium text-start">Available</th>
              <th className="px-3 font-medium text-start">Status</th>
              <th className="px-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {result.data.map((room) => {
              const hasBeds = room.room_type !== "Other";

              return (
                <tr
                  key={room.room_id}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className={cell}>{room.room_number}</td>
                  <td className={`${cell} max-w-48`}>
                    Block {room.block_number} - {ordinal(room.floor_number)}{" "}
                    Floor {roomKind(room)}
                  </td>
                  <td className={cell}>
                    {hasBeds ? `${room.allocated_beds}/${room.capacity}` : "-"}
                  </td>
                  <td className={cell}>
                    {hasBeds ? room.available_beds : "-"}
                  </td>
                  <td className={`${cell} max-w-40`}>
                    {statusLabel(room.room_status)}
                  </td>
                  <td className={`${cell} w-12`}>
                    <Link
                      type="button"
                      aria-label={`View room ${room.room_number}`}
                      className="cursor-pointer"
                      href={`/admin/room-management/${room.room_id}`}
                    >
                      <ChevronRight size={20} className="text-text-secondary" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <RoomPagination result={result} query={query} />
    </div>
  );
}
