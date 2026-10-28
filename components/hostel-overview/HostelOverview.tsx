"use client";

import { ArrowUpFromDot, ChevronRight } from "lucide-react";
import ScrollableButtons from "../ui/ScrollableButtons";

export default function HostelOverview() {
  const buttonArr = [
    "Block 1",
    "Block 2",
    "Block 3",
    "Block 4",
    "Block 5",
    "Block 6",
    "Block 7",
    "Block 8",
    "Block 9",
    "Block 10",
    "Block 11",
  ];

  return (
    <div className="flex flex-col gap-4 rounded-md p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Hostel Overview</h2>

      <ScrollableButtons buttonArr={buttonArr} />

      <div>
        <h3 className="text-lg">Floors</h3>
        <p className="text-text-secondary">
          Select a floor to view room details and availability
        </p>
      </div>

      <ul>
        <li className="flex gap-2 justify-between items-center border border-border p-2 rounded-md">
          <div className="flex items-center gap-2">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p>1st Floor</p>
              <p className="text-text-secondary text-sm">
                3 small &middot; 3 large
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-end">6</p>
              <p className="text-text-secondary text-sm">available</p>
            </div>
            <ChevronRight />
          </div>
        </li>
      </ul>
    </div>
  );
}
