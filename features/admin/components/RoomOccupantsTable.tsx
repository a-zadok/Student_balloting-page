import { RoomDetail } from "@/lib/types";
import { UserRound } from "lucide-react";
import AssignStudentModal from "./AssignStudentModal";

const cols = "grid grid-cols-[2fr_2fr_1fr_1fr] items-center gap-4";

export default function RoomOccupantsTable({
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
    <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-medium">
        Current Occupants ({roomDetail.allocated_beds})
      </h2>

      <div className="flex flex-col gap-8">
        {roomDetail.allocated_beds > 0 && (
          <div>
            <div className={`${cols} px-6 pb-3 font-medium`}>
              <span>Name</span>
              <span>Course</span>
              <span>Level</span>
              <span>Bedspace</span>
            </div>

            <div className="space-y-4">
              {allocatedBedSpace.map((bedspace) => (
                <div
                  key={bedspace.bed_id}
                  className={`${cols} rounded-md border border-gray-300 px-6 py-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-container h-10 w-10 flex items-center justify-center rounded-full">
                      <UserRound size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {bedspace.student?.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        Matric: {bedspace.student?.matric_number}
                      </p>
                    </div>
                  </div>

                  <p>{bedspace.student?.department}</p>
                  <p>{bedspace.student?.level}</p>
                  <p>{bedspace.bed_label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {firstAvailableBed && (
          <div className="flex items-center justify-between gap-2 border border-dashed p-4 rounded-md">
            <p className="flex gap-6">
              <span className="bg-container w-fit px-1 rounded-full">
                {firstAvailableBed.bed_label}
              </span>
              Vacant - Bed available for student allocation
            </p>

            <AssignStudentModal
              roomId={roomDetail.room_id}
              bedId={firstAvailableBed.bed_id}
              bedLabel={firstAvailableBed.bed_label}
              gender={roomDetail.gender_type}
            />
          </div>
        )}
      </div>
    </section>
  );
}
