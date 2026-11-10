"use server";

import { revalidatePath } from "next/cache";
import { getToken } from "@/lib/session";

export type AssignResult = { ok: true } | { ok: false; message: string };

export async function assignStudentAction(
  roomId: string,
  bedId: string,
  studentId: string,
): Promise<AssignResult> {
  // Never trust what the browser sends
  if (
    !/^R\d+$/.test(roomId) ||
    !/^R\d+-\d+$/.test(bedId) ||
    !/^[\w-]{1,10}$/.test(studentId)
  ) {
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
    res = await fetch(`${process.env.API_URL}/beds/${bedId}/assign`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student_id: studentId }),
      cache: "no-store",
    });
  } catch {
    return { ok: false, message: "Cannot reach the server. Try again." };
  }

  if (res.ok) {
    // Refresh the room page so the new occupant appears
    revalidatePath(`/admin/room-management/${roomId}`);
    return { ok: true };
  }

  if (res.status === 401) {
    return {
      ok: false,
      message: "Your session has expired. Please log in again.",
    };
  }
  if (res.status === 403) {
    return {
      ok: false,
      message: "You do not have permission to assign students.",
    };
  }

  const body = await res.json().catch(() => null);
  return {
    ok: false,
    message: body?.message ?? "Could not assign the student. Try again.",
  };
}
