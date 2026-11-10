"use client";

import { Pencil, X } from "lucide-react";
import { useRef } from "react";

export default function EditRoomModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

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
        className="fixed top-0 right-0 bottom-0 left-auto m-0
    h-dvh max-h-none w-full max-w-md md:max-w-3xl
    border-0 p-0
    backdrop:bg-black/50"
      >
        <div className="flex h-full flex-col gap-4 md:gap-8 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Edit Room 107</h2>
              <p className="text-text-secondary">
                Update room details and allocation settings
              </p>
            </div>

            <button onClick={closeModal} className="cursor-pointer">
              <X />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Room Information</h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="md:flex-1 flex flex-col gap-1">
                  <p className="text-sm">Room Number</p>
                  <div className="bg-container p-3 rounded-md">107</div>
                </div>

                <div className="md:flex-1 flex flex-col gap-1">
                  <p className="text-sm">Block</p>
                  <select className="border border-border p-3 rounded-md outline-none">
                    <option>Block 1</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm">Room Number</p>
                <select className="border border-border p-3 rounded-md outline-none">
                  <option>First Floor</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Room Configuration</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1 flex flex-col gap-1">
                <p className="text-sm">Room Type</p>
                <select className="border border-border p-3 rounded-md outline-none">
                  <option>4-Bed Room</option>
                </select>
              </div>

              <div className="md:flex-1 flex flex-col gap-1">
                <p className="text-sm">Eligible Student Levels</p>
                <div className="border border-border p-3 rounded-md">
                  300L, 400L, 500L
                </div>
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
                <select className="border border-border p-3 rounded-md outline-none">
                  <option>Available for allocation</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="available" />
              <span>Mark room as unavailable for maintenance</span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-4 my-6 md:my-10">
            <button className="md:flex-1 bg-button-selected text-white p-2 md:p-4 rounded-md cursor-pointer">
              Save Changes
            </button>
            <button className="md:flex-1 border border-border p-2 md:p-4 rounded-md cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
