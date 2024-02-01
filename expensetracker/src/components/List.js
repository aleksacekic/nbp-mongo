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
    </div>
  );
};

export default List;
