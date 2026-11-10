"use client";

import { useRef, useState, useTransition } from "react";
import { Pencil, X } from "lucide-react";
import { setRoomRestrictedAction } from "@/app/actions/rooms";
import { ordinal, roomKind } from "@/lib/format";
import type { RoomDetail } from "@/lib/types";

export default function EditRoomModal({ room }: { room: RoomDetail }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [restricted, setRestricted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const isRestricted = room.room_status === "Restricted";
  const isBedroom = room.room_type !== "Other";
  const hasOccupants = room.allocated_beds > 0;

  // A bedroom with students in it can't be closed
  const locked = !isBedroom || (!isRestricted && hasOccupants);
  const changed = restricted !== isRestricted;

  function openModal() {
    setRestricted(isRestricted);
    setMessage(null);
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  function save() {
    setMessage(null);

    startTransition(async () => {
      const result = await setRoomRestrictedAction(room.room_id, restricted);

      if (result.ok) closeModal();
      else setMessage(result.message);
    });
  }

  const readOnly = "bg-container p-3 rounded-md";

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 bg-button-selected text-sm md:text-md text-white p-2 md:py-2 md:px-4 rounded-md cursor-pointer"
        onClick={openModal}
      >
        <Pencil size={18} />
        Edit Room
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`Edit room ${room.room_number}`}
        className="fixed top-0 right-0 bottom-0 left-auto m-0
    h-dvh max-h-none w-full max-w-md md:max-w-3xl
    border-0 p-0
    backdrop:bg-black/50"
      >
        <div className="flex h-full flex-col gap-4 md:gap-8 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Edit Room {room.room_number}
              </h2>
              <p className="text-text-secondary">
                Update room details and allocation settings
              </p>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Room Information</h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="md:flex-1 flex flex-col gap-1">
                  <p className="text-sm">Room Number</p>
                  <div className={readOnly}>{room.room_number}</div>
                </div>

                <div className="md:flex-1 flex flex-col gap-1">
                  <p className="text-sm">Block</p>
                  <div className={readOnly}>Block {room.block_number}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm">Floor</p>
                <div className={readOnly}>
                  {ordinal(room.floor_number)} Floor
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Room Configuration</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1 flex flex-col gap-1">
                <p className="text-sm">Room Type</p>
                <div className={readOnly}>
                  {roomKind(room)}
                  {isBedroom && ` (${room.capacity} beds)`}
                </div>
              </div>

              <div className="md:flex-1 flex flex-col gap-1">
                <p className="text-sm">Gender</p>
                <div className={readOnly}>{room.gender_type}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">
              Availability & Maintenance
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm">Room Status</p>
                <div className={readOnly}>{room.room_status}</div>
              </div>
            </div>

            <label
              className={`flex items-center gap-2 ${
                locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"
              }`}
            >
              <input
                type="checkbox"
                name="unavailable"
                checked={restricted}
                disabled={locked || pending}
                onChange={(e) => setRestricted(e.target.checked)}
              />
              <span>Mark room as unavailable for maintenance</span>
            </label>

            {!isBedroom && (
              <p className="text-sm text-text-secondary">
                Only bedrooms can be marked unavailable.
              </p>
            )}
            {isBedroom && !isRestricted && hasOccupants && (
              <p className="text-sm text-text-secondary">
                {room.allocated_beds} student
                {room.allocated_beds === 1 ? " is" : "s are"} in this room. Move{" "}
                {room.allocated_beds === 1 ? "them" : "them"} out before marking
                it unavailable.
              </p>
            )}

            {message && (
              <p role="alert" className="text-sm text-red-600">
                {message}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-4 my-6 md:my-10">
            <button
              type="button"
              onClick={save}
              disabled={!changed || pending}
              className="md:flex-1 bg-button-selected text-white p-2 md:p-4 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {pending ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="md:flex-1 border border-border p-2 md:p-4 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
