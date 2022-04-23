import { mockRuns } from "../data";

export const getRun = (runId: string) =>
  mockRuns.find((run) => run.id === runId);
