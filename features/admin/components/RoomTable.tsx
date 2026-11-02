import { ChevronRight } from "lucide-react";

type Room = {
  id: string;
  roomNo: string;
  location: string;
  allocated: string | null;
  available: number | null;
  status: string;
};

const rooms: Room[] = [
  {
    id: "1",
    roomNo: "101",
    location: "Block 1 - 1st Floor Common Room",
    allocated: null,
    available: null,
    status: "Utility/Office",
  },
  {
    id: "2",
    roomNo: "304",
    location: "Block 1 - 1st Floor Common Room",
    allocated: null,
    available: null,
    status: "Utility/Office",
  },
  {
    id: "3",
    roomNo: "107",
    location: "Block 1 - 1st Floor Common Room",
    allocated: "3/4",
    available: 1,
    status: "Available",
  },
  {
    id: "4",
    roomNo: "208",
    location: "Block 1 - 1st Floor Common Room",
    allocated: "6/6",
    available: 0,
    status: "Fully Allocated",
  },
  {
    id: "5",
    roomNo: "123",
    location: "Block 1 - 1st Floor Common Room",
    allocated: "4/4",
    available: 0,
    status: "Fully Allocated",
  },
  {
    id: "6",
    roomNo: "124",
    location: "Block 1 - 1st Floor Common Room",
    allocated: "0/6",
    available: 6,
    status: "Restricted (Maintenance)",
  },
];

const cell =
  "p-3 border-y border-border first:border-l first:rounded-l-md last:border-r last:rounded-r-md";

export default function RoomTable() {
  return (
    <div className="p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-x-auto rounded-md">
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
          {rooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-50 cursor-pointer">
              <td className={cell}>{room.roomNo}</td>
              <td className={`${cell} max-w-48`}>{room.location}</td>
              <td className={cell}>{room.allocated ?? "-"}</td>
              <td className={cell}>{room.available ?? "-"}</td>
              <td className={`${cell} max-w-40`}>{room.status}</td>
              <td className={`${cell} w-12`}>
                <button
                  type="button"
                  aria-label={`View room ${room.roomNo}`}
                  className="cursor-pointer"
                >
                  <ChevronRight size={20} className="text-text-secondary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
