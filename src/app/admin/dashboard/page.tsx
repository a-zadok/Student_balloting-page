import StatCard from "../../../../components/ui/StatCard";
import HostelOverview from "../../../../features/admin/components/hostel-overview/HostelOverview";

export default function AdminDashboard() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-bold">
          Welcome Back, Mrs Adeyemi
        </h2>
        <p className="md:text-lg">
          Here&apos;s what&apos;s happening with the hostel allocation.
        </p>
      </div>
      <div className="md:hidden flex flex-col gap-2">
        <StatCard value={640} label="Total number of rooms" />
        <StatCard value={428} label="Total number of allocated rooms" />
        <StatCard value={212} label="Total number of allocated rooms" />
      </div>

      <HostelOverview />
    </section>
  );
}
