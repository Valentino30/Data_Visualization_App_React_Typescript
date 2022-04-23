import styled from "styled-components";

import {
  lightTextGray1,
  darkBackgroundBlue1,
  lightBackgroundBlue1,
  lightBackgroundBlue2,
  lightTextBlue1,
} from "../../styles";

export const StyledCard = styled.div`
  background-color: ${lightBackgroundBlue1};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 30px;
`;

export const StyledCardTitle = styled.h3`
  margin-bottom: 10px;
  margin-top: 0px;
`;

export const StyledContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const StyledCardTag = styled.div`
  background-color: ${darkBackgroundBlue1};
  color: ${lightTextBlue1};
  border-radius: 10px;
  margin-right: 5px;
  padding: 5px 10px;
`;

export const StyledCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

export const StyledCardListItem = styled.li`
  background-color: ${lightBackgroundBlue2};
  margin-bottom: 10px;
  border-radius: 5px;
  width: fit-content;
  padding: 4px;
`;

export const StyledParagraph = styled.p`
  color: ${lightTextGray1};
  text-align: right;
  margin: 0px;
`;
