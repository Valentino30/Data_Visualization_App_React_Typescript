import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRun } from "../../hooks/run";
import { StyledContainer, StyledHeader } from "../RunsList/styles";

import Card from "../../components/Card";
import { StyledList } from "../../components/List/style";
import { StyledCard } from "../../components/Card/styles";

export default function Run() {
  const { getRun, loading, run } = useRun();
  const navigate = useNavigate();
  const { runId } = useParams();

  useEffect(() => {
    if (runId) getRun(runId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <StyledContainer>
        <StyledHeader>Fetching data...</StyledHeader>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      {run && (
        <>
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
        </>
      )}
    </StyledContainer>
  );
}
