import { cache } from "react";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import type { RoomDetail } from "@/lib/types";

export const getRoomDetail = cache(async (roomId: string) => {
  if (!/^R\d+$/i.test(roomId)) notFound();

  return api<RoomDetail>(`/rooms/${roomId}`);
});
