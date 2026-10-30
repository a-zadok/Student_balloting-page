import { cache } from "react";
import { BlockSummary } from "./types";
import { api } from "./api";

export const getBlockSummary = cache((blockNumber: number) =>
  api<BlockSummary>(`/blocks/${blockNumber}/floors`),
);
