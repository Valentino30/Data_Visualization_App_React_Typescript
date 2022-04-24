import {
  StyledCard,
  StyledCardTag,
  StyledCardList,
  StyledCardTitle,
  StyledContainer,
  StyledParagraph,
  StyledCardListItem,
} from "./styles";
import { runType } from "../../types/run";

type CardProps = runType & {
  onClick?: () => void;
};

export default function Card({
  id,
  name,
  tags,
  date,
  brands,
  onClick,
}: CardProps) {
  const readableDate = new Date(date).toDateString();

  return (
    <StyledCard id={id} onClick={onClick}>
      <StyledCardTitle>{name}</StyledCardTitle>
      <StyledContainer>
        {brands.map((brand) => (
          <StyledCardTag key={brand}>{brand}</StyledCardTag>
        ))}
      </StyledContainer>
      <StyledCardList>
        {tags.map((tag) => (
          <StyledCardListItem key={tag.region}>
            {`${tag.region}: ${tag.profile}: 
            ${tag.keywords.map((keyword) => ` ${keyword}`)}`}
          </StyledCardListItem>
        ))}
      </StyledCardList>
      <StyledParagraph>{readableDate}</StyledParagraph>
    </StyledCard>
  );
}
