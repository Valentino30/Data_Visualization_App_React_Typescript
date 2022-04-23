import { Routes, Route, Navigate } from "react-router-dom";

import Run from "./pages/Run";
import RunsList from "./pages/RunsList";

function App() {
  return (
    <Routes>
      <Route path="runs" element={<RunsList />} />
      <Route path="runs/:runId" element={<Run />} />
      <Route path="*" element={<Navigate to="runs" />} />
    </Routes>
  );
}

export default App;
