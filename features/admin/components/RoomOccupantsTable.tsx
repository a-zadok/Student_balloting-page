import { Plus, UserRound } from "lucide-react";

const occupants = [
  {
    name: "Adegoke Temiloluwa Ore",
    matric: "21081497",
    course: "Medicine & Surgery",
    level: "500L",
    bed: "Bed A",
    avatar: "/avatars/adegoke.jpg",
  },
  {
    name: "Ibrahim Fatimah Amira",
    matric: "24081280",
    course: "Nursing Science",
    level: "200L",
    bed: "Bed B",
    avatar: "/avatars/ibrahim.jpg",
  },
  {
    name: "Okeke Chioma Jennifer",
    matric: "23081497",
    course: "Pharmacy",
    level: "400L",
    bed: "Bed C",
    avatar: "/avatars/okeke.jpg",
  },
];

const cols = "grid grid-cols-[2fr_2fr_1fr_1fr] items-center gap-4";

export default function RoomOccupantsTable() {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-medium">Current Occupants (3)</h2>

      <div className="flex flex-col gap-8">
        <div>
          <div className={`${cols} px-6 pb-3 font-medium`}>
            <span>Name</span>
            <span>Course</span>
            <span>Level</span>
            <span>Bedspace</span>
          </div>

          <div className="space-y-4">
            {occupants.map((o) => (
              <div
                key={o.matric}
                className={`${cols} rounded-md border border-gray-300 px-6 py-4`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-container h-10 w-10 flex items-center justify-center rounded-full">
                    <UserRound size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{o.name}</p>
                    <p className="text-sm text-text-secondary">
                      Matric: {o.matric}
                    </p>
                  </div>
                </div>

                <p>{o.course}</p>
                <p>{o.level}</p>
                <p>{o.bed}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border border-dashed p-4 rounded-md">
          <p className="flex gap-6">
            <span className="bg-container w-fit px-1 rounded-full">Bed D </span>
            Vacant - Bed available for student allocation
          </p>
          <button className="flex items-center gap-2 justify-center p-2 bg-button-selected text-white w-fit rounded-md cursor-pointer">
            <Plus />
            Assign Student
          </button>
        </div>
      </div>
    </section>
  );
}
