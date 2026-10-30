import { Suspense } from "react";
import ScrollableButtons from "../../../components/ui/ScrollableButtons";
import { getBlockNumbers } from "@/lib/blocks";
import FloorListSkeleton from "./FloorListSkeleton";
import FloorList from "./FloorList";

export default async function HostelOverview({
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
    <div className="flex flex-col gap-4 rounded-md p-4 md:p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Hostel Overview</h2>

      {selected === undefined ? (
        <p className="text-text-secondary">No blocks found.</p>
      ) : (
        <>
          <ScrollableButtons buttons={buttons} selected={selected} />

          <div>
            <h3 className="text-lg">Floors</h3>
            <p className="text-text-secondary">
              Select a floor to view room details and availability
            </p>
          </div>

          <Suspense key={selected} fallback={<FloorListSkeleton />}>
            <FloorList blockNumber={selected} />
          </Suspense>
        </>
      )}
    </div>
  );
}
