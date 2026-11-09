import { ArrowLeft, MoveLeft, Pencil } from "lucide-react";
import RoomOccupantsList from "../../../../../features/admin/components/RoomOccupantsList";
import RoomOccupantsTable from "../../../../../features/admin/components/RoomOccupantsTable";
import Link from "next/link";
import { requireRole } from "@/lib/session";
import { getRoomDetail } from "@/lib/roomDetail";

export const instant = false;

export default async function RoomDetails({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  await requireRole("admin");
  const { roomId } = await params;
  const r = await getRoomDetail(roomId);
  console.log(r);

  return (
    <section className="flex flex-col min-w-0 gap-8 py-8">
      <div className="flex md:hidden items-center justify-between">
        <Link className="cursor-pointer" href="/admin/room-management">
          <ArrowLeft />
        </Link>

        <button className="flex items-center gap-2 bg-button-selected text-sm text-white p-2 rounded-md cursor-pointer">
          <Pencil size={18} />
          Edit Room
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">
            Room {r.room_number} Details
          </h2>
          <p className="md:text-lg text-text-secondary">
            {r.allocated_beds}/{r.capacity} Occupied
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            href="/admin/room-management"
            className="flex items-center gap-2 border border-border py-2 px-4 rounded-md cursor-pointer"
          >
            <MoveLeft size={18} />
            Back to Rooms
          </Link>
          <button className="flex items-center gap-2 bg-button-selected text-white py-2 px-4 rounded-md cursor-pointer">
            <Pencil size={18} />
            Edit Room
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <RoomOccupantsList roomDetail={r} />
      </div>

      <div className="hidden md:block">
        <RoomOccupantsTable roomDetail={r} />
      </div>
    </section>
  );
}
