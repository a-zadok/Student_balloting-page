"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/layout/Header";
import Sidebar from "../../../components/layout/Sidebar";
import { usePathname } from "next/navigation";
import { Me } from "@/lib/session";

export default function AdminLayout({
  children,
  me,
}: {
  children: React.ReactNode;
  me: Me;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (!mediaQuery.matches) {
        setIsSidebarOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen();
    }
  }, [pathname, setIsSidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${isSidebarOpen ? "block" : "hidden"} lg:block shrink-0`}
      >
        <Sidebar setIsSidebarOpen={() => setIsSidebarOpen((prev) => !prev)} />
      </div>

      <main className="min-w-0 flex-1 overflow-y-auto px-4 py-2">
        <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} me={me} />
        {children}
      </main>
    </div>
  );
}
