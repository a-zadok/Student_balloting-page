"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { Info, Plus, Search, UserRound } from "lucide-react";
import { assignStudentAction } from "@/app/actions/students";
import type { StudentResult } from "@/lib/types";

type Props = {
  roomId: string;
  bedId: string;
  bedLabel: string;
  gender: "Male" | "Female";
};

function StudentRow({ s }: { s: StudentResult }) {
  return (
    <>
      <div className="flex items-center gap-1">
        <div className="bg-container/90 h-10 w-10 shrink-0 flex items-center justify-center rounded-full">
          <UserRound size={20} />
        </div>
        <div className="min-w-0 text-sm">
          <p className="truncate">{s.name}</p>
          <p>Matric: {s.matric_number}</p>
        </div>
      </div>

      <p className="hidden text-sm md:block">{s.department ?? "-"}</p>
      <p className="text-sm">{s.level ? `${s.level}L` : "-"}</p>
    </>
  );
}

export default function AssignStudentModal({
  roomId,
  bedId,
  bedLabel,
  gender,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const [open, setOpen] = useState(false); // searching only happens while open
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<StudentResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [selected, setSelected] = useState<StudentResult | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const term = query.trim();
  const active = open && selected === null && term.length >= 2;
  const list = active ? results : [];

  useEffect(() => {
    if (!active) return;

    const controller = new AbortController();

    // Wait 300 ms after the last key, and cancel the previous request
    const timer = setTimeout(async () => {
      setSearching(true);
      setSearchError(false);

      try {
        const p = new URLSearchParams({ q: term, gender, unallocated: "1" });
        const res = await fetch(`/api/students/search?${p}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("search failed");

        setResults(await res.json());
      } catch (e) {
        if ((e as Error).name !== "AbortError") {
          setSearchError(true);
          setResults([]);
        }
      } finally {
        if (!controller.signal.aborted) setSearching(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [active, term, gender]);

  function reset() {
    setQuery("");
    setResults([]);
    setSearching(false);
    setSearchError(false);
    setSelected(null);
    setMessage(null);
  }

  function openModal() {
    reset();
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  function confirm() {
    if (!selected) return;
    setMessage(null);

    startTransition(async () => {
      const result = await assignStudentAction(
        roomId,
        bedId,
        selected.matric_number,
      );

      if (result.ok) closeModal();
      else setMessage(result.message);
    });
  }

  const rowClass =
    "flex justify-between items-center gap-2 bg-container rounded-md p-2";

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center gap-2 justify-center p-2 bg-button-selected text-white w-full md:w-fit rounded-md cursor-pointer"
      >
        <Plus />
        Assign Student
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => {
          setOpen(false);
          reset();
        }}
        className="m-auto w-full max-w-md md:max-w-xl rounded-lg p-4 md:p-6 backdrop:bg-black/50 outline-none"
      >
        <div className="flex flex-col gap-6">
          <div>
            <h2 id={titleId} className="text-xl font-semibold">
              Assign Student
            </h2>
            <p className="text-text-secondary">
              Assign a student to {bedLabel}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {selected ? (
              <div className={rowClass}>
                <StudentRow s={selected} />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  disabled={pending}
                  className="shrink-0 text-sm underline cursor-pointer disabled:opacity-50"
                >
                  Change
                </button>
              </div>
            ) : (
              <>
                <div className="w-full text-text-secondary focus-within:text-black flex items-center gap-2 p-2 border border-border focus-within:ring rounded-md">
                  <Search size={20} />
                  <input
                    type="text"
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search a student name or matric number"
                    placeholder="Search student by name or matric number"
                    className="w-full outline-none"
                  />
                </div>

                <div aria-live="polite" className="flex flex-col gap-2">
                  {!active && (
                    <p className="text-sm text-text-secondary">
                      Type at least 2 characters. Only {gender.toLowerCase()}{" "}
                      students without a bedspace are shown.
                    </p>
                  )}
                  {active && searching && (
                    <p className="text-sm text-text-secondary">Searching...</p>
                  )}
                  {active && searchError && (
                    <p className="text-sm text-red-600">
                      Could not search. Try again.
                    </p>
                  )}
                  {active &&
                    !searching &&
                    !searchError &&
                    list.length === 0 && (
                      <p className="text-sm text-text-secondary">
                        No students found.
                      </p>
                    )}

                  <ul className="flex flex-col gap-2">
                    {list.map((s) => (
                      <li key={s.matric_number}>
                        <button
                          type="button"
                          onClick={() => setSelected(s)}
                          className={`${rowClass} w-full text-start cursor-pointer hover:bg-gray-100`}
                        >
                          <StudentRow s={s} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="border border-border p-2 rounded-md">
              {bedLabel} - Available
            </div>

            {message && (
              <p role="alert" className="text-sm text-red-600">
                {message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-md border border-border p-2 cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={confirm}
              disabled={!selected || pending}
              className="flex-1 rounded-md bg-button-selected p-2 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {pending ? "Assigning..." : "Confirm Assignment"}
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
