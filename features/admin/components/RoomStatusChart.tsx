"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface RoomStatusChartProps {
  allocated: number;
  available: number;
  restricted: number;
  utility: number;
}

export default function RoomStatusChart({
  allocated,
  available,
  restricted,
  utility,
}: RoomStatusChartProps) {
  return (
    <Doughnut
      data={{
        labels: ["Allocated", "Available", "Restricted", "utility"],
        datasets: [
          {
            label: "Rooms",
            data: [allocated, available, restricted, utility],
            backgroundColor: [
              "hsl(220, 59%, 15%)",
              "hsl(108, 70%, 33%)",
              "hsl(0, 0%, 85%)",
              "hsl(270, 45%, 55%)",
            ],
            borderColor: [
              "hsl(220, 59%, 15%)",
              "hsl(108, 70%, 33%)",
              "hsl(0, 0%, 85%)",
              "hsl(270, 45%, 55%)",
            ],
          },
        ],
      }}
    />
  );
}
