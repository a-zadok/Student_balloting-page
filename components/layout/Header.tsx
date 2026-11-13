import { Me } from "@/lib/session";
import { Menu, UserRound } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  me: Me;
}

export default function Header({ onMenuClick, me }: HeaderProps) {
  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <button className="lg:hidden cursor-pointer" onClick={onMenuClick}>
          <Menu />
        </button>
        <h1 className="md:text-lg lg:text-3xl font-bold">
          Accomodation Portal
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-container h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
          <UserRound />
        </div>
        <div className="hidden md:block">
          <p className="font-bold">
            {me?.role === "admin" ? (
              <span>
                {me.admin?.first_name} {me.admin?.last_name}
              </span>
            ) : (
              <span>
                {me.student?.first_name} {me.student?.last_name}
              </span>
            )}
          </p>
          <p className="text-sm text-text-secondary">
            {me?.role === "admin"
              ? "Hostel Administrator"
              : me.student?.student_id}{" "}
          </p>
        </div>
      </div>
    </header>
  );
}
