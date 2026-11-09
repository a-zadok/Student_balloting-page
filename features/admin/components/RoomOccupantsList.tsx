import { RoomDetail } from "@/lib/types";
import { Plus, UserRound } from "lucide-react";
import AssignStudentModal from "./AssignStudentModal";

export default async function RoomOccupantsList({
  roomDetail,
}: {
  roomDetail: RoomDetail;
}) {
  const allocatedBedSpace = roomDetail.beds.filter(
    (bed) => bed.status === "Allocated",
  );

  const firstAvailableBed = roomDetail.beds.find(
    (bed) => bed.status === "Available",
  );

  return (
    <div className="flex flex-col gap-4 rounded-md p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">
        Current Occupants ({roomDetail.allocated_beds})
      </h2>

      <ul className="flex flex-col gap-4">
        {allocatedBedSpace.map((bedspace) => {
          return (
            <li
              key={bedspace.bed_id}
              className="flex flex-col gap-2 border border-border p-2 rounded-md"
            >
              <div className="flex items-center gap-2">
                <div className="bg-container h-10 w-10 flex items-center justify-center rounded-full">
                  <UserRound size={20} />
                </div>
                <div>
                  <p>{bedspace.student?.name}</p>
                  <p className="text-sm text-text-secondary">
                    Matric: {bedspace.student?.matric_number}
                  </p>
                </div>
              </div>

              <hr className="border-border" />

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-text-secondary">Course</p>
                  <p>{bedspace.student?.department}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Level</p>
                  <p>{bedspace.student?.level}L</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Bedspace</p>
                  <p>{bedspace.bed_label}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {firstAvailableBed && (
        <div className="flex flex-col gap-2 border border-dashed p-2 rounded-md">
          <p className="flex gap-4">
            <span className="bg-container w-fit px-1 rounded-full">
              {firstAvailableBed.bed_label}
            </span>
            Vacant - Bed available for student allocation
          </p>

          <AssignStudentModal
            bedId={firstAvailableBed.bed_id}
            bedLabel={firstAvailableBed.bed_label}
          />
        </div>
      )}
    </div>
  );
}
