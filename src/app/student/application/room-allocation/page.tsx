import { ArrowUp, BedSingle, Building, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ApplicationSteps } from "../steps";

const allocation = [
  {
    title: "Block 2",
    description: "Your assigned block",
    Icon: Building,
  },
  {
    title: "2nd Floor",
    description: "Your assigned floor",
    Icon: ArrowUp,
  },
  {
    title: "Small room",
    description: "4-bedded",
    Icon: BedSingle,
  },
];

export default function RoomAllocationPage() {
  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Accommodation Application
        </h1>
        <p className="mt-1 text-sm text-slate-700">
          Your room allocation is ready. Review the details below.
        </p>
      </header>

      <div className="space-y-5">
        <ApplicationSteps activeStep={2} />

        <section className="rounded-xl bg-[#f1f6fc] px-4 py-7 text-center sm:px-8 sm:py-8">
          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#cce8d7] text-green-700 shadow-sm">
            <Check aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
          </span>
          <h2 className="mt-3 text-xl font-bold text-slate-950">
            Congratulations, Tola!
          </h2>
          <p className="mt-1 text-sm text-slate-800">
            You have been allocated a room.
          </p>

          <ul className="mx-auto mt-5 grid max-w-[660px] gap-4 sm:grid-cols-3">
            {allocation.map(({ title, description, Icon }) => (
              <li
                key={title}
                className="flex min-h-[92px] items-center justify-center gap-3 rounded-lg border border-[#9fb5d8] bg-white/70 px-4 py-4 shadow-sm"
              >
                <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-slate-950" />
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm text-slate-800">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-slate-800">
            Your room was assigned randomly by the system and can’t be changed.
            Proceed to payment to confirm your allocation.
          </p>

          <Link
            className="mt-3 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#061d49] px-5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0a2b67] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061d49]"
            href="/student/application/payment-confirmation"
          >
            Proceed to Payment
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <p className="mt-2 text-xs text-slate-600">
            Demo flow: no payment will be processed.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:px-6">
          <p className="text-sm font-semibold text-[#10284f]">
            Accommodation Application is Currently Open
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Start Date: 24th August 2026, 12:00 AM
            <span className="mx-2 hidden sm:inline">|</span>
            End Date: 4th September 2026, 11:59 PM
          </p>
        </section>

        <Link
          className="inline-flex text-sm font-medium text-[#10284f] underline underline-offset-4"
          href="/student/dashboard"
        >
          Return to dashboard
        </Link>
      </div>
    </div>
  );
}
