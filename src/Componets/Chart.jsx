import { data } from "autoprefixer";
import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  Legend,
  Bar,
} from "recharts";

const assignmentMarks = [
  {
    id: 1,
    name: "assignment-1",
    marks: 57,
    outOf: 60,
  },
  {
    id: 2,
    name: "assignment-2",
    marks: 58,
    outOf: 60,
  },
  {
    id: 3,
    name: "assignment-3",
    marks: 58,
    outOf: 60,
  },
  {
    id: 4,
    name: "assignment-4",
    marks: 55,
    outOf: 60,
  },
  {
    id: 5,
    name: "assignment-5",
    marks: 58,
    outOf: 60,
  },
  {
    id: 6,
    name: "assignment-6",
    marks: 58,
    outOf: 60,
  },
  {
    id: 7,
    name: "assignment-7",
    marks: 60,
    outOf: 60,
  },
  {
    id: 8,
    name: "assignment-8",
    marks: 50,
    outOf: 60,
  },
];
console.log(assignmentMarks);
const Chart = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold bg-indigo-50 pt-8 pb-12 text-center">
        Make Rechart with Assignment marks
      </h1>

      <ComposedChart
        className="mx-auto py-12"
        width={900}
        height={400}
        data={assignmentMarks}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="outOf" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="marks" stoke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Chart;
