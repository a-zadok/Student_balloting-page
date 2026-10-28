"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { dashboardPath } from "@/lib/session";

export type LoginState = { error?: string; id?: string };

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const id = String(formData.get("id") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!id || !password) {
    return { error: "Enter your ID and password.", id };
  }

  let res: Response;
  try {
    res = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id, password }),
      cache: "no-store",
    });
  } catch {
    return { error: "Cannot reach the server. Try again.", id };
  }

  if (res.status === 401) return { error: "Invalid ID or password.", id };
  if (!res.ok) return { error: "Something went wrong. Try again.", id };

  const { token, user } = await res.json();

  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect(dashboardPath(user.role));
}

export async function logout() {
  const jar = await cookies();
  const token = jar.get("token")?.value;

  if (token) {
    // Tell the API to delete the token. If that fails, we still clear the cookie.
    await fetch(`${process.env.API_URL}/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }).catch(() => {});
  }

  jar.delete("token");
  redirect("/login");
}
