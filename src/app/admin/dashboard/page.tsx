import { Suspense } from "react";
import StatCardSkeleton from "../../../../components/ui/StatCardSkeleton";
import BlockOverview from "../../../../features/admin/components/BlockOverview";
import HostelOverview from "../../../../features/admin/components/HostelOverview";
import HostelOverviewSkeleton from "../../../../features/admin/components/HostelOverviewSkeleton";
import RoomStatCards from "../../../../features/admin/components/RoomStatCards";
import { requireRole } from "@/lib/session";

export const instant = false;

function CardsFallback() {
  return (
    <>
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
    </>
  );
}

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ block?: string }>;
}) {
  const me = await requireRole("admin");
  const { block } = await searchParams;
  const requested = Number(block) || undefined;

  return (
    <section className="flex min-w-0 gap-8 py-8">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold md:text-2xl">
            Welcome Back, {me.admin?.first_name} {me.admin?.last_name}
          </h2>
          <p className="md:text-lg">
            Here&apos;s what&apos;s happening with the hostel allocation.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:hidden">
          <Suspense fallback={<CardsFallback />}>
            <RoomStatCards />
          </Suspense>
        </div>

        <Suspense fallback={<HostelOverviewSkeleton />}>
          <HostelOverview requested={requested} />
        </Suspense>
      </div>

      <aside className="hidden w-80 shrink-0 flex-col gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <Suspense fallback={<CardsFallback />}>
            <RoomStatCards />
          </Suspense>
        </div>

        <BlockOverview />
      </aside>
    </section>
  );
}
