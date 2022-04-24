import { toast } from "react-toastify";
import { createContext, useContext, useState } from "react";

import { RunContextType, runType } from "../types/run";
import { getRunRequest, getRunsRequest } from "../api/run";

const RunContext = createContext({} as RunContextType);

export const useRun = () => {
  return useContext(RunContext);
};

export const RunProvider = ({ children }: { children: React.ReactNode }) => {
  const [run, setRun] = useState<runType | null>({} as runType);
  const [runs, setRuns] = useState<runType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getRuns = async () => {
    setLoading(true);
    try {
      const data = await getRunsRequest();
      if (data) {
        setRuns(data);
      }
      setLoading(false);
    } catch (error) {
      setRuns([]);
      setError(true);
      setLoading(false);
      toast.error("Oops! Something went wrong!");
    }
  };

  const getRun = async (runId: string) => {
    setLoading(true);
    try {
      const data = await getRunRequest(runId);
      if (data) setRun(data);
      setLoading(false);
    } catch (error) {
      setRun(null);
      setError(true);
      setLoading(false);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <RunContext.Provider value={{ getRuns, getRun, loading, error, runs, run }}>
      {children}
    </RunContext.Provider>
  );
};
