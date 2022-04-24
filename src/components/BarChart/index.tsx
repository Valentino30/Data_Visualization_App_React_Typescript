import Chart from "react-apexcharts";

import { series } from "./series";
import { options } from "./options";

export default function BarChart() {
  return <Chart options={options} series={series} type="bar" width="90%" />;
}
