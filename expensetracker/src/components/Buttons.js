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
    visinaTroska: "",
    vremeTroska: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseData({
      nazivTroska: "",
      kategorija: "hrana",
      visinaTroska: "",
      vremeTroska: "",
    });
    // Ovde možete dodati logiku za slanje podataka na server ili lokalno skladište
    console.log("Podaci o trosku:", expenseData);
  };

  return (
    <div>
      <div className="balancebuttons">
        <button className="buttonb" onClick={promeniIncomeFlag}>
          <FaPlus className="plusincex"></FaPlus>Add Income
        </button>
        <button className="buttonb" onClick={promeniExpenseFlag}>
          <FaPlus className="plusincex"></FaPlus>Add Expense
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

            <label htmlFor="kategorija">Kategorija:</label>
            <select
              id="kategorija"
              name="kategorija"
              value={expenseData.kategorija}
              onChange={handleChange}
              required
            >
              <option value="hrana">Hrana</option>
              <option value="stan">Stan</option>
              <option value="transport">Transport</option>
              <option value="zabava">Zabava</option>
              <option value="zdravlje">Zdravlje</option>
              <option value="ostalo">Ostalo</option>
            </select>

            <label htmlFor="visinaTroska">Visina troska:</label>
            <input
              type="number"
              id="visinaTroska"
              name="visinaTroska"
              value={expenseData.visinaTroska}
              onChange={handleChange}
              min="0"
              required
            />

            <label htmlFor="vremeTroska">Vreme troska:</label>
            <input
              type="datetime-local"
              id="vremeTroska"
              name="vremeTroska"
              value={expenseData.vremeTroska}
              onChange={handleChange}
              required
            />

            <button type="submit">Dodaj trosak</button>
          </form>
        </div>
      )}
      {expenseFlag && (
        <div className="expense-form-container">
          <form onSubmit={handleSubmit} className="expense-form">
            <label htmlFor="nazivTroska">Naziv troska:</label>
            <input
              type="text"
              id="nazivTroska"
              name="nazivTroska"
              value={expenseData.nazivTroska}
              onChange={handleChange}
              required
            />

            <label htmlFor="kategorija">Kategorija:</label>
            <select
              id="kategorija"
              name="kategorija"
              value={expenseData.kategorija}
              onChange={handleChange}
              required
            >
              <option value="hrana">Hrana</option>
              <option value="stan">Stan</option>
              <option value="transport">Transport</option>
              <option value="zabava">Zabava</option>
              <option value="zdravlje">Zdravlje</option>
              <option value="ostalo">Ostalo</option>
            </select>

            <label htmlFor="visinaTroska">Visina troska:</label>
            <input
              type="number"
              id="visinaTroska"
              name="visinaTroska"
              value={expenseData.visinaTroska}
              onChange={handleChange}
              min="0"
              required
            />

            <label htmlFor="vremeTroska">Vreme troska:</label>
            <input
              type="datetime-local"
              id="vremeTroska"
              name="vremeTroska"
              value={expenseData.vremeTroska}
              onChange={handleChange}
              required
            />

            <button type="submit">Dodaj trosak</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Buttons;
