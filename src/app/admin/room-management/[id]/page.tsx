"use client";

import { ArrowLeft, MoveLeft, Pencil } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import RoomOccupantsList from "../../../../../features/admin/components/RoomOccupantsList";
import RoomOccupantsTable from "../../../../../features/admin/components/RoomOccupantsTable";

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  return (
    <section className="flex flex-col min-w-0 gap-8 py-8">
      <div className="flex md:hidden items-center justify-between">
        <button className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft className="" />
        </button>

        <button className="flex items-center gap-2 bg-button-selected text-sm text-white p-2 rounded-md cursor-pointer">
          <Pencil size={18} />
          Edit Room
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">Room 107 Details</h2>
          <p className="md:text-lg text-text-secondary">3/4 Occupied</p>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="flex items-center gap-2 border border-border py-2 px-4 rounded-md cursor-pointer">
            <MoveLeft size={18} />
            Back to Rooms
          </button>
          <button className="flex items-center gap-2 bg-button-selected text-white py-2 px-4 rounded-md cursor-pointer">
            <Pencil size={18} />
            Edit Room
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <RoomOccupantsList />
      </div>

      <div className="hidden md:block">
        <RoomOccupantsTable />
      </div>
    </section>
  );
}
