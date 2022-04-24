import { mockRuns } from "../data";
import { getRunResponse, getRunsResponse } from "../types/api";

export const getRunsRequest = async () => {
  const response = await new Promise<getRunsResponse>((resolve, _) =>
    setTimeout(() => {
      // _();
      resolve({
        success: true,
        data: mockRuns,
      });
    }, 1000)
  );
  return response.data;
};

export const getRunRequest = async (runId: string) => {
  const run = mockRuns.find((run) => run.id === runId);
  if (run) {
    const response = await new Promise<getRunResponse>((resolve, _) =>
      setTimeout(() => {
        // _();
        resolve({
          success: true,
          data: run,
        });
      }, 1000)
    );
    return response.data;
  }
};
