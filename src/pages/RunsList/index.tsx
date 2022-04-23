import { mockRuns } from "../../data";

import List from "../../components/List";
import { StyledContainer, StyledHeader } from "./styles";

function RunsList() {
  return (
    <StyledContainer>
      <StyledHeader>Runs List</StyledHeader>
      <List listItems={mockRuns} />
    </StyledContainer>
  );
}

export default RunsList;
