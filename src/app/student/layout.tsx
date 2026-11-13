import { requireRole } from "@/lib/session";
import StudentLayout from "./StudentLayout";
export const instant = false;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await requireRole("student");

  return <StudentLayout me={me}>{children}</StudentLayout>;
}
