import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { MdCasino } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";

const List = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const expensesAndIncomes = [
    {
      nazivTroska: "Porodicna pizza",
      kategorija: "Food",
      iznos: "50",
      vremeTroska: "12:30",
    },
    {
      nazivTroska: "Plava majica",
      kategorija: "Shopping",
      iznos: "100",
      vremeTroska: "14:45",
    },
    {
      nazivTroska: "10l goriva",
      kategorija: "Transportation",
      iznos: "30",
      vremeTroska: "09:15",
    },
    {
      nazivTroska: "Plata za januar",
      kategorija: "Salary",
      iznos: "2000",
      vremeTroska: "08:00",
    },
    {
      nazivTroska: "Pozajmica od Alekse",
      kategorija: "Loan",
      iznos: "500",
      vremeTroska: "18:45",
    },
    {
      nazivTroska: "Laki siks 1,9,17,24,33,48",
      kategorija: "Gambling",
      iznos: "50",
      vremeTroska: "20:00",
    },
  ];

  return (
    <div>
      <div className="radio-button-group">
        <label
          className={`radio-button ${selectedOption === "all" && "selected"}`}
        >
          <input
            type="radio"
            name="expenseType"
            value="all"
            checked={selectedOption === "all"}
            onChange={() => handleOptionChange("all")}
          />
          All
        </label>
        <label
          className={`radio-button ${
            selectedOption === "expense" && "selected"
          }`}
        >
          <input
            type="radio"
            name="expenseType"
            value="expense"
            checked={selectedOption === "expense"}
            onChange={() => handleOptionChange("expense")}
          />
          Expense
        </label>
        <label
          className={`radio-button ${
            selectedOption === "income" && "selected"
          }`}
        >
          <input
            type="radio"
            name="expenseType"
            value="income"
            checked={selectedOption === "income"}
            onChange={() => handleOptionChange("income")}
          />
          Income
        </label>
      </div>
      <div className="list">
        {expensesAndIncomes.map((item, index) => (
          <div key={index} className="item">
            <div className={`itemicon ${item.kategorija}`}>
              {item.kategorija === "Shopping" && <FaShoppingCart />}
              {item.kategorija === "Transportation" && <FaCar />}
              {item.kategorija === "Fun" && <IoGameController />}
              {item.kategorija === "Health" && <MdHealthAndSafety />}
              {item.kategorija === "Other1" && <BsThreeDots />}
              {item.kategorija === "Other2" && <BsThreeDots />}
              {item.kategorija === "Salary" && <FaMoneyBillAlt />}
              {item.kategorija === "Loan" && <MdVolunteerActivism />}
              {item.kategorija === "Gift" && <FaGift />}
              {item.kategorija === "Gambling" && <MdCasino />}
              {item.kategorija === "Food" && <MdFastfood />}
            </div>
            <div className="itemright">
              <div className="itemright1">
                <p className="itemright2 naslov">{item.kategorija}</p>
                <p className={item.kategorija === "Salary" || item.kategorija === "Gift" || item.kategorija === "Loan" || item.kategorija === "Other2" ? "itemright3 pareplus" : "itemright3 pareminus"}>
              {item.kategorija === "Salary" || item.kategorija === "Gift" || item.kategorija === "Loan" || item.kategorija === "Other2" ? "+" : "-"}
              €{item.iznos}
            </p>
              </div>
              <div className="itemright1">
                <p className="itemright2 opis">{item.nazivTroska}</p>
                <p className="itemright3 opis">{item.vremeTroska}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

/*

    <div className="list">
        <div className="item">
          <div className="itemicon fastfood">
            <MdFastfood />
          </div>
          <div className="itemright">
            <div className="itemright1">
              <div className="itemright2 naslov">Food</div>
              <div className="itemright3 pare">- €15</div>
            </div>
            <div className="itemright1">
              <div className="itemright2 opis">Short description of my activity.</div>
              <div className="itemright3 opis">22:07</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemicon shopping">
            <FaShoppingCart />
          </div>
        </div>
        <div className="item">
          <div className="itemicon car">
            <FaCar />
          </div>
        </div>
        <div className="item">
          <div className="itemicon fun">
            <IoGameController />
          </div>
        </div>
        <div className="item">
          <div className="itemicon health">
            <MdHealthAndSafety />
          </div>
        </div>
        <div className="item">
          <div className="itemicon other">
            <BsThreeDots />
          </div>
        </div>
        <div className="item">
          <div className="itemicon salary">
            <FaMoneyBillAlt />
          </div>
        </div>
        <div className="item">
          <div className="itemicon loan">
            <MdVolunteerActivism />
          </div>
        </div>
        <div className="item">
          <div className="itemicon gift">
            <FaGift />
          </div>
        </div>
        <div className="item">
          <div className="itemicon gambling">
            <MdCasino />
          </div>
        </div>
      </div>

*/
