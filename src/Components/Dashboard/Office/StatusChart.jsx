import React from "react";
import { Cell, Pie, PieChart, Sector } from "recharts";

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 7}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const StatusChart = () => {
  const data = [
    { name: "Open", value: 14 },
    { name: "Over due", value: 2 },
    { name: "Unassigned", value: 5 },
    { name: "On-hold", value: 0 },
  ];

  const COLORS = ["#00CD66", "#FF8B48", "#385F9C", "#FFC700"];
  const activeIndex = data.findIndex((item) => item.name === "Open");

  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={400}
          cy={200}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          labelLine={null}
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default StatusChart;
