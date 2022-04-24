import { useEffect } from "react";

import { useRun } from "../../hooks/run";

import List from "../../components/List";
import { StyledContainer, StyledHeader } from "./styles";

function RunsList() {
  const { getRuns, loading, runs } = useRun();

  useEffect(() => {
    getRuns();
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
      {runs && (
        <>
          <StyledHeader>Runs List</StyledHeader>
          <List listItems={runs} />
        </>
      )}
    </StyledContainer>
  );
}

export default RunsList;
