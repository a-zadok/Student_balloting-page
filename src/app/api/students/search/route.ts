import { NextResponse, type NextRequest } from "next/server";
import { searchStudents } from "@/lib/studentSearch";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const gender = sp.get("gender");

  const result = await searchStudents(sp.get("q") ?? "", {
    gender: gender === "Male" || gender === "Female" ? gender : undefined,
    unallocatedOnly: sp.get("unallocated") === "1",
  });

  if (!result.ok) {
    const status =
      result.status === 401 || result.status === 403 ? result.status : 502;
    return NextResponse.json({ message: "Search failed" }, { status });
  }

  return NextResponse.json(result.students);
}
