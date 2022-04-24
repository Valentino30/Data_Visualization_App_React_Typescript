import { lightTextBlue1 } from "../../styles";
import { StyledContainer, StyledHeader, StyledParagraph } from "./styles";

const Error = () => (
  <StyledContainer>
    <StyledHeader>Could not fetch data.</StyledHeader>
    <StyledParagraph color={lightTextBlue1}>
      Try refreshing the page.
    </StyledParagraph>
  </StyledContainer>
);

export default Error;
