"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Check, ChevronRight, CircleAlert } from "lucide-react";
import { ApplicationSteps } from "./steps";

const instructions = [
  "Submitting an application does not guarantee accommodation.",
  "Applications are subject to a computerized balloting process.",
  "Successful applicants will be notified via their official student email.",
  "If offered accommodation, you will have 7 days to make payment to confirm your allocation.",
  "Ensure your email and phone number on the student portal are up to date.",
];

function ApplicationWindow() {
  return (
    <section className="grid gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[minmax(0,1fr)_240px] sm:items-center sm:px-6">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] text-[#10284f]">
          <CalendarDays aria-hidden="true" className="h-5 w-5" />
        </span>
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-[#10284f]">
              Accommodation Application is Currently Open
            </h2>
            <p className="mt-3 text-xs text-slate-500">Start Date</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              24th August 2026, 12:00 AM
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">End Date</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              4th September 2026, 11:59 PM
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#f2f2ff] px-4 py-3">
        <p className="text-xs text-[#263b62]">Time Remaining</p>
        <p className="mt-1 text-lg font-bold text-[#10284f]">12d : 09h : 32m : 15s</p>
        <div className="mt-1 grid grid-cols-4 text-center text-[10px] text-[#263b62]">
          <span>Days</span>
          <span>Hours</span>
          <span>Mins</span>
          <span>Secs</span>
        </div>
      </div>
    </section>
  );
}

export default function AccommodationApplicationPage() {
  const router = useRouter();
  const [acknowledged, setAcknowledged] = useState(false);

  function handleProceed(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (acknowledged) {
      router.push("/student/application/room-allocation");
    }
  }

  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Accommodation Application
        </h1>
        <p className="mt-1 text-sm text-slate-700">
          Follow the steps below to apply for accommodation. Please read the
          instructions carefully before proceeding.
        </p>
      </header>

      <div className="space-y-5">
        <ApplicationSteps activeStep={1} />

        <form
          onSubmit={handleProceed}
          className="rounded-xl bg-[#f1f6fc] p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#061d49] text-white">
              <CircleAlert aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-slate-950">Important Information</h2>
              <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-sm">
                Please read the following information before proceeding with
                your accommodation application.
              </p>

              <ul className="mt-5 space-y-3">
                {instructions.map((instruction) => (
                  <li
                    key={instruction}
                    className="flex items-start gap-2 text-xs leading-5 text-slate-800 sm:text-sm"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-indigo-500 text-indigo-600">
                      <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-4 border-t border-slate-300 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-800">
                  <input
                    checked={acknowledged}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#061d49]"
                    onChange={(event) => setAcknowledged(event.target.checked)}
                    type="checkbox"
                  />
                  <span>I have read and understood the information above.</span>
                </label>
                <button
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 self-end rounded-lg bg-[#061d49] px-5 text-sm font-semibold text-white transition hover:bg-[#0a2b67] disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
                  disabled={!acknowledged}
                  type="submit"
                >
                  Proceed
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </form>

        <ApplicationWindow />
      </div>
    </div>
  );
}
