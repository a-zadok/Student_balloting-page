"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollableButtonsProps {
  buttons?: { label: string; blockNumber: number }[];
  selected?: number;
  buttonArr?: string[];
}

const ScrollableButtons = ({
  buttons,
  selected,
  buttonArr,
}: ScrollableButtonsProps) => {
  const linked = buttons !== undefined;
  const items =
    buttons ??
    (buttonArr ?? []).map((label, i) => ({ label, blockNumber: i + 1 }));

  const [localSelected, setLocalSelected] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const updateArrows = useCallback((): void => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = listRef.current;
    el?.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el?.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, items.length]);

  const scroll = (direction: 1 | -1): void => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center">
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="absolute left-0 z-10 flex h-full items-center bg-gradient-to-r from-white via-white/90 to-transparent pr-4"
        >
          <span className="rounded-full bg-container p-1 shadow">
            <ChevronLeft size={20} />
          </span>
        </button>
      )}

      <ul
        ref={listRef}
        className="flex items-center gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const active = linked
            ? item.blockNumber === selected
            : index === localSelected;
          const pill = `${active ? "bg-button-selected text-white" : "bg-container"} whitespace-nowrap py-1 md:py-2 px-4 md:px-6 rounded-md`;

          return linked ? (
            <li key={item.blockNumber} className="w-fit shrink-0">
              <Link
                href={`?block=${item.blockNumber}`}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={`${pill} block`}
              >
                {item.label}
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className={`${pill} w-fit shrink-0 cursor-pointer`}
              onClick={() => setLocalSelected(index)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="absolute right-0 z-10 flex h-full items-center bg-gradient-to-l from-white via-white/90 to-transparent pl-4"
        >
          <span className="rounded-full bg-container p-1 shadow">
            <ChevronRight size={20} />
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollableButtons;
