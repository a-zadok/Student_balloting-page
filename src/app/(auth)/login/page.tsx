"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Student sign-in is not connected to an authentication service yet.");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/15" />

      <section className="relative w-full max-w-[510px] rounded-[2rem] border border-white/50 bg-white/55 px-7 py-8 shadow-2xl shadow-slate-950/25 backdrop-blur-2xl sm:px-14 sm:py-9">
        <div className="flex flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="College of Medicine, University of Lagos"
            className="mb-5 h-28 w-28 rounded-full object-contain"
          />
          <p className="text-xl font-bold text-white drop-shadow sm:text-2xl">
            College of Medicine
          </p>
          <p className="mt-2 text-lg font-semibold text-white drop-shadow sm:text-xl">
            University of Lagos
          </p>
        </div>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              autoComplete="username"
              className="h-[54px] w-full rounded-xl border border-slate-500/45 bg-white/65 px-5 text-base text-slate-950 outline-none transition placeholder:text-slate-900 focus:border-[#061d49] focus:ring-2 focus:ring-[#061d49]/20"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="h-[54px] w-full rounded-xl border border-slate-500/45 bg-white/65 px-5 text-base text-slate-950 outline-none transition placeholder:text-slate-900 focus:border-[#061d49] focus:ring-2 focus:ring-[#061d49]/20"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>

          {message && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              {message}
            </p>
          )}

          <button
            className="mx-auto mt-2 flex h-[58px] w-full max-w-[300px] items-center justify-center rounded-2xl bg-[#061d49] px-6 text-lg font-bold text-white shadow-md transition hover:bg-[#0a2b67] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061d49]"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
