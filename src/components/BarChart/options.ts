import { lightTextBlue1 } from "../../styles";
import { filteredHedgeFunds } from "../../data";

export const options = {
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
    labels: {
      style: {
        colors: [lightTextBlue1],
        fontSize: "15px",
        fontWeight: 800,
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  dataLabels: {
    style: {
      fontSize: "15px",
      fontWeight: "bold",
      colors: [lightTextBlue1],
    },
  },
};
