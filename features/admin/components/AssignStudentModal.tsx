"use client";

import { useRef } from "react";
import { Info, Plus, Search, UserRound } from "lucide-react";

export default function AssignStudentModal({
  bedId,
  bedLabel,
}: {
  bedId: string;
  bedLabel: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="flex items-center gap-2 justify-center p-2 bg-button-selected text-white w-full md:w-fit rounded-md cursor-pointer"
      >
        <Plus />
        Assign Student
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto w-full max-w-md md:max-w-xl rounded-lg p-4 md:p-6 backdrop:bg-black/50 outline-none"
      >
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold">Assign Student</h2>
            <p className="text-text-secondary">
              Assign a student to {bedLabel}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full text-text-secondary focus-within:text-black flex items-center gap-2 p-2 border border-border focus-within:ring rounded-md">
              <Search size={20} />
              <input
                type="text"
                aria-label="Search a student name or matric number"
                placeholder="Search student by name or matric number"
                className="w-full outline-none"
              />
            </div>

            <div className="flex justify-between items-center bg-container rounded-md p-2">
              <div className="flex items-center gap-1">
                <div className="bg-container/90 h-10 w-10 flex items-center justify-center rounded-full">
                  <UserRound size={20} />
                </div>
                <div className="text-sm">
                  <p>Emerald Teni Oreola</p>
                  <p>Matric: 230367069</p>
                </div>
              </div>

              <p className="text-sm">Medicine & Surgery</p>
              <p className="text-sm">500L</p>
            </div>

            <div className="border border-border p-2 rounded-md">
              Bed D - Available
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => dialogRef.current?.close()}
              className="flex-1 rounded-md border border-border p-2 cursor-pointer"
            >
              Close
            </button>
            <button className="flex-1 rounded-md bg-button-selected p-2 text-white cursor-pointer">
              Confirm Assignment
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Info size={20} />
            <p className="text-sm">
              Some rooms may be unavailable for selection due to maintenance or
              administrative reasons.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
