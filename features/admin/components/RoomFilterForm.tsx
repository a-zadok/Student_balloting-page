"use client";

import {
  useEffect,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowDownToLine, Search, SlidersHorizontal, X } from "lucide-react";

type Params = Record<string, string | string[] | undefined>;
type Filters = { block: string; floor: string; status: string };

// The data's ground floor is floor 1
const FLOORS = [
  { value: "1", label: "Ground Floor" },
  { value: "2", label: "First Floor" },
  { value: "3", label: "Second Floor" },
  { value: "4", label: "Third Floor" },
];

const STATUSES = [
  { value: "allocated", label: "Allocated" },
  { value: "available", label: "Available" },
  { value: "utility", label: "Utility" },
  { value: "restricted", label: "Restricted" },
];

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default function RoomFilterForm({
  blocks,
  params,
}: {
  blocks: number[];
  params: Params;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false); // mobile filter panel

  // Values from the URL, ignoring anything that isn't a real option
  const urlBlock = one(params.block);
  const urlFloor = one(params.floor);
  const urlStatus = one(params.status);

  const current: Filters = {
    block: blocks.some((b) => String(b) === urlBlock) ? urlBlock! : "all",
    floor: FLOORS.some((f) => f.value === urlFloor) ? urlFloor! : "all",
    status: STATUSES.some((s) => s.value === urlStatus) ? urlStatus! : "all",
  };

  // Shows the new choice immediately, while the page is still loading
  const [filters, setOptimistic] = useOptimistic(
    current,
    (state: Filters, change: Partial<Filters>) => ({ ...state, ...change }),
  );

  const [search, setSearch] = useState(
    (one(params.search) ?? "").replace(/\D/g, ""),
  );
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const latest = useRef(filters);

  useEffect(() => {
    latest.current = filters;
  });
  useEffect(() => () => clearTimeout(timer.current), []);

  function push(f: Filters, s: string) {
    const q = new URLSearchParams();
    if (f.block !== "all") q.set("block", f.block);
    if (f.floor !== "all") q.set("floor", f.floor);
    if (f.status !== "all") q.set("status", f.status);
    if (s) q.set("search", s);

    const qs = q.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function change(changes: Partial<Filters>) {
    startTransition(() => {
      setOptimistic(changes);
      push({ ...latest.current, ...changes }, search);
    });
  }

  function onSearch(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setSearch(digits);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      startTransition(() => push(latest.current, digits));
    }, 400);
  }

  const floorLabel = FLOORS.find((f) => f.value === filters.floor)?.label;
  const selectedChip =
    "bg-button-selected text-white flex items-center gap-1 shrink-0 border border-button-selected px-2 rounded-full cursor-pointer";
  const plainChip =
    "shrink-0 border border-border px-2 rounded-full cursor-pointer";
  const selectBox =
    "border border-border outline-none p-2 rounded-md cursor-pointer";

  return (
    <div
      className={`flex flex-col md:flex-row md:justify-between gap-4 md:p-6 md:shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md transition-opacity ${
        pending ? "opacity-60" : ""
      }`}
    >
      <div className={`${open ? "flex" : "hidden"} md:flex flex-col gap-2`}>
        <label htmlFor="block">Block</label>
        <select
          id="block"
          value={filters.block}
          onChange={(e) => change({ block: e.target.value })}
          className={selectBox}
        >
          <option value="all">All Blocks</option>
          {blocks.map((b) => (
            <option key={b} value={b}>
              Block {b}
            </option>
          ))}
        </select>
      </div>

      <div className={`${open ? "flex" : "hidden"} md:flex flex-col gap-2`}>
        <label htmlFor="floor">Floor</label>
        <select
          id="floor"
          value={filters.floor}
          onChange={(e) => change({ floor: e.target.value })}
          className={selectBox}
        >
          <option value="all">All Floors</option>
          {FLOORS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      <div className={`${open ? "flex" : "hidden"} md:flex flex-col gap-2`}>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={filters.status}
          onChange={(e) => change({ status: e.target.value })}
          className={selectBox}
        >
          <option value="all">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="md:flex-1 md:max-w-sm md:flex md:items-end">
        <div className="w-full text-text-secondary focus-within:text-black flex items-center gap-2 p-2 border border-border focus-within:ring rounded-md">
          <Search size={20} />
          <input
            type="text"
            inputMode="numeric"
            aria-label="Search room number"
            placeholder="search room number"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-2">
        <div className="flex justify-between gap-4">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex-1 flex items-center gap-2 text-start border border-border p-2 rounded-md cursor-pointer"
          >
            <SlidersHorizontal size={20} />
            Filter
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-button-selected text-white p-2 rounded-md cursor-pointer"
          >
            <ArrowDownToLine size={20} />
            Export
          </button>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto">
          {filters.block !== "all" && (
            <button
              type="button"
              onClick={() => change({ block: "all" })}
              className={selectedChip}
            >
              Block {filters.block}
              <X size={16} />
            </button>
          )}
          {filters.floor !== "all" && (
            <button
              type="button"
              onClick={() => change({ floor: "all" })}
              className={selectedChip}
            >
              {floorLabel}
              <X size={16} />
            </button>
          )}

          <button
            type="button"
            onClick={() => change({ status: "all" })}
            className={filters.status === "all" ? selectedChip : plainChip}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => change({ status: "available" })}
            className={
              filters.status === "available" ? selectedChip : plainChip
            }
          >
            Available
          </button>
          <button
            type="button"
            onClick={() => change({ status: "allocated" })}
            className={
              filters.status === "allocated" ? selectedChip : plainChip
            }
          >
            Full
          </button>
        </div>
      </div>
    </div>
  );
}
