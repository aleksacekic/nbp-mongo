import React from 'react'
// import { FaEuroSign } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";

const Buttons = () => {
  return (
    <div>
       <div className="balancebuttons">
          <button className="buttonb"><FaPlus className="plusincex"></FaPlus>Add Income</button>
          <button className="buttonb"><FaPlus className="plusincex"></FaPlus>Add Expense</button>
        </div>
    </div>
  )
}

export default Buttons
