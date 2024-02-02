import React, { useState } from "react";
import Balance from "./Balance";
import Buttons from "./Buttons";
import List from "./List";


const Main = () => {

  const [listOfExpInc, setlistOfExpInc] = useState([]);

  const handleAddExpense = (newExpense) => {
    setlistOfExpInc([...listOfExpInc, newExpense]);
  };

  const handleAddIncome = (newIncome) => {
    setlistOfExpInc([...listOfExpInc, newIncome]);
  };

  return (
    <div className="mejn">
      <Balance />
      <Buttons onAddExpense={handleAddExpense} onAddIncome={handleAddIncome}/>
      <List expensesAndIncomes={listOfExpInc}/>
    </div>
  );
};

export default Main;
