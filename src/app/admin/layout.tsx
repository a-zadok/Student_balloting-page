import Header from "../../../components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen py-2 px-4">
      <Header />
      <main>{children}</main>
    </div>
  );
}
