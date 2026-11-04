import type { RoomRow } from "@/lib/types";

export function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// "Small Room", "Large Room", "Common Room" and so on
export function roomKind(r: Pick<RoomRow, "room_type" | "room_status">) {
  if (r.room_type === "S") return "Small Room";
  if (r.room_type === "L") return "Large Room";
  return r.room_status === "Utility" ? "Common Room" : "Office / Store";
}

export function statusLabel(status: RoomRow["room_status"]) {
  return status === "Allocated" ? "Fully Allocated" : status;
}
