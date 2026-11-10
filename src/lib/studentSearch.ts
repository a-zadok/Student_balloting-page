import "server-only";
import { getToken } from "@/lib/session";
import type { StudentResult } from "@/lib/types";

type Options = {
  gender?: "Male" | "Female";
  unallocatedOnly?: boolean;
};

export type StudentSearchResult =
  | { ok: true; students: StudentResult[] }
  | { ok: false; status: number };

// Searches students by name or matric number (the API returns at most 5).
// It returns a result object instead of redirecting, so a route handler
// can answer a browser request with a proper status code.
export async function searchStudents(
  q: string,
  options: Options = {},
): Promise<StudentSearchResult> {
  const token = await getToken();
  if (!token) return { ok: false, status: 401 };

  const term = q.trim();
  if (term.length < 2) return { ok: true, students: [] };

  const params = new URLSearchParams({ q: term });
  if (options.gender) params.set("gender", options.gender);
  if (options.unallocatedOnly) params.set("unallocated", "1");

  const res = await fetch(`${process.env.API_URL}/students/search?${params}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, status: res.status };

  return { ok: true, students: await res.json() };
}
