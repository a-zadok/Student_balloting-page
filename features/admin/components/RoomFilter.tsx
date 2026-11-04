import { getBlockNumbers } from "@/lib/blocks";
import RoomFilterForm from "./RoomFilterForm";

type Params = Record<string, string | string[] | undefined>;

export default async function RoomFilter({ params }: { params: Params }) {
  const blocks = await getBlockNumbers();

  return (
    <RoomFilterForm
      blocks={blocks.map((b) => b.block_number)}
      params={params}
    />
  );
}
