import { filteredHedgeFunds } from "../../data";

export const series = [
  {
    name: "series-1",
    data: filteredHedgeFunds.map((hedgeFund) => hedgeFund.total_score),
  },
];
