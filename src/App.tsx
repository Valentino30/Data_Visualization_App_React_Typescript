import { mockRuns } from "./data";
import List from "./components/List";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ color: "white", margin: 10 }}>Dashboard</h1>
      <List listItems={mockRuns} />
    </div>
  );
}

export default App;
