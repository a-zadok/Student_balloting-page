import { Mars, DoorStairwell, Bed, CircleAlert } from "lucide-react";
import ScrollableButtons from "../../../components/ui/ScrollableButtons";

export default function BlockOverview() {
  const buttonArr = [
    "Block 1",
    "Block 2",
    "Block 3",
    "Block 4",
    "Block 5",
    "Block 6",
    "Block 7",
    "Block 8",
    "Block 9",
    "Block 10",
    "Block 11",
  ];

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Block Overview</h2>
      <ScrollableButtons buttonArr={buttonArr} />
      <div className=" bg-container p-2 rounded-md">
        <h3 className="text-lg">Block 1</h3>
        <div className="text-sm flex gap-4">
          <p className="flex items-center gap-1">
            <Mars size={16} />
            Male
          </p>
          <p className="flex items-center gap-1">
            <DoorStairwell size={16} />4 Floors
          </p>
          <p className="flex items-center gap-1">
            <Bed size={16} />
            56 Rooms
          </p>
        </div>
      </div>

      <div className=" bg-container p-2 rounded-md">
        <h3 className="text-lg">Block 1 Room Status</h3>
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
