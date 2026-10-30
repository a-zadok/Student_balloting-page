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
        <h1 className="md:text-lg">Accomodation Portal</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-container h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
          <UserRound />
        </div>
        <div className="hidden md:block">
          <p className="font-bold">
            {me.admin?.first_name} {me.admin?.last_name}
          </p>
          <p className="text-sm text-text-secondary">Hostel Administrator</p>
        </div>
      </div>
    </header>
  );
}
