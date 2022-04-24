import { mockRuns } from "../data";
import { getRunResponse, getRunsResponse } from "../types/api";

export const getRunsRequest = async () => {
  try {
    const response = await new Promise<getRunsResponse>((resolve) =>
      setTimeout(
        () =>
          resolve({
            success: true,
            data: mockRuns,
          }),
        1000
      )
    );
    return response.data;
  } catch (error) {
    alert("Oops! Something went wrong!");
  }
};

export const getRunRequest = async (runId: string) => {
  try {
    const run = mockRuns.find((run) => run.id === runId);
    if (run) {
      const response = await new Promise<getRunResponse>((resolve) =>
        setTimeout(() => {
          resolve({
            success: true,
            data: run,
          });
        }, 1000)
      );
      return response.data;
    }
  } catch (error) {
    alert("Oops! Something went wrong!");
  }
};
