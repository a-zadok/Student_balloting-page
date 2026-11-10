import { Check } from "lucide-react";
import Link from "next/link";
import DownloadAllocationSlip from "@/components/student/DownloadAllocationSlip";
import { ApplicationSteps } from "../steps";

const allocationDetails = [
  ["Student", "Tola Ade"],
  ["Matric Number", "240101113"],
  ["Block", "Block 2"],
  ["Floor", "2nd Floor"],
  ["Room type", "Small room (4-bedded)"],
];

export default function PaymentConfirmationPage() {
  return (
    <div className="mx-auto max-w-[1120px]">
      <header className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Accommodation Application
        </h1>
        <p className="mt-1 text-sm text-slate-700">
          Payment and allocation confirmation
        </p>
      </header>

      <div className="space-y-5">
        <ApplicationSteps activeStep={3} />

        <section className="rounded-xl bg-[#f1f6fc] px-4 py-7 sm:px-8 sm:py-8">
          <div className="text-center">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#cce8d7] text-green-700 shadow-sm">
              <Check aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
            </span>
            <h2 className="mt-3 text-xl font-bold text-slate-950">
              Payment successful
            </h2>
            <p className="mt-1 text-sm text-slate-800">
              Your room has been secured.
            </p>
          </div>

          <div className="mx-auto mt-5 max-w-[565px] overflow-hidden rounded-lg border border-[#61799f] bg-white/60 shadow-md">
            <div className="flex items-center justify-between border-b border-dashed border-slate-500 px-5 py-3 sm:px-7">
              <h3 className="text-sm font-medium text-slate-900">
                Allocation slip
              </h3>
              <span className="rounded-full bg-[#cce8d7] px-3 py-1.5 text-sm font-medium text-green-800">
                Paid
              </span>
            </div>
            <dl className="divide-y divide-slate-400 px-5 sm:px-7">
              {allocationDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[49px] items-center justify-between gap-4 py-3 text-sm"
                >
                  <dt className="text-slate-900">{label}</dt>
                  <dd className="text-right font-medium text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-10">
            <DownloadAllocationSlip />
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-500 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061d49]"
              href="/student/dashboard"
            >
              Back to dashboard
            </Link>
          </div>
          <p className="mt-4 text-center text-xs text-slate-600">
            Demo confirmation only. No payment has been processed.
          </p>
        </section>
      </div>
    </div>
  );
}
