import { cache } from "react";
import { api } from "@/lib/api";
import type { Paginated, RoomRow } from "@/lib/types";

type Params = Record<string, string | string[] | undefined>;

const STATUSES = ["available", "allocated", "restricted", "utility"];

const first = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v[0] : v;

export function roomQueryString(params: Params) {
  const q = new URLSearchParams();
  const block = first(params.block);
  const floor = first(params.floor);
  const status = first(params.status);
  const search = first(params.search)?.replace(/\D/g, "").slice(0, 10);
  const page = first(params.page);

  if (block && /^\d+$/.test(block)) q.set("block", block);
  if (floor && /^\d+$/.test(floor)) q.set("floor", floor);
  if (status && STATUSES.includes(status)) q.set("status", status);
  if (search) q.set("search", search);
  if (page && /^\d+$/.test(page) && Number(page) > 1) q.set("page", page);

  return q.toString();
}

export const getRooms = cache((query: string) =>
  api<Paginated<RoomRow>>(`/rooms${query ? `?${query}` : ""}`),
);
