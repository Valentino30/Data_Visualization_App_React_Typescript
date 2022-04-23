import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRun } from "../../utils";
import Card from "../../components/Card";

type runType = {
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

export default function Run() {
  const [run, setRun] = useState({} as runType);
  const { runId } = useParams();

  useEffect(() => {
    const currentRun = runId && getRun(runId);
    if (currentRun) {
      setRun(currentRun);
    }
  }, [runId]);

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>
        {run.id && (
          <Card
            id={run.id}
            name={run.name}
            brands={run.brands}
            tags={run.tags}
            date={run.date}
          />
        )}
      </li>
    </ul>
  );
}
