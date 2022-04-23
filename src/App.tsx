import { Routes, Route, Navigate } from "react-router-dom";

import RunsList from "./pages/RunsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RunsList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
