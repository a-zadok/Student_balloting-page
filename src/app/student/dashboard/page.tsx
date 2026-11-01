
import {
  Bell,
  CalendarDays,
  CircleHelp,
  FileText,
  Megaphone,
} from "lucide-react";

const announcements = [
  {
    title: "2026/2027 Accommodation Application is Now Open",
    body: "Applications for the 2026/2027 academic session are open. Ensure you apply before the deadline.",
    date: "19th August, 2026",
  },
  {
    title: "Update Your Contact Information",
    body: "Ensure your email and phone number are updated on your student portal to receive important updates.",
    date: "18th August, 2026",
  },
  {
    title: "Payment Deadline",
    body: "Successful applicants will have 7 days to make payment after allocation. Please check your email regularly.",
    date: "18th August, 2026",
  },
];

const steps = [
  {
    title: "Apply",
    description:
      "Click Apply Now on your dashboard to begin your accommodation application for the 2026/2027 session.",
  },
  {
    title: "Read the Instructions",
    description:
      "Review how the process works and what information you will need before continuing.",
  },
  {
    title: "Get Your Hostel",
    description:
      "The system randomly allocates a hostel to you, like a ballot. The selection is fully automated.",
  },
  {
    title: "Payment",
    description:
      "After allocation, proceed to payment within the given period to keep your allocation.",
  },
  {
    title: "Allocation Confirmed",
    description:
      "Once payment is received, your allocation is confirmed and your hostel details are available on your dashboard.",
  },
];

function ApplicationIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-32 w-32"
      fill="none"
      viewBox="0 0 160 160"
    >
      <path d="m80 12 21 22H59l21-22Z" fill="#d1d5db" />
      <path d="m35 45 45-9 45 9v83l-45 18-45-18V45Z" fill="#cbd5e1" />
      <path d="m35 45 45 12 45-12-5 83-40 18-40-18-5-83Z" fill="#d1d5db" />
      <path d="m53 58 52 6v8l-52-6v-8Zm0 18 52 6v8l-52-6v-8Zm0 18 34 4v8l-34-4v-8Z" fill="#818cf8" />
      <path d="m79 117 12-13 12 10 23-25 12 11-33 38-26-21Z" fill="#84a84a" />
    </svg>
  );
}

export default function StudentDashboardPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Welcome Back, Tola!
        </h1>
        <p className="mt-1 text-sm text-slate-700 sm:text-base">
          Manage your accommodation application and stay updated
        </p>
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_272px]">
        <div className="min-w-0">
          <div className="grid gap-5 md:grid-cols-2">
            <section className="flex min-h-[410px] flex-col rounded-xl border border-[#e1ebfa] bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] text-[#173461]">
                  <FileText aria-hidden="true" className="h-5 w-5" />
                </span>
                Application Status
              </h2>
              <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
                <ApplicationIllustration />
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  No Accommodation Yet
                </h3>
                <p className="mt-1 max-w-[270px] text-sm text-slate-800">
                  You have not submitted any accommodation application.
                </p>
                <p className="mt-2 text-xs text-slate-800">
                  Click the button below to get started
                </p>
                <a
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#061d49] px-6 text-sm font-semibold text-white transition hover:bg-[#0a2b67] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061d49]"
                  href="/student/application"
                >
                  Apply for Accommodation
                </a>
              </div>
            </section>

            <section className="min-h-[410px] rounded-xl border border-[#e1ebfa] bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] text-[#173461]">
                  <Megaphone aria-hidden="true" className="h-5 w-5" />
                </span>
                Important Announcements
              </h2>
              <ul className="mt-5 space-y-5">
                {announcements.map((announcement) => (
                  <li key={announcement.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#173461]">
                      <Megaphone aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold leading-4 text-slate-900 sm:text-sm">
                        {announcement.title}
                      </h3>
                      <p className="mt-1 text-xs leading-4 text-slate-500">
                        {announcement.body}
                      </p>
                      <p className="mt-2 text-[11px] text-slate-500">{announcement.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section
            className="mt-5 flex flex-col gap-5 rounded-xl bg-[#f1f6fc] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-7"
            id="application-window"
          >
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061d49] text-white">
                <Bell aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-bold text-slate-950">
                  Accommodation Application Window is Open!
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-700">
                  The application window closes on 31st of August 2026, 11:59PM.
                  <br className="hidden sm:block" /> Apply now to be considered.
                </p>
              </div>
            </div>
            <a
              className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-[#061d49] px-5 text-sm font-semibold text-white transition hover:bg-[#0a2b67]"
              href="/student/application"
            >
              Apply Now
            </a>
          </section>
        </div>

        <aside className="space-y-4">
          <section className="rounded-xl border border-[#e1ebfa] bg-[#f4f8fd] p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-950">
              Application Window Closes In
            </h2>
            <div className="mt-3 grid grid-cols-4 gap-2 text-center">
              {[
                ["12", "Days"],
                ["04", "Hours"],
                ["36", "Minutes"],
                ["28", "Seconds"],
              ].map(([value, unit]) => (
                <div
                  key={unit}
                  className="rounded-lg border border-[#e1ebfa] bg-white px-1 py-2"
                >
                  <p className="text-xl font-bold leading-5 text-[#10284f]">{value}</p>
                  <p className="mt-1 text-[10px] font-medium text-slate-700">{unit}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold text-slate-700">
              <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
              4th September 2026, 11:59PM
            </p>
          </section>

          <section className="rounded-xl border border-[#e1ebfa] bg-white p-4 shadow-sm sm:p-5">
            <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf4ff] text-[#173461]">
                <CircleHelp aria-hidden="true" className="h-5 w-5" />
              </span>
              How It Works
            </h2>
            <ol className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#061d49] text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-[11px] leading-[1.4] text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </div>
  );
}