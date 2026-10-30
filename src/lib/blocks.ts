import { cache } from "react";
import { api } from "@/lib/api";
import type { BlockNumber } from "@/lib/types";

export const getBlockNumbers = cache(() =>
  api<BlockNumber[]>("/blocks/numbers"),
);
