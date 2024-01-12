import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ chartData }) => {
  // change key name of chart data to display it on tooltip.
  const changeChartDataKeyName = (name) => {
    let changedName = "";

    if (name === "employer") {
      changedName = "Employer";
    } else if (name === "employee") {
      changedName = "Employee";
    } else if (name === "totalInt") {
      changedName = "Total Interest";
    } else {
      changedName = "Invalid Name";
    }

    return changedName;
  };

  return (
    <ResponsiveContainer className="!h-[250px] md:!h-[280px] lg:!h-[200px]">
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid
          vertical={false}
          stroke="#e4e4e4"
          strokeDasharray="4 4"
        />

        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tick={{ fontWeight: "600", fill: "#2d2828", dy: 12 }}
          interval={1}
        />

        <YAxis
          dataKey="amount"
          axisLine={false}
          tickLine={false}
          tickCount={4}
          tickFormatter={(value) => `$${value}`}
          tick={{ fontWeight: "600", fill: "#2d2828", dx: -5 }}
        />

        <Tooltip
          contentStyle={{ fontWeight: "400" }}
          cursor={{ fill: "#ebeeff" }}
          formatter={(value, name, props) => [
            `$ ${value}`,
            changeChartDataKeyName(name),
          ]}
          labelFormatter={(label) => `Time : ${label} Years`}
        />

        <Bar dataKey="employer" stackId="a" fill="#1434A4" barSize={22} />
        <Bar dataKey="employee" stackId="a" fill="#3F00FF" barSize={22} />
        <Bar dataKey="totalInt" stackId="a" fill="#89b2ff" barSize={22} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
