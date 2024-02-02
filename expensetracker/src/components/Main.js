import React, { useState } from "react";
import Balance from "./Balance";
import Buttons from "./Buttons";
import List from "./List";
import BarChart from "./BarChart";

const Main = () => {
  const [listOfExpInc, setlistOfExpInc] = useState([]);

  const handleAddExpense = (newExpense) => {
    setlistOfExpInc([...listOfExpInc, newExpense]);
  };

  const handleAddIncome = (newIncome) => {
    setlistOfExpInc([...listOfExpInc, newIncome]);
  };

  // const expensesData = listOfExpInc.filter((item) => item.type === "expense");
  // const incomesData = listOfExpInc.filter((item) => item.type === "income");

  // const calculateTotalByCategory = (category) => {
  //   // Filtriraj stavke prema odabranoj kategoriji
  //   const filteredItems = expensesAndIncomes.filter(
  //     (item) => item.kategorija === category
  //   );

  //   // Sumiraj iznose za filtrirane stavke
  //   const totalAmount = filteredItems.reduce(
  //     (sum, item) => sum + parseFloat(item.iznos),
  //     0
  //   );

  //   return totalAmount;
  // };

  return (
    <div className="mejn">
      <Balance />
      <Buttons onAddExpense={handleAddExpense} onAddIncome={handleAddIncome} />
      <div className="glavnideo">
        <List expensesAndIncomes={listOfExpInc} />
        <BarChart />
      </div>
    </div>
  );
};

export default Main;
