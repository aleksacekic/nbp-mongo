import React, { useState } from "react";
// import { FaEuroSign } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";

const Buttons = () => {
  const [incomeFlag, setIncomeFlag] = useState(false);
  const [expenseFlag, setExpenseFlag] = useState(false);

  const promeniIncomeFlag = () => {
    setIncomeFlag(!incomeFlag);
    setExpenseFlag(false);
  };

  const promeniExpenseFlag = () => {
    setExpenseFlag(!expenseFlag);
    setIncomeFlag(false);
  };

  const [expenseData, setExpenseData] = useState({
    nazivTroska: "",
    kategorija: "hrana",
    iznos: "",
    vremeTroska: "",
  });

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseData({
      nazivTroska: "",
      kategorija: "hrana",
      iznos: "",
      vremeTroska: "",
    });
    // Ovde možete dodati logiku za slanje podataka na server ili lokalno skladište
    console.log("Podaci o trosku:", expenseData);
  }; 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="balancebuttons">
        <button className="buttonb" onClick={promeniExpenseFlag}>
          <FaPlus className="plusincex"></FaPlus>Add Expense
        </button>
        <button className="buttonb" onClick={promeniIncomeFlag}>
          <FaPlus className="plusincex"></FaPlus>Add Income
        </button>
      </div>
      {incomeFlag && (
        <div className="expense-form-container">
          <form onSubmit={handleSubmit} className="income-form">
            <label htmlFor="nazivTroska">Description of income:</label>
            <input
              type="text"
              id="nazivTroska"
              name="nazivTroska"
              value={expenseData.nazivTroska}
              onChange={handleChange}
              required
            />

            <label htmlFor="kategorija">Category:</label>
            <select
              id="kategorija"
              name="kategorija"
              value={expenseData.kategorija}
              onChange={handleChange}
              required
            >
              <option value="salary">Salary</option>
              <option value="gift">Gift</option>
              <option value="loan">Loan</option>
              <option value="gambling">Gambling</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="iznos">Amount:</label>
            <input
              type="number"
              id="iznos"
              name="iznos"
              value={expenseData.iznos}
              onChange={handleChange}
              min="0"
              required
            />

            <label htmlFor="vremeTroska">Time:</label>
            <input
              type="datetime-local"
              id="vremeTroska"
              name="vremeTroska"
              value={expenseData.vremeTroska}
              onChange={handleChange}
              required
            />

            <button type="submit">Add income</button>
          </form>
        </div>
      )}
      {expenseFlag && (
        <div className="expense-form-container">
          <form onSubmit={handleSubmit} className="expense-form">
            <label htmlFor="nazivTroska">Description of expense:</label>
            <input
              type="text"
              id="nazivTroska"
              name="nazivTroska"
              value={expenseData.nazivTroska}
              onChange={handleChange}
              required
            />

            <label htmlFor="kategorija">Category:</label>
            <select
              id="kategorija"
              name="kategorija"
              value={expenseData.kategorija}
              onChange={handleChange}
              required
            >
              <option value="hrana">Food</option>
              {/* <option value="stan">Rental</option> */}
              <option value="kupovina">Shopping</option>
              <option value="transport">Transportation</option>
              <option value="zabava">Fun</option>
              <option value="zdravlje">Health</option>
              <option value="ostalo">Other</option>
            </select>

            <label htmlFor="iznos">Amount:</label>
            <input
              type="number"
              id="iznos"
              name="iznos"
              value={expenseData.iznos}
              onChange={handleChange}
              min="0"
              required
            />

            <label htmlFor="vremeTroska">Time:</label>
            <input
              type="datetime-local"
              id="vremeTroska"
              name="vremeTroska"
              value={expenseData.vremeTroska}
              onChange={handleChange}
              required
            />

            <button type="submit">Add expense</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Buttons;
