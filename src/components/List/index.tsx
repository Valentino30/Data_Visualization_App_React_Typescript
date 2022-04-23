import { useNavigate } from "react-router-dom";

import Card from "../Card";

type ListProps = {
  listItems: {
    id: string;
    name: string;
    brands: string[];
    tags: {
      region: string;
      profile: string;
      keywords: string[];
    }[];
    date: string;
  }[];
};

export default function List({ listItems }: ListProps) {
  const navigate = useNavigate();
  return (
    <ul style={{ listStyleType: "none", padding: 0, width: "50%", margin: 0 }}>
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
    </ul>
  );
}
