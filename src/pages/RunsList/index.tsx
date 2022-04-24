import { useEffect } from "react";

import { useRun } from "../../hooks/run";
import { StyledContainer, StyledHeader } from "./styles";

import List from "../../components/List";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function RunsList() {
  const { getRuns, loading, error, runs } = useRun();

  useEffect(() => {
    getRuns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <StyledContainer>
      {runs.length !== 0 && (
        <>
          <StyledHeader>Runs List</StyledHeader>
          <List listItems={runs} />
        </>
      )}
    </StyledContainer>
  );
}

export default RunsList;
