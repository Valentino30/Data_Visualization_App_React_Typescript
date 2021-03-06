import { useNavigate } from "react-router-dom";

import Card from "../Card";
import { StyledList } from "./style";
import { runType } from "../../types/run";

type ListProps = {
  listItems: runType[];
};

export default function List({ listItems }: ListProps) {
  const navigate = useNavigate();
  return (
    <StyledList>
      {listItems.map((listItem) => (
        <li key={listItem.id}>
          <Card
            id={listItem.id}
            name={listItem.name}
            brands={listItem.brands}
            tags={listItem.tags}
            date={listItem.date}
            onClick={() => navigate(`${listItem.id}`)}
          />
        </li>
      ))}
    </StyledList>
  );
}
