import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRun } from "../../hooks/run";
import { StyledContainer, StyledHeader } from "./styles";

import Card from "../../components/Card";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { StyledList } from "../../components/List/style";
import { StyledCard } from "../../components/Card/styles";

export default function Run() {
  const { getRun, loading, error, run } = useRun();
  const navigate = useNavigate();
  const { runId } = useParams();

  useEffect(() => {
    if (runId) getRun(runId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <StyledContainer>
      {run?.id && (
        <>
          <StyledHeader>{`Run: ${runId}`}</StyledHeader>
          <StyledList>
            <li>
              <Card
                id={run.id}
                name={run.name}
                brands={run.brands}
                tags={run.tags}
                date={run.date}
              />
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
