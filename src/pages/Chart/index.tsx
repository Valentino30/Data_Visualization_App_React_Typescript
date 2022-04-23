import ApexBarChart from "../../components/ApexBarChart";
import NivoChart from "../../components/NivoChart";

export default function Chart() {
  return (
    <div style={{ height: 400 }}>
      <NivoChart />
      <ApexBarChart />
    </div>
  );
}
