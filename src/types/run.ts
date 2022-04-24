export type runType = {
  id: string;
  name: string;
  brands: string[];
  tags: {
    region: string;
    profile: string;
    keywords: string[];
  }[];
  date: string;
};

export type RunContextType = {
  getRun: (runId: string) => void;
  getRuns: () => void;
  runs: runType[] | [];
  run: runType | null;
  loading: boolean;
  error: boolean;
};
