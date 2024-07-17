"use client";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
  const data = {
    labels: ["Cash", "Bank", "Investment"],
    datasets: [
      {
        label: "Banks",
        data: [100, 200, 300],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return <Doughnut 
    data={data} 
    options={{
      cutout: "60%",
      plugins: {
        legend: {
          display: false,
        },
      },
    }}
  />;
};

export default DoughnutChart;
