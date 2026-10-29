import { notFound, redirect } from "next/navigation";
import { getToken } from "./session";

export async function api<T>(path: string): Promise<T> {
  const token = await getToken();
  if (!token) redirect("/login");

  const res = await fetch(`${process.env.API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    cache: "no-store",
  });

  if (res.status === 401) redirect("/login");
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`API request failed (${res.status})`);

  return res.json();
}
