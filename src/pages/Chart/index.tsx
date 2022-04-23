import NivoChart from "../../components/NivoChart";

import { filteredHedgeFunds } from "../../data";

export default function Chart() {
  return (
    <div style={{ height: 400 }}>
      <NivoChart data={filteredHedgeFunds} />
    </div>
  );
}
