import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = () => {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["Food", "Transportation", "Shopping", "Fun", "Health", "Other"],
      values: [50, 30, 70, 40, 60, 20],
      label: "Expenses",
    };

    if (chart) {
      chart.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const colors = [
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
    ];

    const datasets = data.labels.map((label, index) => ({
      label,
      data: [data.values[index]],
      backgroundColor: colors[index],
      borderColor: colors[index],
      borderWidth: 1,
    }));

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [""],
        datasets,
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setChart(newChart);

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return (
    <div className="barchart">
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default BarChart;
