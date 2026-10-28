"use client";

import { ArrowUpFromDot, ChevronRight } from "lucide-react";
import ScrollableButtons from "../../../components/ui/ScrollableButtons";

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
    <div className="flex flex-col gap-4 rounded-md p-4 md:p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Hostel Overview</h2>

      <ScrollableButtons buttonArr={buttonArr} />

      <div>
        <h3 className="text-lg">Floors</h3>
        <p className="text-text-secondary">
          Select a floor to view room details and availability
        </p>
      </div>

      <ul className="flex flex-col gap-4 md:gap-6">
        <li className="flex gap-2 justify-between items-center border border-border p-2 md:p-4 rounded-md">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p className="md:text-lg">1st Floor</p>
              <p className="md:hidden text-text-secondary text-sm">
                3 small &middot; 3 large
              </p>
              <p className="hidden md:block text-text-secondary">
                6 rooms available
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Small Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Large Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <p className="text-end">6</p>
              <p className="text-text-secondary text-sm">rooms available</p>
            </div>
            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </li>
        <li className="flex gap-2 justify-between items-center border border-border p-2 md:p-4 rounded-md">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p className="md:text-lg">1st Floor</p>
              <p className="md:hidden text-text-secondary text-sm">
                3 small &middot; 3 large
              </p>
              <p className="hidden md:block text-text-secondary">
                6 rooms available
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Small Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Large Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <p className="text-end">6</p>
              <p className="text-text-secondary text-sm">rooms available</p>
            </div>
            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </li>
        <li className="flex gap-2 justify-between items-center border border-border p-2 md:p-4 rounded-md">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p className="md:text-lg">1st Floor</p>
              <p className="md:hidden text-text-secondary text-sm">
                3 small &middot; 3 large
              </p>
              <p className="hidden md:block text-text-secondary">
                6 rooms available
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Small Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Large Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <p className="text-end">6</p>
              <p className="text-text-secondary text-sm">rooms available</p>
            </div>
            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </li>
        <li className="flex gap-2 justify-between items-center border border-border p-2 md:p-4 rounded-md">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-container w-fit p-2 rounded-sm">
              <ArrowUpFromDot size={20} />
            </div>
            <div>
              <p className="md:text-lg">1st Floor</p>
              <p className="md:hidden text-text-secondary text-sm">
                3 small &middot; 3 large
              </p>
              <p className="hidden md:block text-text-secondary">
                6 rooms available
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Small Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-lg">Large Rooms</p>
            <p className="text-text-secondary">3 Available</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <p className="text-end">6</p>
              <p className="text-text-secondary text-sm">rooms available</p>
            </div>
            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
