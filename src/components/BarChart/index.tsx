import Chart from "react-apexcharts";
import { filteredHedgeFunds } from "../../data";

export default function BarChart() {
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

  return <Chart options={options} series={series} type="bar" width="90%" />;
}
