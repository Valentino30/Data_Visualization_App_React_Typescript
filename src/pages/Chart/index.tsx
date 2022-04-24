import BarChart from "../../components/BarChart";
import { StyledContainer, StyledHeader } from "./styles";

export default function Chart() {
  return (
    <div>
      <StyledContainer>
        <StyledHeader>RI Comparison Bar Chart</StyledHeader>
      </StyledContainer>
      <BarChart />
    </div>
  );
}
