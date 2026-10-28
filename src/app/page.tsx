import { redirect } from "next/navigation";
import { getMeOrNull, dashboardPath } from "@/lib/session";

export default async function Home() {
  const me = await getMeOrNull();
  redirect(me ? dashboardPath(me.role) : "/login");
}
