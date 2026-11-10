"use server";

import { revalidatePath } from "next/cache";
import { getToken } from "@/lib/session";

export type RoomActionResult = { ok: true } | { ok: false; message: string };

export async function setRoomRestrictedAction(
  roomId: string,
  restricted: boolean,
): Promise<RoomActionResult> {
  // Never trust what the browser sends
  if (!/^R\d+$/.test(roomId) || typeof restricted !== "boolean") {
    return { ok: false, message: "Invalid request." };
  }

  const token = await getToken();
  if (!token) {
    return {
      ok: false,
      message: "Your session has expired. Please log in again.",
    };
  }

  let res: Response;
  try {
    res = await fetch(`${process.env.API_URL}/rooms/${roomId}/restriction`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ restricted }),
      cache: "no-store",
    });
  } catch {
    return { ok: false, message: "Cannot reach the server. Try again." };
  }

  if (res.ok) {
    revalidatePath(`/admin/room-management/${roomId}`);
    revalidatePath("/admin/room-management");
    return { ok: true };
  }

  if (res.status === 401) {
    return {
      ok: false,
      message: "Your session has expired. Please log in again.",
    };
  }
  if (res.status === 403) {
    return { ok: false, message: "You do not have permission to edit rooms." };
  }

  const body = await res.json().catch(() => null);
  return {
    ok: false,
    message: body?.message ?? "Could not save the changes. Try again.",
  };
}
