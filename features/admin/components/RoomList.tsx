import { ChevronRight } from "lucide-react";

export default function RoomList() {
  return (
    <ul className="flex flex-col gap-4">
      <li className="border border-border p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Room 107</h3>
          <div className="flex items-center gap-2">
            <p className="text-text-secondary text-sm">Available</p>

            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>
        <p className="text-text-secondary text-sm">
          Block 1 &middot; 1st Floor &middot; Common Room
        </p>
        <div className="flex items-center gap-4 text-text-secondary text-sm">
          <p>Allocated 3/4</p>
          <p>Available 1</p>
        </div>
      </li>
      <li className="border border-border p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Room 107</h3>
          <div className="flex items-center gap-2">
            <p className="text-text-secondary text-sm">Available</p>

            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>
        <p className="text-text-secondary text-sm">
          Block 1 &middot; 1st Floor &middot; Common Room
        </p>
        <div className="flex items-center gap-4 text-text-secondary text-sm">
          <p>Allocated 3/4</p>
          <p>Available 1</p>
        </div>
      </li>
    </ul>
  );
}
