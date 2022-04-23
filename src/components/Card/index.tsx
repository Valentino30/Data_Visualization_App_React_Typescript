type CardProps = {
  id: string;
  name: string;
  brands: string[];
  tags: {
    language: string;
    profile: string;
    keywords: string[];
  }[];
  date: string;
};

export default function Card({ id, name, brands, tags, date }: CardProps) {
  const readableDate = new Date(date).toDateString();
  return (
    <div
      id={id}
      style={{
        backgroundColor: "lightgray",
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
      }}
    >
      <h3 style={{ margin: "10px 0px" }}>{name}</h3>
      <div style={{ display: "flex", marginBottom: 10 }}>
        {brands.map((brand) => (
          <div
            style={{
              marginRight: 5,
              backgroundColor: "steelblue",
              borderRadius: 10,
              padding: 5,
            }}
          >
            {brand}
          </div>
        ))}
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tags.map((tag) => (
          <li
            style={{
              marginBottom: 10,
              border: "1px solid darkgray",
              borderRadius: 5,
              width: "fit-content",
              padding: 4,
            }}
          >
            {`${tag.language}: ${tag.profile}: 
            ${tag.keywords.map((keyword) => ` ${keyword}`)}`}
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "right", margin: 10 }}>{readableDate}</p>
    </div>
  );
}