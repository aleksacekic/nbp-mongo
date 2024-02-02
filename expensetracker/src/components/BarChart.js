import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, chartType }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const categories = Object.keys(data);
    const values = Object.values(data);

    const backgroundColors = categories.map((category) => getCategoryColor(category));

    setChartData({
      labels: categories,
      datasets: [
        {
          label: `Total ${chartType}`,
          data: values,
          backgroundColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    });
  }, [data, chartType]);

  const getCategoryColor = (category) => {
    // Postavite boje prema vašim zahtevima
    const colorMap = {
      Food: "rgba(255, 99, 132, 0.6)",
      Shopping: "rgba(54, 162, 235, 0.6)",
      Transportation: "rgba(255, 206, 86, 0.6)",
      Fun: "rgba(75, 192, 192, 0.6)",
      Health: "rgba(153, 102, 255, 0.6)",
      OtherExpense: "rgba(255, 159, 64, 0.6)",
      Salary: "rgba(75, 192, 192, 0.6)",
      Loan: "rgba(255, 206, 86, 0.6)",
      Gift: "rgba(153, 102, 255, 0.6)",
      Gamble: "rgba(255, 99, 132, 0.6)",
      OtherIncome: "rgba(255, 159, 64, 0.6)",
    };

    return colorMap[category];
  };

  return (
    <div>
      <h2>{`Total ${chartType} by Category`}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
