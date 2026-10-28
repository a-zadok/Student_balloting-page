import StatCard from "../../../../components/ui/StatCard";
import BlockOverview from "../../../../features/admin/components/BlockOverview";
import HostelOverview from "../../../../features/admin/components/hostel-overview/HostelOverview";

export default function AdminDashboard() {
  return (
    <section className="flex min-w-0 gap-8 py-8">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">
            Welcome Back, Mrs Adeyemi
          </h2>
          <p className="md:text-lg">
            Here&apos;s what&apos;s happening with the hostel allocation.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:hidden">
          <StatCard value={640} label="Total number of rooms" />
          <StatCard value={428} label="Total number of allocated rooms" />
          <StatCard value={212} label="Total number of available rooms" />
        </div>

        <HostelOverview />
      </div>

      <aside className="hidden w-80 shrink-0 flex-col gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <StatCard value={640} label="Total number of rooms" />
          <StatCard value={428} label="Total number of allocated rooms" />
          <StatCard value={212} label="Total number of available rooms" />
        </div>

        <BlockOverview />
      </aside>
    </section>
  );
}
