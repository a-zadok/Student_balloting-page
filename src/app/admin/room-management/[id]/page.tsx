"use client";

import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  return (
    <section className="flex flex-col min-w-0 gap-8 py-8">
      <button className="cursor-pointer" onClick={() => router.back()}>
        <ArrowLeft className="" />
      </button>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">Room Management</h2>
          <p className="md:text-lg text-text-secondary">
            View, edit and manage hostel room configurations, allocations, and
            status.
          </p>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-button-selected text-white text-lg py-3 px-4 rounded-md cursor-pointer">
          <ArrowDownToLine size={20} />
          Export
        </button>
      </div>
    </section>
  );
}
