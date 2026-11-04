import Link from "next/link";
import type { Paginated, RoomRow } from "@/lib/types";

function pageHref(query: string, page: number) {
  const q = new URLSearchParams(query);
  if (page <= 1) q.delete("page");
  else q.set("page", String(page));
  const s = q.toString();
  return s ? `?${s}` : "?";
}

export default function RoomPagination({
  result,
  query,
}: {
  result: Paginated<RoomRow>;
  query: string;
}) {
  if (result.total === 0) return null;

  const link = "rounded-md border border-border px-4 py-2 text-sm";
  const off = "rounded-md border border-border px-4 py-2 text-sm opacity-40";

  return (
    <div className="flex items-center justify-between gap-2 pt-2">
      <p className="text-sm text-text-secondary">
        {result.from}–{result.to} of {result.total} rooms
      </p>

      <div className="flex gap-2">
        {result.current_page > 1 ? (
          <Link
            href={pageHref(query, result.current_page - 1)}
            scroll={false}
            className={link}
          >
            Previous
          </Link>
        ) : (
          <span className={off}>Previous</span>
        )}

        {result.current_page < result.last_page ? (
          <Link
            href={pageHref(query, result.current_page + 1)}
            scroll={false}
            className={link}
          >
            Next
          </Link>
        ) : (
          <span className={off}>Next</span>
        )}
      </div>
    </div>
  );
}
