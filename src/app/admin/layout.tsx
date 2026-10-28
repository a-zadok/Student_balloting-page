import Header from "../../../components/layout/Header";
import Sidebar from "../../../components/layout/Sidebar";

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
