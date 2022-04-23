import { ResponsiveBar } from "@nivo/bar";

type NivoChartProps = {
  data: {
    brand: string;
    total_score: number;
  }[];
};

const NivoChart = ({ data }: NivoChartProps) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["total_score"]}
      indexBy="brand"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "accent" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "total_score",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={null}
      //   axisLeft={{
      //     tickSize: 5,
      //     tickPadding: 5,
      //     tickRotation: 0,
      //     legend: "brand",
      //     legendPosition: "middle",
      //     legendOffset: -40,
      //   }}
      enableGridX={true}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in brand: " + e.indexValue;
      }}
    />
  );
};

export default NivoChart;
