import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Me = {
  user_id: string;
  email: string;
  role: "admin" | "student";
  admin: { admin_id: string; first_name: string; last_name: string } | null;
  student: { student_id: string; first_name: string; last_name: string } | null;
};

export async function getToken() {
  return (await cookies()).get("token")?.value;
}

export function dashboardPath(role: Me["role"]) {
  return role === "admin" ? "/admin/dashboard" : "/student/dashboard";
}

// Asks the API who owns the token. Sends you to /login if there is no valid token.
export async function getMe(): Promise<Me> {
  const token = await getToken();
  if (!token) redirect("/login");

  const res = await fetch(`${process.env.API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    cache: "no-store",
  });

  if (res.status === 401) redirect("/login");
  if (!res.ok) throw new Error("Could not load your account.");

  return res.json();
}

// Put at the top of a protected page. The right role gets in,
// anyone else is sent to their own dashboard.
export async function requireRole(role: Me["role"]): Promise<Me> {
  const me = await getMe();
  if (me.role !== role) redirect(dashboardPath(me.role));
  return me;
}

export async function getMeOrNull(): Promise<Me | null> {
  const token = await getToken();
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      cache: "no-store",
    });
    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
}
