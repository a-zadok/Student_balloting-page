import { getBlockNumbers } from "@/lib/blocks";
import ScrollableButtons from "../../../components/ui/ScrollableButtons";
import ProgressBar from "../../../components/ui/ProgressBar";

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

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Room Summary</h2>
      <ScrollableButtons buttons={buttons} selected={selected} />

      <div className="flex flex-col gap-4 bg-container p-2 rounded-md">
        <h3 className="text-lg">Block 2 overview</h3>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <p className="text-2xl">42</p>
            <p>Total Rooms</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">176</p>
            <p>Total Beds</p>
          </div>
        </div>

        <div>
          <p>21 Small Rooms (4-man) &</p>
          <p>21 Large Rooms (6-man)</p>
        </div>

        <p>Utility/Offices - 6 rooms</p>

        <div className="flex flex-col gap-2">
          <ProgressBar value={90} />
          <p className="text-sm">150/176 Bed Spaces Allocated</p>
        </div>
      </div>
    </div>
  );
}
