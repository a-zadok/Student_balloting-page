import { requireRole } from "@/lib/session";
import AdminLayout from "./AdminLayout";
export const instant = false;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await requireRole("admin");

  return <AdminLayout me={me}>{children}</AdminLayout>;
}
