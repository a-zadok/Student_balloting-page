"use client";
import { BedSingle, House, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions/auth";

interface SidebarProps {
  setIsSidebarOpen: () => void;
}

export default function Sidebar({ setIsSidebarOpen }: SidebarProps) {
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
    <aside
      className="fixed md:static left-0 right-0 top-0 bg-black/50 h-full md:w-64 shrink-0 z-20"
      onClick={setIsSidebarOpen}
    >
      <div
        className="bg-white h-full w-[80%] md:w-full flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
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

        <form action={logout} className="mb-4 mx-6">
          <button className="hover:bg-button/40 w-full flex gap-4 p-4 rounded-md cursor-pointer">
            <LogOut />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
