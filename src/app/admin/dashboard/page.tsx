import HostelOverview from "../../../../components/hostel-overview/HostelOverview";

export default function AdminDashboard() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Welcome Back, Mrs Adeyemi</h2>
        <p>Here`s what`s happening with the hostel allocation.</p>
      </div>
      <HostelOverview />
    </section>
  );
}
