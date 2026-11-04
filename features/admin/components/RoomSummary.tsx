import { getBlockNumbers } from "@/lib/blocks";
import ScrollableButtons from "../../../components/ui/ScrollableButtons";
import ProgressBar from "../../../components/ui/ProgressBar";
import { getBlockSummary } from "@/lib/blockSummary";

export default async function RoomSummary({
  requested,
}: {
  requested?: number;
}) {
  const blocks = await getBlockNumbers();

  const selected =
    blocks.find((b) => b.block_number === requested)?.block_number ??
    blocks[0]?.block_number;

  const buttons = blocks.map((b) => ({
    label: `Block ${b.block_number}`,
    blockNumber: b.block_number,
  }));

  const summary = await getBlockSummary(selected);

  const allocatedBedspacePercent =
    (summary.allocated_bedspaces / summary.total_bedspaces) * 100;

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Room Summary</h2>
      <ScrollableButtons buttons={buttons} selected={selected} />

      <div className="flex flex-col gap-4 bg-container p-2 rounded-md">
        <h3 className="text-lg">Block {summary.block_number} overview</h3>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <p className="text-2xl">{summary.total_rooms}</p>
            <p>Total Rooms</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">{summary.total_bedspaces}</p>
            <p>Total Beds</p>
          </div>
        </div>

        <div>
          <p>{summary.small_rooms} Small Rooms (4-man) &</p>
          <p>{summary.large_rooms} Large Rooms (6-man)</p>
        </div>

        <p>Utility/Offices - {summary.utility_rooms} rooms</p>

        <div className="flex flex-col gap-2">
          <ProgressBar value={allocatedBedspacePercent} />
          <p className="text-sm">
            {summary.allocated_bedspaces}/{summary.total_bedspaces} Bed Spaces
            Allocated
          </p>
        </div>
      </div>
    </div>
  );
}
