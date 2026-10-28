import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
}
