"use client";

import { FileText, Home, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/student/dashboard", label: "Dashboard", Icon: Home },
  {
    href: "/student/application",
    label: "Accommodation Application",
    Icon: FileText,
  },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[220px] shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Header section stays locked at the top */}
      <div className="flex h-[92px] items-center gap-3 bg-[#061d49] px-4 text-white shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="" className="h-12 w-12 shrink-0 rounded-full bg-white object-contain p-1" />
        <span className="text-sm font-semibold leading-5">
          College of Medicine
          <br />
          University of Lagos
        </span>
      </div>

      {/* Navigation links will scroll internally if there are too many */}
      <nav aria-label="Student navigation" className="flex-1 overflow-y-auto space-y-2 px-3 py-7">
        {links.map(({ href, label, Icon }) => {
          const active =
            href === "/student/dashboard"
              ? pathname === href
              : pathname.startsWith("/student/application");

          return (
          <a
            key={label}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? "bg-[#e4efff] text-[#122b50]"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            href={href}
          >
            <Icon aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.8} />
            <span>{label}</span>
          </a>
          );
        })}
      </nav>

      {/* Logout container pinned securely to the bottom */}
      <div className="p-4 border-t border-slate-100 shrink-0">
        <a
          className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#061d49]"
          href="/login"
        >
          <LogOut aria-hidden="true" className="h-5 w-5 shrink-0" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}
