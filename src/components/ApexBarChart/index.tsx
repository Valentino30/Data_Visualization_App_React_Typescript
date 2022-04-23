import Chart from "react-apexcharts";
import { filteredHedgeFunds } from "../../data";

export default function ApexBarChart() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: filteredHedgeFunds.map((hedgeFund) => hedgeFund.brand),
    },
  };

  const series = [
    {
      name: "series-1",
      data: filteredHedgeFunds.map((hedgeFund) => hedgeFund.total_score),
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="800" />;
    </div>
  );
}
