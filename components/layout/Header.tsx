import { Menu, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <Menu className="cursor-pointer" />
        <h1 className="md:text-lg">Accomodation Portal</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-container h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
          <UserRound />
        </div>
        <div className="hidden md:block">
          <p className="font-bold">Mrs. A. Adeyemi</p>
          <p className="text-sm text-text-secondary">Hostel Administrator</p>
        </div>
      </div>
    </header>
  );
}
