import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
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
      <li>
        <div
          onClick={() => navigate("chart")}
          style={{
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <h3>RI Comparison Bar Chart</h3>
        </div>
      </li>
      ;
    </ul>
  );
}
