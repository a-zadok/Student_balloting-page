import { Menu } from "lucide-react";
import Image from "next/image";

const navigation = [
  { href: "/student/dashboard", label: "Dashboard" },
  { href: "/student/application", label: "Accommodation Application" },
];

export default function StudentHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-7">
      <div className="flex min-w-0 items-center gap-3">
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open student navigation"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg text-[#061d49] hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </summary>
          <nav
            aria-label="Student navigation"
            className="absolute left-0 top-12 z-20 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-100"
              href="/login"
            >
              Logout
            </a>
          </nav>
        </details>
        <span className="truncate text-base font-semibold text-slate-600 sm:text-lg">
          Accommodation Portal
        </span>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8eef8] text-sm font-bold text-[#061d49]">
          <Image
            alt="Profile picture"
            src="/userAvatar_r.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold leading-5 text-slate-900">Tola Ade</p>
          <p className="text-xs leading-4 text-slate-600">240701150</p>
        </div>
      </div>
    </header>
  );
}
