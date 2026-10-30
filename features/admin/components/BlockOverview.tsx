import { Mars, DoorStairwell, Bed, CircleAlert, Venus } from "lucide-react";
import { getBlockSummary } from "@/lib/blockSummary";
import RoomStatusChart from "./RoomStatusChart";
import { getBlockNumbers } from "@/lib/blocks";

export default async function BlockOverview({
  requested,
}: {
  requested?: number;
}) {
  const blocks = await getBlockNumbers();

  const selected =
    blocks.find((b) => b.block_number === requested)?.block_number ??
    blocks[0]?.block_number;

  const summary = await getBlockSummary(selected);

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Block Overview</h2>
      <div className=" bg-container p-2 rounded-md">
        <h3 className="text-lg">Block {summary.block_number}</h3>
        <div className="text-sm flex gap-4">
          <p className="flex items-center gap-1">
            {summary.gender_type === "Male" ? (
              <>
                <Mars size={16} />
                Male
              </>
            ) : (
              <>
                <Venus size={16} />
                Female
              </>
            )}
          </p>
          <p className="flex items-center gap-1">
            <DoorStairwell size={16} />
            {summary.total_floors} Floors
          </p>
          <p className="flex items-center gap-1">
            <Bed size={16} />
            {summary.total_rooms} Rooms
          </p>
        </div>
      </div>

      <div className=" bg-container p-2 rounded-md">
        <h3 className="text-lg">Block {summary.block_number} Room Status</h3>

        <RoomStatusChart
          allocated={summary.allocated_rooms}
          available={summary.available_rooms}
          restricted={summary.restricted_rooms}
        />
      </div>

      <div className="bg-container flex items-center gap-2 p-2 rounded-md">
        <CircleAlert color="red" size={34} />
        <p className="text-sm">
          Some rooms may be unavailable for selection due to maintenance or
          administrative reasons.
        </p>
      </div>
    </div>
  );
}
