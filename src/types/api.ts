import { runType } from "./run";

export type getRunResponse = {
  success: boolean;
  data: runType;
};

export type getRunsResponse = {
  success: boolean;
  data: runType[];
};
