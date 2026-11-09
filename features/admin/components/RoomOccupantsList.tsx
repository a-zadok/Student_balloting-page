import { Plus, UserRound } from "lucide-react";

export default function RoomOccupantsList() {
  return (
    <div className="flex flex-col gap-4 rounded-md p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Current Occupants (3)</h2>

      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-2 border border-border p-2 rounded-md">
          <div className="flex items-center gap-2">
            <div className="bg-container h-10 w-10 flex items-center justify-center rounded-full">
              <UserRound size={20} />
            </div>
            <div>
              <p>Adegoke Temiloluwa Ore</p>
              <p className="text-sm text-text-secondary">Matric: 21081497</p>
            </div>
          </div>

          <hr className="border-border" />

          <div className="flex justify-between">
            <div>
              <p className="text-sm text-text-secondary">Course</p>
              <p>Medicine & Surgery</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Level</p>
              <p>500L</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Bedspace</p>
              <p>Bed A</p>
            </div>
          </div>
        </li>
      </ul>

      <div className="flex flex-col gap-2 border border-dashed p-2 rounded-md">
        <p className="flex gap-4">
          <span className="bg-container w-fit px-1 rounded-full">Bed D </span>
          Vacant - Bed available for student allocation
        </p>
        <button className="flex items-center gap-2 justify-center p-2 bg-button-selected text-white w-full rounded-md cursor-pointer">
          <Plus />
          Assign Student
        </button>
      </div>
    </div>
  );
}
