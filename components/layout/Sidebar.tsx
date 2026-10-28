"use client";
import { BedSingle, House, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const adminNav = [
    {
      label: "Dashboard",
      icon: House,
      href: "/admin/dashboard",
    },
    {
      label: "Room Management",
      icon: BedSingle,
      href: "/#",
    },
  ];

  return (
    <aside className="flex flex-col justify-between w-64 shrink-0">
      <div>
        <div className="bg-button-selected text-white p-8">
          University of Lagos
        </div>

        <div className="py-8 px-6">
          <nav className="flex flex-col gap-4">
            {adminNav.map((nav) => {
              const Icon = nav.icon;
              return (
                <Link
                  key={nav.label}
                  href={nav.href}
                  className={`${pathname === nav.href ? "bg-button" : "hover:bg-button/40"} flex items-center gap-2 p-4 rounded-md cursor-pointer`}
                >
                  <Icon />
                  {nav.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <button className="hover:bg-button/40 flex gap-4 my-8 mx-6 p-4 cursor-pointer">
        <LogOut />
        Logout
      </button>
    </aside>
  );
}
