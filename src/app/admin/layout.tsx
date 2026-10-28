"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/layout/Header";
import Sidebar from "../../../components/layout/Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
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
        className={`shrink-0 ${isSidebarOpen ? "block" : "hidden"} lg:block`}
      >
        <Sidebar setIsSidebarOpen={() => setIsSidebarOpen((prev) => !prev)} />
      </div>

      <main className="min-w-0 flex-1 overflow-y-auto px-4 py-2">
        <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />
        {children}
      </main>
    </div>
  );
}
