import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getRun } from "../../utils";
import { StyledContainer, StyledHeader } from "../RunsList/styles";

import Card from "../../components/Card";
import { StyledCard } from "../../components/Card/styles";
import { StyledList } from "../../components/List/style";

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
    <StyledContainer>
      <StyledHeader>{`Run: ${runId}`}</StyledHeader>
      <StyledList>
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
          <StyledCard onClick={() => navigate("chart")}>
            <h3>RI Comparison Bar Chart</h3>
          </StyledCard>
        </li>
      </StyledList>
    </StyledContainer>
  );
}
