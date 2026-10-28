"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/actions/auth";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    login,
    {},
  );

  return (
    <form action={action} className="w-full flex flex-col gap-6">
      {state.error && (
        <p role="alert" className="text-red-300 text-center">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="id"
          defaultValue={state.id}
          required
          autoComplete="username"
          placeholder="Matric number / Admin ID"
          className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-4 text-white placeholder:text-white/60 backdrop-blur-md outline-none transition focus:border-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-4 text-white placeholder:text-white/60 backdrop-blur-md outline-none transition focus:border-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-button-selected text-white font-bold py-3 rounded-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
