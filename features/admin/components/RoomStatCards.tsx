import { cache } from "react";
import StatCard from "../../../components/ui/StatCard";
import { api } from "@/lib/api";
import type { RoomStats } from "@/lib/types";

const getRoomStats = cache(() => api<RoomStats>("/stats/rooms"));

export default async function RoomStatCards() {
  const stats = await getRoomStats();

  return (
    <>
      <StatCard value={stats.total_rooms} label="Total number of rooms" />
      <StatCard
        value={stats.allocated_rooms}
        label="Total number of allocated rooms"
      />
      <StatCard
        value={stats.available_rooms}
        label="Total number of available rooms"
      />
    </>
  );
}
